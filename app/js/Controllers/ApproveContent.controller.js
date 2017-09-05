myApp.controller('ApproveContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','moment',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, moment) {
    let vm = this;
    $scope.vm = vm;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below

      vm.editRow = RowEditor.approveRowContent;
      vm.serviceGrid = Common.setupUiGrid(Globals.ApproveContentColumnDefs, $scope.allowEditRow )
      $scope.vm = vm;
      vm.chartTitle = "Retailer Content To Approve";
      ListContentsForApproval();
    }

    function ListContentsForApproval() {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.listContentForApproval()
        .then( function(response) {
            $scope.contents = Common.createObjects(response.data, content);
            vm.serviceGrid.data = $scope.contents;
            $scope.gridStyle = Common.gridStyle($scope.contents.length)
            $scope.contents.forEach( function(content,key) {
              content = Common.setDatesAndIDs(content);
              $scope.contents[key] = content;

          })
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }


  }]);
