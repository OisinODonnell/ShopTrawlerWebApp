

let myApp =  angular.module('app', ['ngRoute','ngCookies','ngFlash'])
    .config(config)
    .run(run);

  config.$inject = ['$routeProvider','FlashProvider'];
    function config($routeProvider,FlashProvider) {


      // $urlRouterProvider.otherwise('/login');
      // $httpProvider.interceptors.push('APIInterceptor');

      FlashProvider.setTimeout(2000);
      FlashProvider.setShowClose(true);

      $routeProvider

        .when('/', {
          controller:   'LoginController',
          templateUrl:  'js/login/login.view.html',
          controllerAs: 'vm',
          requireLogin: false
        })
        .when('/login', {
          controller:   'LoginController',
          templateUrl:  'js/login/login.view.html',
          controllerAs: 'vm',
          requireLogin: false
        })
        .when('/register', {
          controller:   'LoginController',
          templateUrl:  'js/login/register.view.html',
          controllerAs: 'vm',
          requireLogin: false
        })
        .when('/home', {
          controller:   'HomeController',
          templateUrl:  'js/login/home.view.html',
          controllerAs: 'vm',
          requireLogin: true
        })

        .when('/logout', {
          controller: 'HomeController',
          templateUrl: 'js/login/home.view.html',
          controllerAs: 'vm',
          redirectTo: '/login',
          requireLogin: true
        })
          // new routes

        //  ShoppingCentre
        .when('/ShoppingCentres/List', {
          controller: 'ShoppingCentresController',
          templateUrl: 'js/List-ShoppingCentres.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Users
        .when('/Users/List', {
          controller: 'UsersController',
          templateUrl: 'js/List-Users.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Retailers
        .when('/Retailers/List', {
          controller: 'RetailersController',
          templateUrl: 'js/List-Retailers.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Visits
        .when('/Visits/List', {
          controller: 'VisitsController',
          templateUrl: 'js/List-Visits.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // UserPoints
        .when('/UserPoints/List', {
          controller: 'UserPointsController',
          templateUrl: 'js/List-UserPoints.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // LoyaltyRewards
        .when('/LoyaltyRewards/List', {
          controller: 'LoyaltyRewardsController',
          templateUrl: 'js/List-LoyaltyRewards.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Contents
        .when('/Contents/List', {
          controller: 'ContentsController',
          templateUrl: 'js/List-Contents.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // BonusCodes
        .when('/BonusCodes/List', {
          controller: 'BonusCodesController',
          templateUrl: 'js/List-BonusCodes.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Locations
        .when('/Locations/List', {
          controller: 'LocationsController',
          templateUrl: 'js/List-Locations.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Beacons
        .when('/Beacons/List', {
          controller: 'BeaconsController',
          templateUrl: 'js/List-Beacons.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Zones
        .when('/Zones/List', {
          controller: 'ZonesController',
          templateUrl: 'js/List-Zones.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Ratings
        .when('/Ratings/List', {
          controller: 'RatingsController',
          templateUrl: 'js/List-Ratings.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })
          // Favourites
        .when('/Favourites/List', {
          controller: 'FavouritesController',
          templateUrl: 'js/List-Favourites.view.html',
          // requireLogin: true,
          // permissions: [ "administration" ],
          controllerAs: 'ac'
        })


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

// myApp.service('UserService', function($cookies) {
//   let service = this,
//     currentUser = null;
//   service.setCurrentUser = function(user) {
//     currentUser = user;
//     $cookies.put('user',user);
//     return currentUser;
//   };
//   service.getCurrentUser = function() {
//     if (!currentUser) {
//       currentUser = $cookies.get('user');
//     }
//     return currentUser;
//   };
// });
//
// myApp.service('APIInterceptor', function() {
//   let service = this;
//   service.request = function(config) {
//     let currentUser = UserService.getCurrentUser(),
//       access_token = currentUser ? currentUser.access_token : null;
//     if (access_token) {
//       config.headers.authorization = access_token;
//     }
//     return config;
//   };
//   service.responseError = function(response) {
//     if (response.status === 401) {
//       $rootScope.$broadcast('unauthorized');
//     }
//     return response;
//   };
// });


