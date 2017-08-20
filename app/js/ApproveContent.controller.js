myApp.controller('ApproveContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','moment',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, moment) {
    let vm = this;


    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below

      vm.editRow = RowEditor.approveRowContent;
      vm.serviceGrid = Common.setupUiGrid(Globals.ApproveContentColumnDefs, $scope.allowEditRow )
      $scope.vm = vm;

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
              content.sDate = {};
              content.eDate = {};
              content.sDate = new Date(content.startDate);
              content.eDate = new Date(content.endDate);

              let today = new moment();
              let tomorrow = new moment(today.add(1,'day'));
              let minStartDate = today;

              // fix invalid dates before we start.
              // startdate cant be less that today
              // endate cant be less than tomorrow
              if (content.sDate < new Date(today)) {
                content.sDate = new Date(today);
              }
              if (content.eDate < new Date(tomorrow)) {
                content.eDate = new Date(tomorrow);
              }
              let minEndDate = tomorrow;
              let maxEndDate = moment(minStartDate.add(6,'month'));
              // let maxStartDate = moment(content.eDate);
              // maxStartDate = moment(maxStartDate.add(-1,'day'));

              content.minStartDate = new Date ();
              content.minEndDate = new Date (minEndDate);
              content.maxEndDate = new Date (maxEndDate);
              $scope.contents[key] = content;

          })
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }


  }]);
