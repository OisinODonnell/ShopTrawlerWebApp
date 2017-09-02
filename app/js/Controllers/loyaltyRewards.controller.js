myApp.controller('LoyaltyRewardsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','FileUploader','AWSconfig',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, FileUploader, AWSconfig) {
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
      let loyaltyRewards;
      $scope.loyaltyRewards = [];
      let loyaltyReward = new LoyaltyReward();
      DataFactory.listLoyaltyRewardsByRetailer(id)
        .then( function(response) {
            loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
            loyaltyRewards.forEach(function (loyaltyReward, key) {
              loyaltyReward = Common.setDatesAndIDs(loyaltyReward);
              loyaltyReward.filename1="";
              loyaltyRewards[key] = loyaltyReward;
            });
            vm.serviceGrid.data = loyaltyRewards;
            $scope.gridStyle = Common.gridStyle(loyaltyRewards.length);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }

    $scope.addRowOld = function () {
      let newService = Globals.addRowLoyaltyReward;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    $scope.saveRow = function(grid,row) {
      console.log("save Row LR");
    };

    $scope.deleteRow = function(row) {
      console.log("delete Row LR");
    };

    $scope.addRow = function (row) {
      console.log("adding LR");
      let loyaltyReward = new LoyaltyReward();
      loyaltyReward = Globals.NewLoyaltyReward;

      // get the retailers storename

      loyaltyReward.storeName = Common.findStoreName($rootScope.currentUser.retailerid);
      vm.serviceGrid.data.push(loyaltyReward);
    };


  }]);
