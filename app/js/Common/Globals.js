myApp.value('Globals', {
  "extraRows" : 8,
  "rowHeightPixels" : 30,
  "URL_BASE0": "http://192.168.0.143:8080", // laptop at home
  "URL_BASE4": "http://192.168.0.124:8080", // laptop at home
  "URL_BASE3": "http://147.252.81.7:8080", // laptop in DIT
  "URL_BASE1": "http://147.252.148.47:8080", // 2nd Laptop in DIT
  "URL_BASE": "http://localhost:8080",
  "GridDefaults": {
    enableRowSelection        : true,
    enableRowHeaderSelection  : false,
    showGridFooter            : true,
    multiSelect               : false,
    enableSorting             : true,
    enableFiltering           : true,
    enableHorizontalScrollbar : 1, // 0 = disabled,  1 = always, 2 = as needed
    enableVerticalScrollbar   : 1,
    enableColumnMoving        : true,
    enableColumnResizing      : true,
    showColumnFooter          : true, // useful for a couple of entities where aggregate values can be calculated

    enableGridMenu            : true, // menu in top right hand corner
    enablePaging              : true,
    paginationPageSizes       : [15, 30, 45],
    paginationPageSize        : 15,
    minRowsToShow             : 15,  // again this does not appear to work, it appears to follow the 'paginationPageSizes'
    minimumColumnSize         : 100, // this did not work, col width is specified individually below
    minWidth                  : 200, //
    rowHeight                 : 30,  // in pixels
  },


  "VisitColumnDefs" : [ {
      field : 'visitid',                 displayName    : 'Visit ID',
      enableSorting : true,              enableCellEdit : false,
      type : 'number',
      width : 60,
      },
      { field : 'getEntryTimeReadable()',width : 200,    displayName : 'Entry Time',enableCellEdit : false,type:"date", },
      { field : 'getExitTimeReadable()', width : 200,    displayName : 'Exit Time', enableCellEdit : false,type:"date", },
      // { field : 'userCreditedForVisit', width : 100,    displayName : 'User Credited For Visit',enableCellEdit : true, },
      // { field : 'duration',             width : 100,    displayName : 'Duration',enableCellEdit : false,               },
      { field : 'storeName',             width : 200,    displayName : 'Store Name',enableCellEdit : false,             },
      { field : 'fullname',              width : 200,    displayName : 'Fullname',  enableCellEdit : false,             },
      { field : 'userid',                width : 100,    displayName : 'User ID',   enableCellEdit : false,             },
      { field : 'zoneid',                width : 100,    displayName : 'Zone ID',   enableCellEdit : false,             }
    ],

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
      field : 'beaconid',        displayName    : 'Beacon ID',
      enableSorting : true,      enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field: 'locationid',    width : 100,     displayName: 'Location ID',   enableCellEdit : false,  },
      {  field: 'major',         width : 100,     displayName: 'Major',         enableCellEdit : false,  },
      {  field: 'minor',         width : 100,     displayName: 'Minor',         enableCellEdit : false,  },
      {  field: 'transmitPower', width : 100,     displayName: 'Transmit Power',enableCellEdit : false,  },
      {  field: 'uuid',          width : 300,     displayName: 'UUID',          enableCellEdit : false,  }
    ],

  "addRowBeacon"    : {
    "beaconids"     : "",
    "dateTime"      : "",
    "major"         : "",
    "minor"         : "",
    "transmitPower" : ""
    },

  "BonusCodeColumnDefs" : [{
      field : 'bonusCodeid',             displayName    : 'Bonus Code ID',
      enableSorting : true,              enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',            width : 200,displayName : 'Retailer ID', enableCellEdit : false,         },
      {  field : 'value',                width : 100,displayName : 'Value',       enableCellEdit : false,         },
      {  field : 'fullname',             width : 200,displayName : 'User ID',     enableCellEdit : false,         },
      {  field : 'getDateTimeReadable()',width : 200,displayName : 'Date Time',type:"date",enableCellEdit : false,}
    ],

  "GenerateBonusCodeColumnDefs" : [{
    field : 'bonusCodeid',             displayName    : 'Bonus Code ID',
    enableSorting : true,              enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'storeName',            width : 200,displayName : 'Retailer ID', enableCellEdit : false,         },
    {  field : 'value',                width : 100,displayName : 'Value',       enableCellEdit : false,         },
    {  field : 'fullname',             width : 200,displayName : 'User ID',     enableCellEdit : false,         },
    {  field : 'getDateTimeReadable()',width : 200,displayName : 'Date Time',type:"date",enableCellEdit : false,}
  ],

  "addRowBonusCode" : {
    "bonusCodeid" : "",
    "retailerid"  : "",
    "value"       : "",
    "userid"      : "",
    "dateTime"    : ""
  },


  "ContentColumnDefs" : [{
      field : 'contentid',                displayName    : 'Content ID',
      enableSorting : true,               enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getEndDateReadable()',  width : 200,displayName : 'End Date',type:"date",enableCellEdit : false, },
      {  field : 'page1',                 width : 200,displayName : 'Page 1',enableCellEdit : false,               },
      {  field : 'page2',                 width : 200,displayName : 'Page 2',enableCellEdit : false,               },
      {  field : 'page3',                 width : 200,displayName : 'Page 3',enableCellEdit : false,               },
      {  field : 'retailerid',            width : 100,displayName : 'Retailer ID',enableCellEdit : false,          },
      {  field : 'getStartDateReadable()',width : 200,displayName : 'Start Date',type:"date",                      }
    ],
  "ApproveContentColumnDefs" : [{
    field : 'contentid',                displayName    : 'Content ID',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'getEndDateReadable()',  width : 200,displayName : 'End Date',type:"date",enableCellEdit : false, },
    {  field : 'page1',                 width : 200,displayName : 'Page 1',enableCellEdit : false,               },
    {  field : 'page2',                 width : 200,displayName : 'Page 2',enableCellEdit : false,               },
    {  field : 'page3',                 width : 200,displayName : 'Page 3',enableCellEdit : false,               },
    {  field : 'retailerid',            width : 100,displayName : 'Retailer ID',enableCellEdit : false,          },
    {  field : 'getStartDateReadable()',width : 200,displayName : 'Start Date' ,type:"date",   enableCellEdit  : false  },
    {  field : 'approved',              width : 100, displayName: 'Approved?', type: 'byte',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}

  ],
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
      field : 'fullname',        displayName : 'User ID',
      enableSorting : true,      enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',    width : 200,displayName : 'Retailer ID',enableCellEdit : false,    }
    ],
  "addRowFavourite" : {
    "userid"     : "",
    "retailerid" : ""
  },

  "LocationColumnDefs" : [{
      field : 'locationid',           displayName    : 'locationid',
      enableSorting : true,           enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'altitude',          width : 100,displayName : 'Altitude',           enableCellEdit : false,                 },
      {  field : 'gpsLongtitude',     width : 100,displayName : 'GPS Longtitude',     enableCellEdit : false,                 },
      {  field : 'gpsLatitude',       width : 100,displayName : 'GPS Latitude',       enableCellEdit : false,                 },
      {  field : 'locationInShoppingCentre',  width : 100,displayName : 'Location In Shopping Centre',enableCellEdit : false, },
      {  field : 'locationType',      width : 200,displayName : 'Location Type',      enableCellEdit : false,                 },
      {  field : 'shoppingCentreid',  width : 100,displayName : 'Shopping Centre ID', enableCellEdit : false,                 }
    ],

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
      field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',
      enableSorting : true,               enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getEndDateReadable()',  width : 200, displayName : 'End Date',type:"date",  enableCellEdit : false, },
      {  field : 'pointsPerVisit',        width : 100, displayName : 'Points Per Visit',      enableCellEdit : false, },
      {  field : 'rewardImage',           width : 200, displayName : 'Reward Image',          enableCellEdit : false, },
      {  field : 'storeName',             width : 200, displayName : 'Retailer ID',           enableCellEdit : false, },
      {  field : 'rewardTitle',           width : 200, displayName : 'Reward Title',          enableCellEdit : false, },
      {  field : 'getStartDateReadable()',width : 200, displayName : 'Start Date',type:"date",enableCellEdit : false, },
      {  field : 'visitTime',             width : 100, displayName : 'Visit Time',            enableCellEdit : false, }
    ],

  "ApproveLoyaltyRewardColumnDefs" : [{
    field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'getEndDateReadable()',  width : 200, displayName : 'End Date',type:"date",      enableCellEdit : false, },
    {  field : 'pointsPerVisit',        width : 100, displayName : 'Points Per Visit',          enableCellEdit : false, },
    {  field : 'rewardImage',           width : 200, displayName : 'Reward Image',              enableCellEdit : false, },
    {  field : 'storeName',             width : 200, displayName : 'Retailer ID',               enableCellEdit : false, },
    {  field : 'rewardTitle',           width : 200, displayName : 'Reward Title',              enableCellEdit : false, },
    {  field : 'getStartDateReadable()',width : 200, displayName : 'Start Date',type:"date",    enableCellEdit : false, },
    {  field : 'visitTime',             width : 100, displayName : 'Visit Time',                enableCellEdit : false, },
    {  field : 'approved',              width : 100, displayName: 'Approved?', type: 'byte',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
  ],

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
      field : 'fullname',               displayName : 'User ID',
      enableSorting : true,             enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getDateReadable()',   width : 200,   displayName : 'Date',type:"date",enableCellEdit : false,  },
      {  field : 'storeName',           width : 200,   displayName : 'Retailer ID',     enableCellEdit : false,  },
      {  field : 'review',              width : 500,   displayName : 'Review',          enableCellEdit : false,  }

    ],

  "addRowRating" : {
    "userid"     : "",
    "date"       : "",
    "retailerid" : "",
    "rating"     : "",
    "review"     : ""
  },

  "RetailerColumnDefs" : [{
      field : 'retailerid',            displayName    : 'Retailer ID',
      enableSorting : true,            enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'defaultContentPage1',width : 200, displayName : 'Default Content Page1',      enableCellEdit : false,          },
      {  field : 'defaultContentPage2',width : 200, displayName : 'Default Content Page2',      enableCellEdit : false,          },
      {  field : 'defaultContentPage3',width : 200, displayName : 'Default Content Page3',      enableCellEdit : false,          },
      {  field : 'defaultLoyaltyRewardImage', width : 200,displayName : 'Default Loyalty Reward Image',enableCellEdit : false,   },
      {  field : 'facebookUrl',        width : 200, displayName : 'Facebook Url',               enableCellEdit : false,          },
      {  field : 'twitterUrl',         width : 200, displayName : 'Twitter Url',                enableCellEdit : false,          },
      {  field : 'websiteUrl',         width : 200, displayName : 'Website Url',                enableCellEdit : false,          },
      {  field : 'logoImageSmall',     width : 400, displayName : 'Logo Image Small',           enableCellEdit : false,          },
      {  field : 'logoImageLarge',     width : 400, displayName : 'Logo Image Large',           enableCellEdit : false,          },
      {  field : 'logoImageMedium',    width : 400, displayName : 'Logo Image Medium',          enableCellEdit : false,          },
      {  field : 'phone',              width : 150, displayName : 'Phone',                      enableCellEdit : false,          },
      {  field : 'storeName',          width : 150, displayName : 'Store Name',                 enableCellEdit : false,          },
      {  field : 'headerBackgroundImage', width : 200,displayName : 'Header Background Image',  enableCellEdit : false,          },
      {  field : 'managerid',          width : 100, displayName : 'Manager ID',                 enableCellEdit : false,          },
      {  field : 'shoppingCentreid',   width : 100, displayName : 'Shopping Centre ID',         enableCellEdit : false,          },
      {  field : 'storeDefaultContentPage1',  width : 200,displayName : 'Store Default Content Page1', enableCellEdit : false,   },
      {  field : 'zoneid',             width : 100, displayName : 'Zone ID',                    enableCellEdit : false           }
    ],

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
      field : 'shoppingCentreid',  displayName    : 'Shopping Centre ID',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'fullname',       width : 200, displayName : 'Admin ID',           enableCellEdit : false,  },
      {  field : 'contentPage',    width : 200, displayName : 'Content Page',       enableCellEdit : false,  },
      {  field : 'phone',          width : 150, displayName : 'Phone',              enableCellEdit : false,  },
      {  field : 'facebookUrl',    width : 200, displayName : 'Facebook Url',       enableCellEdit : false,  },
      {  field : 'twitterUrl',     width : 200, displayName : 'Twitter Url',        enableCellEdit : false,  },
      {  field : 'websiteUrl',     width : 200, displayName : 'Website Url',        enableCellEdit : false,  },
      {  field : 'logoImageSmall', width : 400, displayName : 'Logo Image Small',   enableCellEdit : false,  },
      {  field : 'logoImageMedium',width : 400, displayName : 'Logo Image Medium',  enableCellEdit : false,  },
      {  field : 'logoImageLarge', width : 400, displayName : 'Logo Image Large',   enableCellEdit : false,  }
    ],

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
    field : 'userid',           displayName    : 'User ID',
    enableSorting : true,       enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'firstname',     width : 200, displayName : 'Firstname',     enableCellEdit : false,  },
    {  field : 'surname',       width : 200, displayName : 'Surname',       enableCellEdit : false,  },
    {  field : 'emailAddress',  width : 200, displayName : 'Email Address', enableCellEdit : false,  },
    {  field : 'phone',         width : 150, displayName : 'Phone',         enableCellEdit : false,  },
    {  field : 'gender',        width : 200, displayName : 'Gender',        enableCellEdit : false,  },
    {  field : 'password',      width : 200, displayName : 'Password',      enableCellEdit : false,  },
    {  field : 'type',          width : 200, displayName : 'Type',          enableCellEdit : false,  },
    {  field : 'yob',           width : 100, displayName : 'Yob',           enableCellEdit : false,  },
    {  field : 'approved',      width : 100, displayName : 'Approved?', type: 'byte', cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
  ],
  "ApproveUserColumnDefs" : [{
    field : 'userid',           displayName    : 'User ID',
    enableSorting : true,       enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'firstname',     width : 200, displayName : 'Firstname',     enableCellEdit : false,  },
    {  field : 'surname',       width : 200, displayName : 'Surname',       enableCellEdit : false,  },
    {  field : 'emailAddress',  width : 200, displayName : 'Email Address', enableCellEdit : false,  },
    {  field : 'phone',         width : 150, displayName : 'Phone',         enableCellEdit : false,  },
    {  field : 'gender',        width : 200, displayName : 'Gender',        enableCellEdit : false,  },
    {  field : 'password',      width : 200, displayName : 'Password',      enableCellEdit : false,  },
    {  field : 'type',          width : 200, displayName : 'Type',          enableCellEdit : false,  },
    {  field : 'yob',           width : 100, displayName : 'Yob',           enableCellEdit : false,  },
    {  field : 'approved',      width : 100, displayName : 'Approved?', type: 'byte', cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
  ],

  "addRowUser" : {
    "userid"      : "",
    "firstname"   : "",
    "surname"     : "",
    "emailAddress": "",
    "phone"       : "",
    "gender"      : "",
    "password"    : "",
    "type"        : "",
    "yob"         : "",
    "approved"    : ""
  },

  "UserPointColumnDefs" : [{
      field : 'fullname',      displayName    : 'User ID',
      enableSorting : true,    enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',  width : 300,  displayName : 'Retailer ID', enableCellEdit : false,  },
      {  field : 'points',     width : 100,  displayName : 'Points',      enableCellEdit : false,  }
    ],

  "addRowUserPoint" : {
    "userid"      : "",
    "retailerid"  : "",
    "points"      : ""
  },

  "ZoneColumnDefs" : [{
      field : 'zoneid',       displayName    : 'Zone ID',
      enableSorting : true,   enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'beaconid',  width : 100,      displayName : 'Beacon ID', enableCellEdit : false,  },
      {  field : 'zoneName',  width : 200,      displayName : 'Zone Name', enableCellEdit : false,  }
    ],

  "addRowZone" : {
    "zoneid"   : "",
    "beaconid" : "",
    "zoneName" : ""
  }
});





