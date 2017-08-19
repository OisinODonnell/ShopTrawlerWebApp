myApp.controller('VisitsChartController', ['$scope','$rootScope', 'Globals','Chart.js', 'VisitController',

  function ( $scope, $rootScope, Globals,Chart, VisitController) {
    let vm = this;




    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    // configure chartjs






    // get data





    // add data to chartjs

    // show chart


  }]);
