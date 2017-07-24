/**
 * Created by oisin 07/05/2017.
 */

myApp.factory('Common',[ '$rootScope',  function ($rootScope) {

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
  lib.createObjects = function (data, dataType) {
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


  /**
   * Add 'ies' to any word passed ending in y
   * add 's' to any other word
   */
  lib.plural = function (word) {
    let len = word.length;
    if (word[ len - 1 ] === 'y') {
      let pre = word.slice(0, len - 1);
      word    = pre + "ies";
    } else
      word += "s";

    return word;
  };

  /**
   * Take a word and return the same word with the first word in lower case.
   * ie Accounts -> accounts
   */

  lib.lowerCaseFirstLetter = function (str) {
    // get classname as a string
    // pluck out the first character
    //return a lower case version of the classname
    //let text     = str.constructor.name;
    let char = str[ 0 ].toLowerCase();
    return char + str.slice(1);
  };

  lib.setUserAuthenticated = (value) => $rootScope.userIsAuthenticated = value;

  lib.getUserAuthenticated = () => $rootScope.userIsAuthenticated;

  /**
   *
   * @param table body
   * @param col to sort
   * @param ascending or descending
   */

  // lib.sort_table = (tbody, col, asc) => {
  //   let rows = tbody.rows,
  //       rlen = rows.length,
  //       arr  = new Array(),
  //       i, j, cells, clen;
  //   // fill the array with values from the table
  //   for (i = 0; i < rlen; i++) {
  //     cells    = rows[ i ].cells;
  //     clen     = cells.length;
  //     arr[ i ] = new Array();
  //     for (j = 0; j < clen; j++) {
  //       arr[ i ][ j ] = cells[ j ].innerHTML;
  //     }
  //   }
    // sort the array by the specified column number (col) and order (asc)
  //   arr.sort(function (a, b) {
  //     return (a[ col ] == b[ col ]) ? 0 : ((a[ col ] > b[ col ]) ? asc : -1 * asc);
  //   });
  //   // replace existing rows with new rows created from the sorted array
  //   for (i = 0; i < rlen; i++) {
  //     rows[ i ].innerHTML = "<td>" + arr[ i ].join("</td><td>") + "</td>";
  //   }
  // };

  /**
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


  /**
   * These methods change the state of the attributes which control the navbar
   */

  lib.selectTab   = setTab   => $rootScope.tab = setTab;
  lib.isSelected  = checkTab => $rootScope.tab === checkTab;

  lib.isAdmin     = ()       => $rootScope.admin;
  lib.isCust      = ()       => !$rootScope.admin;
  lib.isLoggedIn  = ()       => $rootScope.loggedIn;
  lib.setLoggedIn = state    => $rootScope.loggedIn = state;
  lib.setAdmin    = state    => $rootScope.admin    = state;
  lib.setCust     = state    => $rootScope.cust     = state;


  lib.reloadJs = (src) =>  {
    src = $('script[src$="' + src + '"]').attr("src");
    $('script[src$="' + src + '"]').remove();
    $('<script/>').attr('src', src).appendTo('body');
  };


  return lib;

}]);
