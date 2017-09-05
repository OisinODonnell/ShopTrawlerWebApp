myApp.controller('VisitsReportAgeController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope,Globals) {
    let vm = this;
    $scope.vm = vm;
    vm.chartTitle = "Visits";
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
      ListVisitsReportsByAgeAdmin();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      let id = Common.getRetaileridFromUserid($rootScope.loggedInUserId, $rootScope.retailers);
      ListVisitsReportsByAgeRetailer(id);
    }

    function ListVisitsReportsByAgeAdmin() {
      vm.dataLoading = true;
      let ageCharts = [];
      let ageChart    = new AgeChart();
      DataFactory.listVisitsReportsByAgeAdmin()
        .then( function(response) {
            // extract collections
            ageCharts    = Common.createObjects(response.data, ageChart);

            let chartConfig = {
              type    : 'bar',
              header  : "Visit Report by Age",
              footer  : "Age Profile Report",
              options : {}
            };


            let myLineChart = buildAgeChart(ageCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByAgeRetailer(id) {
      vm.dataLoading = true;
      let ageCharts = [];
      let ageChart    = new AgeChart();
      DataFactory.listVisitsReportsByAgeRetailer(id)
        .then( function(response) {
            // extract collections
            let ageCharts    = Common.createObjects(response.data, ageChart);

            let chartConfig = {
              type    : 'bar',
              header  : "Visit Report by Age Profile",
              footer  : "Age Profile Report",
              options : {}
            };


            let myLineChart = buildAgeChart(ageCharts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function buildAgeChart(ageCharts, chartConfig, ctx )  {

      let bgColours = Globals.BackgroundChartColours;
      let borderColours = Globals.BorderChartColours;
      let config = {};

      // ChartJS uses an object with key / value pairs to configure the chart.
      // in order to make a change to eg 'config.options.title.text = header';
      // config.options and config.options.title must be initialised first before the header can be set
      // ie config.options = {}; and config.options.title = {};

      config.type = chartConfig.type;
      let xAxes = [{
        display : true,
        scaleLabel : {
          display : true,
          labelString : chartConfig.footer
        }
      }];

      // bring in a standard set of options first
      config.options = Globals.ChartLineOptions;
      // add context specif stuff hereafter
      config.options.scales.xAxes = xAxes; // footer set above
      config.options.title.text = chartConfig.header;

      config.data = {};
      config.data.labels = ageCharts[0].xLabels;

      config.data.datasets = [];

      ageCharts.forEach(  function (ageChart, key) {
        config.data.datasets[key] = [];
        config.data.datasets[key].label = ageChart.getStoreName();
        config.data.datasets[key].data = ageChart.getCounts();
        config.data.datasets[key].fill = true;
        config.data.datasets[key].backgroundColor = bgColours[key];
        config.data.datasets[key].borderColor = borderColours[key];
        if (chartConfig.type === "pie" || chartConfig.type === "doughnut" ) {
          config.data.datasets[key].backgroundColor = chartConfig.options.backgroundColor;
        }
      });

      $rootScope.myChart = new Chart(ctx, config);
      return new Chart(ctx, config);

    }



  }]);

