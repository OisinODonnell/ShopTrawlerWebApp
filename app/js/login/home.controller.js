myApp.controller('HomeController', ['$location', 'DataFactory','$rootScope','Common','$scope','Globals',
  function ($location, DataFactory, $rootScope, Common, $scope, Globals) {
    let vm = this;

    vm.user = null;
    vm.allUsers = [];

    this.tab = 1;
    let isAdmin = false;
    let loggedIn = false;
    // vm.isAdmin = isAdmin;
    // $rootScope.isAdmin = vm.isAdmin;
    vm.deleteUser = deleteUser;
    $rootScope.users = [];
    $rootScope.retailers = [];
    $rootScope.currentUser = {};
    $rootScope.facebookImage = "http://findicons.com/files/icons/947/mini_social_networking/64/facebook.png";
    $rootScope.twitterImage = "http://findicons.com/files/icons/819/social_me/64/twitter.png";
    $rootScope.addingRow = false;
    $rootScope.urlBase = Globals.URL_BASE;

    let factory = {};


    loadData($rootScope.username);


    // to call rest multiple times, each call must be nested within the previous call
    // after it has successfully returned and result is assigned, then call the next

    function loadData(username) { // as a chained call to rest
      // load current user ... 1st call
      DataFactory.getUserByEmailAddress(username)
        .then(function (user) {
          vm.user = user.data;
          $rootScope.currentUser = user.data;

          // 2nd Call tro rest ... load all users
          DataFactory.listUsers()
            .then(function (users) {
              vm.allUsers = users.data;
              $rootScope.users = users.data;

              // 3rd Call to Rest ... load all retailers
              DataFactory.listRetailers()
                .then(function (retailers) {
                  vm.allRetailers = retailers.data;
                  $rootScope.retailers = retailers.data;
                  console.log("Retailer Count : " + $rootScope.retailers.length);
                  console.log("User Count : " + $rootScope.users.length);

                }, // error handling function for  listRetailers()
                  function (error) { $scope.status = 'Unable to load Retailers ' + error.message;   }
              )
            }, // error handling function for  listUsers()
              function (error) { $scope.status = 'Unable to load Users ' + error.message;   }
          )
        }, // error handling function for getUserByEmailAddress()
          function (error) { $scope.status = 'Unable to load CurrentUser ' + error.message;  }
      );
    }

    function loadAllUsers() {
      DataFactory.listUsers()
        .then(function (users) {
          vm.allUsers = users.data;
          $rootScope.users = users.data;
        });
    }

    function deleteUser(id){
      DataFactory.deleteUserById (id)
        .then(function () {
          loadAllUsers();
        });
    }

    // function isAdmin() {
    //   "use strict";
    //   let r = $rootScope.admin;
    //   let b = Common.isAdmin();
    //   return Common.isAdmin();
    // }
  }]);
