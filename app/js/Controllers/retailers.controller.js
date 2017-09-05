myApp.controller('RetailersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;
    $scope.vm = vm;
    $rootScope.type = "RET";
    if ($rootScope.isAdmin) {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    // setup grid
    vm.editRow = RowEditor.editRowRetailer;
    vm.serviceGrid = Common.setupUiGrid(Globals.RetailerColumnDefs, $scope.allowEditRow )
    vm.chartTitle = "Retailers";
    ListRetailers();

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
      $rootScope.addingRow = true;

      let newService = Globals.addRowRetailer;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

}]);
