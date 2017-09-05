myApp.controller('ZonesController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }


    $rootScope.addingRow = false;
    $scope.vm = vm;
    vm.chartTitle = "Zones";
    vm.editRow = RowEditor.editRowZone;
    vm.serviceGrid = Common.setupUiGrid(Globals.ZoneColumnDefs, $scope.allowEditRow )

    ListZones();

    function ListZones() {
      vm.dataLoading = true;
      let zone = new Zone();
      DataFactory.listZones()
        .then( function(response) {
            $scope.zones = Common.createObjects(response.data, zone);
            vm.serviceGrid.data = $scope.zones;
            $scope.gridStyle = Common.gridStyle($scope.zones.length);
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
            vm.serviceGrid.data = $scope.zones;
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

    $scope.addRow = function () {
      $rootScope.addingRow = true;
      let newService = Globals.addRowZone;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
