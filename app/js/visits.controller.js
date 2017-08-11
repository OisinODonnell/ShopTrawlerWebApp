myApp.controller('VisitsController', ['DataFactory','$scope','Common','$rootScope',
                                      '$uibModal','RowEditor', 'uiGridConstants','Globals',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
      let vm = this;

    // placeholders
    $scope.visits = [];
    $scope.visitId = 0;
    $scope.type = "HOUR"; // HOUR, DAY, WEEK, MONTH
    $scope.users = [];
    $scope.retailers = [];

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }


    $scope.vm = vm;

    vm.editRow = RowEditor.editRowVisit;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.VisitColumnDefs;
    let durationColWithAvg = {  name: 'avgRating', field: 'duration',  width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Duration' };
    vm.serviceGrid.columnDefs.splice(3, 0, durationColWithAvg);
    if ($scope.allowEditRow) {
      // allow this entity to be edited by double clicking the row
      vm.serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    }
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
            // note retailerid === zoneid
            visit.storeName = Common.findStoreName(zoneid);

            visits[key] = visit;
          });

          $scope.visits = visits;
          vm.serviceGrid.data = visits;
          $scope.gridStyle = Common.gridStyle(visits.length);

        },
        function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
        vm.dataLoading = false;
    }

    function ListVisitsByRetailer(id) {
      vm.dataLoading = true;
      let visit    = new Visit();

      DataFactory.listVisitsByRetailer(id)
        .then( function(response) {
            // extract collections
            let visits    = Common.createObjects(response.data, visit);

            // create augmented visits entities for display
            visits.forEach(  function (visit, key) {
              let userid = visit.getUserid();
              let zoneid = visit.getZoneid();

              visit.fullname = Common.findUsersName(userid);
              // note retailerid === zoneid
              visit.storeName = Common.findStoreName(zoneid);
              visits[key] = visit;
            });

            $scope.visits = visits;
            vm.serviceGrid.data = visits;
            $scope.gridStyle = Common.gridStyle(visits.length);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    $scope.addRow = function () {
      let newService = Globals.addRowVisit;
      let rowTmp = {};
      rowTmp.entity = newService;
      let x = $(".modal-title").text;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
      Common.changeToAddRow();
    };

  }]);
