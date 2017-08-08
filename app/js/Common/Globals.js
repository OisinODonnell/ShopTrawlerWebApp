myApp.value('Globals', {
  "extraRows" : 4,
  "rowHeightPixels" : 30,
  "gridStyle" : "padding-left: 30px; text-align:center; padding-right: 30px;",
  "URL_BASE": "http://localhost:8080/",
  "GridDefaults": {
    enableRowSelection        : true,
    enableRowHeaderSelection  : false,
    multiSelect               : false,
    enableSorting             : true,
    enableFiltering           : true,
    enableHorizontalScrollbar : true,
    enableVerticalScrollbar   : true,
    enableGridMenu            : true,
    enableCellEdit            : false,
    enableColumnMoving        : true,
    enableRowEdit             : true,
    enableColumnResizing      : true,
    showColumnFooter          : true,
    enablePagination          : true,
    enablePaginationControls  : true,
    enablePaging              : true,
    paginationPageSizes       : [10, 20, 30],
    paginationPageSize        : 10,
    minRowsToShow             : 10,
    rowHeight                 : 30,
    minimumColumnSize         : 40,
    rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  },

  "VisitColumnDefs" : [ {
    field : 'getVisitid()',                     displayName : 'Visit ID',
    enableSorting : true,                       enableCellEdit : false,
    type : 'number',
    width : 60,

  }, { field : 'getEntryTimeReadable()',        displayName : 'Entry Time',enableCellEdit : false,type:"date",
  }, { field : 'getExitTimeReadable()',         displayName : 'Exit Time',enableCellEdit : false,type:"date",
  }, { field : 'getUserCreditedForVisit()',     displayName : 'User Credited For Visit',enableCellEdit : true,
  }, { field : 'getDuration()',                 displayName : 'Duration',enableCellEdit : false,
  }, { field : 'getUserid()',                   displayName : 'User ID',enableCellEdit : false,
  }, { field : 'getZoneid()',                   displayName : 'Zone ID',enableCellEdit : false,
  }, { field : 'fullname',                      displayName : 'Fullname',enableCellEdit : false,
  }, { field : 'storeName',                     displayName : 'Store Name',enableCellEdit : false,

  }],

  "addRowVisit" : {
    "visitid"   : "",
    "enterTime" : "",
    "exitTime"  : "",
    "userCreditedWithVisit": "",
    "duration"  : "0",
    "userid"    : "",
    "zoneid"    : "",
    "fullname"  : "",
    "storename" : ""
  },


  "BeaconColumnDefs": [{
    field : 'beaconid',                         displayName    : 'Beacon ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,

    }, {      field: 'getLocationid()',         displayName: 'Location ID',enableCellEdit : false,
    }, {      field: 'getMajor()',              displayName: 'Major',
    }, {      field: 'getMinor()',              displayName: 'Minor',
    }, {      field: 'getTransmitPower()',      displayName: 'Transmit Power',
    }, {      field: 'getUuid()',               displayName: 'UUID',enableCellEdit : false,
    }],

  "addRowBeacon"    : {
    "beaconids"     : "",
    "dateTime"      : "",
    "major"         : "",
    "minor"         : "",
    "transmitPower" : ""
    },

  "BonusCodeColumnDefs" : [{
    field : 'getBonusCodeid()',                 displayName : 'Bonus Code ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'storeName',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getValue()',             displayName : 'Value',enableCellEdit : false,
    }, {      field : 'fullname',            displayName : 'User ID',enableCellEdit : false,
    }, {      field : 'getDateTimeReadable()',  displayName : 'Date Time',type:"date",enableCellEdit : false,
    } ],

  "addRowBonusCode" : {
    "bonusCodeid" : "",
    "retailerid"  : "",
    "value"       : "",
    "userid"      : "",
    "dateTime"    : ""
  },


  "ContentColumnDefs" : [{
    field : 'getContentid()',                   displayName    : 'Content ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'getEndDateReadable()',   displayName : 'End Date',type:"date",
    }, {      field : 'getPage1()',             displayName : 'Page 1',
    }, {      field : 'getPage2()',             displayName : 'Page 2',
    }, {      field : 'getPage3()',             displayName : 'Page 3',
    }, {      field : 'getRetailerid()',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getStartDateReadable()', displayName : 'Start Date',type:"date",
    }],
  "addRowContent" : {
    "contentid"   : "",
    "endDate"     : "",
    "page1"       : "",
    "page2"       : "",
    "page3"       : "",
    "retailerid"  : "",
    "startDate"   : ""
  },


  "FavouriteColumnDefs" : [{
    field : 'fullname',                      displayName : 'User ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'storeName',        displayName : 'Retailer ID',enableCellEdit : false,
    }],
  "addRowFavourite" : {
    "userid"     : "",
    "retailerid" : ""
  },


  "LocationColumnDefs" : [{
    field : 'getLocationid()',                  displayName    : 'locationid',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'getAltitude()',          displayName : 'Altitude',
    }, {      field : 'getGpsLongtitude()',     displayName : 'GPS Longtitude',
    }, {      field : 'getGpsLatitude()',       displayName : 'GPS Latitude',
    }, {      field : 'getLocationInShoppingCentre()',  displayName : 'Location In Shopping Centre',
    }, {      field : 'getLocationType()',      displayName : 'Location Type',
    }, {      field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',enableCellEdit : false,
    }],
  "addRowLocation" : {
    "locationid"        :"",
    "altitude"          :"",
    "gpsLatitude"       :"",
    "gpsLongtitude"     :"",
    "locationInShoppingCentre":"",
    "locationType"      :"",
    "shoppingCentreid"  :""
  },


  "LoyaltyRewardColumnDefs" : [{
    field : 'getLoyaltyRewardid()',             displayName    : 'Loyalty Reward ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'getEndDateReadable()',   displayName : 'End Date',type:"date",
    }, {      field : 'getPointsPerVisit()',    displayName : 'Points Per Visit',
    }, {      field : 'getRewardImage()',       displayName : 'Reward Image',
    }, {      field : 'storeName',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getRewardTitle()',       displayName : 'Reward Title',
    }, {      field : 'getStartDateReadable()', displayName : 'Start Date',type:"date",
    }, {      field : 'getVisitTime()',         displayName : 'Visit Time',
    }],

  "addRowLoyaltyReward" : {
    "loyaltyRewardid" : "",
    "endDate"         : "",
    "pointsPerVisit"  : "",
    "rewardImage"     : "",
    "retailerid"      : "",
    "rewardTitle"     : "",
    "startDate"       : "",
    "visitTime"       : ""
  },


  "RatingColumnDefs" : [{
    field : 'fullname',                      displayName : 'User ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'getDateReadable()',      displayName : 'date',type:"date",
    }, {      field : 'storeName',        displayName : 'retailerid',enableCellEdit : false,
    }, {      field : 'getRating()',            displayName : 'rating',
    }, {      field : 'getReview()',            displayName : 'review',
    }],

  "addRowRating" : {
    "userid"     : "",
    "date"       : "",
    "retailerid" : "",
    "rating"     : "",
    "review"     : ""
  },

  "RetailerColumnDefs" : [{
    field : 'getRetailerid()',                  displayName    : 'Retailer ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
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
    }, {      field : 'getZoneid()',            displayName : 'Zone ID',enableCellEdit : false
    }],

  "addRowRetailer" : {
    "retailerid"                : "",
    "defaultContentPage1"       : "",
    "defaultContentPage2"       : "",
    "defaultContentPage3"       : "",
    "defaultLoyaltyRewardImage" : "",
    "facebookUrl"               : "",
    "twitterUrl"                : "",
    "websiteUrl"                : "",
    "logoImageSmall"            : "",
    "logoImageLarge"            : "",
    "logoImageMedium"           : "",
    "phone"                     : "",
    "storeName"                 : "",
    "headerBackgroundImage"     : "",
    "managerid"                 : "",
    "shoppingCentreid"          : "",
    "storeDefaultContentPage1"  : "",
    "zoneid"                    : ""
  },

  "ShoppingCentreColumnDefs" : [{
    field : 'getShoppingCentreid()',            displayName : 'Shopping Centre ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'fullname',           displayName : 'Admin ID',enableCellEdit : false,
    }, {      field : 'getContentPage()',       displayName : 'Content Page',
    }, {      field : 'getPhone()',             displayName : 'Phone',
    }, {      field : 'getFacebookUrl()',       displayName : 'Facebook Url',
    }, {      field : 'getTwitterUrl()',        displayName : 'Twitter Url',
    }, {      field : 'getWebsiteUrl()',        displayName : 'Website Url',
    }, {      field : 'getLogoImageSmall()',    displayName : 'Logo Image Small',
    }, {      field : 'getLogoImageMedium()',   displayName : 'Logo Image Medium',
    },{       field : 'getLogoImageLarge()',    displayName : 'Logo Image Large',
    }],

  "addRowShoppingCentre" : {
    "shoppingCentreid"  : "",
    "adminid"           : "",
    "contentPage"       : "",
    "phone"             : "",
    "facebookUrl"       : "",
    "twitterUrl"        : "",
    "websiteUrl"        : "",
    "logoImageSmall"    : "",
    "logoImageMedium"   : "",
    "logoImageLarge"    : ""
  },

  "UserColumnDefs" : [{
    field : 'getUserid()',                      displayName    : 'User ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'getFirstname()',         displayName : 'Firstname',
    }, {      field : 'getSurname()',           displayName : 'Surname',
    }, {      field : 'getEmailAddress()',      displayName : 'Email Address',
    }, {      field : 'getPhone()',             displayName : 'Phone',
    }, {      field : 'getGender()',            displayName : 'Gender',
    }, {      field : 'getPassword()',          displayName : 'Password',
    }, {      field : 'getType()',              displayName : 'Type',
    }, {      field : 'getYob()',               displayName : 'Yob',
    }],

  "addRowUser" : {
    "userid"      : "",
    "firstname"   : "",
    "surname"     : "",
    "emailAddress": "",
    "phone"       : "",
    "gender"      : "",
    "password"    : "",
    "type"        : "",
    "yob"         : ""
  },

  "UserPointColumnDefs" : [{
    field : 'fullname',                      displayName    : 'User ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'storeName',        displayName : 'Retailer ID',enableCellEdit : false,
    }, {      field : 'getPoints()',            displayName : 'Points',
    }],

  "addRowUserPoint" : {
    "userid"      : "",
    "retailerid"  : "",
    "points"      : ""
  },

  "ZoneColumnDefs" : [{
    field : 'getZoneid()',                      displayName    : 'Zone ID',
    enableSorting : true,                       enableCellEdit : false,
    type  : 'number',
    width : 60,
    }, {      field : 'getBeaconid()',          displayName : 'Beacon ID',enableCellEdit : false,
    }, {      field : 'getZoneName()',          displayName : 'Zone Name',
    }],

  "addRowZone" : {
    "zonei"    : "",
    "beaconid" : "",
    "zoneName" : ""
  }

});





