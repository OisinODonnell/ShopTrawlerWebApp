myApp.controller('RetailersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;
    $scope.vm = vm;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    // placeholders
    $scope.retailers      = {};
    $scope.retailerId     = 0;
    $scope.retailer       = {};
    $scope.changedRetailer = {};

    vm.editRow = RowEditor.editRowRetailer;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.RetailerColumnDefs;
    if ($scope.allowEditRow) {
      // allow this entity to be edited by double clicking the row
      vm.serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    }
    ListRetailers();

    let factory = {
      ListRetailers  : ListRetailers, // all users
      GetRetailer    : GetRetailer,
      EditRetailer   : EditRetailer,  // single user
      UpdateRetailer : UpdateRetailer,
    };

    function updateGridOptions(collection, defaults) {
      // set of css options changing only in height for each row of collection
      let shopTrawlers =
        [ "",   "shopTrawler1",  "shopTrawler2",  "shopTrawler3",  "shopTrawler4",  "shopTrawler5",
                "shopTrawler6",  "shopTrawler7",  "shopTrawler8",  "shopTrawler9",  "shopTrawler" ];

      if ( collection.length <= 10 ) {
        $scope.gridStyle = shopTrawlers[collection.length];
        defaults.enablePagination = false;
        defaults.enableExpandAll = true;

      }
      return defaults;
    }

    function ListRetailers() {
      vm.dataLoading = true;
      let retailers;
      let retailer = new Retailer();
      DataFactory.listRetailers()
        .then( function(response) {
            retailers = Common.createObjects(response.data, retailer);

            // vm.serviceGrid = updateGridOptions(retailers, vm.serviceGrid);
            $scope.retailers = retailers;
            vm.serviceGrid.data = $scope.retailers;
          },
          function (error) { $scope.status = 'Unable to load Retailers ' + error.message; });
      vm.dataLoading = false;
    }

    function GetRetailer(id) {
      vm.dataLoading = true;
      let retailer = new Retailer();
      DataFactory.getRetailer(id)
        .then( function(response) {
            $scope.retailers = Common.createObjects(response.data, retailer);
            vm.serviceGrid.data = $scope.retailers;

          },
          function (error) { $scope.status = 'Unable to load Retailer ' + error.message; });
      vm.dataLoading = false;
    }

    function EditRetailer(id) {
      vm.dataLoading = true;
      let retailer = new Retailer();
      DataFactory.editRetailers(id)
        .then( function(response) {
            $scope.retailer = Common.createObjects(response.data, retailer);
          },
          function (error) { $scope.status = 'Unable to load Retailer ' + error.message; });
      vm.dataLoading = false;
    }

    function UpdateRetailer(changedRetailer) {
      vm.dataLoading = true;
      let retailer = new Retailer();
      DataFactory.updateRetailer(changedRetailer)
        .then( function(response) {
            $scope.retailer = Common.createObjects(response.data, retailer);
          },
          function (error) { $scope.status = 'Unable to load Retailer ' + error.message; });
      vm.dataLoading = false;
    }

    $scope.addRow = function () {
      let newService = Globals.addRowRetailer;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  return factory;
}]);
