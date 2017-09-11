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

myApp.controller('VisitsReportDaysController', ['$rootScope','$scope','DataFactory','Common','Globals',
  function ( $rootScope,$scope,DataFactory,Common,Globals) {
    let vm = this;
    $scope.vm = vm;
    vm.chartTitle = "Visits";

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
            Common.resetCanvas();
            Common.buildChart(visitCharts, chartConfig);
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
            Common.resetCanvas();
            Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }


  }]);

myApp.controller('VisitsReportWeeksController', ['$rootScope','$scope','DataFactory','Common','Globals','$http',
  function ( $rootScope,$scope,DataFactory,Common,Globals,$http) {
    let vm = this;
    $scope.vm = vm;
    const urlBase = Globals.URL_BASE;


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
      // DataFactory.listVisitsReportsAdminWeeks()
      $http.get(urlBase + '/Visits/Report/Admin/Week' )
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);
            vm.dataLoading = false;

            let chartConfig = {
              type    : 'line',
              header  : "Weekly Visits for past 12 Weeks By Retailer",
              footer  : "Weekly",
              options : {}
            };
            Common.resetCanvas();
            Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message;
        });

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
              type   : 'bar',
              options : {},
            };

            chartConfig.options.backgroundColor = Globals.PieColours;
            chartConfig.scales = {};
            chartConfig.scales.yAxes = yAxes;

            Common.resetCanvas();
            Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }
  }]);

myApp.controller('VisitsReportMonthsController', ['$rootScope','$scope','DataFactory','Common','Globals',
  function ( $rootScope,$scope,DataFactory,Common, Globals) {
    let vm = this;
    $scope.vm = vm;


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
            Common.resetCanvas();
            Common.buildChart(visitCharts, chartConfig);
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
            Common.resetCanvas();
            Common.buildChart(visitCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }
  }]);
