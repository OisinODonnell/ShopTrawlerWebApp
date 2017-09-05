myApp.controller('FavouritesController', ['DataFactory','$scope','Common','$rootScope',
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

    vm.chartTitle = "Favourites";
    vm.editRow = RowEditor.editRowFavourite;
    vm.serviceGrid = Common.setupUiGrid(Globals.FavouriteColumnDefs, $scope.allowEditRow )

    if ($rootScope.currentUser.type === "Administrator")
      ListFavourites();
    else if ($rootScope.currentUser.type === "Retailer")
      ListFavouritesByRetailer($rootScope.currentUser.retailerid);
    else
      ListFavouritesByUser($rootScope.currentUser.userid);

    function ListFavourites() {
      vm.dataLoading = true;
      let favourites;
      let favourite = new Favourite();
      DataFactory.listFavourites()
        .then( function(response) {

          favourites = Common.createObjects(response.data, favourite);
          favourites.forEach(function (favourite, key) {
            favourite.fullname = Common.findUsersName(favourite.userid);
            favourite.storeName = Common.findStoreName(favourite.retailerid);
            favourites[key] = favourite;
          });
          $scope.favourites = favourites;
          vm.serviceGrid.data = favourites;
        },
          function (error) { $scope.status = 'Unable to load Favourites ' + error.message; });
      vm.dataLoading = false;
    }

    function ListFavouritesByUser(id) {
      vm.dataLoading = true;
      let favourites;
      let favourite = new Favourite();
      DataFactory.listFavouritesByUser(id)
        .then( function(response) {

            favourites = Common.createObjects(response.data, favourite);
            favourites.forEach(function (favourite, key) {
              favourite.fullname = Common.findUsersName(favourite.userid);
              favourite.storeName = Common.findStoreName(favourite.retailerid);
              favourites[key] = favourite;

            });
            $scope.favourites = favourites;
            vm.serviceGrid.data = favourites;
            $scope.gridStyle = Common.gridStyle(favourites.length);
          },
          function (error) { $scope.status = 'Unable to load Favourites ' + error.message; });
      vm.dataLoading = false;
    }

    function ListFavouritesByRetailer(id) {
      vm.dataLoading = true;
      let favourites;
      let favourite = new Favourite();
      DataFactory.listFavouritesByRetailer(id)
        .then( function(response) {

            favourites = Common.createObjects(response.data, favourite);
            favourites.forEach(function (favourite, key) {
              favourite.fullname = Common.findUsersName(favourite.userid);
              favourite.storeName = Common.findStoreName(favourite.retailerid);
              favourites[key] = favourite;

            });
            $scope.favourites = favourites;
            vm.serviceGrid.data = favourites;
            $scope.gridStyle = Common.gridStyle(favourites.length);

          },
          function (error) { $scope.status = 'Unable to load Favourites ' + error.message; });
      vm.dataLoading = false;
    }



    function AddFavourite(userId, retailerId) {
      vm.dataLoading = true;
      let favourite = new Favourite();
      DataFactory.addFavourite(userId, retailerId)
        .then( function(response) {
            $scope.favourites = Common.createObjects(response.data, favourite);
          },
          function (error) { $scope.status = 'Unable to set favourite ' + error.message; });
      vm.dataLoading = false;
    }

    $scope.addRow = function () {
      let newService = Globals.addRowFavourite;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
