/*
TODO: Add Delete, Edit and Create Elements for each entity.
      Not needed for every entity (CRUD) A=Admin R=Retailer G=Generate /=done S=summary Reports x = no operation required

      BonusCode     A-x       R-R/UG
      Beacon        A-R/      R-x/
      Content       A-U       R-R/CU
      LoyaltyReward A-U       R-R/CU
      UserPoint     A-x/      R-R/
      User          A-R/UD    R-U
      Retailer      A-R/CUD   R-U
      Rating        A-R/      R-R/S
      Zone          A-R/      R-x/
      Favourite     A-x/      R-R/
      ShoppingCentres A-R/U   R-x/
      Visit         A-R/      R-R/S
      Location      A-R/      R-x/

TODO_ : Change margins of table to fit in centre but not to either edge of screen
      Layout changed to use a table rather than bootstrap screen layout.

TODO

 */

let myApp =  angular.module('app', ['ngRoute','ngCookies','ngFlash', 'ngTouch', 'ngAnimate', 'ui.grid', 'ui.grid.moveColumns',
                                    'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit', 'ui.grid.pagination'])

  .config(config)
    .run(run);

  config.$inject = ['$routeProvider','FlashProvider'];
    function config($routeProvider,FlashProvider) {

      FlashProvider.setTimeout(2000);
      FlashProvider.setShowClose(true);

      // setup routes for application
      $routeProvider

        .when('/', {
          controller  : 'LoginController',templateUrl :  'js/login/login.view.html',
          controllerAs: 'vm',             requireLogin: false
        })
        .when('/login', {
          controller  : 'LoginController',templateUrl :  'js/login/login.view.html',
          controllerAs: 'vm',             requireLogin: false
        })
        .when('/register', {
          controller  : 'LoginController',templateUrl :  'js/login/register.view.html',
          controllerAs: 'vm',             requireLogin: false
        })
        .when('/home', {
          controller  : 'HomeController', templateUrl :  'js/login/home.view.html',
          controllerAs: 'vm',             requireLogin: true
        })
        .when('/logout', {
          controller:  'HomeController',  templateUrl : 'js/login/home.view.html',
          controllerAs: 'vm',             redirectTo  : '/login',          requireLogin: true
        })
        //  ShoppingCentre
        .when('/ShoppingCentres/List',{controller: 'ShoppingCentresController',templateUrl: 'js/List.view.html', controllerAs: 'ac' })
          // Users
        .when('/Users/List', {         controller: 'UsersController',     templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        .when('/Users/Retailer', {     controller: 'UsersController',     templateUrl: 'js/List.view.html',controllerAs: 'ac' })
      .when('/Users/Approve', {      controller: 'UsersController',     templateUrl: 'js/Approve.User.view.html',controllerAs: 'ac' })
          // Retailers
        .when('/Retailers/List', {     controller: 'RetailersController', templateUrl: 'js/List.view.html',controllerAs: 'ac' })
          // Visits
        .when('/Visits/List', {        controller: 'VisitsController',    templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        .when('/Visits/Retailer', {    controller: 'VisitsController',    templateUrl: 'js/List.view.html',controllerAs: 'ac' })
      .when('/Visits/Report', {      controller: 'VisitsController',    templateUrl: 'js/Report.Visit.view.html',controllerAs: 'ac' })
          // UserPoints
        .when('/UserPoints/Retailer', {controller: 'UserPointsController',templateUrl: 'js/List.view.html',controllerAs: 'ac' })
          // LoyaltyRewards
        .when('/LoyaltyRewards/Retailer', {controller: 'LoyaltyRewardsController', templateUrl: 'js/List.view.html', controllerAs: 'ac' })
      .when('/LoyaltyRewards/Approve', {controller: 'LoyaltyRewardsController', templateUrl: 'js/Approve.LoyaltyReward.view.html', controllerAs: 'ac' })
          // Contents
        .when('/Contents/List', {      controller: 'ContentsController',  templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        .when('/Contents/Retailer', {  controller: 'ContentsController',  templateUrl: 'js/List.view.html',controllerAs: 'ac' })
      .when('/Contents/Approve', {   controller: 'ContentsController',  templateUrl: 'js/Approve.Content.view.html',controllerAs: 'ac' })
          // BonusCodes
        .when('/BonusCodes/Retailer', {controller: 'BonusCodesController',templateUrl: 'js/List.view.html',controllerAs: 'ac' })
          // Locations
        .when('/Locations/List', {     controller: 'LocationsController', templateUrl: 'js/List.view.html',controllerAs: 'ac' })
          // Beacons
        .when('/Beacons/List', {       controller: 'BeaconsController',   templateUrl: 'js/List.view.html',controllerAs: 'ac' })
          // Zones
        .when('/Zones/List', {         controller: 'ZonesController',     templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        // Ratings
        .when('/Ratings/List', {       controller: 'RatingsController',   templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        .when('/Ratings/Retailer', {   controller: 'RatingsController',   templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        // Favourites
        .when('/Favourites/List', {    controller: 'FavouritesController',templateUrl: 'js/List.view.html',controllerAs: 'ac' })
        .when('/Favourites/Retailer', {controller: 'FavouritesController',templateUrl: 'js/List.view.html',controllerAs: 'ac' })

         .otherwise({ redirectTo: '/login' });
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http ) {
    // keep user logged in after page refresh
    // $rootScope.globals.currentUser = "";

    $rootScope.globals = $cookies.getObject('globals') || {};
    if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common[ 'Authorization' ] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      let restrictedPage = $.inArray($location.path(), [ '/login', '/register','/home' ]) === -1;
      let loggedIn       = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');
      }
    });
  }
