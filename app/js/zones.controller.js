
myApp.controller('ZonesController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common, $rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.zones       = [];
    $scope.zoneid      = 0;


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListZones();

    let factory = {
      ListZones   : ListZones,
      AddZone     : AddZone,
      GetZone     : GetZone,
    };

    return factory;

    function ListZones() {
      vm.dataLoading = true;
      let zone = new Zone();
      DataFactory.listZones()
        .then( function(response) {
            $scope.zones = Common.createObjects(response.data, zone);
          },
          function (error) { $scope.status = 'Unable to load Zones ' + error.message; });
      vm.dataLoading = false;
    }


    function GetZone(id) {
      vm.dataLoading = true;
      let zone = new Zone();
      DataFactory.getZone(id)
        .then( function(response) {
            $scope.zones = Common.createObjects(response.data, zone);
          },
          function (error) { $scope.status = 'Unable to load Zone data ' + error.message; });
      vm.dataLoading = false;
    }

    function AddZone() {
      vm.dataLoading = true;
      let zone = new Zone();
      DataFactory.setZone()
        .then( function(response) {
            $scope.zones = Common.createObjects(response.data, zone);

          },
          function (error) { $scope.status = 'Unable to Add new Zone ' + error.message; });
      vm.dataLoading = false;

    }

  }]);
