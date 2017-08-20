myApp.factory('Common',[ '$rootScope','Globals','moment',  function ($rootScope, Globals, moment) {

  let lib = {};

  /**
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

    for (let a = 0; a < data.length; a++) {
      // copy instance of dataType to obj
      // make obj class the same as dataType
      // add to array
      obj           = data[ a ];
      obj.__proto__ = dataType.__proto__;
      objects.push(obj);
    }
    return objects;
  };


  /*******************************************************
   * Add 'ies' to any word passed ending in y
   * add 's' to any other word
   */
  lib.plural = (word) => {
    let len = word.length;
    if (word[ len - 1 ] === 'y') {
      let pre = word.slice(0, len - 1);
      word    = pre + "ies";
    } else
      word += "s";

    return word;
  };

  /********************************************************
   * Take a word and return the same word with the first word in lower case.
   * ie Accounts -> accounts
   */

  lib.lowerCaseFirstLetter = (str) => {
    // get classname as a string
    // pluck out the first character
    //return a lower case version of the classname
    //let text     = str.constructor.name;
    let char = str[ 0 ].toLowerCase();
    return char + str.slice(1);
  };

  lib.setUserAuthenticated = (value) => $rootScope.userIsAuthenticated = value;

  lib.getUserAuthenticated = () => $rootScope.userIsAuthenticated;

  /************************************************************
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
  lib.updateRatings = ($scope) => {
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


  /*****************************************************************************
   * These methods change the state of the attributes which control the navbar
   */

  lib.selectTab   = setTab   => $rootScope.tab = setTab;
  lib.isSelected  = checkTab => $rootScope.tab === checkTab;

  // lib.isAdmin     = ()       => $rootScope.admin;
  // lib.isRetailer  = ()       => !$rootScope.admin;
  lib.isLoggedIn  = ()       => $rootScope.loggedIn;
  lib.setLoggedIn = state    => $rootScope.loggedIn = state;
  lib.setAdmin    = state    => $rootScope.isAdmin    = state;
  lib.setRetailer = state    => $rootScope.isRetailer     = state;


  lib.reloadJs = (src) =>  {
    src = $('script[src$="' + src + '"]').attr("src");
    $('script[src$="' + src + '"]').remove();
    $('<script/>').attr('src', src).appendTo('body');
  };

  /************************************************************************
   * Take the mySql timestamp and change into a human readable date string
   * @param date
   * @returns {string}
   */
  lib.getReadableDate = (date) => {
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
  /*****************************************************************
   * Using the userid , serach for user in db, return users full name
   * @param id (userid)
   * @returns {String} or ""
   */
  lib.findUsersName = (id) => {
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

  /**
   * using retailerid search through db, if found, return storename.
   * @param id (retailerid)
   * @returns {storeName} or ""
   */
  lib.findStoreName = (id) => {
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

  /**************************************************
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
  lib.gridStyle = (rows) => {
    let extraRows = Globals.extraRows;
    let pixels = Globals.rowHeightPixels;
    let size = 420; // default size of grid when rows >= 10
    if (rows < 10)  size = (rows + extraRows) * pixels;
    let style = Globals.gridStyle + " Height: " + size + "px;";
    return style;
  };
  // attempt to change value of 'Edit Row' to 'Add Row' ... missing something to complete this.
  lib.changeToAddRow = () =>{
    let doc = $(this);
    let x = doc.getElementsByClassName("modal-title");  // Find the element
    x.innerHTML="Add Row";
    // let x = $(".modal-title").text;

  };

  // setup the UI Grid passing in the entity column defs and whether the user is admin or a retailer
  lib.setupUiGrid = (EntityColumnDefs, authorised) => {

    let serviceGrid = Globals.GridDefaults;
    serviceGrid.columnDefs = EntityColumnDefs;
    // Get height of grid to create ... although I can get the height it should be at, the grid does not respond yet.
    let height = (Globals.extraRows + Globals.GridDefaults.minRowsToShow) * Globals.GridDefaults.rowHeight;
    Globals.gridStyle = "{Width:1000px; Height:" + height + "px;}";
    $rootScope.gridStyle = Globals.gridStyle;

    if (authorised) {
      // allow this entity to be edited by double clicking the row
      serviceGrid.rowTemplate = "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    } else {
      serviceGrid.rowTemplate = "";
    }
    return serviceGrid;
  };

  /**
   *
   * @param visitCharts
   * @param footer Text to appear below xLabels
   * @param header Test to appear above Legend
   * @param chartType  line, bar or pie
   * @param ctx ... where our convas object is
   * @returns {Array.<Number>|String|Array} the data to be displayed
   */
  lib.buildChart = (visitCharts, chartConfig, ctx ) => {

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
    config.data.labels = visitCharts[0].xlabels;

    config.data.datasets = [];

    visitCharts.forEach(  function (visitChart, key) {
      config.data.datasets[key] = [];
      config.data.datasets[key].data = visitChart.getCounts();
      config.data.datasets[key].label = visitChart.getStoreName();
      config.data.datasets[key].fill = true;
      config.data.datasets[key].backgroundColor = bgColours[key];
      config.data.datasets[key].borderColor = borderColours[key];
      if (chartConfig.type === "pie" || chartConfig.type === "doughnut" || chartConfig.type === "bar") {
        config.data.datasets[key].backgroundColor = chartConfig.options.backgroundColor;
      }

    });

    $rootScope.myChart = new Chart(ctx, config);
    return new Chart(ctx, config);

  };

  /**
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

  return lib;

}]);
