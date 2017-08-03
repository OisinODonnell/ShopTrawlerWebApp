
myApp.controller('RetailersController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
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


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListRetailers();

    let factory = {
      ListRetailers : ListRetailers, // all users
      GetRetailer   : GetRetailer,
      EditRetailer  : EditRetailer,  // single user
      UpdateRetailer : UpdateRetailer,
    };

    return factory;



    function ListRetailers() {
      vm.dataLoading = true;
      let retailer = new Retailer();
      DataFactory.listRetailers()
        .then( function(response) {
            $scope.retailers = Common.createObjects(response.data, retailer);
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

  }]);
