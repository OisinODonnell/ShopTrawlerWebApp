myApp.controller('LoyaltyRewardsController', ['DataFactory','$scope','Common','$rootScope', '$uibModal',
 'RowEditor', 'uiGridConstants','Globals','FileUploader','AWSconfig','Flash','AwsFactory','toast',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, FileUploader, AWSconfig, Flash, AwsFactory, toast) {
    let vm = this;

    $rootScope.type = "LR"; // used in AWS selection of bucket
    $scope.uploader = new FileUploader(); // file uploader in grids
    vm.chartTitle = "Loyalty Rewards"; // header for UI Grid chart

    $scope.rewardImage  = "";

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


    $rootScope.currentUser.type = "";
    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false;  //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Administrator";
      ListLoyaltyRewards();
    } else {
      $scope.allowAddRow = true;   //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Retailer";
      ListLoyaltyRewardsByRetailer($rootScope.currentUser.retailerid);
    }

    $scope.vm = vm;

    vm.globals = $rootScope.globals;

    vm.editRow                = RowEditor.editRowLoyaltyReward;
    vm.addRowLoyaltyReward    = RowEditor.addRowLoyaltyReward;
    vm.deleteRowLoyaltyReward = RowEditor.deleteRowLoyaltyReward;
    vm.saveRowLoyaltyReward   = RowEditor.saveRowLoyaltyReward;

    let colDefs = Globals.LoyaltyRewardColumnDefs2;
    colDefs[2].editFileChooserCallback = $scope.uploadFile;

    vm.serviceGrid = Common.setupUiGrid(colDefs, $scope.allowEditRow );
    vm.upload = $scope.upload;
    vm.uploadFile = $scope.uploadFile;

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

    $scope.uploadFile = function(grid, row) {

      let files = this.editFileChooserCallback.arguments[2];
      $rootScope.file = files[0];


      let entry = "";
      // AwsFactory.setupAWSconfig($rootScope.type);
      // AwsFactory.setupAWSFileParams($rootScope.type, grid, row, this);
      // Common.updateGrid(grid, row);

      if (! Common.checkFileSize($rootScope.file)) {
        toast({
          duration  : 2000,
          message   : "File is too big! must be less than : 10MB" ,
          className : "alert-warning"
        });
        Flash.create("danger", "File is too big [ " + Common.fileSizeLabel() + " ] ... please reduce size and try again Limit is 10 MBytes", 4000)

        return false;
      } else {

        AwsFactory.setupAWSconfig($rootScope.type);
        AwsFactory.setupAWSFileParams($rootScope.type, grid, row, $rootScope.file,grid.entity.loyaltyRewardid, grid.entity.storeName);
        AwsFactory.sendFile();

        Common.updateGrid(grid, row);
        toast({
          duration  : 2000,
          message   : "File [ " + $rootScope.entry + " ] uploaded to Amazon Web Services Successfully!  ",
          className : "alert-success"
        });
      }
    };

    colDefs[2].editFileChooserCallback = $scope.uploadFile;

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
      let userid = $rootScope.currentUser.userid;
      let retailerid = Common.getRetailerid(userid);

      let index = vm.serviceGrid.data.indexOf(row.entity);
      // let resp = Common.checkDates(row.entity.startDate, row.entity.endDate);

      let resp = Common.checkDates(row.entity.startDate, row.entity.endDate);
      let earliestStartDate;

      if (resp !== true) { // fails basic date check
        Flash.create("danger", "Loyalty Reward not updated : -> " + resp, 4000);
      } else { // basic date check ok

        DataFactory.loyaltyRewardCheckDates(row.entity) // check Dates valid on REST
          .then( function(response) {
            // ok no content record found between these start and end dates
            if (response.data.success === "1") {

              DataFactory.updateLoyaltyReward(row.entity) // ok, now lets save the Loyalty Reward
                .then(function (response) {
                    Flash.create("success", "Loyalty Reward validated and added successfully", 2000);
                    vm.serviceGrid.data = buildNewLoyaltyRewards(response.data);
                  },

                  function (response) { // could not save
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


    $scope.addRow = function (row) {
      // add row to grid with default values
      console.log("adding LR");
      let loyaltyReward = new LoyaltyReward();
      loyaltyReward = Globals.NewLoyaltyReward;
      DataFactory.addDefaultLoyaltyReward($rootScope.currentUser.retailerid)
        .then( function(response){
            Flash.create("success", "LoyaltyReward Added successfully", 2000);
            vm.serviceGrid.data = buildNewLoyaltyRewards(response.data);
            // loyaltyReward.retailedid = $rootScope.currentUser.retailerid;
            // loyaltyReward.storeName = Common.findStoreName($rootScope.currentUser.retailerid);
            // vm.serviceGrid.data.push(loyaltyReward);
          },
          function (message) {
            Flash.create("danger", "Default LoyaltyReward not added : " + response.data.message);
          });
    };

  }]);
