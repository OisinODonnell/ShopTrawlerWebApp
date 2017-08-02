myApp.controller('VisitsController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.visits       = 0;
    $scope.visitId      = 0;
    $scope.type = "HOUR"; // HOUR, DAY, WEEK, MONTH
    $scope.users = [];
    $scope.retailers = [];

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    // ListRetailers();
    // ListUsers();
    ListVisits();



    let factory = {
      ListVisits    : ListVisits,
      ListVisitsBy  : ListVisitsBy,
      ListRetailers : ListRetailers,
      ListUsers : ListUsers,
    };

    return factory;





    function ListVisits() {
      vm.dataLoading = true;
      let visit    = new Visit();
      let user     = new User();
      let retailer = new Retailer();
      DataFactory.getVisitsUsersRetailers()
        .then( function(response) {
            // extract collections
            let visits    = convertVisits(response.data.Visit,visit);
            let users     = convertUsers(response.data.Users,user);
            let retailers = convertRetailers(response.data.Retailers, retailer);

            // create augmented visits entities for display

            forEach(visits, function (visit, key){
              let userid = visit.getUserid();
              let zoneid = visit.getZoneid();

              let fullname = users.findWhere(users.userid === userid).getFullname();
              let storeName = retailers.findWhere(retailers.retailerid === zoneid).getStoreName();
              visit.fullname = fullname;
              visit.storeName = storeName;
              visits[key] = visit;

            });
            $scope.visits = visits;

            },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }

    function convertUsers(users,user) {
      let newUsers = [];
      forEach(users, function (value, key) {
        newUsers.add(fromJson(value, user))

      });
      return newUsers;
    }
    function convertRetailers(retailers,retailer) {
      let newRetailers = [];
      forEach(retailers, function (value, key) {
        newRetailers.add(fromJson(value, retailer))

      });
      return newRetailers;
    }
    function convertVisits(visits,visit) {
      let newVisits = [];
      forEach(visits, function (value, key) {
        newVisits.add(fromJson(value, visit))

      });
      return newVisits;
    }


    function fromJson(json, obj) {

        let newObject = Object.create(obj.prototype);
        Object.assign(obj, json);
        obj.profile = UserProfile.fromJSON(json.profile);
        return newObject;
    }
    function ListVisitsBy(type) {
      vm.dataLoading = true;
      let visit = new Visit();
      DataFactory.listVisits(type)
        .then( function(response) {
            $scope.visits = Common.createObjects(response.data, visit);


          },
          function (error) { $scope.status = 'Unable to load Visits ' + error.message; });
      vm.dataLoading = false;
    }
    function ListRetailers() {
      // vm.dataLoading = true;
      let retailer = new Retailer();
      DataFactory.listRetailers()
        .then( function(response) {
            // $scope.retailers = Common.createObjects(response.data, retailer);
            return Common.createObjects(response.data, retailer);

          },
          function (error) { $scope.status = 'Unable to load Retailers ' + error.message; });
      // vm.dataLoading = false;
    }
    function ListUsers() {
      // vm.dataLoading = true;
      let user = new User();
      DataFactory.getUsers()
        .then( function(response) {
            // $scope.users = Common.createObjects(response.data, user);
            return Common.createObjects(response.data, user);
          },
          function (error) { $scope.status = 'Unable to load User data ' + error.message; });
      // vm.dataLoading = false;
    }


  }]);
