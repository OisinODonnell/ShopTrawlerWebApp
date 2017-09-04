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
    vm.serviceGrid = Common.setupUiGrid(Globals.RatingChartColumnDefs, $scope.allowEditRow );

    if ($rootScope.currentUser.type === "Administrator")
      ListRatingsReportAdmin();
    else if ($rootScope.currentUser.type === "Retailer")
      ListRatingsReportRetailer($rootScope.currentUser.retailerid);

    function ListRatingsReportAdmin() {
      vm.dataLoading = true;
      let ratingCharts;
      let ratingChart = new RatingChart();
      DataFactory.listRatingsReportAdmin()
        .then( function(response) {
          ratingCharts = Common.createObjects(response.data, ratingChart);

          $scope.ratingCharts = ratingCharts;
          vm.serviceGrid.data = ratingCharts;
            $scope.gridStyle = Common.gridStyle(ratingCharts.length);
        },
        function (error) { $scope.status = 'Unable to load Rating Counts ' + error.message; });
      vm.dataLoading = false;
    }

    function ListRatingsReportRetailer(id) {
      vm.dataLoading = true;
      let ratingCharts;
      let ratingChart = new RatingChart();
      DataFactory.listRatingsReportRetailer(id)
        .then( function(response) {
            ratingCharts = Common.createObjects(response.data, ratingChart);
            $scope.ratingCharts = ratingCharts;
            vm.serviceGrid.data = ratingCharts;
            $scope.gridStyle = Common.gridStyle(ratingCharts.length);
          },
          function (error) { $scope.status = 'Unable to load Rating Count ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
