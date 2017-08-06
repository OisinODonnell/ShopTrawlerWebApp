
grid.setupBeaconGrid = () => {

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
    field : 'beaconid',      displayName : 'Beacon ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getLocationid()',    displayName : 'Location ID',
    enableSorting : true,         enableCellEdit : false,
  }, {
    field : 'getMajor()',         displayName : 'Major',
    enableSorting : true,         enableCellEdit : false,
  }, {
    field : 'getMinor()',         displayName : 'Minor',
    enableSorting : true,         enableCellEdit : false,
  }, {
    field : 'getTransmitPower()', displayName : 'Transmit Power',
    enableSorting : true,         enableCellEdit : false
  }, {
    field : 'getUuid()',          displayName : 'UUID',
    enableSorting : true,         enableCellEdit : false
  } ];
};
