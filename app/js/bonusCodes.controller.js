myApp.controller('BonusCodesController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.bonusCodes       = [];
    $scope.bonusCodeId     = 0;
    $scope.bonusCode       = {};

    $scope.vm = vm;

    vm.editRow = RowEditor.editRowBonusCode;
    vm.serviceGrid = Globals.GridDefaults;
    vm.serviceGrid.columnDefs = Globals.BonusCodeColumnDefs;


    if ($rootScope.currentUser.type === "Administrator")
      ListBonusCodes();
    else
      ListBonusCodesByRetailer($rootScope.currentUser.userid);

    let factory = {
      ListBonusCodes : ListBonusCodes, // all users
      ListBonusCodesByRetailer : ListBonusCodesByRetailer, // from logged in retailer
      AddBonusCode  : AddBonusCode,
      GetBonusCode  : GetBonusCode,  // single user
      GetBonusCodes  : GetBonusCodes,  // single mobil user
    };



    function ListBonusCodes() {
      vm.dataLoading = true;
      let bonusCodes;
      let bonusCode = new BonusCode();
      DataFactory.listBonusCodes()
        .then( function(response) {
            bonusCodes = Common.createObjects(response.data, bonusCode);
            bonusCodes.forEach(function (bonusCode, key) {
              bonusCode.fullname = Common.findUsersName(bonusCode.userid);
              bonusCode.storeName = Common.findStoreName(bonusCode.retailerid);
              bonusCodes[key] = bonusCode;
            });
            $scope.bonusCodes = bonusCodes;
            vm.serviceGrid.data = bonusCodes;
            $scope.gridStyle = Common.gridStyle(bonusCodes.length)

          },
          function (error) { $scope.status = 'Unable to load BonusCodes ' + error.message; });
      vm.dataLoading = false;
    }

    function ListBonusCodesByRetailer(id) {
      vm.dataLoading = true;
      let bonusCodes;
      let bonusCode = new BonusCode();
      DataFactory.listBonusCodesByRetailer(id)
        .then( function(response) {
            bonusCodes = Common.createObjects(response.data, bonusCode);
            bonusCodes.forEach(function (bonusCode, key) {
              bonusCode.fullname = Common.findUsersName(bonusCode.userid);
              bonusCode.storeName = Common.findStoreName(bonusCode.retailerid);
              bonusCodes[key] = bonusCode;

            });
            $scope.bonusCodes = bonusCodes;
            vm.serviceGrid.data = bonusCodes;
            $scope.gridStyle = Common.gridStyle(bonusCodes.length)
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

    function GetBonusCodes(id) {
      vm.dataLoading = true;
      let bonusCode = new BonusCode();
      DataFactory.getBonusCode(id)
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

    $scope.addRow = function () {
      let newService = Globals.addRowBonusCode;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

    return factory;
  }]);
