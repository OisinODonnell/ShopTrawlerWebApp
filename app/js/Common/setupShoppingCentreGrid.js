
grid.setupShoppingCentreGrid = () => {

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
    field : 'getShoppingCentreid()',      displayName : 'Shopping Centre ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getAdminid()',         displayName : 'Admin ID',
    enableSorting : true,           enableCellEdit : false,
  }, {
    field : 'getContentPage()',     displayName : 'Content Page',
    enableSorting : true,           enableCellEdit : false,
  }, {
    field : 'getPhone()',           displayName : 'Phone',
    enableSorting : true,           enableCellEdit : false,
  }, {
    field : 'getFacebookUrl()',     displayName : 'Facebook Url',
    enableSorting : true,           enableCellEdit : false
  }, {
    field : 'getTwitterUrl()',      displayName : 'Twitter Url',
    enableSorting : true,           enableCellEdit : false
  }, {
    field : 'getWebsiteUrl()',      displayName : 'Website Url',
    enableSorting : true,           enableCellEdit : false
  }, {
    field : 'getLogoImageSmall()',  displayName : 'Logo Image Small',
    enableSorting : true,           enableCellEdit : false
  }, {
    field : 'getLogoImageMedium()', displayName : 'Logo Image Medium',
    enableSorting : true,           enableCellEdit : false
  },{
    field : 'getLogoImageLarge()',  displayName : 'Logo Image Large',
    enableSorting : true,           enableCellEdit : false
  } ];
};
