myApp.controller('VisitsReportDaysController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope,Globals) {
    let vm = this;
    $scope.vm = vm;
    // let retailerColDef    = { field : 'storeName',width : 200,    displayName : 'Store Name',enableCellEdit : false  };
    // let countColumnWithAvg= { name  : 'avgCount', field: 'count', width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Count' };
    // let dateColDef        = { field : 'storeName', width : 200,   displayName : 'Store Name',enableCellEdit : false  };
    // let periodDayColDef   = { field : 'day',      width : 200,    displayName : 'Day',       enableCellEdit : false  };
    // let periodWeekColDef  = { field : 'week',     width : 200,    displayName : 'Week',      enableCellEdit : false  };
    // let periodMonthColDef = { field : 'month',    width : 200,    displayName : 'Month',     enableCellEdit : false  };

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


    // Chart.defaults.global.defaultFontColor = 'white';
    Chart.defaults.global.defaultFontSize = 14;

    let canvas = document.getElementById('myChart');
    let ctx = canvas.getContext('2d');

    let config = {};
    config.options = {};
    // config.options = Globals.ChartLineOptions;

    config.type = 'line';
    config.data = {};
    config.data.labels = [];
    config.data.labels = ["January", "February", "March", "April", "May", "June", "July"];
    config.data.datasets = [];
    config.data.datasets[0] = [];
    config.data.datasets[1] = [];

    config.data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40];
    config.data.datasets[1].data = [40, 55, 30, 47, 63, 35, 20];
    config.data.datasets[0].label= "My First dataset";
    config.data.datasets[1].label= "My Second dataset";
    config.data.datasets[0].fill = true;
    config.data.datasets[1].fill = true;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodDayColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsAdminDays();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodDayColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsByRetailerDays();
    }

    function ListVisitsReportsAdminDays() {
      vm.dataLoading = true;
      let visitChart    = new VisitChart();
      DataFactory.listVisitsReportsAdminDays()
        .then( function(response) {
            // extract collections
            let visitCharts    = Common.createObjects(response.data, visitChart);

            let xAxes = [{
              display : true,
              scaleLabel : {
                display : true,
                labelString : 'Daily'
              }
            }];

            config.options = Globals.ChartLineOptions;
            config.options.scales.xAxes = xAxes;

            config.options.title.text = "Visits per Day for Last 12 Days Per Retailer";
            config.data.labels = visitCharts[0].xlabels;

            visitCharts.forEach(  function (visitChart, key) {
              config.data.datasets[key] = [];
              config.data.datasets[key].data = visitChart.getCounts();
              config.data.datasets[key].label = visitChart.getStoreName();
            });
            let myLineChart = new Chart(ctx,config);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByRetailerDays(id) {
      vm.dataLoading = true;
      let visit    = new Visit();

      DataFactory.listVisitsReportsByRetailerDays(id)
        .then( function(response) {
            // extract collections
            let visits    = Common.createObjects(response.data, visit);
            // create augmented visits entities for display
            visits.forEach(  function (visit, key) {
            });
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);


myApp.controller('VisitsReportWeeksController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope, Globals) {
    let vm = this;
    $scope.vm = vm;
    // let retailerColDef    = { field : 'storeName',width : 200,    displayName : 'Store Name',enableCellEdit : false  };
    // let countColumnWithAvg= { name  : 'avgCount', field: 'count', width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Count' };
    // let dateColDef        = { field : 'storeName',width : 200,    displayName : 'Store Name',enableCellEdit : false  };
    // let periodDayColDef   = { field : 'day',      width : 200,    displayName : 'Day',       enableCellEdit : false  };
    // let periodWeekColDef  = { field : 'week',     width : 200,    displayName : 'Week',      enableCellEdit : false  };
    // let periodMonthColDef = { field : 'month',    width : 200,    displayName : 'Month',     enableCellEdit : false  };

    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsAdminWeeks();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodWeekColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsByRetailerWeeks();
    }

    // vm.editRow = RowEditor.editRowVisit;
    // vm.serviceGrid = Common.setupUiGrid(Globals.VisitColumnDefs, $scope.allowEditRow )
    // let durationColWithAvg = {  name: 'avgRating', field: 'duration',  width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Duration' };
    // vm.serviceGrid.columnDefs.splice(3, 0, durationColWithAvg);

    function ListVisitsReportsAdminWeeks() {
      vm.dataLoading = true;
      let visit    = new Visit();
      DataFactory.listVisitsReportsAdminWeeks()
        .then( function(response) {
            // extract collections
            let visits    = Common.createObjects(response.data, visit);

            // create augmented visits entities for display
            visits.forEach(  function (visit, key) {
              let userid = visit.getUserid();
              let zoneid = visit.getZoneid();

              visit.fullname = Common.findUsersName(userid);
              // note retailerid === zoneid
              visit.storeName = Common.findStoreName(zoneid);

              visits[key] = visit;
            });

            // $scope.visits = visits;
            // vm.serviceGrid.data = visits;
            // $scope.gridStyle = Common.gridStyle(visits.length);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByRetailerWeeks(id) {
      vm.dataLoading = true;
      let visit    = new Visit();

      DataFactory.listVisitsReportsByRetailerWeeks(id)
        .then( function(response) {
            // extract collections
            let visits    = Common.createObjects(response.data, visit);

            // create augmented visits entities for display
            visits.forEach(  function (visit, key) {
              let userid = visit.getUserid();
              let zoneid = visit.getZoneid();

              visit.fullname = Common.findUsersName(userid);
              // note retailerid === zoneid
              visit.storeName = Common.findStoreName(zoneid);
              visits[key] = visit;
            });

            // $scope.visits = visits;
            // vm.serviceGrid.data = visits;
            // $scope.gridStyle = Common.gridStyle(visits.length);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);

myApp.controller('VisitsReportMonthsController', ['DataFactory','$scope','Common','$rootScope','Globals',
  function ( DataFactory,$scope,Common,$rootScope, Globals) {
    let vm = this;
    $scope.vm = vm;
    // let retailerColDef    = { field : 'storeName',width : 200,    displayName : 'Store Name',enableCellEdit : false  };
    // let countColumnWithAvg= { name  : 'avgCount', field: 'count', width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Count' };
    // let dateColDef        = { field : 'storeName', width : 200,   displayName : 'Store Name',enableCellEdit : false  };
    // let periodDayColDef   = { field : 'day',      width : 200,    displayName : 'Day',       enableCellEdit : false  };
    // let periodWeekColDef  = { field : 'week',     width : 200,    displayName : 'Week',      enableCellEdit : false  };
    // let periodMonthColDef = { field : 'month',    width : 200,    displayName : 'Month',     enableCellEdit : false  };

    if ($rootScope.isAdmin) {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodMonthColDef, dateColDef, retailerColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsAdminMonths();
    } else {
      $scope.allowAddRow  = false; //  view is affected
      $scope.allowEditRow = false; // action below
      // vm.serviceGrid      = Common.setupUiGrid({periodMonthColDef, dateColDef, countColumnWithAvg}, $scope.allowEditRow )
      ListVisitsReportsByRetailerMonths();
    }

    // vm.editRow = RowEditor.editRowVisit;
    // vm.serviceGrid = Common.setupUiGrid(Globals.VisitColumnDefs, $scope.allowEditRow )
    // let durationColWithAvg = {  name: 'avgRating', field: 'duration',  width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Duration' };
    // vm.serviceGrid.columnDefs.splice(3, 0, durationColWithAvg);

    function ListVisitsReportsAdminMonths() {
      vm.dataLoading = true;
      let visit    = new Visit();
      DataFactory.listVisitsReportsAdminMonths()
        .then( function(response) {
            // extract collections
            let visits    = Common.createObjects(response.data, visit);

            // create augmented visits entities for display
            visits.forEach(  function (visit, key) {
              let userid = visit.getUserid();
              let zoneid = visit.getZoneid();

              visit.fullname = Common.findUsersName(userid);
              // note retailerid === zoneid
              visit.storeName = Common.findStoreName(zoneid);

              visits[key] = visit;
            });

            // $scope.visits = visits;
            // vm.serviceGrid.data = visits;
            // $scope.gridStyle = Common.gridStyle(visits.length);

          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function ListVisitsReportsByRetailerMonths(id) {
      vm.dataLoading = true;
      let visit    = new Visit();

      DataFactory.listVisitsReportsByRetailerMonths(id)
        .then( function(response) {
            // extract collections
            let visits    = Common.createObjects(response.data, visit);

            // create augmented visits entities for display
            visits.forEach(  function (visit, key) {
              let userid = visit.getUserid();
              let zoneid = visit.getZoneid();

              visit.fullname = Common.findUsersName(userid);
              // note retailerid === zoneid
              visit.storeName = Common.findStoreName(zoneid);
              visits[key] = visit;
            });

            // $scope.visits = visits;
            // vm.serviceGrid.data = visits;
            // $scope.gridStyle = Common.gridStyle(visits.length);
          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
