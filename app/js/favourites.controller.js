
myApp.controller('FavouritesController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
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

    ListFavourites();

    let factory = {
      ListFavourites : ListFavourites, // all users
      AddFavourite   : AddFavourite,
      GetFavourites  : GetFavourites,  // single user
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

    function GetFavourites(userId) {
      vm.dataLoading = true;
      let favourite = new Favourite();
      DataFactory.getFavourites(userId)
        .then( function(response) {
            $scope.favourites = Common.createObjects(response.data, favourite);
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
