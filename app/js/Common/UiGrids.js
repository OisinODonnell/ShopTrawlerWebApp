// import myApp from "/app/app.js"

myApp.factory('UiGrids',['$rootScope','uiGridConstants',
  function ($rootScope, uiGridConstants) {

  let vm = this;
  let grid = {};

  //
  // grid.setupBeaconGrid     = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //   vm.serviceGrid.columnDefs = [{
  //     field: 'beaconid', displayName: 'Beacon ID',
  //     enableSorting: true, enableCellEdit: false,
  //     type: 'number',
  //     width: 60,
  //     sort: {
  //       direction: uiGridConstants.ASC,
  //       priority: 1,
  //     },
  //   }, {
  //     field: 'getLocationid()', displayName: 'Location ID',
  //     enableSorting: true, enableCellEdit: false,
  //   }, {
  //     field: 'getMajor()', displayName: 'Major',
  //     enableSorting: true, enableCellEdit: false,
  //   }, {
  //     field: 'getMinor()', displayName: 'Minor',
  //     enableSorting: true, enableCellEdit: false,
  //   }, {
  //     field: 'getTransmitPower()', displayName: 'Transmit Power',
  //     enableSorting: true, enableCellEdit: false
  //   }, {
  //     field: 'getUuid()', displayName: 'UUID',
  //     enableSorting: true, enableCellEdit: false
  //   }];
  // };
  //
  // grid.setupBonusCodeGrid  = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getBonusCodeid()',displayName : 'Bonus Code ID',
  //     enableSorting : true,      enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getDateTime()',   displayName : 'Date Time',
  //     enableSorting : true,      enableCellEdit : false,
  //   }, {
  //     field : 'getRetailerid()', displayName : 'Retailer ID',
  //     enableSorting : true,      enableCellEdit : false,
  //   }, {
  //     field : 'getUserid()',     displayName : 'User ID',
  //     enableSorting : true,      enableCellEdit : false,
  //   }, {
  //     field : 'getValue()',      displayName : 'Value',
  //     enableSorting : true,      enableCellEdit : false
  //   } ];
  // };
  //
  // grid.setupContentGrid    = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : '',      displayName : '',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getContentid()',   displayName : 'Content ID',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getEndDate()',     displayName : 'End Date',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getPage1()',       displayName : 'Page 1',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getPage2()',       displayName : 'Page 2',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getPage3()',       displayName : 'Page 3',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getRetailerid()',  displayName : 'Retailer ID',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getStartDate()',   displayName : 'Start Date',
  //     enableSorting : true,       enableCellEdit : false
  //   }];
  // };
  //
  // grid.setupFavouriteGrid  = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getUserid()',      displayName : 'User ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getRetailerid()',  displayName : 'Retailer ID',
  //     enableSorting : true,       enableCellEdit : false,
  //   }];
  // };
  //
  // grid.setupLocationGrid   = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getLocationid()',        displayName : 'locationid',
  //     enableSorting : true,             enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getAltitude()',          displayName : 'Altitude',
  //     enableSorting : true,             enableCellEdit : false,
  //   }, {
  //     field : 'getGpsLongtitude()',     displayName : 'GPS Longtitude',
  //     enableSorting : true,             enableCellEdit : false,
  //   }, {
  //     field : 'getGpsLatitude()',       displayName : 'GPS Latitude',
  //     enableSorting : true,             enableCellEdit : false,
  //   }, {
  //     field : 'getLocationInShoppingCentre()', displayName : 'Location In Shopping Centre',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getLocationType()',      displayName : 'Location Type',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',
  //     enableSorting : true,             enableCellEdit : false
  //   }];
  // };
  //
  // grid.setupLoyaltyRewardGrid = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getLoyaltyRewardid()',      displayName : 'Loyalty Reward ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getEndDate()',      displayName : 'End Date',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getPointsPerVisit()',      displayName : 'Points Per Visit',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getRewardImage()',      displayName : 'Reward Image',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getRetailerid()',      displayName : 'Retailer ID',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getRewardTitle()',      displayName : 'Reward Title',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getStartDate()',      displayName : 'Start Date',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getVisitTime()',      displayName : 'Visit Time',
  //     enableSorting : true,       enableCellEdit : false
  //   } ];
  // };
  //
  // grid.setupRatingGrid     = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getUserid()',      displayName : 'User ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getDate()',        displayName : 'date',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getRetailerid()',  displayName : 'retailerid',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getRating()',      displayName : 'rating',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getReview()',      displayName : 'review',
  //     enableSorting : true,       enableCellEdit : false
  //   }];
  // };
  //
  // grid.setupRetailerGrid   = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //   this.retailerid	                  = this.setRetailerid                (retailerid);
  //   this.defaultContentPage1	        = this.setDefaultContentPage1       (defaultContentPage1);
  //   this.defaultContentPage2	        = this.setDefaultContentPage2       (defaultContentPage2);
  //   this.defaultContentPage3	        = this.setDefaultContentPage3       (defaultContentPage3);
  //   this.defaultLoyaltyRewardImage	  = this.setDefaultLoyaltyRewardImage (defaultLoyaltyRewardImage);
  //   this.facebookUrl	                = this.setFacebookUrl               (facebookUrl);
  //   this.twitterUrl	                  = this.setTwitterUrl                (twitterUrl);
  //   this.websiteUrl	                  = this.setWebsiteUrl                (websiteUrl);
  //   this.logoImageSmall	              = this.setLogoImageSmall            (logoImageSmall);
  //   this.logoImageLarge	              = this.setLogoImageLarge            (logoImageLarge);
  //   this.logoImageMedium	            = this.setLogoImageMedium           (logoImageMedium);
  //   this.phone                        = this.setPhone                     (phone);
  //   this.storeName                    = this.setStoreName                 (storeName);
  //   this.headerBackgroundImage	      = this.setHeaderBackgroundImage     (headerBackgroundImage);
  //   this.managerid	                  = this.setManagerid                 (managerid);
  //   this.shoppingCentreid	            = this.setShoppingCentreid          (shoppingCentreid);
  //   this.storeDefaultContentPage1	    = this.setStoreDefaultContentPage1  (storeDefaultContentPage1);
  //   this.zoneid	                      = this.setZoneid                    (zoneid);
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getRetailerid()',      displayName : 'Retailer ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getDefaultContentPage1()', displayName : 'Default Content Page1',
  //     enableSorting : true,             enableCellEdit : false,
  //   }, {
  //     field : 'getDefaultContentPage2()', displayName : 'Default Content Page2',
  //     enableSorting : true,             enableCellEdit : false,
  //   }, {
  //     field : 'getDefaultContentPage3()', displayName : 'Default Content Page3',
  //     enableSorting : true,             enableCellEdit : false,
  //   }, {
  //     field : 'getDefaultLoyaltyRewardImage()', displayName : 'Default Loyalty Reward Image',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getFacebookUrl()',       displayName : 'Facebook Url',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getTwitterUrl()',        displayName : 'Twitter Url',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getWebsiteUrl()',        displayName : 'Website Url',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getLogoImageSmall()',    displayName : 'Logo Image Small',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getLogoImageLarge()',    displayName : 'Logo Image Large',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getLogoImageMedium()',   displayName : 'Logo Image Medium',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getPhone()',             displayName : 'Phone',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getStoreName()',         displayName : 'Store Name',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getHeaderBackgroundImage()', displayName : 'Header Background Image',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getManagerid()',         displayName : 'Manager ID',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getStoreDefaultContentPage1()',  displayName : 'Store Default Content Page1',
  //     enableSorting : true,             enableCellEdit : false
  //   }, {
  //     field : 'getZoneid()',            displayName : 'Zone ID',
  //     enableSorting : true,             enableCellEdit : false
  //   } ];
  // };
  //
  // grid.setupShoppingCentreGrid = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getShoppingCentreid()',      displayName : 'Shopping Centre ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getAdminid()',         displayName : 'Admin ID',
  //     enableSorting : true,           enableCellEdit : false,
  //   }, {
  //     field : 'getContentPage()',     displayName : 'Content Page',
  //     enableSorting : true,           enableCellEdit : false,
  //   }, {
  //     field : 'getPhone()',           displayName : 'Phone',
  //     enableSorting : true,           enableCellEdit : false,
  //   }, {
  //     field : 'getFacebookUrl()',     displayName : 'Facebook Url',
  //     enableSorting : true,           enableCellEdit : false
  //   }, {
  //     field : 'getTwitterUrl()',      displayName : 'Twitter Url',
  //     enableSorting : true,           enableCellEdit : false
  //   }, {
  //     field : 'getWebsiteUrl()',      displayName : 'Website Url',
  //     enableSorting : true,           enableCellEdit : false
  //   }, {
  //     field : 'getLogoImageSmall()',  displayName : 'Logo Image Small',
  //     enableSorting : true,           enableCellEdit : false
  //   }, {
  //     field : 'getLogoImageMedium()', displayName : 'Logo Image Medium',
  //     enableSorting : true,           enableCellEdit : false
  //   },{
  //     field : 'getLogoImageLarge()',  displayName : 'Logo Image Large',
  //     enableSorting : true,           enableCellEdit : false
  //   } ];
  // };
  //
  // grid.setupUserGrid       = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //   this.userid	        = this.setUserid        (userid);
  //   this.firstname	    = this.setFirstname     (firstname);
  //   this.surname	      = this.setSurname       (surname);
  //   this.emailAddress	  = this.setEmailAddress  (emailAddress);
  //   this.phone	        = this.setPhone         (phone);
  //   this.gender	        = this.setGender        (gender);
  //   this.password	      = this.setPassword      (password);
  //   this.type	          = this.setType          (type);
  //   this.yob	          = this.setYob           (yob);
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getUserid()',      displayName : 'User ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getFirstname()',   displayName : 'Firstname',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getSurname()',     displayName : 'Surname',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getEmailAddress()',displayName : 'Email Address',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getPhone()',       displayName : 'Phone',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getGender()',      displayName : 'Gender',
  //     enableSorting : true,       enableCellEdit : false
  //   }, {
  //     field : 'getPassword()',    displayName : 'Password',
  //     enableSorting : true,       enableCellEdit : false
  //   },  {
  //     field : 'getType()',        displayName : 'Type',
  //     enableSorting : true,       enableCellEdit : false
  //   },{
  //     field : 'getYob()',         displayName : 'Yob',
  //     enableSorting : true,       enableCellEdit : false
  //   } ];
  // };
  //
  // grid.setupUserPointGrid  = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //   this.userid	        = this.setUserid     (userid);
  //   this.retailerid	    = this.setRetailerid (retailerid);
  //   this.points	        = this.setPoints     (points);
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getUserid()',      displayName : 'User ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getRetailerid()',  displayName : 'Retailer ID',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getPoints()',      displayName : 'Points',
  //     enableSorting : true,       enableCellEdit : false,
  //   } ];
  // };

  grid.setupVisitGrid      = (vm) => {

    $rootScope.vm = vm;

    vm.editRow = RowEditor.editRow;

    vm.serviceGrid = {
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      multiSelect: false,
      enableSorting: true,
      enableFiltering: true,
      enableGridMenu: true,
      rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
    };


    vm.serviceGrid.columnDefs = [ {
      field : 'getVisitid()',      displayName : 'Visit ID',
      enableSorting : true,       enableCellEdit : false,
      type : 'number',
      width : 60,
      sort : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {
      field : 'getEntryTimeReadable()',   displayName : 'Entry Time',
      enableSorting : true,       enableCellEdit : false,
    }, {
      field : 'getExitTimeReadable()',    displayName : 'Exit Time',
      enableSorting : true,       enableCellEdit : false,
    }, {
      field : 'getUserCreditedForVisit()',      displayName : 'User Credited For Visit',
      enableSorting : true,       enableCellEdit : false,
    }, {
      field : 'getDuration()',    displayName : 'Duration',
      enableSorting : true,       enableCellEdit : false
    }, {
      field : 'getUserid()',      displayName : 'User ID',
      enableSorting : true,       enableCellEdit : false
    }, {
      field : 'getZoneid()',      displayName : 'Zone ID',
      enableSorting : true,       enableCellEdit : false
    }];
  };
  //
  // grid.setupZoneGrid       = () => {
  //
  //   vm.editRow = RowEditor.editRow;
  //
  //   vm.serviceGrid = {
  //     enableRowSelection: true,
  //     enableRowHeaderSelection: false,
  //     multiSelect: false,
  //     enableSorting: true,
  //     enableFiltering: true,
  //     enableGridMenu: true,
  //     rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  //   };
  //
  //   vm.serviceGrid.columnDefs = [ {
  //     field : 'getZoneid()',      displayName : 'Zone ID',
  //     enableSorting : true,       enableCellEdit : false,
  //     type : 'number',
  //     width : 60,
  //     sort : {
  //       direction : uiGridConstants.ASC,
  //       priority : 1,
  //     },
  //   }, {
  //     field : 'getBeaconid()',      displayName : 'Beacon ID',
  //     enableSorting : true,       enableCellEdit : false,
  //   }, {
  //     field : 'getZoneName()',      displayName : 'Zone Name',
  //     enableSorting : true,       enableCellEdit : false,
  //   } ];
  // };


  return grid;

}]);

