myApp.controller('HomeController', [ 'DataFactory','$rootScope','Common',
  function (DataFactory, $rootScope, Common) {
    let vm = this;

    vm.user = null;
    vm.allUsers = [];
    vm.deleteUser = deleteUser;
    vm.isAdmin = isAdmin;
    this.tab = 1;
    let admin = false;
    let loggedIn = false;
    let factory = {};

    initController();

    function initController() {
      loadCurrentUser();
      loadAllUsers();
    }

    function loadCurrentUser(username) {
      DataFactory.getAccountByEmail(username)
        .then(function (user) {
          vm.user = user.data;
        });
    }

    function loadAllUsers() {
      DataFactory.getAccounts()
        .then(function (users) {
          vm.allUsers = users.data;
          vm.allUsers = users.data;

        });
    }

    function deleteUser(id) {
      DataFactory.deleteAccountById (id)
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


    // // selectively enables disables elements bon the navbar depending on
    // // whether the user is logged in or if = Administrator or Customer
    //
    //
    // factory.selectTab = (setTab) =>  this.tab = setTab;
    // factory.isSelected = (checkTab) => this.tab === checkTab;
    //
    // factory.isAdmin = () =>  $rootScope.userType === 'ADMINISTRATOR';
    // factory.isCust  = () =>  !($rootScope.userType === 'ADMINISTRATOR');
    // factory.isLoggedIn = () => $rootScope.loggedIn;
    //
    // // used during testing
    // // factory.showAdmin = ()    => admin = true;
    // // factory.hideAdmin = ()    => admin = false;
    // // factory.showCust = ()     => admin = false;
    // // factory.hideCust = ()     => admin = true;
    // // factory.showLoggedIn = () => loggedIn = true;
    // // factory.hideLoggedIn = () => loggedIn = false;


  }]);
