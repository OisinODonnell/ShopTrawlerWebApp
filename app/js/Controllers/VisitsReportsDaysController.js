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
      ListVisitsReportsAdminDays();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      let id = Common.getRetaileridFromUserid($rootScope.loggedInUserId, $rootScope.retailers);
      ListVisitsReportsByRetailerDays(id);
    }

    // setup chart

    // // Line options
    // let data = {
    //   labels                  : [1,2,3,4,5,6,7,8,9,10,11,12],
    //   xAxisID                 : "",
    //   yAxisID                 : "",
    //   backgroundColor         : Color,
    //   borderColor             : Color,
    //   borderWidth             : 0,
    //   borderDash              : Number,
    //   borderDashOffset        : Number,
    //   borderCapStyle          : "",
    //   borderJoinStyle         : "",
    //   cubicInterpolationMode  : "",
    //   fill                    : Boolean,
    //   lineTension             :	Number,
    //   pointBackgroundColor    :	Color/Color[],
    //   pointBorderColor        :	Color/Color[],
    //   pointBorderWidth        :	Number/Number[],
    //   pointRadius             :	Number/Number[],
    //   pointStyle              :	String/String[]/Image/Image[],
    //   pointHitRadius          :	Number/Number[],
    //   pointHoverBackgroundColor :	Color/Color[],
    //   pointHoverBorderColor   :	Color/Color[],
    //   pointHoverBorderWidth   :	Number/Number[],
    //   pointHoverRadius        :	Number/Number[],
    //   steppedLine             :	Boolean/String,
    //   showLine                :	true,
    //   spanGaps                :	true,
    // };
    //
    // // Bar Options
    // let data = {
    //   labels                  : [1,2,3,4,5,6,7,8,9,10,11,12],
    //   xAxisID                 : "",
    //   yAxisID                 : "",
    //   backgroundColor         : Color,
    //   borderColor             : Color,
    //   borderWidth             : 0,
    //   borderSkipped           : Number,
    //   cubicInterpolationMode  : "",
    //   fill                    : Boolean,
    //   hoverBackgroundColor    : Color,
    //   hoverBorderColor        : Color,
    //   hoverBorderWidth        : Number,
    // };
    // // Pie Options
    //
    // let data = {
    //   labels                  : "",
    //   backgroundColor         : Color,
    //   borderColor             : Color,
    //   borderWidth             : 0,
    //   hoverBackgroundColor    : Color,
    //   hoverBorderColor        : Color,
    //   hoverBorderWidth        : Number,
    // };


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
            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);
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

            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);


myApp.controller('VisitsReportWeeksController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope, Globals) {
    let vm = this;
    $scope.vm = vm;
    if (angular.isDefined($rootScope.myChart)) {
      $rootScope.myChart = {};
    }
    // Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 14;
    let canvas = document.getElementById('myChart');
    let ctx = canvas.getContext('2d');

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


            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

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


            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);

myApp.controller('VisitsReportMonthsController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope, Globals) {
    let vm = this;
    $scope.vm = vm;
    if (angular.isDefined($rootScope.myChart)) {
      $rootScope.myChart = {};
    }
    // Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 14;
    let canvas = document.getElementById('myChart');
    let ctx = canvas.getContext('2d');

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


            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

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
            let myLineChart = Common.buildChart(visitCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
