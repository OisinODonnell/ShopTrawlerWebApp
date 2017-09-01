myApp.controller('ContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','FileUploader','AWSconfig',

  function (  DataFactory, $scope, Common, $rootScope, $uibModal, RowEditor, uiGridConstants, Globals, FileUploader, AWSconfig) {
    let vm = this;
    let filename1 = "";
    let filename2 = "";
    let filename3 = "";

    $rootScope.type = "C";

    $scope.uploader = new FileUploader();
    $rootScope.currentUser.type = "";

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Administrator";
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Retailer";
    }

    $scope.awsUpload = function() {
      $scope.uploader.uploadAll();
      let ready = $scope.uploader.getReadyItems();

    };

    $scope.vm = vm;

    vm.addRowContent    = RowEditor.addRowContent;
    vm.editRowContent   = RowEditor.editRowContent;
    vm.deleteRowContent = RowEditor.deleteRowContent;
    vm.serviceGrid      = Common.setupUiGrid(Globals.ContentColumnDefs2, $scope.allowEditRow );

    vm.upload = $scope.upload;


    if ($rootScope.currentUser.type === "Administrator")
      ListContents();
    else
      ListContentByRetailer($rootScope.currentUser.retailerid);


    function ListContents() {
      vm.dataLoading = true;
      let contents = [];
      $scope.contents = [];
      let content = new Content();
      DataFactory.listContent()
        .then( function(response) {
            contents = Common.createObjects(response.data, content);
            contents.forEach(function (content, key) {
              content = Common.setDatesAndIDs(content);
              content.filename1 = "";
              content.filename2 = "";
              content.filename3 = "";
              $scope.contents[key] = content;

            });
            vm.serviceGrid.data = $scope.contents;
            $scope.gridStyle = Common.gridStyle($scope.content.length)
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }
    function ListContentByRetailer(id) {
      vm.dataLoading = true;
      let contents = [];
      $scope.contents = [];
      let content = new Content();
      DataFactory.listContentByRetailer(id)
        .then( function(response) {
            contents = Common.createObjects(response.data, content);
            contents.forEach(function (content, key) {
              content = Common.setDatesAndIDs(content);
              content.filename1 = "";
              content.filename2 = "";
              content.filename3 = "";
              $scope.contents[key] = content;

            });
            vm.serviceGrid.data = $scope.contents;
            $scope.gridStyle = Common.gridStyle($scope.contents.length)
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }


    $scope.addRowOld = function () {
      let newService = Globals.addRowContent;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };
    $scope.saveRow = function(row) {
      console.log("save Row C");
    };
    $scope.addRow = function(row) {
      console.log("save Row C");
      vm.serviceGrid.data.push({});
    };

    $scope.deleteRow = function(row) {
      console.log("delete Row C");
    };

  }]);
