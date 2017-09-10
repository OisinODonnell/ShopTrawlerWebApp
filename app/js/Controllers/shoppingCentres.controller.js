myApp.controller('ShoppingCentresController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','AwsFactory','toast',

  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, AwsFactory,toast) {
    let vm = this;
    $rootScope.type = "SC";
    $scope.myDate = new Date();
    $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() - 2,
      $scope.myDate.getDate());
    $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
      let day = date.getDay();
      return day === 0 || day === 6;
    };

    let colDefs = {};

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below
      ListShoppingCentres();
      colDefs = Globals.ShoppingCentreColumnDefs;
      vm.chartTitle = "Shopping Center Details";
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
    }

    $scope.uploadFile = function(grid, row) {

      let files = this.editFileChooserCallback.arguments[2];
      $rootScope.file = files[0];


      let entry = "";
      // AwsFactory.setupAWSconfig($rootScope.type);
      // AwsFactory.setupAWSFileParams($rootScope.type, grid, row, this);
      // Common.updateGrid(grid, row);

      if (! Common.checkFileSize($rootScope.file)) {
        toast({
          duration  : 2000,
          message   : "File is too big! must be less than : 10MB" ,
          className : "alert-warning"
        });
        Flash.create("danger", "File is too big [ " + Common.fileSizeLabel() + " ] ... please reduce size and try again Limit is 10 MBytes", 4000)

        return false;
      } else {

        AwsFactory.setupAWSconfig($rootScope.type);
        AwsFactory.setupAWSFileParams($rootScope.type, grid, row, $rootScope.file, grid.entity.shoppingCentreid);
        AwsFactory.sendFile();

        Common.updateGrid(grid, row);
        toast({
          duration  : 2000,
          message   : "File [ " + $rootScope.entry + " ] uploaded to Amazon Web Services Successfully!  ",
          className : "alert-success"
        });
      }
    };

    // default content
    colDefs[2].editFileChooserCallback = $scope.uploadFile;
    // logos
    colDefs[7].editFileChooserCallback = $scope.uploadFile;
    colDefs[8].editFileChooserCallback = $scope.uploadFile;
    colDefs[9].editFileChooserCallback = $scope.uploadFile;

    $scope.vm = vm;
    vm.editRow = RowEditor.editRowShoppingCentre;
    vm.serviceGrid = Common.setupUiGrid(Globals.ShoppingCentreColumnDefs, $scope.allowEditRow )




    // ListShoppingCentres();

    function ListShoppingCentres() {
      let shoppingCentres;
      vm.dataLoading = true;
      let shoppingCentre = new ShoppingCentre();
      DataFactory.listShoppingCentres()
        .then( function(response) {
            shoppingCentres = Common.createObjects(response.data, shoppingCentre);
            shoppingCentres[0].fullname = Common.findUsersName(shoppingCentres[0].getAdminid());
            vm.serviceGrid.data = shoppingCentres;
            $scope.shoppingCentres = shoppingCentres;
            $scope.gridStyle = Common.gridStyle($scope.shoppingCentres.length);

          },
          function (error) { $scope.status = 'Unable to load Shopping centres ' + error.message; });
      vm.dataLoading = false;
    }
    // function ListShoppingCentreBy(type) {
    //   vm.dataLoading = true;
    //   let shoppingCentre = new ShoppingCentre();
    //   DataFactory.getShoppingCentre(type)
    //     .then( function(response) {
    //         $scope.shoppingCentres = Common.createObjects(response.data, shoppingCentre);
    //         vm.serviceGrid.data = $scope.shoppingCentres;
    //         $scope.gridStyle = Common.gridStyle($scope.shoppingCentres.length);
    //       },
    //       function (error) { $scope.status = 'Unable to load Shopping Centre ' + error.message; });
    //   vm.dataLoading = false;
    // }


    $scope.addRow = function () {
      $rootScope.addingRow = true;
      let newService = Globals.addRowShoppingCentre;
      let rowTmp = {};
      rowTmp.entity = newService;
      vm.editRow($scope.vm.serviceGrid, rowTmp);
    };

  }]);
