
myApp.controller('LoyaltyRewardsController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.loyaltyRewards        = [];
    $scope.loyaltyReward        = {};
    $scope.loyaltyRewardId       = 0;
    $scope.retailerId            = 0;

    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListLoyaltyRewards();

    let factory = {
      ListLoyaltyReward    : ListLoyaltyRewards,
      AddLoyaltyReward  : AddLoyaltyReward,
      GetLoyaltyReward : GetLoyaltyReward,
    };

    return factory;



    function ListLoyaltyRewards() {
      vm.dataLoading = true;
      let loyaltyRewards;
      let loyaltyReward = new LoyaltyReward();
      DataFactory.listLoyaltyRewards()
        .then( function(response) {
          loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
          loyaltyRewards.forEach(function (loyaltyReward, key) {
            loyaltyReward.storeName = Common.findStoreName(loyaltyReward.retailerid);
            loyaltyRewards[key] = loyaltyReward;
          });
          $scope.loyaltyRewards = loyaltyRewards;
        },
        function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }

    function AddLoyaltyReward(newLoyaltyReward) {
      vm.dataLoading = true;
      let loyaltyReward = new LoyaltyReward();
      DataFactory.addLoyaltyReward(newLoyaltyReward)
        .then( function(response) {
            $scope.loyaltyRewards = Common.createObjects(response.data, loyaltyReward);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }

    function GetLoyaltyReward(id) {
      vm.dataLoading = true;
      let loyaltyReward = new LoyaltyReward();
      DataFactory.getLoyaltyReward(id)
        .then( function(response) {
            $scope.loyaltyReward = Common.createObjects(response.data, loyaltyReward);
          },
          function (error) { $scope.status = 'Unable to load LoyaltyRewards ' + error.message; });
      vm.dataLoading = false;
    }





  }]);
