angular.module('routes', []).config(function ($routeProvider) {

  $routeProvider

    .when('/', {
      controller: 'LoginController', templateUrl: 'js/login/login.view.html',
      controllerAs: 'vm', requireLogin: false })
    .when('/login', {
      controller: 'LoginController', templateUrl: 'js/login/login.view.html',
      controllerAs: 'vm', requireLogin: false })
    .when('/register', {
      controller: 'LoginController', templateUrl: 'js/login/register.view.html',
      controllerAs: 'vm', requireLogin: false  })
    .when('/home', {
      controller: 'HomeController', templateUrl: 'js/login/home.view.html',
      controllerAs: 'vm', requireLogin: true  })
    .when('/logout', {
      controller: 'HomeController', templateUrl: 'js/login/home.view.html',
      controllerAs: 'vm', redirectTo: '/login', requireLogin: true
    })
    //  ShoppingCentre
    .when('/ShoppingCentres/List', { controller: 'ShoppingCentresController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    // Users
    .when('/Users/List',    {controller: 'UsersController', templateUrl: 'js/List.view.html',         controllerAs: 'vm' })
    .when('/Users/Retailer',{controller: 'UsersController', templateUrl: 'js/List.view.html',         controllerAs: 'vm' })
    .when('/Users/Approve', {controller: 'UsersController', templateUrl: 'js/Approve.User.view.html', controllerAs: 'vm' })
    // Retailers
    .when('/Retailers/List',{controller: 'RetailersController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    // Visits
    .when('/Visits/List',    {controller: 'VisitsController', templateUrl: 'js/List.view.html',         controllerAs: 'vm' })
    .when('/Visits/Retailer',{controller: 'VisitsController', templateUrl: 'js/List.view.html',         controllerAs: 'vm' })
    .when('/Visits/Report',  {controller: 'VisitsController', templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    // UserPoints
    .when('/UserPoints/Retailer',    {controller: 'UserPointsController',     templateUrl: 'js/List.view.html', controllerAs: 'vm'    })
    // LoyaltyRewards
    .when('/LoyaltyRewards/Retailer',{controller: 'LoyaltyRewardsController', templateUrl: 'js/List.view.html',                 controllerAs: 'vm' })
    .when('/LoyaltyRewards/Approve', {controller: 'LoyaltyRewardsController', templateUrl: 'js/Approve.LoyaltyReward.view.html',controllerAs: 'vm' })
    // Contents
    .when('/Contents/List',    { controller: 'ContentsController', templateUrl: 'js/List.view.html',            controllerAs: 'vm' })
    .when('/Contents/Retailer',{ controller: 'ContentsController', templateUrl: 'js/List.view.html',            controllerAs: 'vm' })
    .when('/Contents/Approve', { controller: 'ContentsController', templateUrl: 'js/Approve.Content.view.html', controllerAs: 'vm' })
    // BonusCodes
    .when('/BonusCodes/Retailer', { controller: 'BonusCodesController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    .when('/BonusCodes/Generate', { controller: 'BonusCodesController', templateUrl: 'js/Generate.BonusCodes.view.html', controllerAs: 'vm' })
    // Locations
    .when('/Locations/List',{ controller: 'LocationsController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    // Beacons
    .when('/Beacons/List',  { controller: 'BeaconsController',   templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    // Zones
    .when('/Zones/List',    { controller: 'ZonesController',     templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    // Ratings
    .when('/Ratings/List',    { controller: 'RatingsController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    .when('/Ratings/Retailer',{ controller: 'RatingsController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    // Favourites
    .when('/Favourites/List',    { controller: 'FavouritesController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })
    .when('/Favourites/Retailer',{ controller: 'FavouritesController', templateUrl: 'js/List.view.html', controllerAs: 'vm' })

    .otherwise({redirectTo: '/login'});
});
