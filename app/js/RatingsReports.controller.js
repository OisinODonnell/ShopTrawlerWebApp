myApp.controller('RatingsReportController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;


    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }

    $scope.vm = vm;

    // setup grid
    vm.serviceGrid = Common.setupUiGrid(Globals.RatingCountColumnDefs, $scope.allowEditRow );



    if ($rootScope.currentUser.type === "Administrator")
      ListRatingsReportAdmin();
    else if ($rootScope.currentUser.type === "Retailer")
      ListRatingsReportRetailer($rootScope.currentUser.userid);

    function ListRatingsReportAdmin() {
      vm.dataLoading = true;
      let ratingCounts;
      let ratingCount = new RatingCount();
      DataFactory.listRatingsReportAdmin()
        .then( function(response) {
          ratingCounts = Common.createObjects(response.data, ratingCount);

          $scope.ratingCounts = ratingCounts;
          vm.serviceGrid.data = ratingCounts;
            $scope.gridStyle = Common.gridStyle(ratingCounts.length);
        },
        function (error) { $scope.status = 'Unable to load Rating Counts ' + error.message; });
      vm.dataLoading = false;
    }

    function ListRatingsReportRetailer(id) {
      vm.dataLoading = true;
      let ratingCounts;
      let ratingCount = new RatingCount();
      DataFactory.listRatingsReportRetailer(id)
        .then( function(response) {
            ratingCounts = Common.createObjects(response.data, ratingCount);
            $scope.ratingCounts = ratingCounts;
            vm.serviceGrid.data = ratingCounts;
            $scope.gridStyle = Common.gridStyle(ratingCounts.length);
          },
          function (error) { $scope.status = 'Unable to load Rating Count ' + error.message; });
      vm.dataLoading = false;
    }


  }]);
