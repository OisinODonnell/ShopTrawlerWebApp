
myApp.controller('UserPointsController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.userPoints       = 0;
    $scope.userPointsId     = 0;
    $scope.user             = {};
    $scope.type             = "HOUR"; // HOUR, DAY, WEEK, MONTH
    $scope.points           = 0;
    $scope.userId           = 0;


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");


    if ($rootScope.currentUser.type === "Administrator")
      ListUserPoints();
    else if ($rootScope.currentUser.type === "Retailer")
      ListUserPointsByRetailer($rootScope.currentUser.userid);
    else
      ListUserPointsByUser($rootScope.currentUser.userid);


    let factory = {
      ListUserPoints : ListUserPoints, // all users
      ListUserPointsByRetailer : ListUserPointsByRetailer, // all users
      AddUserPoints  : AddUserPoints,
      getUserPoints  : getUserPoints,  // single user
    };

    return factory;


    function ListUserPoints() {
      vm.dataLoading = true;
      let userPoints;
      let userPoint = new UserPoint();
      DataFactory.listUserPoints()
        .then( function(response) {
            userPoints = Common.createObjects(response.data, userPoint);

            userPoints.forEach(function (userPoint, key) {
              userPoint.storeName = Common.findStoreName(userPoint.retailerid);
              userPoint.fullname = Common.findUsersName(userPoint.userid);
              userPoints[key] = userPoint;
            });
            $scope.userPoints = userPoints;
          },
          function (error) { $scope.status = 'Unable to load UserPoints ' + error.message;
          }
        );
    }

    function ListUserPointsByRetailer(id) {
      vm.dataLoading = true;
      let userPoints;
      let userPoint = new UserPoint();
      DataFactory.listUserPointsByRetailer(id)
        .then( function(response) {
            userPoints = Common.createObjects(response.data, userPoint);
            userPoints.forEach(function (userPoint, key) {
              userPoint.storeName = Common.findStoreName(userPoint.retailerid);
              userPoint.fullname = Common.findUsersName(userPoint.userid);
              userPoints[key] = userPoint;

            });
            $scope.userPoints = userPoints;
          },

          function (error) { $scope.status = 'Unable to load UserPoints ' + error.message;
          }
        );
    }

    function ListUserPointsByUser(id) {
      vm.dataLoading = true;
      let userPoints;
      let userPoint = new UserPoint();
      DataFactory.listUserPointsByUser(id)
        .then( function(response) {
            userPoints = Common.createObjects(response.data, userPoint);
            userPoints.forEach(function (userPoint, key) {
              userPoint.storeName = Common.findStoreName(userPoint.retailerid);
              userPoint.fullname = Common.findUsersName(userPoint.userid);
              userPoints[key] = userPoint;

            });
            $scope.userPoints = userPoints;
          },

          function (error) { $scope.status = 'Unable to load UserPoints ' + error.message;
          }
        );
    }
    function getUserPoints(userId) {
      vm.dataLoading = true;
      let userPoint = new UserPoint();
      let userPoints;
      DataFactory.getUserPoints(userId)
        .then(function (response) {
            $scope.userPoint = Common.createObjects(response.data, userPoint);
          },
          function (error) { $scope.status = 'Unable to set user points ' + error.message; });
      vm.dataLoading = false;
    }


    function AddUserPoints(points, user) {
      vm.dataLoading = true;
      let userPoint = new UserPoint();
      DataFactory.addUserPoints(points, user)
        .then( function(response) {
            $scope.userPoints = Common.createObjects(response.data, userPoint);
          },
          function (error) { $scope.status = 'Unable to set user points ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
