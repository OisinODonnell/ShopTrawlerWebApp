
myApp.controller('BonusCodesController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.bonusCodes       = [];
    $scope.bonusCodeId     = 0;
    $scope.bonusCode       = {};


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListBonusCodes();

    let factory = {
      ListBonusCodes : ListBonusCodes, // all users
      AddBonusCode  : AddBonusCode,
      GetBonusCode  : GetBonusCode,  // single user
    };

    return factory;



    function ListBonusCodes() {
      vm.dataLoading = true;
      let bonusCode = new BonusCode();
      DataFactory.listBonusCodes()
        .then( function(response) {
            $scope.bonusCodes = Common.createObjects(response.data, bonusCode);
          },
          function (error) { $scope.status = 'Unable to load BonusCodes ' + error.message; });
      vm.dataLoading = false;
    }

    function GetBonusCode(bonusCodeId) {
      vm.dataLoading = true;
      let bonusCode = new BonusCode();
      DataFactory.getBonusCode(bonusCodeId)
        .then( function(response) {
            $scope.bonusCode = Common.createObjects(response.data, bonusCode);
            $scope.bonusCode.storeName = getStoreName($scope.bonusCode.getRetailerid());
            $scope.bonusCode.userFullname = getStoreName($scope.bonusCode.getUserid());

          },
          function (error) { $scope.status = 'Unable to load BonusCode ' + error.message; });
      vm.dataLoading = false;
    }



    function AddBonusCode(newBonusCode) {
      vm.dataLoading = true;
      let bonusCode = new BonusCode();
      DataFactory.addBonusCode(newBonusCode)
        .then( function(response) {
            $scope.bonusCode = Common.createObjects(response.data, bonusCode);
          },
          function (error) { $scope.status = 'Unable to set bonusCode ' + error.message; });
      vm.dataLoading = false;
    }

    function getStoreName(id) {
      let retailer = new Retailer();
      DataFactory.getRetailer(id)
        .then( function(response) {
            $scope.retailer = Common.createObjects(response.data, retailer);
            return retailer.getStoreName();
          },
          function (error) { $scope.status = 'Unable to set bonusCode ' + error.message; });
    }

    function getUserFullname(id) {
      let user = new User();
      DataFactory.getUser(id)
        .then( function(response) {
            $scope.user = Common.createObjects(response.data, user);
            return $scope.user.getFirstname() + " " + $scope.user.getSurname()
          },
          function (error) { $scope.status = 'Unable to set bonusCode ' + error.message; });
    }



  }]);
