myApp.controller('LoyaltyRewardsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.loyaltyRewards        = [];
    $scope.loyaltyReward        = {};
    $scope.loyaltyRewardId       = 0;
    $scope.retailerId            = 0;

    $scope.vm = vm;

    vm.editRow = RowEditor.editRowLoyaltyReward;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.LoyaltyRewardColumnDefs;
    // allow this entity to be edited by double clicking the row
    vm.serviceGrid.rowTemplate =  "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    if ($scope.allowEditRow) {
      // allow this entity to be edited by double clicking the row
      vm.serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    }

    if ($rootScope.currentUser.type === "Administrator")
      ListLoyaltyRewards();
    else
      ListLoyaltyRewardsByRetailer($rootScope.currentUser.userid);





    let factory = {
      ListLoyaltyRewards    : ListLoyaltyRewards,
      ListLoyaltyRewardsByRetailer    : ListLoyaltyRewardsByRetailer,
      AddLoyaltyReward  : AddLoyaltyReward,
      GetLoyaltyReward : GetLoyaltyReward,
    };





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

    return factory;



  }]);
