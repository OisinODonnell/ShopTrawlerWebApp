myApp.controller('ShoppingCentresController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.visits       = 0;
    $scope.visitId      = 0;
    $scope.type = "HOUR"; // HOUR, DAY, WEEK, MONTH
    $scope.administrator = "";


    $scope.vm = vm;

    vm.editRow = RowEditor.editRowShoppingCentre;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.ShoppingCentreColumnDefs;

    ListShoppingCentres();

    let factory = {
      ListShoppingCentres   : ListShoppingCentres,
      ListShoppingCentreBy  : ListShoppingCentreBy,
    };

    function ListShoppingCentres() {
      let shoppingCentres;
      vm.dataLoading = true;
      let shoppingCentre = new ShoppingCentre();
      DataFactory.listShoppingCentres()
        .then( function(response) {
            shoppingCentres = Common.createObjects(response.data, shoppingCentre);
            shoppingCentres[0].fullname = Common.findUsersName(shoppingCentres[0].getAdminid());
            vm.serviceGrid.data = shoppingCentres;
            $scope.shoppingCentres = shoppingCentres;
            $scope.gridStyle = Common.gridStyle($scope.shoppingCentres.length);

          },
          function (error) { $scope.status = 'Unable to load Shopping centres ' + error.message; });
      vm.dataLoading = false;
    }
    function ListShoppingCentreBy(type) {
      vm.dataLoading = true;
      let shoppingCentre = new ShoppingCentre();
      DataFactory.getShoppingCentre(type)
        .then( function(response) {
            $scope.shoppingCentres = Common.createObjects(response.data, shoppingCentre);
            vm.serviceGrid.data = $scope.shoppingCentres;
            $scope.gridStyle = Common.gridStyle($scope.shoppingCentres.length);
          },
          function (error) { $scope.status = 'Unable to load Shopping Centre ' + error.message; });
      vm.dataLoading = false;
    }


    $scope.addRow = function () {
      let newService = Globals.addRowShoppingCentre;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    return factory;
  }]);
