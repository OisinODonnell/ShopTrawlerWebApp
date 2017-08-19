myApp.controller('GenerateBonusCodesController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    if ($rootScope.isRetailer) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below

      vm.editRow = RowEditor.editRowBonusCode;
      vm.serviceGrid = Common.setupUiGrid(Globals.GenerateBonusCodeColumnDefs, $scope.allowEditRow )
      $scope.vm = vm;

      GenerateBonusCodes();
    }

    function GenerateBonusCodes() {
      vm.dataLoading = true;
      let bonusCodes;
      let bonusCode = new BonusCode();
      DataFactory.generateBonusCodes()
        .then( function(response) {
            bonusCodes = Common.createObjects(response.data, bonusCode);
            bonusCodes.forEach(function (bonusCode, key) {
              bonusCode.fullname = Common.findUsersName(bonusCode.userid);
              bonusCode.storeName = Common.findStoreName(bonusCode.retailerid);
              bonusCodes[key] = bonusCode;
            });
            $scope.bonusCodes   = bonusCodes;
            vm.serviceGrid.data = bonusCodes;
            $scope.gridStyle    = Common.gridStyle(bonusCodes.length)

          },
          function (error) { $scope.status = 'Unable to load BonusCodes ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
