myApp.controller('RetailersController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','Flash',
  function ( DataFactory,$scope,Common,$rootScope, $uibModal, RowEditor, uiGridConstants, Globals, Flash) {
    let vm = this;
    $scope.vm = vm;
    $rootScope.type = "RET";
    if ($rootScope.isAdmin) {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = true; // action below
    } else {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = true; // action below
    }

    // setup grid
    vm.editRow = RowEditor.editRowRetailer;
    vm.serviceGrid = Common.setupUiGrid(Globals.RetailerColumnDefs, $scope.allowEditRow )
    vm.chartTitle = "Retailers";
    ListRetailers();

    function updateGridOptions(collection, defaults) {
      // set of css options changing only in height for each row of collection
      let shopTrawlers =
        [ "",   "shopTrawler1",  "shopTrawler2",  "shopTrawler3",  "shopTrawler4",  "shopTrawler5",
                "shopTrawler6",  "shopTrawler7",  "shopTrawler8",  "shopTrawler9",  "shopTrawler" ];

      if ( collection.length <= 10 ) {
        $scope.gridStyle = shopTrawlers[collection.length];
        defaults.enablePagination = false;
        defaults.enableExpandAll = true;

      }
      return defaults;
    }

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
                let users = [];
                DataFactory.listUsersNotManagers() // get list of users not managers yet
                  .then( function(response){
                      users = Common.createObjects(response.data, user);
                      vm.usersNotManagers = users;
                      vm.serviceGrid.data = $scope.retailers;

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

    // function GetRetailer(id) {
    //   vm.dataLoading = true;
    //   let retailer = new Retailer();
    //   DataFactory.getRetailer(id)
    //     .then( function(response) {
    //         $scope.retailers = Common.createObjects(response.data, retailer);
    //         vm.serviceGrid.data = $scope.retailers;
    //       },
    //       function (error) { $scope.status = 'Unable to load Retailer ' + error.message; });
    //   vm.dataLoading = false;
    // }
    //
    // function EditRetailer(id) {
    //   vm.dataLoading = true;
    //   let retailer = new Retailer();
    //   DataFactory.editRetailers(id)
    //     .then( function(response) {
    //         $scope.retailer = Common.createObjects(response.data, retailer);
    //       },
    //       function (error) { $scope.status = 'Unable to load Retailer ' + error.message; });
    //   vm.dataLoading = false;
    // }
    //
    // function UpdateRetailer(changedRetailer) {
    //   vm.dataLoading = true;
    //   let retailer = new Retailer();
    //   DataFactory.updateRetailer(changedRetailer)
    //     .then( function(response) {
    //         $scope.retailer = Common.createObjects(response.data, retailer);
    //       },
    //       function (error) { $scope.status = 'Unable to load Retailer ' + error.message; });
    //   vm.dataLoading = false;
    // }

    $scope.addRow = function (row) {
      // $rootScope.addingRow = true;
      console.log("adding R");
      let retailer = new Retailer();
      retailer = Globals.NewRetailer;

      // retailer.managersName = Common.findStoreName($rootScope.currentUser.userid);

      vm.serviceGrid.data.push(retailer);
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

      DataFactory.addRetailer(retailer) // ok, now lets save the Retailer
      .then(function (response) {
          Flash.create("success", "Retailer added successfully", 2000);
          vm.serviceGrid.data = buildNewRetailers(response.data);
        },
        function (response) { // could not save
          Flash.create("danger", "Retailer not created : " + response.data.message, 4000);
        });

      console.log("save Row RET");
    };

    // the data from rest is passed in and parsed and combined with new Retailer objects.
    function buildNewRetailers(data) {
      let retailers;
      $scope.retailers = [];
      let retailer = new Retailer();

      retailers = Common.createObjects(data, retailer);
      // retailers.forEach(function (retailer, key) {
        // retailer = Common.setDatesAndIDs(retailer);
        // retailer.filename1="";
        // retailers[key] = retailer;
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
