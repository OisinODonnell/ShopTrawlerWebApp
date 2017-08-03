
myApp.controller('FavouritesController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.favourites       = 0;
    $scope.userId           = 0;
    $scope.retailerId       = {};


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

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

    return factory;



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

  }]);
