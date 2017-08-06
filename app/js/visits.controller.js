myApp.service('RowEditor', RowEditor);
myApp.controller('RowEditCtrl', RowEditCtrl);
myApp.controller('VisitsController', ['DataFactory','$scope','Common','$rootScope','$uibModal','RowEditor', 'uiGridConstants',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants) {
    let vm = this;

    // placeholders
    $scope.visits = [];
    $scope.visitId = 0;
    $scope.type = "HOUR"; // HOUR, DAY, WEEK, MONTH
    $scope.users = [];
    $scope.retailers = [];

    vm.editRow = RowEditor.editRow;
    vm.serviceGrid = {};
    $scope.vm = vm;

    vm.serviceGrid = {
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      multiSelect: false,
      enableSorting: true,
      enableFiltering: true,
      enableGridMenu: true,
      rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    };

    vm.serviceGrid.columnDefs = [{
      field: 'visitid',
      displayName: 'Visit ID',
      enableSorting: false,
      type: 'number',
      enableCellEdit: false,
      width: 60,
      sort: {
        direction: uiGridConstants.ASC,
        priority: 1,
      },
    }, {
      field: 'entryTime',
      displayName: 'Entry Time',
      enableSorting: true,
      enableCellEdit: false
    }, {
      field: 'exitTime',
      displayName: 'Exit Time',
      width: 120,
      enableSorting: true,
      enableCellEdit: false
    }, {
      field: 'userCreditedWithVisit',
      displayName: 'User Credited With Visit',
      enableSorting: true,
      enableCellEdit: false
    }, {
      field: 'duration',
      displayName: 'Duration',
      enableSorting: true,
      enableCellEdit: false
    }, {
      field: 'userid',
      displayName: 'Users ID',
      enableSorting: true,
      enableCellEdit: false
    }, {
      field: 'zoneid',
      displayName: 'Zone ID',
      enableSorting: true,
      enableCellEdit: false
    },
      {
        field: 'fullname',
        displayName: 'Users Fullname',
        enableSorting: true,
        enableCellEdit: false
      },
      {
        field: 'storeName',
        displayName: 'Store Name',
        enableSorting: true,
        enableCellEdit: false
      }];

    // if ($rootScope.currentUser.type === "Administrator") {
    ListVisits();
    // } else {
    //   ListVisitsByRetailer($rootScope.currentUser.userid);
    // }
    $scope.addRow = function () {
      let newService = {

        "enterTime": "",
        "exitTime": "",
        "userCreditedWithVisit": "",
        "duration": "0",
        "userid": "",
        "zoneid": "",
        "fullname": "",
        "storename": ""

      };
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    // Common.reloadJs("lib/sorttable.js");

    //   function ListVisits() {
    //     vm.dataLoading = true;
    //     let visit    = new Visit();
    //     DataFactory.listVisits()
    //       .then( function(response) {
    //         // extract collections
    //         let visits    = Common.createObjects(response.data, visit);
    //
    //         // create augmented visits entities for display
    //         visits.forEach(  function (visit, key) {
    //           let userid = visit.getUserid();
    //           let zoneid = visit.getZoneid();
    //
    //           visit.fullname = Common.findUsersName(userid);
    //           // note retailerid === zoneid
    //           visit.storeName = Common.findStoreName(zoneid);
    //
    //           visits[key] = visit;
    //         });
    //
    //         $scope.visits = visits;
    //         vm.serviceGrid.data = visits;
    //
    //       },
    //       function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
    //       vm.dataLoading = false;
    //   }
    //
    //   function ListVisitsByRetailer(id) {
    //     vm.dataLoading = true;
    //     let visit    = new Visit();
    //
    //     DataFactory.listVisitsByRetailer(id)
    //       .then( function(response) {
    //           // extract collections
    //           let visits    = Common.createObjects(response.data, visit);
    //
    //           // create augmented visits entities for display
    //           visits.forEach(  function (visit, key) {
    //             let userid = visit.getUserid();
    //             let zoneid = visit.getZoneid();
    //
    //             visit.fullname = Common.findUsersName(userid);
    //             // note retailerid === zoneid
    //             visit.storeName = Common.findStoreName(zoneid);
    //
    //             visits[key] = visit;
    //           });
    //
    //           $scope.visits = visits;
    //           $scope.vm.serviceGrid.data = visits;
    //         },
    //         function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
    //     vm.dataLoading = false;
    //   }
    // }]);

    RowEditor.$inject = ['$http', '$rootScope', '$uibModal'];

    function RowEditor($http, $rootScope, $uibModal) {
      let service = {};
      service.editRow = editRow;

      function editRow(grid, row) {
        $uibModal.open({
          templateUrl: 'service-edit.html',
          controller: ['$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl],
          controllerAs: 'vm',
          resolve: {
            grid: function () {
              return grid;
            },
            row: function () {
              return row;
            }
          }
        });
      }

      return service;
    }

    function RowEditCtrl($http, $uibModalInstance, grid, row) {
      let vm = this;
      vm.entity = angular.copy(row.entity);
      vm.save = save;

      function save() {
        if (row.entity.id == '0') {
          /*
                 * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
                 */
          row.entity = angular.extend(row.entity, vm.entity);
          //real ID come back from response after the save in DB
          row.entity.id = Math.floor(100 + Math.random() * 1000);
          //
          grid.data.push(row.entity);

        } else {
          row.entity = angular.extend(row.entity, vm.entity);
          /*
                 * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
                 */
        }
        $uibModalInstance.close(row.entity);
      }

      vm.remove = remove;

      function remove() {
        console.dir(row)
        if (row.entity.id != '0') {
          row.entity = angular.extend(row.entity, vm.entity);
          let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
          grid.appScope.vm.serviceGrid.data.splice(index, 1);
          /*
                 * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
                 */
        }
        $uibModalInstance.close(row.entity);
      }

    }
  }]);
