

myApp.controller('VisitsController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.visits       = 0;
    $scope.visitId      = 0;
    $scope.type = "HOUR"; // HOUR, DAY, WEEK, MONTH
    $scope.users = [];
    $scope.retailers = [];

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");


    ListVisits();

    function ListVisits() {
      vm.dataLoading = true;
      let visit    = new Visit();

      DataFactory.listVisits()
        .then( function(response) {
          // extract collections
          let visits    = Common.createObjects(response.data, visit);

          // create augmented visits entities for display

          visits.forEach(  function (visit, key) {
            let userid = visit.getUserid();
            let zoneid = visit.getZoneid();

            visit.fullname = Common.findUsersName(userid);
            visit.storeName = Common.findStoreName(zoneid);

            visits[key] = visit;
          });

          $scope.visits = visits;
        },
        function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
        vm.dataLoading = false;
    }

  }]);
