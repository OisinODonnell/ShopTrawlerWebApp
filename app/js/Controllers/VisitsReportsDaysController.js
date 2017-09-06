// // myApp.factory('Common',[ '$rootScope','Globals','moment','AWSconfig',  function ($rootScope, Globals, moment, AWSconfig) {
// myApp.factory('Cht', ['$rootScope', function($rootScope) {
//
//   let lib = {};
//
//   lib.resetCanvas  = () => {
//
//     if ($rootScope.myNewChart)
//       if ($rootScope.myNewChart.destroy)
//         $rootScope.myNewChart.destroy();
//
//     if ($rootScope.ctx !== null || $rootScope.ctx !== {}) {
//       if ($rootScope.ctx.clearRect) {
//         $rootScope.ctx.clearRect(0, 0, 600, 400);
//         $rootScope.canvas = document.getElementById('myChart');
//         $rootScope.ctx = $rootScope.canvas.getContext('2d');
//       }
//     } else {
//
//       // $('#myChart').remove(); // this is my <canvas> element
//       // $('#canvas-container').append('<canvas id="myChart" align="center" width="600" height="400"></canvas>');
//       let canvas = document.querySelector('#myChart');
//       $rootScope.canvas = canvas;
//       $rootScope.ctx = $rootScope.canvas.getContext('2d');
//     }
//   };
//
//   return lib;
//
// }]);

myApp.controller('VisitsReportDaysController', ['DataFactory','$rootScope','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$rootScope,$scope,Common,Globals) {
    let vm = this;
    $scope.vm = vm;
    vm.chartTitle = "Visits";
    // Chart.defaults.global.defaultFontColor = 'white';

    Common.resetCanvas();

    // $rootScope.canvas = document.getElementById('myChart');
    // $rootScope.ctx = $rootScope.canvas.getContext('2d');

    // if (angular.isDefined($rootScope.myChart)) {
    //   $rootScope.myChart = {};
    // }
    // Chart.defaults.global.defaultFontSize = 14;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsAdminDays();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      let id = Common.getRetaileridFromUserid($rootScope.loggedInUserId, $rootScope.retailers);
      ListVisitsReportsByRetailerDays(id);
    }

    // setup chart
    function ListVisitsReportsAdminDays() {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsAdminDays()
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let chartConfig = {
              type    : 'line',
              header  : "Daily Visits for past 12 Days By Retailer",
              footer  : "Daily",
              options : {}
           };
            $rootScope.myNewChart = Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByRetailerDays(id) {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsRetailerDays(id)
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let chartConfig = {
              type    : 'line',
              header  : "Daily Visits for past 12 Days",
              footer  : "Daily",
              options : {}
            };
            $rootScope.myNewChart = Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    // $scope.$on('chart-update',function(evt, $rootScope){
    //   $rootScope.myNewChart.update();
    // });

  }]);


myApp.controller('VisitsReportWeeksController', ['DataFactory','$rootScope','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$rootScope,$scope,Common,$rootScope, Globals) {
    let vm = this;
    $scope.vm = vm;
    // if (angular.isDefined($rootScope.myChart)) {
    //   $rootScope.myChart = {};
    // }

    Common.resetCanvas();
    // Chart.defaults.global.defaultFontSize = 14;
    // $rootScope.canvas = document.getElementById('myChart');
    // $rootScope.ctx = $rootScope.canvas.getContext('2d');

    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsAdminWeeks();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      let id = Common.getRetaileridFromUserid($rootScope.loggedInUserId, $rootScope.retailers);
      ListVisitsReportsByRetailerWeeks(id);
    }

    function ListVisitsReportsAdminWeeks() {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsAdminWeeks()
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let chartConfig = {
              type    : 'line',
              header  : "Weekly Visits for past 12 Weeks By Retailer",
              footer  : "Weekly",
              options : {}
            };
            $rootScope.myNewChart = Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByRetailerWeeks(id) {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsRetailerWeeks(id)
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);
            let yAxes = [{
              display : true,
              ticks: {
                beginAtZero:false,
              }
            }];

            let chartConfig = {
              header : "Weekly Visits for past 12 Weeks",
              footer : "Weekly",
              type   : 'doughnut',
              options : {},
            };

            chartConfig.options.backgroundColor = Globals.PieColours;
            chartConfig.scales = {};
            chartConfig.scales.yAxes = yAxes;

            $rootScope.myNewChart = Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }
  }]);

myApp.controller('VisitsReportMonthsController', ['DataFactory','$rootScope','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$rootScope,$scope,Common,$rootScope, Globals) {
    let vm = this;
    $scope.vm = vm;

    Common.resetCanvas();

    // Chart.defaults.global.defaultFontSize = 14;

    // $rootScope.canvas = document.getElementById('myChart');
    // $rootScope.ctx = $rootScope.canvas.getContext('2d');

    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodMonthColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsAdminMonths();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodMonthColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      let id = Common.getRetaileridFromUserid($rootScope.loggedInUserId, $rootScope.retailers);
      ListVisitsReportsByRetailerMonths(id);
    }

    function ListVisitsReportsAdminMonths() {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsAdminMonths()
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let chartConfig = {
              type    : 'line',
              header  : "Monthly Visits for past 12 Months By Retailer",
              footer  : "Monthly",
              options : {}
            };
            $rootScope.myNewChart = Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByRetailerMonths(id) {
      vm.dataLoading = true;
      let visitCharts = [];
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsRetailerMonths(id)
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);
            let yAxes = [{
              display : true,
              ticks: {
                beginAtZero:false,
              }
            }];
            let chartConfig = {
              type    : 'bar',
              header  : "Monthly Visits for past 12 Months",
              footer  : "Monthly",
              options : {}
            };
            chartConfig.options.backgroundColor = Globals.PieColours;

            chartConfig.scales = {};
            chartConfig.scales.yAxes = yAxes;
            $rootScope.myNewChart = Common.buildChart(visitCharts, chartConfig);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }
  }]);
