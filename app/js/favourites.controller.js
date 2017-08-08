myApp.controller('FavouritesController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.favourites       = 0;
    $scope.userId           = 0;
    $scope.retailerId       = {};

    $scope.vm = vm;

    vm.editRow = RowEditor.editRowFavourite;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.FavouriteColumnDefs;

    if ($rootScope.currentUser.type === "Administrator")
      ListFavourites();
    else if ($rootScope.currentUser.type === "Retailer")
      ListFavouritesByRetailer($rootScope.currentUser.userid);
    else
      ListFavouritesByUser($rootScope.currentUser.userid);


    let factory = {
      ListFavourites            : ListFavourites, // all ufavourites
      ListFavouritesByRetailer  : ListFavouritesByRetailer, // all favourites by retailer
      ListFavouritesByUser      : ListFavouritesByUser, // all favourites by user
      AddFavourite              : AddFavourite,
    };

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

    return factory;

  }]);
