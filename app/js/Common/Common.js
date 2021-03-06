myApp.factory('Common',[ '$rootScope','Globals','moment','AWSconfig',  function ($rootScope, Globals, moment, AWSconfig) {
  $rootScope.sizeLimit      = 10585760; // 10MB in Bytes

  let lib = {};

  /**=======================================================================================
   * createObjects()
   *
   * @param data : object to create a class entity from
   * @param dataType : the class to create
   * @returns {Array} : an array of new class objects of type === dataType
   *
   * Rather than take each object and pick out each property, the proto of datatype is copied
   * to the new object received from rest
   * This effectively makes it a new 'dataType' object.
   *
   * This is used to take any entity in.
   * One caveat, the programmer must  ensure the correct dataTYoe is passed
   */
  lib.createObjects = (data, dataType) => {
    let objects = [];
    let obj     = {};

    if (data.constructor === Array) {
      for (let a = 0; a < data.length; a++) {
        // copy instance of dataType to obj
        // make obj class the same as dataType
        // add to array
        obj = data[a];
        if (obj.startDate) {
          obj.startDate = new Date(obj.startDate);
        }
        if (obj.endDate) {
          obj.endDate = new Date(obj.endDate);
        }
        obj.__proto__ = dataType.__proto__;
        objects.push(obj);
      }
    } else {
      obj = data;
      obj.__proto__ = dataType.__proto__;
      objects.push(obj);
    }
    return objects;
  };

  lib.setUserAuthenticated = (value) => $rootScope.userIsAuthenticated = value;

  lib.getUserAuthenticated = ()      => $rootScope.userIsAuthenticated;

  /**=======================================================================================
   * Get average rating for stock item
   * @param $scope
   *
   * Iterate through each stock item,
   *   loop through each review
   *   sum the rating values
   *   get average rating
   *   return rating rounded to one decimal,
   *   ie 3.664 => 3.7
   */
  lib.updateRatings   = ($scope) => {
    "use strict";

    for (let i = 0; i < $scope.stockItems.length; i++) {
      if ($scope.stockItems[ i ].stockReviews.length > 0) {
        let qty         = $scope.stockItems[ i ].stockReviews.length;
        let reviews     = $scope.stockItems[ i ].stockReviews;
        let ratingCount = 0;
        for (let i = 0; i < reviews.length; i++) {
          let rating = reviews[ i ].rating;
          ratingCount += parseInt(rating);
        }
        let newRating                 = ratingCount / qty;
        $scope.stockItems[ i ].rating = Math.round(newRating * 10) / 10;
      }
    }
};

  /**=======================================================================================
   * These methods change the state of the attributes which control the navbar
   */

  lib.selectTab       = setTab   => $rootScope.tab = setTab;
  lib.isSelected      = checkTab => $rootScope.tab === checkTab;

  // lib.isAdmin     = ()       => $rootScope.admin;
  // lib.isRetailer  = ()       => !$rootScope.admin;
  lib.isLoggedIn      = ()       => $rootScope.loggedIn;
  lib.setLoggedIn     = state    => $rootScope.loggedIn = state;
  lib.setAdmin        = state    => $rootScope.isAdmin    = state;
  lib.setRetailer     = state    => $rootScope.isRetailer     = state;

  lib.reloadJs        = (src)    =>  {
    src = $('script[src$="' + src + '"]').attr("src");
    $('script[src$="' + src + '"]').remove();
    $('<script/>').attr('src', src).appendTo('body');
  };

  /**=======================================================================================
   * Take the mySql timestamp and change into a human readable date string
   * @param date
   * @returns {string}
   */
  lib.getReadableDate = (date)   => {
    let newDate = "";
    let parts = date.split(" ");
    let dateBits = parts[0].split("-");
    let timeBits = parts[1].split(":");
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December' ];

    let month = monthNames[dateBits[1]];
    let year = dateBits[0];
    let day = dateBits[2];

    let hour = timeBits[0];
    let minute = timeBits[1];
    let period = "am";
    if (hour >= 12) {
      period = "pm";
      hour = hour - 12;
    }

    newDate = hour + ":" + minute + period + " " + month + " " + day + ", " + year;

    return newDate;
  };
  /**=======================================================================================
   * Using the userid , serach for user in db, return users full name
   * @param id (userid)
   * @returns {String} or ""
   */
  lib.findUsersName   = (id)     => {
    if (id == undefined) return "";

    let user = new User();
    $rootScope.users.some(function (u) {
      if (u.userid === id) {
        user = u;
        return true
      }
    });
    return user.firstname + " " + user.surname;
  };

  /**=======================================================================================
   * using retailerid search through db, if found, return storename.
   * @param id (retailerid)
   * @returns {storeName} or ""
   */
  lib.findStoreName   = (id)     => {
    if (id == undefined) return "";

    let retailer = new Retailer();
    $rootScope.retailers.some(function (r) {
      if (r.retailerid === id) {
        retailer = r;
        return true;
      }
    });
    return retailer.storeName;
  };

  /**=======================================================================================
   *  Calculate size of grid in pixels to display
   *  if the rows < 10 then change the grid dynamically in size
   *  based on rows *
   *  This augments the gridStyle for the uiGrids
   *
   * @param rows ... number of rows returned from db.
   * @param extraRows ... (4) Allowing for the header and footer of the table
   * @param pixels ... pixels per row ~(usually 30)
   * @returns (String)  Style to be applied
   */
  lib.gridStyle       = (rows)   => {
    let extraRows = Globals.extraRows;
    let pixels = Globals.rowHeightPixels;
    let size = 420; // default size of grid when rows >= 10
    if (rows < 10)  size = (rows + extraRows) * pixels;
    let style = Globals.gridStyle + " Height: " + size + "px;";
    return style;
  };
  // attempt to change value of 'Edit Row' to 'Add Row' ... missing something to complete this.
  lib.changeToAddRow  = ()       =>{
    let doc = $(this);
    let x = doc.getElementsByClassName("modal-title");  // Find the element
    x.innerHTML="Add Row";
    // let x = $(".modal-title").text;

  };

  // setup the UI Grid passing in the entity column defs and whether the user is admin or a retailer
  lib.setupUiGrid     = (EntityColumnDefs, authorised) => {

    let serviceGrid = Globals.GridDefaults;
    serviceGrid.columnDefs = EntityColumnDefs;
    // Get height of grid to create ... although I can get the height it should be at, the grid does not respond yet.
    let height = (Globals.extraRows + Globals.GridDefaults.minRowsToShow) * Globals.GridDefaults.rowHeight;
    Globals.gridStyle = "{Width:1200; Height:" + height + "px;}";
    $rootScope.gridStyle = Globals.gridStyle;

    if (authorised) {
      // allow this entity to be edited by double clicking the row
      serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    } else {
      serviceGrid.rowTemplate = "";
    }
    return serviceGrid;
  };

  /**=======================================================================================
   * Accepts
   * @param visitCharts
   * @param footer Text to appear below xLabels
   * @param header Test to appear above Legend
   * @param chartType  line, bar or pie
   * @param ctx ... where our convas object is
   * @returns {Chart} the data to be displayed
   */
  lib.buildChart      = (visitCharts, chartConfig ) => {
    let bgColours = Globals.BackgroundChartColours;
    let borderColours = Globals.BorderChartColours;
    let config = {};

    // ChartJS uses an object with key / value pairs to configure the chart.
    // in order to make a change to eg 'config.options.title.text = header';
    // config.options and config.options.title must be initialised first before the header can be set
    // ie config.options = {}; and config.options.title = {};
    config.type = chartConfig.type;

    if (config.type === 'line') {

    }


    let xAxes = [{
      display : true,
      scaleLabel : {
        display : true,
        fontSize : 40,
        labelString : chartConfig.footer
      }
    }];

    // bring in a standard set of options first
    config.options = Globals.ChartLineOptions;
    // add context specif stuff hereafter
    config.options.scales.xAxes = xAxes; // footer set above
    config.options.title.fontSize = 40;
    config.options.title.text = chartConfig.header;

    config.data = {};
    config.data.labels = visitCharts[0].xlabels;

    config.data.datasets = [];

    visitCharts.forEach(  function (visitChart, key) {

      config.data.datasets[key] = [];

      // line config
      config.data.datasets[key].pointRadius = 7;
      config.data.datasets[key].pointStyle = 'circle';

      config.data.datasets[key].data = visitChart.getCounts();
      config.data.datasets[key].label = visitChart.getStoreName();
      config.data.datasets[key].fill = true;
      config.data.datasets[key].backgroundColor = bgColours[key];

      config.data.datasets[key].borderColor = borderColours[key];
      if (chartConfig.type === "pie" || chartConfig.type === "doughnut" || chartConfig.type === "bar") {
        config.data.datasets[key].backgroundColor = chartConfig.options.backgroundColor;
      }
    });

    $rootScope.myNewChart = new Chart($rootScope.ctx, config);
    $rootScope.ctx.fillText('This text is centered on the canvas', 300, 220);
  };

  /**=======================================================================================
   * When running reports, its important to know which retailer the user is assocaited with
   * this method usesnthe userid after login and seaches the retailers for a managerid = userid
   * @type {number|string|*}
   */
  lib.getRetaileridFromUserid = (userid, retailers) => {
    let id = 0;
    retailers.some( function(retailer){

      if (retailer.managerid == userid)
        id = retailer.retailerid;

    });
    return id;
  };

  /**=======================================================================================
   * Method to place 4 control variable into rootScope which will be used to
   * control the entry of dates in loyalty rewards and content entities
   * @param sDate (start date in entity in Javascript Date() format)
   * @param eDate (end date in entity in Javascript Date() format)
   */
  lib.setMinMaxDates = (sDate, eDate) => {
    // initialise control variables

    $rootScope.minEndDate = new Date();
    $rootScope.maxStartDate = new Date();
    $rootScope.MaxEndDate = new Date();

    let today = new moment();
    let tomorrow = new moment(today.add(1,'day'));
    let minStartDate = today;

    let minEndDate = tomorrow;
    let maxEndDate = moment(today.add(6,'month'));

    $rootScope.minStartDate = new Date (); // todays date
    $rootScope.minEndDate = new Date (minEndDate);
    $rootScope.maxEndDate = new Date (maxEndDate);

  };

  lib.destroy        = (charts, canvasid, config, ctx) => {
    charts[canvasid].destroy();
    $('#' + canvisid).remove();
    $(this).append('<canvas id="' + canvasid + '"></canvas>');
    charts[canvasid] = new Chart($("#" + canvasid), config);
  };

  lib.setDatesAndIDs = (entity)    => {

    let today = moment(new Date());
    let tomorrow = moment(new Date()).add(1,'day');
    let endDate = moment(new Date()).add(6,'month');

    entity.sDate = {};
    entity.eDate = {};
    entity.sDate = new Date(entity.startDate);
    entity.eDate = new Date(entity.endDate);



    // fix invalid dates before we start.
    // startdate cant be less that today
    // endate cant be less than tomorrow
    // nor greater than 6months from now

    if (entity.sDate < new Date(today)) {
      entity.sDate = new Date(today);
    }
    if (entity.eDate < new Date(tomorrow)) {
      entity.eDate = new Date(tomorrow);
    }

    entity.minStartDate = new Date ( today );
    entity.minEndDate = new Date (tomorrow);
    entity.maxEndDate = new Date (endDate);

    if (entity.retailerid) { // check if this id exists
      entity.storeName = "";
      entity.storeName = lib.findStoreName(entity.retailerid);
    }

    if (entity.userid) { // check if this id exists
      entity.fullname = "";
      entity.fullname = lib.findUsersName(entity.userid);
    }

    return entity;
  };

  lib.uniqueString   = ()          => {
    let text     = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( let i=0; i < 8; i++ ) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  lib.getRetailerid  = (id)        => {
    let retailerid = 0;
    angular.forEach($rootScope.retailers, function(value,key) {
      if (value.managerid === id) {
        retailerid = value.retailerid;
      }
    });
    return retailerid;
  };

  lib.checkDates     = (sDate, eDate) => {

    let msDate = new moment(sDate);
    let meDate = new moment(eDate);


    let today = new moment(new Date());
    let sixMonths = new moment(today.add(6, 'month'));
    today = new moment(new Date());
    let tomorrow = new moment(today.add(1,'day'));
    today = new moment(new Date());

    let sDatePlusOne = new moment(msDate.add(1,'day'));
    msDate = new moment(sDate);

    console.log("StartDate -> " + msDate.format());
    console.log("EndDate -> " + meDate.format());
    console.log("Today -> " + today.format());
    console.log("6m from Today -> " + sixMonths.format());

    if (moment(msDate).isBefore(today, 'day')) {
      return "StartDate cannot be less than todays date";
    }

    if (moment(sDatePlusOne).isAfter(meDate, 'day')){
      return "StartDate cannot greater than or equal to EndDate";
    }
    if (moment(meDate).isAfter(sixMonths, 'day')) {
      return "EndDate cannot be more than 6 Months away (ie > " + sixMonths.format + ")";
    }
    return true;

  };

  lib.resetCanvas    = ()          => {

    // if ($rootScope.canvas === {}) {
    $('#myChart').remove(); // this is my <canvas> element
    $('#canvas-container').append('<canvas id="myChart" align="center" width="600" height="400"></canvas>');
    $rootScope.canvas = document.getElementById('myChart')
    // $rootScope.canvas = document.querySelector('#myChart');
    $rootScope.ctx = $rootScope.canvas.getContext('2d');
    $rootScope.ctx.canvas.width = $('#myChart').width(); // resize to parent width
    $rootScope.ctx.canvas.height = $('#myChart').height(); // resize to parent height

    // $rootScope.canvas = document.getElementById('myChart');
    // $rootScope.ctx = $rootScope.canvas.getContext('2d');

    let x = $rootScope.canvas.width / 2;
    let y = $rootScope.canvas.height / 2;
    $rootScope.ctx.font = '10pt Verdana';
    $rootScope.ctx.textAlign = 'center';
    $rootScope.ctx.fillText('This text is centered on the canvas from resetCanvas', x, y);


  };

  lib.checkFileSize  = (file)      => {
    let fileSize = Math.round(parseInt(file.size));
    return (fileSize <= $rootScope.sizeLimit)
  };

  lib.fileSizeLabel  = ()          => {
    // Convert Bytes To MB
    return Math.round($scope.sizeLimit / 1024 / 1024) + 'MB';
  };

  lib.updateGrid     = (grid, row) => {

    switch (row.field) {
      case 'page1': // from Content
        grid.entity.page1 = $rootScope.entry;
        break;
      case 'page2': // from Content
        grid.entity.page2 = $rootScope.entry;
        break;
      case 'page3': // from Content
        grid.entity.page3 = $rootScope.entry;
        break;
      case 'rewardImage': // from Loyalty Reward
        grid.entity.rewardImage = $rootScope.entry;
        break;
      case 'defaultContentPage1': // from Retailer
        grid.entity.defaultContentPage1 = $rootScope.entry;
        break;
      case 'defaultContentPage2': // from Retailer
        grid.entity.defaultContentPage2 = $rootScope.entry;
        break;
      case 'defaultContentPage3': // from Retailer
        grid.entity.defaultContentPage3 = $rootScope.entry;
        break;
      case 'defaultLoyaltyImage': // from Retailer
        grid.entity.defaultLoyaltyImage = $rootScope.entry;
        break;
      case 'logoImageSmall': // from Retailer and ShoppingCenter
        grid.entity.logoImageSmall = $rootScope.entry;
        break;
      case 'logoImageMedium': // from Retailer and ShoppingCenter
        grid.entity.logoImageMedium = $rootScope.entry;
        break;
      case 'logoImageLarge': // from Retailer and ShoppingCenter
        grid.entity.logoImageLarge = $rootScope.entry;
        break;
      case 'headerBackgroundImage': // from Retailer
        grid.entity.headerBackgroundImage = $rootScope.entry;
        break;
      case 'contentPage': // from ShoppingCenter
        grid.entity.contentPage = $rootScope.entry;
        break;
    }
  };

  return lib;

}]);
