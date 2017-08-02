myApp.controller('HomeController', ['$location', 'DataFactory','$rootScope','Common',
  function ($location, DataFactory, $rootScope, Common) {
    let vm = this;

    vm.user = null;
    vm.allUsers = [];

    this.tab = 1;
    let admin = false;
    let loggedIn = false;
    vm.isAdmin = isAdmin;
    vm.deleteUser = deleteUser;

    let factory = {};


    initController();

    function initController() {
      loadCurrentUser($rootScope.username);
      loadAllUsersRetailers();



    }

    function loadCurrentUser(username) {
      DataFactory.getUserByEmailAddress(username)
        .then(function (user) {
          vm.user = user.data;
        });
    }

    function loadAllUsers() {
      DataFactory.getUsers()
        .then(function (users) {
          vm.allUsers = users.data;
          $rootScope.users = users.data;
        });
    }

    function loadAllUsersRetailers() {
      DataFactory.getUsersRetailers()
        .then(function (response) {
          $rootScope.users = response.data.get("Users");
          $rootScope.retailers = response.data.get("Retailers");
          vm.allUsers = response.data.users;
        });
    }

    function deleteUser(id){
      DataFactory.deleteUserById (id)
        .then(function () {
          loadAllUsers();
        });
    }

    function isAdmin() {
      "use strict";
      let r = $rootScope.admin;
      let b = Common.isAdmin();
      return Common.isAdmin();
    }
  }]);
