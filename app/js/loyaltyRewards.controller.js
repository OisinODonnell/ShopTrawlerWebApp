myApp.controller('LoyaltyRewardsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

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

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    $scope.vm = vm;

    vm.globals = $rootScope.globals;
    vm.editRow = RowEditor.editRowLoyaltyReward;
    vm.serviceGrid = Common.setupUiGrid(Globals.LoyaltyRewardColumnDefs, $scope.allowEditRow )

    if ($rootScope.currentUser.type === "Administrator")
      ListLoyaltyRewards();
    else
      ListLoyaltyRewardsByRetailer($rootScope.currentUser.userid);

    function ListLoyaltyRewards() {
      vm.dataLoading = true;
      let loyaltyRewards;
      let loyaltyReward = new LoyaltyReward();
      DataFactory.listLoyaltyRewards()
        .then( function(response) {
          loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
          loyaltyRewards.forEach(function (loyaltyReward, key) {
            loyaltyReward.storeName = Common.findStoreName(loyaltyReward.retailerid);
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
      let loyaltyReward = new LoyaltyReward();
      DataFactory.listLoyaltyRewardsByRetailer(id)
        .then( function(response) {
            loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
            loyaltyRewards.forEach(function (loyaltyReward, key) {
              loyaltyReward.storeName = Common.findStoreName(loyaltyReward.retailerid);
              loyaltyRewards[key] = loyaltyReward;
            });
            vm.serviceGrid.data = loyaltyRewards;
            $scope.gridStyle = Common.gridStyle(loyaltyRewards.length);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }

    function AddLoyaltyReward(newLoyaltyReward) {
      vm.dataLoading = true;
      let loyaltyReward = new LoyaltyReward();
      DataFactory.addLoyaltyReward(newLoyaltyReward)
        .then( function(response) {
            $scope.loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }

    function GetLoyaltyReward(id) {
      vm.dataLoading = true;
      let loyaltyReward = new LoyaltyReward();
      DataFactory.getLoyaltyReward(id)
        .then( function(response) {
            $scope.loyaltyReward = Common.createObjects(response.data, loyaltyReward);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }


    $scope.addRow = function () {
      let newService = Globals.addRowLoyaltyReward;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
