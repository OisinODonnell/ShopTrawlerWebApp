myApp.controller('GenerateBonusCodesController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','Flash','$location',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, Flash, $location) {
    let vm = this;

    $scope.vm = vm;
    vm.chartTitle = "Bonus Codes";

    if ($rootScope.isRetailer) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below

      vm.editRow = RowEditor.editRowGenerateBonusCode;
      vm.serviceGrid = Common.setupUiGrid(Globals.GenerateBonusCodeColumnDefs, $scope.allowEditRow );

      ListUnusedBonusCodes($rootScope.currentUser.retailerid);
    }

    function ListUnusedBonusCodes(id) {
      vm.dataLoading = true;
      $location.path('/BonusCodes/Retailer');

    }

  }]);
