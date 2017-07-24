myApp.controller('LoginController', ['$location', 'AuthenticationService','$rootScope','DataFactory','$scope','Flash',
    function ($location, AuthenticationService, $rootScope, DataFactory,$scope, Flash) {
      let vm = this;
      // user login/registration placeholders


      vm.userId       = 0;
      vm.firstname    = "";
      vm.surname      = "";
      vm.emailAddress = "";
      vm.phone        = "";
      vm.gender       = "Male";
      vm.password     = "";
      vm.type         = "Mobile";
      vm.yob          = 1992;

      // globals
      $rootScope.flash = {};
      $rootScope.userId = 15;
      $rootScope.flash.autoHide = 3000; // 3000ms
      $rootScope.flash.timeout = 3000; // 3 seconds

      $rootScope.loggedInUserId = 0;
      $rootScope.loggedInUserTime = 0;
      $rootScope.type = "Mobile";

      $scope.admin = false;
      $scope.cust = true;
      $scope.loggedIn = false;

      $scope.username = "";
      $scope.password = "";
      let id = null;

      $rootScope.tab = 1;
      $rootScope.admin = false;
      $rootScope.cust = true;
      $rootScope.loggedIn = false;

      let functions  = {};

      (function initController() {
          // reset login status
          AuthenticationService.ClearCredentials();
      })();

      functions.login = (username, password) =>  {
        vm.dataLoading = true;
        // setAdmin(false);
        // setLoggedIn(false);
        $rootScope.admin =  false;
        $rootScope.loggedIn = false;
        DataFactory.login($scope.vm.username,$scope.vm.password)
          .then(function (response) {
            if (response.data.success === "1") {
              // save user details so that the rest of the app can check them as required

              setUserLoginDetails(response.data);

              // show success
              id = Flash.create('success', response.data.message, $rootScope.flash.autoHide, {class: 'custom-class', id: 'custom-id'}, true);
              AuthenticationService.SetCredentials(vm.username, vm.password);

              // set  navbar controls
              setAdmin( $rootScope.userType === "ADMINISTRATOR" );
              setCust( $rootScope.userType === "CUSTOMER" );
              setLoggedIn(true);

              // finally set where to go next
              $location.path('/home');

            } else {

              id = Flash.create('danger', response.data.message, $rootScope.flash.autoHide, {class: 'custom-class', id: 'custom-id'}, true);
              setAdmin(false);
              setLoggedIn(false);

              vm.dataLoading = false;
              $location.path('/login');
            }
        })
    };

      // determine whther an admin or customer account is being created
      functions.register = () => {
        vm.dataLoading = true;
        $rootScope.loggedIn = false;
        setAdmin(false);
        setLoggedIn(false);
        "use strict";
        if ($scope.vm.isAdmin)
          functions.registerAdmin();
        else
          functions.registerCust();
      };


      functions.registerAdmin = () => {


        DataFactory.registerAdmin($scope.vm.name, $scope.vm.email, $scope.vm.password,"ADMINISTRATOR")
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
      };

      functions.registerCust = () => {
        if(isLoyaltyCard === 0) {
          $scope.vm.loyaltyCard = 0;
        } else {
          $scope.vm.loyaltyCard = 1;
        }
        DataFactory.registerCust($scope.vm.name, $scope.vm.email, $scope.vm.password, "CUSTOMER",
          $scope.vm.phone, $scope.vm.loyaltyCard, $scope.vm.addressStreet, $scope.vm.addressCity,
          $scope.vm.addressCountry, $scope.vm.paymentType )
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
        })
        };


      functions.logout = () => {
        vm.dataLoading = true;
        if (isLoggedIn()) {
          AuthenticationService.Logout(vm.username, vm.loggedInUserTime, function (response) {
            if (response.data.success === "1") {
              // reset user details so that the rest of the app can check them as required
              resetUserLoginDetails();

              id = Flash.create('success', response.data.message, $rootScope.flash.autoHide,
                    { class: 'custom-class', id: 'custom-id' }, true);
              AuthenticationService.SetCredentials(vm.username, vm.password);

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
      };

      // selectively enables disables elements bon the navbar depending on
      // whether the user is logged in or if = Administrator or Customer
      // vars to control navbar contents


      const selectTab   = setTab   => $rootScope.tab = setTab;
      const isSelected  = checkTab => $rootScope.tab === checkTab;

      const isAdmin     = ()       => $rootScope.admin;
      const isCust      = ()       => !$rootScope.admin;
      const isLoggedIn  = ()       => $rootScope.loggedIn;
      const setLoggedIn = state    => $rootScope.loggedIn = state;
      const setAdmin    = state    => $rootScope.admin    = state;
      const setCust     = state    => $rootScope.cust     = state;

      const resetUserLoginDetails = () => {
        $rootScope.userType = "CUSTOMER";
        $rootScope.loggedInUserTime = "";
        $rootScope.loggedInUserId = "";
        $rootScope.loggedInUserName = "";
      };

      const setUserLoginDetails = (data) => {
        "use strict";

        $rootScope.userType         = data.userType;
        $rootScope.loggedInUserTime = data.startTime;
        $rootScope.loggedInUserId   = data.accountId;
        $rootScope.loggedInUserName = $scope.vm.username;
      };

      return functions;
}]);

