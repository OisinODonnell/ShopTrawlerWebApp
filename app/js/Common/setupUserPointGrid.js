
grid.setupUserPointGrid = () => {

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
  this.userid	        = this.setUserid     (userid);
  this.retailerid	    = this.setRetailerid (retailerid);
  this.points	        = this.setPoints     (points);

  vm.serviceGrid.columnDefs = [ {
    field : 'getUserid()',      displayName : 'User ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getRetailerid()',  displayName : 'Retailer ID',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getPoints()',      displayName : 'Points',
    enableSorting : true,       enableCellEdit : false,
  } ];
};
