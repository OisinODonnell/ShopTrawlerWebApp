myApp.controller('BeaconsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.vm = vm;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }

    vm.editRow = RowEditor.editRowBeacon;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.BeaconColumnDefs;
    if ($scope.allowEditRow) {
      // allow this entity to be edited by double clicking the row
      vm.serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    }

    ListBeacons();

    function ListBeacons() {
      vm.dataLoading = true;
      let beacon = new Beacon();
      DataFactory.listBeacons()
        .then( function(response) {
            $rootScope.beacons = Common.createObjects(response.data, beacon);
            vm.serviceGrid.data = $rootScope.beacons;
            $scope.gridStyle = Common.gridStyle($rootScope.beacons.length);
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

    $scope.addRow = function () {
      let newService = Globals.addRowBeacon;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
