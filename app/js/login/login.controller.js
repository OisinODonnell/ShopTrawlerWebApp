myApp.controller('LoginController', ['$location', 'AuthenticationService','$rootScope','DataFactory','$scope','Flash',
    function ($location, AuthenticationService, $rootScope, DataFactory, $scope, Flash) {
      let vm = this;
      // user login/registration placeholders

      vm.userId       = 0;
      vm.firstname    = "";
      vm.surname      = "";
      vm.emailAddress = "";
      vm.phone        = "";
      vm.gender       = "Male";
      vm.password     = "";
      vm.type         = "Retailer";
      vm.yob          = 1992;
      vm.username     = "";

      // globals
      $rootScope.flash = {};
      $rootScope.userId = 15;
      $rootScope.flash.autoHide = 3000; // 3000ms
      $rootScope.flash.timeout = 3000; // 3 seconds

      $rootScope.loggedInUserId = 0;
      $rootScope.loggedInUserTime = 0;
      $rootScope.type = "Mobile";

      $scope.username = "";
      $scope.password = "";
      $scope.vm = vm;
      let id = null;

      $rootScope.tab = 1;
      $rootScope.isAdmin = false;
      $rootScope.isRetailer = true;
      $rootScope.mob = false;
      $rootScope.loggedIn = false;

      $scope.genders = ["Male", "Female"];


      let currentUser = {};

      let auth  = {
        Login             : Login,
        Logout            : Logout,
        Register          : Register,
        RegisterAdmin     : RegisterAdmin,
        RegisterRetailer  : RegisterRetailer,
        ListRetailers     : ListRetailers

      };

      (function initController() {
          // get list of retailers for registration screen.
          ListRetailers();
        // reset login status
          AuthenticationService.clearCredentials();

      })();

      function Login  ()  {
        vm.dataLoading = true;
        $rootScope.isAdmin =  false;
        $rootScope.loggedIn = false;
        vm.user = "username="+$scope.vm.username+"&password="+$scope.vm.password;
        DataFactory.login($scope.vm.username,$scope.vm.password)
          .then(function (response) {
            if (response.data.success === "1") {
              // save user details so that the rest of the app can check them as required

              setUserLoginDetails(response.data);


              // show success
              id = Flash.create('success', response.data.message, $rootScope.flash.autoHide, {class: 'custom-class', id: 'custom-id'}, true);
              AuthenticationService.setCredentials(vm.username, vm.password);

              // set  navbar controls
              setAdmin( $rootScope.userType === "Administrator" );
              setRetailer( $rootScope.userType === "Retailer" );
              setMob( $rootScope.userType === "Mobile" );

              $rootScope.emailAddress = $scope.vm.username;
              $rootScope.username = $scope.vm.username;
              vm.username = $scope.vm.username;
              setLoggedIn(true);

              // finally, set where to go next
              $location.path('/home');

            } else {

              id = Flash.create('danger', response.data.message, $rootScope.flash.autoHide, {class: 'custom-class', id: 'custom-id'}, true);
              setAdmin(false);
              setLoggedIn(false);
              vm.dataLoading = false;
              $location.path('/login');
            }
        })
      }

      // determine whether an admin or customer account is being created
      function Register() {
        vm.dataLoading = true;
        $rootScope.loggedIn = false;
        setAdmin(false);
        setLoggedIn(false);
        "use strict";
        if ($scope.vm.isAdmin)
          RegisterAdmin();
        else
          RegisterRetailer();
      }

      function RegisterAdmin() {
        DataFactory.registerAdmin($scope.vm)
          .then(function (response) {
          if (response.data.success === "1") {
            id = Flash.create('success', response.data.message, $rootScope.flash.autoHide,
                  {class: 'custom-class', id: 'custom-id'}, true);
            $location.path('/login');
          } else {
            id = Flash.create('danger', response.data.message, $rootScope.flash.autoHide,
                  {class: 'custom-class', id: 'custom-id'}, true);
            vm.dataLoading = false;
          }
        });
      }

      function RegisterRetailer() {
        DataFactory.registerRetailer($scope.vm)
        .then(function (response) {
          if (response.data.success === "1") {
            id = Flash.create('success', response.data.message, $rootScope.flash.autoHide,
                  {class: 'custom-class', id: 'custom-id'}, true);
            $location.path('/login');
          } else {
            id = Flash.create('danger', response.data.message, $rootScope.flash.autoHide,
                  {class: 'custom-class', id: 'custom-id'}, true);
            vm.dataLoading = false;
          }
        });
      }

      function Logout() {
        vm.dataLoading = true;
        if (isLoggedIn()) {
          AuthenticationService.logout(vm.username, vm.loggedInUserTime, function (response) {
            if (response.data.success === "1") {
              // reset user details so that the rest of the app can check them as required
              resetUserLoginDetails();

              id = Flash.create('success', response.data.message, $rootScope.flash.autoHide,
                    { class: 'custom-class', id: 'custom-id' }, true);
              AuthenticationService.setCredentials(vm.username, vm.password);

              setLoggedIn(false);
              setAdmin(false);

            } else {
              id = Flash.create('danger', response.data.message, $rootScope.flash.autoHide,
                    {class: 'custom-class', id: 'custom-id'}, true);
            }
            vm.dataLoading = false;
          });
        }
        $location.path('/login');
      }

      function ListRetailers() {
        // get list of retailers to use in form
        DataFactory.listRetailers()
          .then(function (retailers) {
              vm.allRetailers = retailers.data;
              $rootScope.retailers = retailers.data;
            }, // error handling function for  listRetailers()
            function (error) { $scope.status = 'Unable to load Retailers ' + error.message;   }
          );
      }

      // selectively enables disables elements bon the navbar depending on
      // whether the user is logged in or if = Administrator or Customer
      // vars to control navbar contents


      const selectTab   = setTab   => $rootScope.tab = setTab;
      const isSelected  = checkTab => $rootScope.tab === checkTab;

      // const isAdmin     = ()       => $rootScope.admin;
      // const isRetailer  = ()       => $rootScope.retailer;
      // const isMob       = ()       => $rootScope.mob;

      const isLoggedIn  = ()       => $rootScope.loggedIn;
      const setLoggedIn = state    => $rootScope.loggedIn   = state;
      const setAdmin    = state    => $rootScope.isAdmin    = state;
      const setRetailer = state    => $rootScope.isRetailer = state;
      const setMob      = state    => $rootScope.mob        = state;

      const getFirstname = () => { return vm.firstname; }

      const resetUserLoginDetails = () => {
        $rootScope.userType         = "Retailer";
        $rootScope.loggedInUserTime = "";
        $rootScope.loggedInUserId   = "";
        $rootScope.loggedInUserName = "";
      };

      const setUserLoginDetails = (data) => {
        "use strict";

        $rootScope.globals.currentUser = data;


        $rootScope.userType         = data.userType;
        $rootScope.loggedInUserTime = data.startTime;
        $rootScope.loggedInUserId   = data.userId;
        $rootScope.loggedInUserName = $scope.vm.username;
      };

      return auth;
}]);
