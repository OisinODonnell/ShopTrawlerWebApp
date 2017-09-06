myApp.controller('dummyController', ['$rootScope','$routeParams',

  function ( $rootScope, $rootParams) {

    $location.path($rootParams);
  }]);
