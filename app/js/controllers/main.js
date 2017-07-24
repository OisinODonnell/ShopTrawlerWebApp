var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

  $routeProvider
    .when('/', {
    controller: 'StartupController',
    templateUrl: 'index.html'

    })
    .when('/Accounts', {
      controller: 'AccountController',
      templateUrl: 'accounts.jsp'

    })
    .otherwise({ redirectTo: '/' });
 }]);

myApp.controller('StartupController', ['$scope', 'dataFactory', function ($scope, dataFactory) {
  $scope.status = "First Message";

  // place holders for data from entities
  $scope.accounts       = {};
  $scope.manufacturers  = {};
  $scope.itemCategories = {};
  $scope.carts          = {};
  $scope.cartItems      = {};
  $scope.orders         = {};
  $scope.orderItems     = {};
  $scope.stockItems     = {};
  $scope.stockReviews   = {};
  $scope.sessions       = {};

  // functions to get all details from entities
  // getAll(new Account, dataFactory);
  // getAll(new Manufacturer, dataFactory);
  // getAll(new ItemCategory, dataFactory);
  // getAll(new Order, dataFactory);
  // getAll(new OrderItem, dataFactory);
  // getAll(new Cart, dataFactory);
  // getAll(new CartItem, dataFactory);
  // getAll(new StockItem, dataFactory);
  // getAll(new StockReview, dataFactory);
  getAll(new Session, dataFactory);

    /**
   * getAllAccounts()
   *
   * This was the first attempt to retrieve data from REST.
   * This was then used to develeop a generic call to the factory objects
   *
   * @param data
   * @param dataType
   * @returns {Array}
   */
  // function getAllAccounts() {
  //   let account = new Account();
  //   dataFactory.getAccounts()
  //     .then( function(response) {
  //
  //       $scope.accounts = createObjects(response.data, account);
  //       account = new Account();
  //     },
  //     function (error) {
  //       $scope.status = 'Unable to load accounts data ' + error.message;
  //     });
  // }


  /**
   * getAll()
   *
   * This is a generic function to call the correct factory for retrieving all objects for a particular entity
   * eg Account, Order, Cart etc.
   *
   * @param object
   * @param dataFactory
   */
  function getAll(object, dataFactory) {

    var className = object.constructor.name;
    var fname     = "get" + plural(className); // add on s or ies
    var func      = dataFactory[ fname ];

    func.call()
      .then( function(response) {
          let obj     = new object.constructor();
          let objString     = obj.constructor.name;
          // let account = new Account();

          // only one entity has a compound change for singular to plural
          objString = plural(objString);
          objString = lowerCaseFirstLetter(objString);

          $scope[objString] = createObjects(response.data, obj);
        },
        function (error) {
          $scope.status = 'Unable to load accounts data ' + error.message;

        });

  }
  /**
   * createObjects()
   *
   * @param data : object to create a class entity from
   * @param dataType : the class to create
   * @returns {Array} : an array of new class objects of typoe === dataType
   *
   * Rather than take each object and pick out each property, the proto of datatype is copied
   * to the new object received from rest
   * This effectively makes it a newe 'dataType object.
   *
   * This is used to take any entity in.
   * One caveat, the programmer must  ensure the correct dataTYoe is passed
   */
  function createObjects( data , dataType) {
    let objects = [];
    let obj = {};

    for (let a = 0; a < data.length; a++) {
      // copy instance of dataType to obj
      // make obj class the same as dataType
      // add to array
      obj = data[a];
      obj.__proto__ = dataType.__proto__;
      objects.push(obj);
    }
    return objects;
  }


  /**
   * Add 'ies' to any word passed ending in y
   * add 's' to any other word
   */
    function plural(word) {
      let len = word.length;
      if (word[len-1] === 'y') {
          let pre = word.slice(0,len-1);
          word = pre + "ies";
      } else
        word += "s";

      return word;
    }

  /**
   * Take a word and return the same word with the first word in lower case.
   * ie Accounts -> accounts
   *
   * @param str
   * @returns {string}
   */

  function lowerCaseFirstLetter(str) {
    // get classname as a string
    // pluck out the first character
    //return a lower case version of the classname
    //let text     = str.constructor.name;
    let char     = str[0].toLowerCase();
    let newStr = char + str.slice(1);
    return newStr;
  }

}]);











