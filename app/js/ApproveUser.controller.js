myApp.controller('ApproveUsersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;


    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below

      vm.editRow = RowEditor.approveRowUser;
      vm.serviceGrid = Common.setupUiGrid(Globals.ApproveUserColumnDefs, $scope.allowEditRow )
      $scope.vm = vm;
      ListUsersForApproval();

    }

    function ListUsersForApproval() {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.listUsersForApproval()
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
            vm.serviceGrid.data = $rootScope.users;
            $scope.gridStyle = Common.gridStyle($rootScope.users.length);
          },
          function (error) { $scope.status = 'Unable to load User data ' + error.message; }
        );
      vm.dataLoading = false;
    }




    /*
    Add new user, return updated list of users into rootScope
     */
    function AddRetailManager(newUser) {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.addRetailManager(newUser)
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
            vm.serviceGrid.data = $rootScope.users;

          },
          function (error) { $scope.status = 'Unable to add new user (manager) ' + error.message; }
        );
      vm.dataLoading = false;

    }

    /*
        Add new user, return updated list of users into $rootScope
     */
    function AddUser(newUser) {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.addUser(newUser)
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
          },
          function (error) { $scope.status = 'Unable to add new user data ' + error.message; });
      vm.dataLoading = false;

    }


    $scope.addRow = function () {
      let newService = Globals.addRowUser;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };


  }]);

myApp.controller('ApproveUserController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals) {
    let vm = this;

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below
    }


    $scope.vm = vm;

    vm.editRow = RowEditor.editRowUser;
    vm.serviceGrid = Common.setupUiGrid(Globals.UserColumnDefs, $scope.allowEditRow )

    ListUsersForApproval();


    // list inactive users (yet to be approved
    function ListUsersForApproval(active) {
      vm.dataLoading = true;
      let user = new User();
      DataFactory.listUsersForApproval(active)
        .then( function(response) {
            $rootScope.users = Common.createObjects(response.data, user);
            vm.serviceGrid.data = $rootScope.users;
            $scope.gridStyle = Common.gridStyle($rootScope.users.length);
          },
          function (error) { $scope.status = 'Unable to load User data ' + error.message; }
        );
      vm.dataLoading = false;
    }


  }]);
