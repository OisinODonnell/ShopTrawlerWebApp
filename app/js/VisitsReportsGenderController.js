myApp.controller('VisitsReportGenderController', ['DataFactory','$scope','Common','$rootScope','Globals',
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
      let genderCounts = [];
      let genderCount    = new GenderCount();
      DataFactory.listVisitsReportsByGenderAdmin()
        .then( function(response) {
            // extract collections
            genderCounts    = Common.createObjects(response.data, genderCount);

            let chartConfig = {
              type    : 'line',
              header  : "Daily Visits for past 12 Days By Retailer",
              footer  : "Daily",
              options : {}
           };


            let myLineChart = buildGenderChart(genderCounts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByGenderRetailer(id) {
      vm.dataLoading = true;
      let genderCounts = [];
      let genderCount    = new GenderCount();
      DataFactory.listVisitsReportsByGenderRetailer(id)
        .then( function(response) {
            // extract collections
            genderCounts    = Common.createObjects(response.data, genderCount);

            let chartConfig = {
              type    : 'line',
              header  : "Daily Visits for past 12 Days",
              footer  : "Daily",
              options : {}
            };


            let myLineChart = buildGenderChart(genderCounts, chartConfig, ctx);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function buildGenderChart(genderCounts, chartConfig, ctx )  {

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
      config.data.labels = genderCounts[0].xlabels;

      config.data.datasets = [];

      genderCounts.forEach(  function (genderCount, key) {
        config.data.datasets[key] = [];
        config.data.datasets[key].data = genderCount.getMaleCount();
        config.data.datasets[key].label = genderCount.getStoreName();
        config.data.datasets[key].fill = true;
        config.data.datasets[key].backgroundColor = bgColours[key];
        config.data.datasets[key].borderColor = borderColours[key];
        if (chartConfig.type === "pie" || chartConfig.type === "doughnut" || chartConfig.type === "bar") {
          config.data.datasets[key].backgroundColor = chartConfig.options.backgroundColor;
        }
      });

      $rootScope.myChart = new Chart(ctx, config);
      return new Chart(ctx, config);

    }




  }]);

