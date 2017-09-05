myApp.controller('VisitsReportGenderController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope,Globals) {
    let vm = this;
    $scope.vm = vm;
    let myLineChart;
    let canvas;
    vm.chartTitle = "Visits";
    // Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 14;
    canvas = document.getElementById('myChart');
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
            myLineChart = buildGenderChart(genderCharts, chartConfig, ctx);
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
            let myLineChart = buildGenderChart(genderCharts, chartConfig, ctx);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function buildGenderChart(genderCharts, chartConfig, ctx )  {
      // lib.destroy = (charts, canvasid, config, ctx) => {
      // Common.destroy(myLineChart, canvas,chartConfig,ctx);

      // myLineChart.destroy();



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
      config.data.labels = genderCharts[0].getXLabels();

      config.data.datasets = [];

      genderCharts.forEach(  function (genderChart, key) {
        config.data.datasets[key] = [];
        config.data.datasets[key].data = [ genderChart.getMaleCount(), genderChart.getFemaleCount()];
        config.data.datasets[key].label = genderChart.getStoreName();
        config.data.datasets[key].fill = true;
        config.data.datasets[key].backgroundColor = bgColours[key];
        config.data.datasets[key].borderColor = borderColours[key];
        // if (chartConfig.type === "pie" || chartConfig.type === "doughnut" || chartConfig.type === "bar") {
        //   config.data.datasets[key].backgroundColor = chartConfig.options.backgroundColor;
        // }
      });


      // if ($rootScope.myChart) {
      //   $rootScope.myChart.destroy();
      // }


      $rootScope.myChart = new Chart(ctx, config);
      return new Chart(ctx, config);

    }




  }]);

