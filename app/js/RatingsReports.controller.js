myApp.controller('RatingsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";


    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }

    $scope.vm = vm;

    // setup grid
    vm.editRow = RowEditor.editRowRating;
    vm.serviceGrid = Common.setupUiGrid(Globals.RatingColumnDefs, $scope.allowEditRow );
    // add rating with average in column footer
    let ratingColWithAvg = {  name: 'avgRating', field: 'rating',  width: 100, aggregationType: uiGridConstants.aggregationTypes.avg, displayName: 'Rating' };
    vm.serviceGrid.columnDefs.splice(2, 0, ratingColWithAvg);



    if ($rootScope.currentUser.type === "Administrator")
      ListRatingsReportAdmin();
    else if ($rootScope.currentUser.type === "Retailer")
      ListRatingsReportRetailer($rootScope.currentUser.userid);

    function ListRatingsReportAdmin() {
      vm.dataLoading = true;
      let ratings;
      let rating = new Rating();
      DataFactory.listRatingsReportAdmin()
        .then( function(response) {
          ratings = Common.createObjects(response.data, rating);
          ratings.forEach(function (rating, key) {
            rating.fullname = Common.findUsersName(rating.userid);
            rating.storeName = Common.findStoreName(rating.retailerid);
            ratings[key] = rating;

          });
          $scope.ratings = ratings;
          vm.serviceGrid.data = ratings;
            $scope.gridStyle = Common.gridStyle(ratings.length);
        },
        function (error) { $scope.status = 'Unable to load Ratings ' + error.message; });
      vm.dataLoading = false;
    }

    function ListRatingsReportRetailer(id) {
      vm.dataLoading = true;
      let ratings;
      let rating = new Rating();
      DataFactory.listRatingsReportRetailer(id)
        .then( function(response) {
            ratings = Common.createObjects(response.data, rating);
            ratings.forEach(function (rating, key) {
              rating.fullname = Common.findUsersName(rating.userid);
              rating.storeName = Common.findStoreName(rating.retailerid);
              ratings[key] = rating;
            });
            $scope.ratings = ratings;
            vm.serviceGrid.data = ratings;
            $scope.gridStyle = Common.gridStyle(ratings.length);
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

    $scope.addRow = function () {
      let newService = Globals.addRowRating;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
