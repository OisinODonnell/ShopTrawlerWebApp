angular.module('routes', []).config(function ($routeProvider) {

  $routeProvider

    // Login / Logout / Home and Register
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

    // Beacons
    .when('/Beacons/List',  {     controller: 'BeaconsController',           templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    // BonusCodes
    .when('/BonusCodes/Retailer',{controller: 'BonusCodesController',        templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/BonusCodes/Generate',{controller: 'GenerateBonusCodesController',templateUrl: 'js/Generate.BonusCodes.view.html', controllerAs: 'vm' })
    // Contents
    .when('/Contents/List',    {  controller: 'ContentsController',          templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Contents/Retailer',{  controller: 'ContentsController',          templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Contents/Approve', {  controller: 'ApproveContentsController',   templateUrl: 'js/Approve.view.html', controllerAs: 'vm' })

    // Favourites
    .when('/Favourites/List',    {controller: 'FavouritesController',        templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Favourites/Retailer',{controller: 'FavouritesController',        templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    // Locations
    .when('/Locations/List',{     controller: 'LocationsController',         templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    // LoyaltyRewards
    .when('/LoyaltyRewards/Retailer',{controller: 'LoyaltyRewardsController',templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/LoyaltyRewards/Approve', {controller: 'ApproveLoyaltyRewardsController',  templateUrl: 'js/Approve.view.html', controllerAs: 'vm' })
    // Ratings
    .when('/Ratings/List',    {   controller: 'RatingsController',           templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Ratings/Retailer',{   controller: 'RatingsController',           templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    // Retailers
    .when('/Retailers/List', {    controller: 'RetailersController',         templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    //  ShoppingCentre
    .when('/ShoppingCentres/List', { controller: 'ShoppingCentresController',templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    // Users
    .when('/Users/List',     {    controller: 'UsersController',             templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Users/Retailer', {    controller: 'UsersController',             templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Users/Approve',  {    controller: 'ApproveUsersController',      templateUrl: 'js/Approve.view.html', controllerAs: 'vm' })
    // UserPoints
    .when('/UserPoints/Retailer',{controller: 'UserPointsController',        templateUrl: 'js/List.view.html',    controllerAs: 'vm'    })

    // Visits
    .when('/Visits/List',     {   controller: 'VisitsController',            templateUrl: 'js/List.view.html',    controllerAs: 'vm' })
    .when('/Visits/Retailer', {   controller: 'VisitsController',            templateUrl: 'js/List.view.html',    controllerAs: 'vm' })

    .when('/Visits/Report/Retailer/Days',   { controller: 'VisitsReportDaysController',   templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    .when('/Visits/Report/Retailer/Weeks',  { controller: 'VisitsReportWeeksController',  templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    .when('/Visits/Report/Retailer/Months', { controller: 'VisitsReportMonthsController', templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    .when('/Visits/Report/Admin/Days',      { controller: 'VisitsReportDaysController',   templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    .when('/Visits/Report/Admin/Weeks',     { controller: 'VisitsReportWeeksController',  templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    .when('/Visits/Report/Admin/Months',    { controller: 'VisitsReportMonthsController', templateUrl: 'js/Report.Visit.view.html', controllerAs: 'vm' })
    // Zones
    .when('/Zones/List',    {     controller: 'ZonesController',             templateUrl: 'js/List.view.html',    controllerAs: 'vm' })



    .otherwise({redirectTo: '/login'});
});
