//
// TODO: Add Delete, Edit and Create Elements for each entity.
//       Not needed for every entity (CRUD) A=Admin R=Retailer G=Generate /=done S=summary Reports x = no operation required
//
//       BonusCode     A-x       R-R/UG
//       Beacon        A-R/      R-x/
//       Content       A-U/      R-RCU/
//       LoyaltyReward A-U/      R-RCU/
//       UserPoint     A-x/      R-R/
//       User          A-RUD/    R-U/
//       Retailer      A-RCUD/   R-U/
//       Rating        A-R/      R-RS/
//       Zone          A-R/      R-x/
//       Favourite     A-x/      R-R/
//       ShoppingCentres A-RU/   R-x/
//       Visit         A-R/      R-RS/
//       Location      A-R/      R-x/
//
// Admin
//        Content: Only Show content yet to be approved
//        LoyaltyRewards: Show content yet to be approved
//        Retailer : Row contents do not appear when row is clicked
//        Rating :  Add new item for Rating Summary per Retailer
//        SC: Remove Add
// Retailer
//        Ratings: Show report . or show avg in footer under rating column
//        BonusCodes (is empty except for retailer name
//                    Add 'Generate BonusCodes'
//        Users ... Block access except to Stores manager
//        Visits :  Provide Monthly/weekly report/daily
//                  + Add in alot more data (2000 over one year)
// (A)    Retailer : Add/Delete Record
//        Users (own record) : Update
//
// (R)    Content : Add/Update/Delete
//        LoyaltyReward : add/update/delete
//        Users (own record) : Update



let myApp =  angular.module('app', ['ngRoute','routes','ngCookies','ngFlash', 'ngTouch', 'ngAnimate', 'ui.grid', 'ui.grid.moveColumns',
  'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit', 'ui.grid.pagination'])
  .config(config)
  .run(run);

  config.$inject = ['FlashProvider'];
    function config(FlashProvider, ) {
      FlashProvider.setTimeout(2000);
      FlashProvider.setShowClose(true);
      FlashProvider
  }


  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http ) {
    // keep user logged in after page refresh
    // $rootScope.globals.currentUser = "";

    $rootScope.globals = $cookies.getObject('globals') || {};

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      let restrictedPage = $.inArray($location.path(), [ '/login', '/register','/home' ]) === -1;
      let loggedIn       = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');

      }
    });
  }


myApp.config(['$httpProvider',function($httpProvider) {
  // $httpProvider.defaults.useXDomain = true;
  // $httpProvider.defaults.withCredentials = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


}]);

myApp.factory('AuthInterceptor', ['$rootScope', function($rootScope) {
  return {

    // Sent the token (if present) with each request
    'request': function(config) {
      config.headers = config.headers || {};
      let auth = $rootScope.globals.currentUser.authdata;

      config.headers.Authorization = 'Basic ' + auth;
      config.headers['Accept'] = 'application/json;odata=verbose';
      return config;
    }
  };
}]);

