
myApp.controller('ShoppingCentresController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.visits       = 0;
    $scope.visitId      = 0;
    $scope.type = "HOUR"; // HOUR, DAY, WEEK, MONTH


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListVisits();

    let factory = {
      ListVisits    : ListVisits,
      ListVisitsBy  : ListVisitsBy,
    };

    return factory;



    function ListVisits() {
      vm.dataLoading = true;
      let visit = new Visit();
      DataFactory.getVisits()
        .then( function(response) {
            $scope.visits = Common.createObjects(response.data, visit);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsBy(type) {
      vm.dataLoading = true;
      let visit = new Visit();
      DataFactory.getVisits(type)
        .then( function(response) {
            $scope.visits = Common.createObjects(response.data, visit);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
