myApp.controller('VisitsReportDaysController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope,Globals) {
    let vm = this;
    $scope.vm = vm;

    // Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 14;
    let canvas = document.getElementById('myChart');
    let ctx = canvas.getContext('2d');

    if (angular.isDefined($rootScope.myChart)) {
      $rootScope.myChart = {};
    }


    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsByGenderAdmin();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      let id = Common.getRetaileridFromUserid($rootScope.loggedInUserId, $rootScope.retailers);
      ListVisitsReportsByGenderRetailer(id);
    }

    function ListVisitsReportsByGenderAdmin() {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsByGenderAdmin()
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let chartConfig = {
              type    : 'line',
              header  : "Daily Visits for past 12 Days By Retailer",
              footer  : "Daily",
              options : {}
           };


            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByGenderRetailer(id) {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsByGenderRetailer(id)
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let chartConfig = {
              type    : 'line',
              header  : "Daily Visits for past 12 Days",
              footer  : "Daily",
              options : {}
            };


            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);

