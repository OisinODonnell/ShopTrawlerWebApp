myApp.controller('GenerateBonusCodes500Controller', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','Flash','$location',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, Flash, $location) {
    let vm = this;

    $scope.vm = vm;

    if ($rootScope.isRetailer) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below

      vm.editRow = RowEditor.editRowGenerateBonusCode;
      vm.serviceGrid = Common.setupUiGrid(Globals.GenerateBonusCodeColumnDefs, $scope.allowEditRow );

      GenerateBonusCodes500($rootScope.currentUser.retailerid);
    }


    function GenerateBonusCodes500(id) {
      vm.dataLoading = true;

      DataFactory.generateBonusCodes500(id)
        .then( function(response) {

            if(response.data.success === "1") {
              id = Flash.create('success', response.data.message, 2000);
            } else {
              id = Flash.create('warning', response.data.message, 4000);
            }
            $location.path('/BonusCodes/Retailer');
          },
          function (error) {
            $scope.status = 'Unable to load BonusCodes ' + error.message;
            id = Flash.create('warning', $scope.status, 4000);
          });
      vm.dataLoading = false;
    }

  }]);
