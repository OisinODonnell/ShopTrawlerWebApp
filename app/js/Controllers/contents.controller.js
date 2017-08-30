myApp.controller('ContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;
    let filename1 = "";
    let filename2 = "";
    let filename3 = "";

    $rootScope.type = "C";
    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    $scope.vm = vm;

    // vm.editRow = RowEditor.editRowContent;
    vm.serviceGrid = Common.setupUiGrid(Globals.ContentColumnDefs2, $scope.allowEditRow )

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

    // function GetContent(contentId) {
    //   vm.dataLoading = true;
    //   let content = new Content();
    //   DataFactory.getContent(contentId)
    //     .then( function(response) {
    //         $scope.content = Common.createObjects(response.data, content);
    //         vm.serviceGrid.data = $scope.content;
    //         $scope.gridStyle = Common.gridStyle($scope.content.length)
    //       },
    //       function (error) { $scope.status = 'Unable to load Content ' + error.message; });
    //   vm.dataLoading = false;
    // }
    //
    // function AddContent(newContent) {
    //   vm.dataLoading = true;
    //   let content = new Content();
    //   DataFactory.addContent(newContent)
    //     .then( function(response) {
    //         $scope.content = Common.createObjects(response.data, content);
    //       },
    //       function (error) { $scope.status = 'Unable to set content ' + error.message; });
    //   vm.dataLoading = false;
    // }

    $scope.addRow = function () {
      let newService = Globals.addRowContent;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    $scope.upload = function (a,b,c,d) {
      console.log(a,b,c,d);
    };

    let lib = {};
    lib.upload = (a,b,c,d) => {
      console.log(a,b,c,d);
    };


    function editRowContent(grid, row, $scope) {
      $uibModal.open({
        templateUrl : 'Views/Edit-Contents-Service.html',
        // controller : vm.controllerArray,
        // controllerAs : 'vm',
        scope : $scope,
        resolve : {
          grid  : function() { return grid; },
          row   : function() { return row;  },
          scope  : function() { return $scope; }
        }
      });
      $rootScope.grid = grid;
      $rootScope.row = row;
    }

  }]);
