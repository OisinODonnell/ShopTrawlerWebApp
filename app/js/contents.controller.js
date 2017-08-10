myApp.controller('ContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

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
