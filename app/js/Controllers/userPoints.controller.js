myApp.controller('UserPointsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }

    $scope.vm = vm;
    vm.chartTitle = "User Points";
    vm.editRow = RowEditor.editRowUserPoint;
    vm.serviceGrid = Common.setupUiGrid(Globals.UserPointColumnDefs, $scope.allowEditRow )

    if ($rootScope.currentUser.type === "Administrator")
      ListUserPoints();
    else if ($rootScope.currentUser.type === "Retailer")
      ListUserPointsByRetailer($rootScope.currentUser.retailerid);
    else
      ListUserPointsByUser($rootScope.currentUser.userid);


    // let factory = {
    //   ListUserPoints : ListUserPoints, // all users
    //   ListUserPointsByRetailer : ListUserPointsByRetailer, // all users
    //   AddUserPoints  : AddUserPoints,
    //   getUserPoints  : getUserPoints,  // single user
    // };


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
            vm.serviceGrid.data = $scope.userPoints;
            $scope.gridStyle = Common.gridStyle(userPoints.length);
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
            vm.serviceGrid.data = userPoints;
            $scope.gridStyle = Common.gridStyle(userPoints.length);
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
            $scope.userPoint = userPoints;
            vm.userPoints = userPoints;
            $scope.gridStyle = Common.gridStyle(userPoints.length);
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
            vm.userPoints = userPoints;
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

    $scope.addRow = function () {
      let newService = Globals.addRowUserPoint;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
