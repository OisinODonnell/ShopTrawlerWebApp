myApp.controller('HomeController', ['$location', 'DataFactory','$rootScope','Common',
  function ($location, DataFactory, $rootScope, Common) {
    let vm = this;

    vm.user = null;
    vm.allUsers = [];

    vm.isAdmin = isAdmin;
    this.tab = 1;
    let admin = false;
    let loggedIn = false;

    let factory = {};

    vm.deleteUser = factory.deleteUser(id);

    factory.initController();

    factory.initController = () => {
      factory.loadCurrentUser($rootScope.username);
      factory.loadAllUsers();
    };

    factory.loadCurrentUser = (username) => {
      DataFactory.getUserByEmailAddress(username)
        .then(function (user) {
          vm.user = user.data;
        });
    };

    factory.loadAllUsers = () => {
      DataFactory.getUsers()
        .then(function (users) {
          vm.allUsers = users.data;
          vm.allUsers = users.data;
        });
    };

    factory.deleteUser = (id) => {
      DataFactory.deleteUserById (id)
        .then(function () {
          factory.loadAllUsers();
        });
    };

    factory.sAdmin = () => {
      "use strict";
      let r = $rootScope.admin;
      let b = Common.isAdmin();
      return Common.isAdmin();
    };

  }]);
