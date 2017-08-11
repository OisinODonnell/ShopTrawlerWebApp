angular.module('routes', []).config(function ($routeProvider) {

  $routeProvider

    .when('/', {
      controller: 'LoginController', templateUrl: 'js/login/login.view.html',
      controllerAs: 'vm', requireLogin: false
    })
    .when('/login', {
      controller: 'LoginController', templateUrl: 'js/login/login.view.html',
      controllerAs: 'vm', requireLogin: false
    })
    .when('/register', {
      controller: 'LoginController', templateUrl: 'js/login/register.view.html',
      controllerAs: 'vm', requireLogin: false
    })
    .when('/home', {
      controller: 'HomeController', templateUrl: 'js/login/home.view.html',
      controllerAs: 'vm', requireLogin: true
    })
    .when('/logout', {
      controller: 'HomeController', templateUrl: 'js/login/home.view.html',
      controllerAs: 'vm', redirectTo: '/login', requireLogin: true
    })
    //  ShoppingCentre
    .when('/ShoppingCentres/List', {
      controller: 'ShoppingCentresController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })
    // Users
    .when('/Users/List', {controller: 'UsersController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    .when('/Users/Retailer', {controller: 'UsersController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    .when('/Users/Approve', {
      controller: 'UsersController',
      templateUrl: 'js/Approve.User.view.html',
      controllerAs: 'ac'
    })
    // Retailers
    .when('/Retailers/List', {controller: 'RetailersController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    // Visits
    .when('/Visits/List', {controller: 'VisitsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    .when('/Visits/Retailer', {controller: 'VisitsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    .when('/Visits/Report', {
      controller: 'VisitsController',
      templateUrl: 'js/Report.Visit.view.html',
      controllerAs: 'ac'
    })
    // UserPoints
    .when('/UserPoints/Retailer', {
      controller: 'UserPointsController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })
    // LoyaltyRewards
    .when('/LoyaltyRewards/Retailer', {
      controller: 'LoyaltyRewardsController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })
    .when('/LoyaltyRewards/Approve', {
      controller: 'LoyaltyRewardsController',
      templateUrl: 'js/Approve.LoyaltyReward.view.html',
      controllerAs: 'ac'
    })
    // Contents
    .when('/Contents/List', {controller: 'ContentsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    .when('/Contents/Retailer', {
      controller: 'ContentsController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })
    .when('/Contents/Approve', {
      controller: 'ContentsController',
      templateUrl: 'js/Approve.Content.view.html',
      controllerAs: 'ac'
    })
    // BonusCodes
    .when('/BonusCodes/Retailer', {
      controller: 'BonusCodesController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })
    // Locations
    .when('/Locations/List', {controller: 'LocationsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    // Beacons
    .when('/Beacons/List', {controller: 'BeaconsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    // Zones
    .when('/Zones/List', {controller: 'ZonesController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    // Ratings
    .when('/Ratings/List', {controller: 'RatingsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})
    .when('/Ratings/Retailer', {controller: 'RatingsController', templateUrl: 'js/List.view.html', controllerAs: 'ac'})

    // Favourites
    .when('/Favourites/List', {
      controller: 'FavouritesController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })
    .when('/Favourites/Retailer', {
      controller: 'FavouritesController',
      templateUrl: 'js/List.view.html',
      controllerAs: 'ac'
    })

    .otherwise({redirectTo: '/login'});
});
