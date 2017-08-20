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
              loyaltyReward.storeName = "";
              loyaltyReward.storeName = Common.findStoreName(loyaltyReward.retailerid);

              loyaltyReward.sDate = {};
              loyaltyReward.eDate = {};
              loyaltyReward.sDate = new Date(loyaltyReward.startDate);
              loyaltyReward.eDate = new Date(loyaltyReward.endDate);

              let today = new moment();
              let tomorrow = new moment(today.add(1,'day'));
              let minStartDate = today;

              // fix invalid dates before we start.
              // startdate cant be less that today
              // endate cant be less than tomorrow
              if (loyaltyReward.sDate < new Date(today)) {
                loyaltyReward.sDate = new Date(today);
              }
              if (loyaltyReward.eDate < new Date(tomorrow)) {
                loyaltyReward.eDate = new Date(tomorrow);
              }
              let minEndDate = tomorrow;
              let maxEndDate = moment(minStartDate.add(6,'month'));
              // let maxStartDate = moment(loyaltyReward.eDate);
              // maxStartDate = moment(maxStartDate.add(-1,'day'));

              loyaltyReward.minStartDate = new Date ();
              loyaltyReward.minEndDate = new Date (minEndDate);
              loyaltyReward.maxEndDate = new Date (maxEndDate);

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

