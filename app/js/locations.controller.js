
myApp.controller('LocationsController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.locations        = [];
    $scope.location         = {};
    $scope.locationId       = 0;
    $scope.retailerId       = 0;
    $scope.newLocation      = {};

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListLocations();

    let factory = {
      ListLocations    : ListLocations,
      AddLocation  : AddLocation,
      GetLocation : GetLocation,
    };

    return factory;



    function ListLocations() {
      vm.dataLoading = true;
      let location = new Location();
      DataFactory.listLocations()
        .then( function(response) {
            $scope.locations = Common.createObjects(response.data, location);
          },
          function (error) { $scope.status = 'Unable to load Locations ' + error.message; });
      vm.dataLoading = false;
    }

    function AddLocation(newLocation) {
      vm.dataLoading = true;
      let location = new Location();
      DataFactory.addLocation(newLocation)
        .then( function(response) {
            $scope.locations = Common.createObjects(response.data, location);
          },
          function (error) { $scope.status = 'Unable to add Location ' + error.message; });
      vm.dataLoading = false;
    }

    function GetLocation(id) {
      vm.dataLoading = true;
      let location = new Location();
      DataFactory.getLocation(id)
        .then( function(response) {
            $scope.location = Common.createObjects(response.data, location);
          },
          function (error) { $scope.status = 'Unable to load Location ' + error.message; });
      vm.dataLoading = false;
    }





  }]);
