let myApp = angular.module('MyApp', [ 'ngAnimate', 'ui.grid', 'ui.grid.moveColumns',
  'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit' ]);

myApp.controller('VisitsController', VisitsController);

VisitsController.$inject = [ '$scope', '$rootScope', '$http', '$uibModal', 'RowEditor', 'uiGridConstants','UiGrids','Globals','Common'];
function VisitsController($scope, $rootScope, $http, $uibModal, RowEditor, uiGridConstants, UiGrids, Globals, Common) {
  let vm = this;

  vm.editRow = RowEditor.editRowVisit;

  vm.serviceGrid = Globals.GridDefaults;
  vm.serviceGrid.columnDefs = Globals.VisitColumnDefs;

  //
  // vm.serviceGrid = {
  //   enableRowSelection : true,
  //   enableRowHeaderSelection : false,
  //   multiSelect : false,
  //   enableSorting : true,
  //   enableFiltering : true,
  //   enableGridMenu : true,
  //   rowTemplate : "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  // };
  //
  // vm.serviceGrid.columnDefs = [ {
  //   field : 'id',
  //   displayName : 'Id',
  //   enableSorting : true,
  //   type : 'number',
  //   enableCellEdit : false,
  //   width : 60,
  //
  // }, {
  //   field : 'exposedws',
  //   enableSorting : true,
  //   enableCellEdit : false
  // }, {
  //   field : 'exposedoperation',
  //   enableSorting : true,
  //   enableCellEdit : false
  // }, {
  //   field : 'version',
  //   width : 120,
  //   enableSorting : true,
  //   enableCellEdit : false
  // }, {
  //   field : 'category',
  //   enableSorting : true,
  //   enableCellEdit : false
  // }, {
  //   field : 'exposednamespace',
  //   enableSorting : true,
  //   enableCellEdit : false
  // }, {
  //   field : 'path',
  //   enableSorting : true,
  //   enableCellEdit : false
  // }, {
  //   field : 'provider',
  //   enableSorting : true,
  //   enableCellEdit : false
  // } ];

  // $http.get('data.json').then(function(response) {
  $http.get('http://localhost:8080/Visits').then(function(response) {
    let visit = new Visit();
    let visits    = Common.createObjects(response.data, visit);
    vm.serviceGrid.data = response.data;
  });

  $scope.addRow = function() {
    let newService = {
      "visitid"	 : "",
      "entryTime": "",
      "exitTime" : "",
      "userCreditedForVisit" :"",
      "duration" : "",
      "userid"	: "",
      "zoneid"	: ""
    };
    let rowTmp = {};
    rowTmp.entity = newService;
    vm.editRow($scope.vm.serviceGrid, rowTmp);
  };

}
//
// myApp.service('RowEditor', RowEditor);
// RowEditor.$inject = [ '$http', '$rootScope', '$uibModal' ];
// function RowEditor($http, $rootScope, $uibModal) {
//   let service = {};
//   service.editRow = editRow;
//
//   function editRow(grid, row) {
//     $uibModal.open({
//
//       templateUrl : '../../../app/js/Edit-Visits-Service.html',
//       controller : [ '$http', '$uibModalInstance', 'grid', 'row', RowEditCtrl ],
//       controllerAs : 'vm',
//       resolve : {
//         grid : function() {
//           return grid;
//         },
//         row : function() {
//           return row;
//         }
//       }
//     });
//   }
//   return service;
// }

// myApp.controller('RowEditCtrl', RowEditCtrl);
// function RowEditCtrl($http, $uibModalInstance, grid, row) {
//   let vm = this;
//   vm.entity = angular.copy(row.entity);
//   vm.saveVisit = saveVisit;
//   function saveVisit() {
//     if (row.entity.id == '0') {
//       /*
//              * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
//              */
//       row.entity = angular.extend(row.entity, vm.entity);
//       //real ID come back from response after the save in DB
//       row.entity.id = Math.floor(100 + Math.random() * 1000);
//
//       grid.data.push(row.entity);
//
//     } else {
//       row.entity = angular.extend(row.entity, vm.entity);
//       /*
//        * $http.post('http://localhost:8080/service/save', row.entity).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot edit row (error in console)'); console.dir(response); });
//        */
//     }
//     $uibModalInstance.close(row.entity);
//   }
//
//   vm.removeVisit = removeVisit;
//   function removeVisit() {
//     console.dir(row)
//     if (row.entity.id != '0') {
//       row.entity = angular.extend(row.entity, vm.entity);
//       let index = grid.appScope.vm.serviceGrid.data.indexOf(row.entity);
//       grid.appScope.vm.serviceGrid.data.splice(index, 1);
//       /*
//        * $http.delete('http://localhost:8080/service/delete/'+row.entity.id).success(function(response) { $uibModalInstance.close(row.entity); }).error(function(response) { alert('Cannot delete row (error in console)'); console.dir(response); });
//        */
//     }
//     $uibModalInstance.close(row.entity);
//   }
//
// }
