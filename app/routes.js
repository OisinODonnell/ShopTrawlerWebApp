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
    .when('/Beacons/List',  {     controller: 'BeaconsController',           templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    // BonusCodes
    .when('/BonusCodes/Retailer',{controller: 'BonusCodesController',        templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/BonusCodes/Generate',{controller: 'GenerateBonusCodesController',templateUrl: 'Views/Generate.BonusCodes.view.html', controllerAs: 'vm' })
    .when('/BonusCodes/Generate250',{controller: 'GenerateBonusCodes250Controller',templateUrl: 'Views/Generate.BonusCodes.view.html', controllerAs: 'vm' })
    .when('/BonusCodes/Generate500',{controller: 'GenerateBonusCodes500Controller',templateUrl: 'Views/Generate.BonusCodes.view.html', controllerAs: 'vm' })
    // Contents
    .when('/Contents/List',    {  controller: 'ContentsController',          templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/Contents/Retailer',{  controller: 'ContentsController',          templateUrl: 'Views/List-Content.view.html',   controllerAs: 'vm' })
    .when('/Contents/Approve', {  controller: 'ApproveContentsController',   templateUrl: 'Views/Approve.view.html', controllerAs: 'vm' })




    // Favourites
    .when('/Favourites/List',    {controller: 'FavouritesController',        templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/Favourites/Retailer',{controller: 'FavouritesController',        templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    // Locations
    .when('/Locations/List',{     controller: 'LocationsController',         templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    // LoyaltyRewards
    .when('/LoyaltyRewards/Retailer',{controller: 'LoyaltyRewardsController',templateUrl: 'Views/List-LoyaltyRewards.view.html',    controllerAs: 'vm' })
    .when('/LoyaltyRewards/Approve', {controller: 'ApproveLoyaltyRewardsController',  templateUrl: 'Views/Approve.view.html', controllerAs: 'vm' })
    // Ratings
    .when('/Ratings/List',    {   controller: 'RatingsController',           templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/Ratings/Retailer',{   controller: 'RatingsController',           templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    // Retailers
    .when('/Retailers/List', {    controller: 'RetailersController',         templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    //  ShoppingCentre
    .when('/ShoppingCentres/List', { controller: 'ShoppingCentresController',templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    // Users
    .when('/Users/List',     {    controller: 'UsersController',             templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/Users/Retailer', {    controller: 'UsersController',             templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/Users/Approve',  {    controller: 'ApproveUsersController',      templateUrl: 'Views/Approve.view.html', controllerAs: 'vm' })
    // UserPoints
    .when('/UserPoints/Retailer',{controller: 'UserPointsController',        templateUrl: 'Views/List.view.html',    controllerAs: 'vm'    })

    // Visits
    .when('/Visits/List',     {   controller: 'VisitsController',            templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })
    .when('/Visits/Retailer', {   controller: 'VisitsController',            templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })

      .when('/Visits/Report/Retailer/Days',   { controller: 'VisitsReportDaysController',   templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Retailer/Weeks',  { controller: 'VisitsReportWeeksController',  templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Retailer/Months', { controller: 'VisitsReportMonthsController', templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Retailer/Gender', { controller: 'VisitsReportGenderController', templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Retailer/Age',    { controller: 'VisitsReportAgeController',    templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Days',      { controller: 'VisitsReportDaysController',   templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Weeks',     { controller: 'VisitsReportWeeksController',  templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Months',    { controller: 'VisitsReportMonthsController', templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Gender',    { controller: 'VisitsReportGenderController', templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Age',       { controller: 'VisitsReportAgeController',    templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })

      .when('/Visits/Report/Retailer/Days',   { controller: 'VisitsReportDaysController',   templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Retailer/Age',    { controller: 'VisitsReportAgeController',    templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Gender',    { controller: 'VisitsReportGenderController', templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })
      .when('/Visits/Report/Admin/Age',       { controller: 'VisitsReportAgeController',    templateUrl: 'Views/Report.Visit.view.html', controllerAs: 'vm' })

    // Zones
    .when('/Zones/List',    {     controller: 'ZonesController',             templateUrl: 'Views/List.view.html',    controllerAs: 'vm' })



    .otherwise({redirectTo: '/login'});
});
