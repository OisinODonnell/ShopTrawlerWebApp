myApp.controller('VisitsReportGenderController', ['$rootScope','$scope','DataFactory','Common','Globals',
  function ( $rootScope,$scope,DataFactory,Common,Globals) {
    let vm = this;
    $scope.vm = vm;
    let myLineChart;
    let canvas;
    vm.chartTitle = "Visits";

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
      let genderCharts = [];
      let genderChart    = new GenderChart();
      DataFactory.listVisitsReportsByGenderAdmin()
        .then( function(response) {
            // extract collections
            genderCharts    = Common.createObjects(response.data, genderChart);

            let chartConfig = {
              type    : 'bar',
              header  : "Vists by Gender",
              footer  : "Visits",
              options : {}
            };
            Common.resetCanvas();
            buildGenderChart(genderCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByGenderRetailer(id) {
      vm.dataLoading = true;
      let genderCharts = [];
      let genderChart    = new GenderChart();
      DataFactory.listVisitsReportsByGenderRetailer(id)
        .then( function(response) {
            // extract collections
            genderCharts    = Common.createObjects(response.data, genderChart);

            let chartConfig = {
              type    : 'pie',
              header  : "Vists by Gender",
              footer  : "Visits",
              options : {}
            };
            Common.resetCanvas();
            buildGenderChart(genderCharts, chartConfig);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function buildGenderChart(genderCharts, chartConfig ) {

      let bgColours = Globals.BackgroundChartColours;
      let borderColours = Globals.BorderChartColours;
      let config = {};

      // ChartJS uses an object with key / value pairs to configure the chart.
      // in order to make a change to eg 'config.options.title.text = header';
      // config.options and config.options.title must be initialised first before the header can be set
      // ie config.options = {}; and config.options.title = {};

      config.type = chartConfig.type;
      config.type = chartConfig.type;

      // bring in a standard set of options first
      config.options = Globals.ChartLineOptions;
      config.options.scales.xAxes[0].scaleLabel.labelString = chartConfig.footer;
      // add context specific stuff hereafter
      config.options.title.text = chartConfig.header;
      config.data = {};
      config.data.labels = genderCharts[0].getXLabels();

      config.data.datasets = [];

      genderCharts.forEach(function (genderChart, key) {
        config.data.datasets[key] = [];
        config.data.datasets[key].data = [genderChart.getMaleCount(), genderChart.getFemaleCount()];
        config.data.datasets[key].label = genderChart.getStoreName();
        config.data.datasets[key].fill = true;
        config.data.datasets[key].backgroundColor = bgColours; //[key];
        config.data.datasets[key].borderColor = borderColours[key];
        // if (chartConfig.type === "pie" || chartConfig.type === "doughnut" || chartConfig.type === "bar") {
        //   config.data.datasets[key].backgroundColor = chartConfig.options.backgroundColor;
        // }
      });

      $rootScope.myNewChart = new Chart($rootScope.ctx, config);

    }


  }]);

