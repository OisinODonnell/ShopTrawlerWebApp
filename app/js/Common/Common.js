myApp.factory('Common',[ '$rootScope','Globals',  function ($rootScope, Globals) {

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

  lib.isAdmin     = ()       => $rootScope.admin;
  lib.isRetailer  = ()       => !$rootScope.admin;
  lib.isLoggedIn  = ()       => $rootScope.loggedIn;
  lib.setLoggedIn = state    => $rootScope.loggedIn = state;
  lib.setAdmin    = state    => $rootScope.admin    = state;
  lib.setRetailer = state    => $rootScope.retailer     = state;


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

  lib.changeToAddRow = () =>{
    let doc = $(this);
    let x = doc.getElementsByClassName("modal-title");  // Find the element
    x.innerHTML="Add Row";
    // let x = $(".modal-title").text;

  };

  return lib;

}]);
