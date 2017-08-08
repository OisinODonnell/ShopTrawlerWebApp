myApp.controller('UsersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.users;
    $scope.userid      = 0;


    $scope.vm = vm;

    vm.editRow = RowEditor.editRowUser;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.UserColumnDefs;

    ListUsers();

    let factory = {
      ListUsers         : ListUsers,
      AddRetailManager  : AddRetailManager,
      AddUser           : AddUser,
    };


    function ListUsers() {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.listUsers()
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
            vm.serviceGrid.data = $rootScope.users;
            $scope.gridStyle = Common.gridStyle($rootScope.users.length);
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
            vm.serviceGrid.data = $rootScope.users;

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


    $scope.addRow = function () {
      let newService = Globals.addRowUser;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    return factory;
  }]);
