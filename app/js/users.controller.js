/**
 * Created by oisin on 07/05/2017.
 */

myApp.controller('UsersController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.users       = 0;
    $scope.userId      = 0;


    // THis script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListUsers();

    let factory = {
      ListUsers        : ListUsers,
      AddRetailManager : AddRetailManager,
    };

    return factory;

    function ListUsers() {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.getUsers()
        .then( function(response) {
            $scope.accounts = Common.createObjects(response.data, user);
          },
          function (error) { $scope.status = 'Unable to load User data ' + error.message; });
      vm.dataLoading = false;
    }

    function AddRetailManager() {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.setUsers()
        .then( function(response) {
            $scope.users = Common.createObjects(response.data, user);

          },
          function (error) { $scope.status = 'Unable to load Account data ' + error.message; });
      vm.dataLoading = false;

    }

  }]);
