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
      loadAllUsers();
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
          vm.allUsers = users.data;
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
