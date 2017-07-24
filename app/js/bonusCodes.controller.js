
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
          },
          function (error) { $scope.status = 'Unable to load BonusCode ' + error.message; });
      vm.dataLoading = false;
    }



    function AddBonusCode(bonusCode) {
      vm.dataLoading = true;
      let bonusCode = new BonusCode();
      DataFactory.addBonusCode(bonusCode)
        .then( function(response) {
            $scope.bonusCode = Common.createObjects(response.data, bonusCode);
          },
          function (error) { $scope.status = 'Unable to set bonusCode ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
