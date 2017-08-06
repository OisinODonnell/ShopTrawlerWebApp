
grid.setupLocationGrid = () => {

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
    field : 'getLocationid()',        displayName : 'locationid',
    enableSorting : true,             enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getAltitude()',          displayName : 'Altitude',
    enableSorting : true,             enableCellEdit : false,
  }, {
    field : 'getGpsLongtitude()',     displayName : 'GPS Longtitude',
    enableSorting : true,             enableCellEdit : false,
  }, {
    field : 'getGpsLatitude()',       displayName : 'GPS Latitude',
    enableSorting : true,             enableCellEdit : false,
  }, {
    field : 'getLocationInShoppingCentre()', displayName : 'Location In Shopping Centre',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getLocationType()',      displayName : 'Location Type',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',
    enableSorting : true,             enableCellEdit : false
  }];
};
