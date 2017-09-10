myApp.controller('RetailersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','Flash','FileUploader','AwsFactory','toast',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, Flash,FileUploader, AwsFactory, toast) {
    let vm = this;
    $scope.vm = vm;
    $rootScope.type = "RET";

    $scope.uploader = new FileUploader();
    vm.upload = $scope.upload;

    let colDefs = {};

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = false; // action below
      ListRetailers();
      colDefs = Globals.RetailerColumnDefs2;
      vm.chartTitle = "Retailers";
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
      getRetailerBy($rootScope.currentUser.retailerid);
      colDefs = Globals.RetailerColumnDefs3;
      vm.chartTitle = "Store Details";
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
        AwsFactory.setupAWSFileParams($rootScope.type, grid, row, $rootScope.file, grid.entity.retailerid, grid.entity.storeName);
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
    colDefs[2].editFileChooserCallback  = $scope.uploadFile;
    colDefs[3].editFileChooserCallback  = $scope.uploadFile;
    colDefs[4].editFileChooserCallback  = $scope.uploadFile;
    // default loyalty reward
    colDefs[5].editFileChooserCallback  = $scope.uploadFile;
    // logos
    colDefs[9].editFileChooserCallback  = $scope.uploadFile;
    colDefs[10].editFileChooserCallback = $scope.uploadFile;
    colDefs[11].editFileChooserCallback = $scope.uploadFile;
    // header image
    colDefs[14].editFileChooserCallback = $scope.uploadFile;


    // setup grid
    vm.serviceGrid = Common.setupUiGrid(colDefs, $scope.allowEditRow )
    vm.editRow = RowEditor.editRowRetailer;
    vm.upload = $scope.upload;
    vm.uploadFile = $scope.uploadFile;

    /**
     * The method makes 3 calls to REST
     * Retrieving Retailers / Zones and users not yet managers
     *
     * These users form a drop down list where the administartor can select
     * from one of these as the Manager for the store
     */

    function ListRetailers() {
      vm.dataLoading = true;
      let retailers;
      let retailer = new Retailer();
      DataFactory.listRetailers() // get list of retailers to display in grid
        .then( function(response) {
            retailers = Common.createObjects(response.data, retailer);
            // vm.serviceGrid = updateGridOptions(retailers, vm.serviceGrid);
            $scope.retailers = retailers;

            let zones = [];
            let zone = new Zone();
            DataFactory.listZones() // get list of zones to use as drop down in modal popup
              .then( function(response){
                zones= Common.createObjects(response.data, zone);
                vm.zones = zones;

                let user = new User();
                let usersNotManagers = [];
                DataFactory.listUsersNotManagers() // get list of users not managers yet
                  .then( function(response){
                      usersNotManagers = Common.createObjects(response.data, user);
                      usersNotManagers.forEach(function (user, key) {
                        user.fullname = user.firstname + " " + user.surname;
                        usersNotManagers[key] = user;
                      });
                      $scope.usersNotManagers = usersNotManagers;
                      vm.usersNotManagers = usersNotManagers;
                      vm.serviceGrid.data = $scope.retailers;
                      // update each retailer with list of possible managers for use in grid
                      $scope.retailers.forEach(function (retailer, key) {
                        retailer.managers = vm.usersNotManagers;
                        $scope.retailers[key] = retailer;
                      });

                    },
                    function(error) { $scope.status = "Unable to load Users " + error.message; }
                )
              },
                function(error) { $scope.status = "Unable to load Zones " + error.message; }
              );
          },
          function (error) { $scope.status = 'Unable to load Retailers ' + error.message; }
        );
      vm.dataLoading = false;
    }

    function getRetailerBy(id) {
      vm.dataLoading = true;
      let retailers;
      let retailer = new Retailer();
      DataFactory.getRetailerBy(id) // get list of retailers to display in grid
        .then( function(response) {
            retailers = Common.createObjects(response.data, retailer);
            // vm.serviceGrid = updateGridOptions(retailers, vm.serviceGrid);
            $scope.retailers = retailers;
            vm.serviceGrid.data = $scope.retailers;

            let zones = [];
            let zone = new Zone();
          },
          function (error) { $scope.status = 'Unable to load Retailers ' + error.message; }
        );
      vm.dataLoading = false;
    }

    $scope.addRow = function (row) {
      // $rootScope.addingRow = true;
      console.log("adding R");
      let retailer = new Retailer();
      retailer = Globals.NewRetailer;

      // retailer.managersName = Common.findStoreName($rootScope.currentUser.userid);

      vm.serviceGrid.data.push(retailer);
     };


    $scope.addRow = function (row) {
      // add row to grid with default values
      console.log("adding LR");
      let retailer = new Retailer();
      retailer = Globals.NewRetailer;
      DataFactory.addDefaultRetailer($rootScope.currentUser.retailerid)
        .then( function(response){
            Flash.create("success", "Retailer Added successfully", 2000);
            vm.serviceGrid.data = buildNewRetailers(response.data);
            // retailer.retailedid = $rootScope.currentUser.retailerid;
            // retailer.storeName = Common.findStoreName($rootScope.currentUser.retailerid);
            // vm.serviceGrid.data.push(retailer);
          },
          function (message) {
            Flash.create("danger", "Default Retailer not added : " + response.data.message);
          });
    };







    // if id > 0 delete row from grid, else delete from grid and db.
    $scope.deleteRow = function(row) {
      if (row.entity.retailerid !== 0) { // edits made to existing row
        DataFactory.deleteRetailer(row.entity.retailerid)
          .then( function(response){
              Flash.create('success',"Retailer Deleted Successfully", 2000);
              vm.serviceGrid.data = buildNewRetailers(response.data);
            },
            function(response) {
              Flash.create('danger',"Retailer with id = ", row.entity.retailerid + " could not be deleted -> " + response.data.message );
              vm.serviceGrid.data = buildNewRetailers(response.data);
            });
      }

      // delete from row is down anyway.
      let index = vm.serviceGrid.data.indexOf(row.entity);
      vm.serviceGrid.data.splice(index, 1);

      console.log("delete Row RET");
    };

    $scope.saveRow = function(row) {
      // find retailerid
      // copy to new LR record
      // post to REST

      let retailer = new Retailer();
      // let userid = $rootScope.currentUser.userid;
      // let retailerid = Common.getRetailerid(userid);
      retailer = createNewRET(row.entity, 0);
      let index = vm.serviceGrid.data.indexOf(row.entity);

      if ($rootScope.isAdmin) {
        DataFactory.updateRetailer(retailer) // ok, now lets save the Retailer
          .then(function (response) {
              Flash.create("success", "Retailer saved successfully", 2000);
              vm.serviceGrid.data = buildNewRetailers(response.data);
            },
            function (response) { // could not save
              Flash.create("danger", "Retailer changes were not saved : " + response.data.message, 4000);
            });
      } else {
        DataFactory.updateRetailerByRetailer(retailer) // ok, now lets save the Retailer
          .then(function (response) {
              Flash.create("success", "Store Details saved successfully", 2000);
              vm.serviceGrid.data = buildNewRetailers(response.data);
            },
            function (response) { // could not save
              Flash.create("danger", "Store Details were not saved : " + response.data.message, 4000);
            });
      }
      console.log("save Row RET");
    };

    // the data from rest is passed in and parsed and combined with new Retailer objects.
    function buildNewRetailers(data) {
      let retailers;
      $scope.retailers = [];
      let retailer = new Retailer();

      retailers = Common.createObjects(data, retailer);
      // retailers.forEach(function (retailer, key) {
      //   retailer = Common.setDatesAndIDs(retailer);
      //   retailer.zoneid = retailer.retailerid;
      //   retailers[key] = retailer;
      // });
      $scope.retailers = retailers;
      return $scope.retailers;
    }

    // Prepare RET entity to be sent to db, reformatting dates and inserting retailerid also
    function createNewRET(entity, retailerid) {

      let retailer = new Retailer();

      retailer.setRetailerid(entity.retailerid);
      retailer.setDefaultContentPage1(entity.defaultContentPage1);
      retailer.setDefaultContentPage2(entity.defaultContentPage2);
      retailer.setDefaultContentPage3(entity.defaultContentPage3);
      retailer.setDefaultLoyaltyRewardImage(entity.defaultLoyaltyRewardImage);
      retailer.setFacebookUrl(entity.facebookUrl);
      retailer.setTwitterUrl(entity.twitterUrl);
      retailer.setWebsiteUrl(entity.websiteUrl);
      retailer.setLogoImageSmall(entity.logoImageSmall);
      retailer.setLogoImageLarge(entity.logoImageLarge);
      retailer.setLogoImageMedium(entity.logoImageMedium);
      retailer.setPhone(entity.phone);
      retailer.setStoreName(entity.storeName);
      retailer.setHeaderBackgroundImage(entity.headerBackgroundImage);
      if (entity.managerid == 0) retailer.setManagerid(null);

      // retailer.setManagerid                 (entity.managerid);
      retailer.setShoppingCentreid          (entity.shoppingCentreid);
      retailer.setStoreDefaultContentPage1  (entity.storeDefaultContentPage1);
      if (entity.zoneid == 0) retailer.setZoneid(null)
      // retailer.setZoneid                    (entity.zoneid);

      return retailer;
    }

    uiSelectWrap.$inject = ['$document', 'uiGridEditConstants'];
    function uiSelectWrap($document, uiGridEditConstants) {
      return function link($scope, $elm, $attr) {
        $document.on('click', docClick);

        function docClick(evt) {
          if ($(evt.target).closest('.ui-select-container').size() === 0) {
            $scope.$emit(uiGridEditConstants.events.END_CELL_EDIT);
            $document.off('click', docClick);
          }
        }
      };
    }

}]);
