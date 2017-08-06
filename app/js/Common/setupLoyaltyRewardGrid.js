
grid.setupLoyaltyRewardGrid = () => {

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
    field : 'getLoyaltyRewardid()',      displayName : 'Loyalty Reward ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getEndDate()',      displayName : 'End Date',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getPointsPerVisit()',      displayName : 'Points Per Visit',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getRewardImage()',      displayName : 'Reward Image',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getRetailerid()',      displayName : 'Retailer ID',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getRewardTitle()',      displayName : 'Reward Title',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getStartDate()',      displayName : 'Start Date',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getVisitTime()',      displayName : 'Visit Time',
    enableSorting : true,       enableCellEdit : false
  } ];
};
