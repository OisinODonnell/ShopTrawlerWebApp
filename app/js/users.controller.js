myApp.controller('UsersController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.users;
    $scope.userid      = 0;


    // THis script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListUsers();

    let factory = {
      ListUsers         : ListUsers,
      AddRetailManager  : AddRetailManager,
      AddUser           : AddUser,
    };
    return factory;


    function ListUsers() {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.listUsers()
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
          },
          function (error) { $scope.status = 'Unable to load User data ' + error.message; }
        );
      vm.dataLoading = false;
    }

    /*
    Add new user, return updated list of users into rootScope
     */
    function AddRetailManager(newUser) {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.addRetailManager(newUser)
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
          },
          function (error) { $scope.status = 'Unable to add new user (manager) ' + error.message; }
        );
      vm.dataLoading = false;

    }

    /*
        Add new user, return updated list of users into $rootScope
     */
    function AddUser(newUser) {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.addUser(newUser)
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
          },
          function (error) { $scope.status = 'Unable to add new user data ' + error.message; });
      vm.dataLoading = false;

    }

  }]);
