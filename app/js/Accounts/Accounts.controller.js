/**
 * Created by oisin on 07/05/2017.
 */

myApp.controller('AccountsController', ['DataFactory','$scope','Common',
  function ( DataFactory,$scope,Common) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.accounts       = 0;
    $scope.accountId      = 0;
    $scope.sessions = {};

    // THis script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListAccounts();
    ListSessions();

    let factory = {
      ListAccounts : ListAccounts,
      ListSessions : ListSessions,
    };

    return factory;

    function ListAccounts() {
      vm.dataLoading = true;
      let account = new Account();
      DataFactory.getAccounts()
        .then( function(response) {
            $scope.accounts = Common.createObjects(response.data, account);

          },
          function (error) { $scope.status = 'Unable to load Account data ' + error.message; });
      vm.dataLoading = false;
    }

    function ListSessions() {
      vm.dataLoading = true;
      let session = new Session();
      DataFactory.getSessions()
        .then( function(response) {
            $scope.sessions = Common.createObjects(response.data, session);

          },
          function (error) { $scope.status = 'Unable to load Session data ' + error.message; });
      vm.dataLoading = false;
    }


  }]);



