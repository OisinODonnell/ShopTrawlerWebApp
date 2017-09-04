var app = angular.module('plunker', ['ui.grid', 'ui.grid.selection']);

app.controller('MainCtrl', ['$scope', 'uiGridConstants', function($scope, uiGridConstants) {
  $scope.changeColumn2Text = changeColumn2Text;

  $scope.gridOptions = {
    columnDefs: [
      {field: 'col1', displayName: 'Column 1', width: 175},
      {field: 'col2', displayName: 'Column 2', width: '*'},
      {field: 'col3', displayName: 'Column 3', width: 120}
    ],
    data: [
      { col1: "Hello", col2: "World", col3: "tester"},
      { col1: "Hello 2", col2: "World", col3: "tester"},
      { col1: "Hello 3", col2: "World", col3: "tester"},
      { col1: "Hello 4", col2: "World", col3: "tester"},
      { col1: "Hello 5", col2: "World", col3: "tester"}
    ],
    enableRowSelection: true,
    onRegisterApi: function(gridApi) {
      $scope.gridApi = gridApi;
    }
  };

  function changeColumn2Text() {
    if ($scope.gridOptions.columnDefs[1].displayName === 'Column 2') {
      $scope.gridOptions.columnDefs[1].displayName = 'I Changed';
    } else {
      $scope.gridOptions.columnDefs[1].displayName = 'Column 2';
    }
    $scope.gridApi.core.notifyDataChange(uiGridConstants.dataChange.COLUMN);
  }
}]);
