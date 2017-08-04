myApp.controller('BeaconsController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    // placeholders

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListBeacons();

    // let factory = {
    //   ListBeacons : ListBeacons, // all users
    //   AddBeacon   : AddBeacon,
    //   GetBeacon   : GetBeacon,  // single user
    // };
    // return factory;

    function ListBeacons() {
      vm.dataLoading = true;
      let beacon = new Beacon();
      DataFactory.listBeacons()
        .then( function(response) {
            $rootScope.beacons = Common.createObjects(response.data, beacon);
          },
          function (error) { $scope.status = 'Unable to load Beacons ' + error.message; });
      vm.dataLoading = false;
    }

    function GetBeacon(beaconId) {
      vm.dataLoading = true;
      let beacon = new Beacon();
      DataFactory.getBeacon(beaconId)
        .then( function(response) {
            $rootScope.beacon = Common.createObjects(response.data, beacon);
          },
          function (error) { $scope.status = 'Unable to load Beacon ' + error.message; });
      vm.dataLoading = false;
    }

    function AddBeacon(newBeacon) {
      vm.dataLoading = true;
      let beacon = new Beacon();
      DataFactory.addBeacon(newBeacon)
        .then( function(response) {
            $rootScope.beacon = Common.createObjects(response.data, beacon);
          },
          function (error) { $scope.status = 'Unable to set beacon ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
