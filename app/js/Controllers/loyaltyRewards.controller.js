
myApp.controller('LoyaltyRewardsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','FileUploader','AWSconfig','Flash',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, FileUploader, AWSconfig, Flash) {
    let vm = this;

    $rootScope.type = "LR";
    $scope.uploader = new FileUploader();

    $scope.sDate = new Date();
    $scope.eDate = new Date();

    $scope.myDate = new Date();

    $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());

    $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());

    $scope.onlyWeekendsPredicate = function(date) {
      let day = date.getDay();
      return day === 0 || day === 6;
    };

    $rootScope.currentUser.type = "";
    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false;  //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Administrator";
    } else {
      $scope.allowAddRow = true;   //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Retailer";
    }

    $scope.vm = vm;

    vm.globals = $rootScope.globals;

    vm.editRow                = RowEditor.editRowLoyaltyReward;
    vm.addRowLoyaltyReward    = RowEditor.addRowLoyaltyReward;
    vm.deleteRowLoyaltyReward = RowEditor.deleteRowLoyaltyReward;
    vm.saveRowLoyaltyReward   = RowEditor.saveRowLoyaltyReward;
    vm.serviceGrid = Common.setupUiGrid(Globals.LoyaltyRewardColumnDefs2, $scope.allowEditRow );

    if ($rootScope.currentUser.type === "Administrator")
      ListLoyaltyRewards();
    else
      ListLoyaltyRewardsByRetailer($rootScope.currentUser.retailerid);

    function ListLoyaltyRewards() {
      vm.dataLoading = true;
      let loyaltyRewards;
      $scope.loyaltyRewards = [];
      let loyaltyReward = new LoyaltyReward();
      DataFactory.listLoyaltyRewards()
        .then( function(response) {
          loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
          loyaltyRewards.forEach(function (loyaltyReward, key) {
            loyaltyReward = Common.setDatesAndIDs(loyaltyReward);
            loyaltyReward.filename1="";
            loyaltyRewards[key] = loyaltyReward;
          });
          $scope.loyaltyRewards = loyaltyRewards;
          vm.serviceGrid.data = $scope.loyaltyRewards;
        },
        function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }

    function ListLoyaltyRewardsByRetailer(id) {
      vm.dataLoading = true;
      // let loyaltyRewards;
      // $scope.loyaltyRewards = [];
      // let loyaltyReward = new LoyaltyReward();
      DataFactory.listLoyaltyRewardsByRetailer(id)
        .then( function(response) {
            // Flash.create("success", "Loyalty Reward added successfully", 2000);
            vm.serviceGrid.data = buildNewLoyaltyRewards(response.data);

            $scope.gridStyle = Common.gridStyle(vm.serviceGrid.data.length);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }


    // the data from rest is passed in and parsed and combined with new LoyaltyReward objects.
    function buildNewLoyaltyRewards(data) {
      let loyaltyRewards;
      $scope.loyaltyRewards = [];
      let loyaltyReward = new LoyaltyReward();

      loyaltyRewards = Common.createObjects(data, loyaltyReward);
      loyaltyRewards.forEach(function (loyaltyReward, key) {
        loyaltyReward = Common.setDatesAndIDs(loyaltyReward);
        loyaltyReward.filename1="";
        loyaltyRewards[key] = loyaltyReward;
      });
      $scope.loyaltyRewards = loyaltyRewards;
      return $scope.loyaltyRewards;
    }


    $scope.addRowOld = function () {
      let newService = Globals.addRowLoyaltyReward;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };


    $scope.saveRow = function(row) {
      // find retailerid
      // copy to new LR record
      // post to REST

      let loyaltyReward = new LoyaltyReward()
      let userid = $rootScope.currentUser.userid;
      let retailerid = Common.getRetailerid(userid);
      loyaltyReward = createNewLR(row.entity, retailerid);

      let index = vm.serviceGrid.data.indexOf(row.entity);
      let resp = Common.checkDates(loyaltyReward.getStartDate(), loyaltyReward.getEndDate());
      let earliestStartDate;

      if (resp === true) {
        DataFactory.loyaltyRewardCheckDates(loyaltyReward)
          .then( function(response) {
            // ok no content record found between these start and end dates
            if (response.data.success === 1) {
              DataFactory.addLoyaltyReward(loyaltyReward)
                .then(function (response) {
                    Flash.create("success", "Loyalty Reward validated and added successfully", 2000);
                    vm.serviceGrid.data = buildNewLoyaltyRewards(response.data);
                  },
                  function (response) {
                    Flash.create("danger", "Loyalty Reward not created : " + response.data.message, 4000);
                  });
            } else {
              earliestStartDate = response.data.earliestStartDate;
              let message = "Loyalty Reward Record could not be saved : " + response.data.message + "start date set to earliest possible start date."
              Flash.create('danger',message, 8000);
              let index = vm.serviceGrid.data.indexOf(row.entity);
              vm.serviceGrid.data[index].startDate = earliestStartDate;


            }
          },
          function(response) {
            Flash.create('danger',"Loyalty Reward Record could not be saved : " + response.data.message, 4000);
          })
      } else {
        Flash.create("danger", resp, 4000);
      }
      console.log("save Row LR");
    };

    // Prepare LR entity to be sent to db, reformatting dates and inserting retailerid also
    function createNewLR(entity, retailerid) {

      let endDate = new Date(entity.endDate).getTime();
      let startDate = new Date(entity.startDate).getTime();

      let loyaltyReward = new LoyaltyReward();
      loyaltyReward.setEndDate(endDate);
      loyaltyReward.setStartDate(startDate);
      loyaltyReward.setPointsPerVisit(entity.pointsPerVisit);
      loyaltyReward.setRewardImage(entity.rewardImage);
      loyaltyReward.setRewardTitle(entity.rewardTitle);
      loyaltyReward.setVisitTime(entity.visitTime);
      loyaltyReward.setRetailerid(retailerid);
      loyaltyReward.setApproved(false);

      return loyaltyReward;
    }

    // if id > 0 delete row from grid, else delete from grid and db.
    $scope.deleteRow = function(row) {
      if (row.entity.loyaltyRewardid !== 0) { // edits made to existing row
        DataFactory.deleteLoyaltyReward(row.entity.loyaltyRewardid)
          .then( function(response){
              Flash.create('success',"LoyaltyReward Deleted Successfully", 2000);
              vm.serviceGrid.data = buildNewLoyaltyRewards(response.data);
            },
            function(response) {
              Flash.create('danger',"LoyaltyReward with id = ", row.entity.loyaltyRewardid + " could not be deleted -> " + response.data.message );
              vm.serviceGrid.data = buildNewLoyaltyRewards(response.data);
            });
      }

      // delete from row is down anyway.
      let index = vm.serviceGrid.data.indexOf(row.entity);
      vm.serviceGrid.data.splice(index, 1);

      console.log("delete Row LR");
    };

    // add new row ro grid ... and init values to defaults
    $scope.addRow = function (row) {
      // add row to grid with default values
      console.log("adding LR");
      let loyaltyReward = new LoyaltyReward();
      loyaltyReward = Globals.NewLoyaltyReward;

      // get the retailers storename

      loyaltyReward.storeName = Common.findStoreName($rootScope.currentUser.retailerid);
      vm.serviceGrid.data.push(loyaltyReward);
    };


  }]);
