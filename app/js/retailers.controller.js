myApp.controller('RetailersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.retailers      = {};
    $scope.retailerId     = 0;
    $scope.retailer       = {};
    $scope.changedRetailer = {};


    $scope.vm = vm;

    vm.editRow = RowEditor.editRowRetailer;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.RetailerColumnDefs;

    ListRetailers();

    let factory = {
      ListRetailers : ListRetailers, // all users
      GetRetailer   : GetRetailer,
      EditRetailer  : EditRetailer,  // single user
      UpdateRetailer : UpdateRetailer,
    };



    function ListRetailers() {
      vm.dataLoading = true;
      let retailer = new Retailer();
      DataFactory.listRetailers()
        .then( function(response) {
            $scope.retailers = Common.createObjects(response.data, retailer);
            vm.serviceGrid.data = $scope.retailers;
            $scope.gridStyle = Common.gridStyle($scope.retailers.length);
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
