
myApp.controller('ShoppingCentresController', ['DataFactory','$scope','Common',
  function ( DataFactory, $scope,Common) {
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


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListShoppingCentres();

    let factory = {
      ListShoppingCentres   : ListShoppingCentres,
      ListShoppingCentreBy  : ListShoppingCentreBy,
    };
    return factory;

    function ListShoppingCentres() {
      vm.dataLoading = true;
      let shoppingCentre = new ShoppingCentre();
      DataFactory.listShoppingCentres()
        .then( function(response) {
            $scope.shoppingCentres = Common.createObjects(response.data, shoppingCentre);
          },
          function (error) { $scope.status = 'Unable to load Shopping centres ' + error.message; });
      vm.dataLoading = false;
    }
    function ListShoppingCentreBy(type) {
      vm.dataLoading = true;
      let shoppingCentre = new ShoppingCentre();
      DataFactory.getShoppingCentres(type)
        .then( function(response) {
            $scope.shoppingCentres = Common.createObjects(response.data, shoppingCentre);
          },
          function (error) { $scope.status = 'Unable to load Shopping Centre ' + error.message; });
      vm.dataLoading = false;
    }
  }]);
