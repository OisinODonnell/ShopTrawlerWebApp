
grid.setupBonusCodeGrid = () => {

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
    field : 'getBonusCodeid()',displayName : 'Bonus Code ID',
    enableSorting : true,      enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getDateTime()',   displayName : 'Date Time',
    enableSorting : true,      enableCellEdit : false,
  }, {
    field : 'getRetailerid()', displayName : 'Retailer ID',
    enableSorting : true,      enableCellEdit : false,
  }, {
    field : 'getUserid()',     displayName : 'User ID',
    enableSorting : true,      enableCellEdit : false,
  }, {
    field : 'getValue()',      displayName : 'Value',
    enableSorting : true,      enableCellEdit : false
  } ];
};
