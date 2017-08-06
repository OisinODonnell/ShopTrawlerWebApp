
grid.setupContentGrid = () => {

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
    field : '',      displayName : '',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getContentid()',   displayName : 'Content ID',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getEndDate()',     displayName : 'End Date',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getPage1()',       displayName : 'Page 1',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getPage2()',       displayName : 'Page 2',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getPage3()',       displayName : 'Page 3',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getRetailerid()',  displayName : 'Retailer ID',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getStartDate()',   displayName : 'Start Date',
    enableSorting : true,       enableCellEdit : false
  }];
};
