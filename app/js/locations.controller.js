myApp.controller('LocationsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
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

    $scope.vm = vm;

    vm.editRow = RowEditor.editRowLocation;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.LocationColumnDefs;

    ListLocations();

    let factory = {
      ListLocations  : ListLocations,
      AddLocation    : AddLocation,
      GetLocation    : GetLocation,
    };


    function ListLocations() {
      vm.dataLoading = true;
      let location = new Location();
      DataFactory.listLocations()
        .then( function(response) {
            $scope.locations = Common.createObjects(response.data, location);
            vm.serviceGrid.data = $scope.locations;
            $scope.gridStyle = Common.gridStyle($scope.locations.length);
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
            vm.serviceGrid.data = $scope.locations;

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
            $scope.gridStyle = Common.gridStyle($scope.locations.length);
          },
          function (error) { $scope.status = 'Unable to load Location ' + error.message; });
      vm.dataLoading = false;
    }


    $scope.addRow = function () {
      let newService = Globals.addRowLocation;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    return factory;

  }]);
