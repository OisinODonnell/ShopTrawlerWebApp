
grid.setupVisitGrid = () => {

  vm.editRow = RowEditor.editRow;

  vm.serviceGrid = {
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    multiSelect: false,
    enableSorting: true,
    enableFiltering: true,
    enableGridMenu: true,
    rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  };


  vm.serviceGrid.columnDefs = [ {
    field : 'getVisitid()',      displayName : 'Visit ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getEntryTime()',   displayName : 'Entry Time',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getExitTime()',    displayName : 'Exit Time',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getUserCreditedForVisit()',      displayName : 'User Credited For Visit',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getDuration()',    displayName : 'Duration',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getUserid()',      displayName : 'User ID',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getZoneid()',      displayName : 'Zone ID',
    enableSorting : true,       enableCellEdit : false
  }];
};
