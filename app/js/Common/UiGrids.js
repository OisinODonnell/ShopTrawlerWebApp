// import myApp from "/app/app.js"

myApp.factory('UiGrids',['$rootScope','uiGridConstants','Globals',
  function ($rootScope, uiGridConstants, Globals) {

  let grid = {};

  grid.setupBeaconGrid     = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [{
      field : 'beaconid',                        displayName    : 'Beacon ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction: uiGridConstants.ASC,
        priority: 1,
      },
    }, {      field: 'getLocationid()',         displayName: 'Location ID',enableCellEdit : false,
    }, {      field: 'getMajor()',              displayName: 'Major',
    }, {      field: 'getMinor()',              displayName: 'Minor',
    }, {      field: 'getTransmitPower()',      displayName: 'Transmit Power',
    }, {      field: 'getUuid()',               displayName: 'UUID',enableCellEdit : false,
    }];
  };

  grid.setupBonusCodeGrid  = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getBonusCodeid()',               displayName : 'Bonus Code ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getDateTime()',          displayName : 'Date Time',type:"date",enableCellEdit : false,
    }, {      field : 'getRetailerid()',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getUserid()',            displayName : 'User ID',enableCellEdit : false,
    }, {      field : 'getValue()',             displayName : 'Value',enableCellEdit : false,
    } ];
  };

  grid.setupContentGrid    = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getContentid()',                 displayName    : 'Content ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getEndDate()',           displayName : 'End Date',type:"date",
    }, {      field : 'getPage1()',             displayName : 'Page 1',
    }, {      field : 'getPage2()',             displayName : 'Page 2',
    }, {      field : 'getPage3()',             displayName : 'Page 3',
    }, {      field : 'getRetailerid()',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getStartDate()',         displayName : 'Start Date',type:"date",
    }];
  };

  grid.setupFavouriteGrid  = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getUserid()',                    displayName : 'User ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getRetailerid()',        displayName : 'Retailer ID',enableCellEdit : false,
    }];
  };

  grid.setupLocationGrid   = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getLocationid()',                displayName    : 'locationid',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getAltitude()',          displayName : 'Altitude',
    }, {      field : 'getGpsLongtitude()',     displayName : 'GPS Longtitude',
    }, {      field : 'getGpsLatitude()',       displayName : 'GPS Latitude',
    }, {      field : 'getLocationInShoppingCentre()',  displayName : 'Location In Shopping Centre',
    }, {      field : 'getLocationType()',      displayName : 'Location Type',
    }, {      field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',enableCellEdit : false,
    }];
  };

  grid.setupLoyaltyRewardGrid = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getLoyaltyRewardid()',           displayName    : 'Loyalty Reward ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getEndDate()',           displayName : 'End Date',type:"date",
    }, {      field : 'getPointsPerVisit()',    displayName : 'Points Per Visit',
    }, {      field : 'getRewardImage()',       displayName : 'Reward Image',
    }, {      field : 'getRetailerid()',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getRewardTitle()',       displayName : 'Reward Title',
    }, {      field : 'getStartDate()',         displayName : 'Start Date',type:"date",
    }, {      field : 'getVisitTime()',         displayName : 'Visit Time',
    } ];
  };

  grid.setupRatingGrid     = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getUserid()',                    displayName : 'User ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getDate()',              displayName : 'date',type:"date",
    }, {      field : 'getRetailerid()',        displayName : 'retailerid',enableCellEdit : false,
    }, {      field : 'getRating()',            displayName : 'rating',
    }, {      field : 'getReview()',            displayName : 'review',
    }];
  };

  grid.setupRetailerGrid   = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getRetailerid()',                displayName : 'Retailer ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getDefaultContentPage1()',displayName : 'Default Content Page1',
    }, {      field : 'getDefaultContentPage2()',displayName : 'Default Content Page2',
    }, {      field : 'getDefaultContentPage3()',displayName : 'Default Content Page3',
    }, {      field : 'getDefaultLoyaltyRewardImage()', displayName : 'Default Loyalty Reward Image',
    }, {      field : 'getFacebookUrl()',       displayName : 'Facebook Url',
    }, {      field : 'getTwitterUrl()',        displayName : 'Twitter Url',
    }, {      field : 'getWebsiteUrl()',        displayName : 'Website Url',
    }, {      field : 'getLogoImageSmall()',    displayName : 'Logo Image Small',
    }, {      field : 'getLogoImageLarge()',    displayName : 'Logo Image Large',
    }, {      field : 'getLogoImageMedium()',   displayName : 'Logo Image Medium',
    }, {      field : 'getPhone()',             displayName : 'Phone',
    }, {      field : 'getStoreName()',         displayName : 'Store Name',
    }, {      field : 'getHeaderBackgroundImage()', displayName : 'Header Background Image',
    }, {      field : 'getManagerid()',         displayName : 'Manager ID',enableCellEdit : false,
    }, {      field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',enableCellEdit : false,
    }, {      field : 'getStoreDefaultContentPage1()',  displayName : 'Store Default Content Page1',
    }, {      field : 'getZoneid()',            displayName : 'Zone ID',enableCellEdit : false,
    } ];
  };

  grid.setupShoppingCentreGrid = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getShoppingCentreid()',          displayName : 'Shopping Centre ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getAdminid()',           displayName : 'Admin ID',enableCellEdit : false,
    }, {      field : 'getContentPage()',       displayName : 'Content Page',
    }, {      field : 'getPhone()',             displayName : 'Phone',
    }, {      field : 'getFacebookUrl()',       displayName : 'Facebook Url',
    }, {      field : 'getTwitterUrl()',        displayName : 'Twitter Url',
    }, {      field : 'getWebsiteUrl()',        displayName : 'Website Url',
    }, {      field : 'getLogoImageSmall()',    displayName : 'Logo Image Small',
    }, {      field : 'getLogoImageMedium()',   displayName : 'Logo Image Medium',
    },{       field : 'getLogoImageLarge()',    displayName : 'Logo Image Large',
    } ];
  };

  grid.setupUserGrid       = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getUserid()',                    displayName    : 'User ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getFirstname()',         displayName : 'Firstname',
    }, {      field : 'getSurname()',           displayName : 'Surname',
    }, {      field : 'getEmailAddress()',      displayName : 'Email Address',
    }, {      field : 'getPhone()',             displayName : 'Phone',
    }, {      field : 'getGender()',            displayName : 'Gender',
    }, {      field : 'getPassword()',          displayName : 'Password',
    }, {      field : 'getType()',              displayName : 'Type',
    }, {      field : 'getYob()',               displayName : 'Yob',
    } ];
  };

  grid.setupUserPointGrid  = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getUserid()',                    displayName    : 'User ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getRetailerid()',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getPoints()',            displayName : 'Points',
    } ];
  };

  grid.setupVisitGrid      = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getVisitid()',                   displayName : 'Visit ID',
      enableSorting : true,                     enableCellEdit : false,
      type : 'number',
      width : 60,
    }, { field : 'getEntryTimeReadable()',      displayName : 'Entry Time',enableCellEdit : false,type:"date",
    }, { field : 'getExitTimeReadable()',       displayName : 'Exit Time',enableCellEdit : false,type:"date",
    }, { field : 'getUserCreditedForVisit()',   displayName : 'User Credited For Visit',enableCellEdit : true,
    }, { field : 'getDuration()',               displayName : 'Duration',enableCellEdit : false,
    }, { field : 'getUserid()',                 displayName : 'User ID',enableCellEdit : false,
    }, { field : 'getZoneid()',                 displayName : 'Zone ID',enableCellEdit : false,
    }, { field : 'fullname',                    displayName : 'Fullname',enableCellEdit : false,
    }, { field : 'storeName',                   displayName : 'Store Name',enableCellEdit : false,

    }];
  };

  grid.setupZoneGrid       = (vm) => {

    $rootScope.vm   = vm;
    vm.editRow      = RowEditor.editRow;
    vm.serviceGrid  = Globals.GridDefaults;

    vm.serviceGrid.columnDefs = [ {
      field : 'getZoneid()',                    displayName    : 'Zone ID',
      enableSorting : true,                     enableCellEdit : false,
      type  : 'number',
      width : 60,
      sort  : {
        direction : uiGridConstants.ASC,
        priority : 1,
      },
    }, {      field : 'getBeaconid()',          displayName : 'Beacon ID',enableCellEdit : false,
    }, {      field : 'getZoneName()',          displayName : 'Zone Name',
    } ];
  };


    grid.rowTemplate = () => {

      return '<div ng-dblclick = "grid.appScope.vm.editRow(grid, row)" ' +
        ' ng-repeat     = "(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name" ' +
        ' class         = "ui-grid-cell" ' +
        ' ng-class      = "{ ui-grid-row-header-cell: col.isRowHeader }" ' +
        ' ui-grid-cell  >' +
        '</div>';
    };





  return grid;

}]);

