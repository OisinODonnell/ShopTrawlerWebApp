
myApp.controller('RatingsController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.ratings        = 0;
    $scope.userId         = 0;
    $scope.retailerId     = 0;
    $scope.rating         = {};

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    if ($rootScope.currentUser.type === "Administrator")
      ListRatings();
    else if ($rootScope.currentUser.type === "Retailer")
      ListRatingsByRetailer($rootScope.currentUser.userid);
    else
      ListRatingsByUser($rootScope.currentUser.userid);


    let factory = {
      ListRatings           : ListRatings,
      ListRatingsByRetailer : ListRatingsByRetailer,
      AddRating             : AddRating,
      ListRatingsByUser     : ListRatingsByUser,
    };

    return factory;



    function ListRatings() {
      vm.dataLoading = true;
      let ratings;
      let rating = new Rating();
      DataFactory.listRatings()
        .then( function(response) {
          ratings = Common.createObjects(response.data, rating);
          ratings.forEach(function (rating, key) {
            rating.fullname = Common.findUsersName(rating.userid);
            rating.storeName = Common.findStoreName(rating.retailerid);
            ratings[key] = rating;

          });
          $scope.ratings = ratings;
        },
        function (error) { $scope.status = 'Unable to load Ratings ' + error.message; });
      vm.dataLoading = false;
    }

    function ListRatingsByRetailer(id) {
      vm.dataLoading = true;
      let ratings;
      let rating = new Rating();
      DataFactory.listRatingsByRetailer(id)
        .then( function(response) {
            ratings = Common.createObjects(response.data, rating);
            ratings.forEach(function (rating, key) {
              rating.fullname = Common.findUsersName(rating.userid);
              rating.storeName = Common.findStoreName(rating.retailerid);
              ratings[key] = rating;
            });
            $scope.ratings = ratings;
          },
          function (error) { $scope.status = 'Unable to load Ratings ' + error.message; });
      vm.dataLoading = false;
    }

    function ListRatingsByUser(id) {
      vm.dataLoading = true;
      let rating = new Rating();
      DataFactory.listRatingsByUser(id)
        .then( function(response) {
            $scope.rating = Common.createObjects(response.data, rating);
          },
          function (error) { $scope.status = 'Unable to add rating ' + error.message; });
      vm.dataLoading = false;
    }

    function AddRating(newRating) {
      vm.dataLoading = true;
      let rating = new Rating();
      DataFactory.addRating(newRating)
        .then( function(response) {
            $scope.ratings = Common.createObjects(response.data, rating);
          },
          function (error) { $scope.status = 'Unable to add rating ' + error.message; });
      vm.dataLoading = false;
    }




  }]);
