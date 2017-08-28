myApp.controller('VisitsController', ['DataFactory','$scope','Common','$rootScope',
                                      '$uibModal','RowEditor', 'uiGridConstants','Globals',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
      let vm = this;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
      ListVisits();

    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
      ListVisitsByRetailer($rootScope.currentUser.retailerid);
    }

    $scope.vm = vm;

    vm.editRow = RowEditor.editRowVisit;
    vm.serviceGrid = Common.setupUiGrid(Globals.VisitColumnDefs, $scope.allowEditRow )
    let durationColWithAvg = {  name: 'avgRating', field: 'duration',  width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Duration' };
    vm.serviceGrid.columnDefs.splice(3, 0, durationColWithAvg);


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
