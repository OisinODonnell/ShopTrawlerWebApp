myApp.controller('ApproveLoyaltyRewardsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','moment',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, moment) {
    let vm = this;

    vm.myDate = new Date();
    vm.isOpen = false;

    $rootScope.sDate = new Date();
    $rootScope.eDate = new Date();

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below
      vm.editRow = RowEditor.approveRowLoyaltyReward;
      vm.serviceGrid = Common.setupUiGrid(Globals.ApproveLoyaltyRewardColumnDefs, $scope.allowEditRow )
      $scope.vm = vm;
      ListLoyaltyRewardsForApproval();
    }

    function ListLoyaltyRewardsForApproval() {
      vm.dataLoading = true;
      let loyaltyRewards;
      let loyaltyReward = new LoyaltyReward();
      $scope.loyaltyRewards = [];
      DataFactory.listLoyaltyRewardsForApproval()
        .then( function(response) {
            loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
            loyaltyRewards.forEach(function (loyaltyReward, key) {

              loyaltyReward = Common.setDatesAndIDs(loyaltyReward);

              $scope.loyaltyRewards[key] = loyaltyReward;
              loyaltyRewards[key] = loyaltyReward;
            });
            $scope.loyaltyRewards = loyaltyRewards;
            vm.serviceGrid.data = $scope.loyaltyRewards;
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }





  }]);

