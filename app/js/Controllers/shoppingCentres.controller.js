myApp.controller('ShoppingCentresController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;
    $rootScope.type = "SC";
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
      $scope.allowEditRow = true; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }


    $scope.vm = vm;
    vm.chartTitle = "Shopping Center";
    vm.editRow = RowEditor.editRowShoppingCentre;
    vm.serviceGrid = Common.setupUiGrid(Globals.ShoppingCentreColumnDefs, $scope.allowEditRow )



    ListShoppingCentres();

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
      $rootScope.addingRow = true;
      let newService = Globals.addRowShoppingCentre;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
