myApp.controller('ContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    // placeholders
    $scope.dropdownCategories = [];
    $scope.dropdownmanufacturers = [];
    $scope.contents = [];
    $scope.contentId = 0;
    $scope.content = {};

    $scope.vm = vm;

    vm.editRow = RowEditor.editRowContent;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.ContentColumnDefs;

    if ($scope.allowEditRow) {
      // allow this entity to be edited by double clicking the row
      vm.serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    }

    if ($rootScope.currentUser.type === "Administrator")
      ListContents();
    else
      ListContentByRetailer($rootScope.currentUser.userid);


    let factory = {
      ListContents : ListContents, // all users
      AddContent   : AddContent,
      GetContent   : GetContent,  // single user
    };


    function ListContents() {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.listContent()
        .then( function(response) {
            $scope.contents = Common.createObjects(response.data, content);
            vm.serviceGrid.data = $scope.contents;
            $scope.gridStyle = Common.gridStyle($scope.content.length)
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }
    function ListContentByRetailer(id) {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.listContentByRetailer(id)
        .then( function(response) {
            $scope.contents = Common.createObjects(response.data, content);
            vm.serviceGrid.data = $scope.contents;
            $scope.gridStyle = Common.gridStyle($scope.content.length)
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }

    function GetContent(contentId) {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.getContent(contentId)
        .then( function(response) {
            $scope.content = Common.createObjects(response.data, content);
            vm.serviceGrid.data = $scope.content;
            $scope.gridStyle = Common.gridStyle($scope.content.length)
          },
          function (error) { $scope.status = 'Unable to load Content ' + error.message; });
      vm.dataLoading = false;
    }



    function AddContent(newContent) {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.addContent(newContent)
        .then( function(response) {
            $scope.content = Common.createObjects(response.data, content);
          },
          function (error) { $scope.status = 'Unable to set content ' + error.message; });
      vm.dataLoading = false;
    }

    $scope.addRow = function () {
      let newService = Globals.addRowContent;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    return factory;

  }]);
