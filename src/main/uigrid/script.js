let myApp = angular.module('ShopTrawler', [ 'ngAnimate', 'ui.grid', 'ui.grid.moveColumns', 'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit' ]);

myApp.controller('VisitsController', VisitsController);



VisitsController.$inject = [ '$scope', '$http', '$uibModal', 'RowEditor', 'uiGridConstants', 'Common', 'DataFactory','UiGrids','$rootScope'];
function VisitsController($scope, $http, $uibModal, RowEditor, uiGridConstants, Common, DataFactory, UiGrids, $rootScope) {
  let vm = this;

  $scope.vm = vm;

  // setupVisitGrid();

  UiGrids.setupVisitGrid(vm);

  vm = $rootScope.vm;

  // $http.get('http://localhost:8080/Visits').then (function(response) {
  //
  //   visits    = Common.createObjects(response.data, visit);
  //   vm.serviceGrid.data = visits;
  //
  // });

  ListVisits();

  $scope.addRow = function() {
    let newService = {
      "visitid" : "",
      "entryTime" : "",
      "exitTime" : "",
      "userCreditedWithVisit" : "",
      "duration" : "",
      "userid" : "",
      "zoneid" : "",
      "fullname" : "",
      "storeName" : ""
    };
    let rowTmp = {};
    rowTmp.entity = newService;
    vm.editRow(vm.serviceGrid, rowTmp);
  };

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

            visit.fullname = "my name"; //Common.findUsersName(userid);
            // note retailerid === zoneid
            visit.storeName = "My Store" ; //Common.findStoreName(zoneid);

            visits[key] = visit;
          });

          $scope.visits = visits;
          vm.serviceGrid.data = visits;

          $rootScope.vm = vm;
        },
        function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
    vm.dataLoading = false;
  }

  function setupVisitGrid() {

    vm.editRow = RowEditor.editRow;

    vm.serviceGrid = {
      enableRowSelection : true,
      enableRowHeaderSelection : false,
      multiSelect : false,
      enableSorting : true,
      enableFiltering : true,
      enableGridMenu : true,
      rowTemplate : "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    };

    vm.serviceGrid.columnDefs = [ {
      field : 'getVisitid()',       displayName : 'Visit Id',
      enableSorting : true,
      enableCellEdit : false,
      type : 'number',
      width : 60,
      sort : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {
      field : 'getEntryTimeReadable()',      displayName : 'Zone Entry Time',
      enableSorting : true,       enableCellEdit : false, type : 'date',
    }, {
      field : 'getExitTimeReadable()',      displayName : 'Zone Exit Time',
      enableSorting : true,       enableCellEdit : false, type : 'date',
    }, {
      field : 'getUserCreditedWithVisit()', displayName : 'User Credited With Visit',
      enableSorting : true,       enableCellEdit : false, width : 120,  type : 'number',
    }, {
      field : 'getDuration()',    displayName : 'Duration',
      enableSorting : true,       enableCellEdit : false
    }, {
      field : 'getUserid()',      displayName : 'User ID',
      enableSorting : false,      enableCellEdit : false
    }, {
      field : 'getZoneid()',      displayName : 'Zone ID',
      enableSorting : false,      enableCellEdit : false
    }, {
      field : 'fullname',         displayName : 'Users Fullname',
      enableSorting : true,       enableCellEdit : false
    }, {
      field : 'storeName',        displayName : 'Store Name',
      enableSorting : true,       enableCellEdit : false
    } ];
  }

}
myApp.service('RowEditor', RowEditor);
RowEditor.$inject = [ '$http', '$rootScope', '$uibModal' ];
function RowEditor($http, $rootScope, $uibModal) {
  let service = {};
  service.editRow = editRow;

  function editRow(grid, row) {
    $uibModal.open({
      templateUrl : 'service-edit.html',
      controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
      controllerAs : 'vm',
      resolve : {
        grid : function() {
          return grid;
        },
        row : function() {
          return row;
        }
      }
    });
  }

  return service;
}

myApp.controller('RowEditCtrl', RowEditCtrl);
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
