
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
          let userObj = new User();
          $rootScope.currentUser = user.data;

          // 2nd Call tro rest ... load all users
          DataFactory.listUsers()
            .then(function (users) {
              vm.allUsers =  Common.createObjects(users.data, userObj);
              $rootScope.users = vm.allUsers;

              let retailer = new Retailer();
              // 3rd Call to Rest ... load all retailers
              DataFactory.listRetailers()
                .then(function (retailers) {
                  vm.allRetailers =  Common.createObjects(retailers.data, retailer);
                  $rootScope.retailers = vm.allRetailers;
                  console.log("Retailer Count : " + $rootScope.retailers.length);
                  console.log("User Count : " + $rootScope.users.length);
                  $rootScope.currentUser.retailerid = findRetailerid(vm.allRetailers, $rootScope.currentUser.userid)

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

    function findRetailerid(retailers, userid) {
      let retailerid = 0;
      if ($rootScope.currentUser.type === "Retailer") {
        retailers.some(function (retailer) {
          if (retailer.getManagerid() === userid)
            retailerid =  retailer.getRetailerid();
        });
      }
      return retailerid; // no retailer found.
    }


    function deleteUser(id){
      DataFactory.deleteUserById (id)
        .then(function () {
          loadAllUsers();
        });
    }

    /** ====================================================================
     * Setup the parameters to read/write to/from AWS cloud storage
     * This uses the library AWS-SDK
     */
    function setupAWS() {
      $rootScope.AWS.ACCESS_KEY = "AKIAICMSROCKZAETKBIA";
      $rootScope.AWS.SECRET_KEY = "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";

      $rootScope.AWS.BUCKET_C   = "/shoptrawler/Content";
      $rootScope.AWS.BUCKET_LRC = "/shoptrawler/LRContent";
      $rootScope.AWS.BUCKET_SC  = "/shoptrawler/ShoppingCenter";
      $rootScope.AWS.BUCKET_RET = "/shoptrawler/Retailer";

      $rootScope.AWS.params_c   = {};
      $rootScope.AWS.params_lrc = {};
      $rootScope.AWS.params_sc  = {};
      $rootScope.AWS.params_ret = {};

      $rootScope.AWS.bucket_c   = "";
      $rootScope.AWS.bucket_lrc = "";
      $rootScope.AWS.bucket_sc  = "";
      $rootScope.AWS.bucket_ret = "";

      $rootScope.AWS.config.region = 'eu-west-1'; // Ireland
      $rootScope.AWS.config.update({ accessKeyId     : $rootScope.AWS.ACCESS_KEY,
                                     secretAccessKey : $rootScope.AWS.SECRET_KEY     });



    }

  }]);
