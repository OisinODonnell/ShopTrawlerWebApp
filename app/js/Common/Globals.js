myApp.value('Globals', {
  "extraRows" : 4,
  "rowHeightPixels" : 30,
  "gridStyle" : "Width:1000px; ",
  "URL_BASE": "http://147.252.81.7:8080",
  "URL_BASE1": "http://147.252.148.47:8080",
  "URL_BASE2": "http://localhost:8080",
  "GridDefaults": {
    enableRowSelection        : true,
    enableRowHeaderSelection  : false,
    showGridFooter            : true,
    multiSelect               : false,
    enableSorting             : true,
    enableFiltering           : true,
    enableHorizontalScrollbar : 1,
    enableVerticalScrollbar   : 1,

    enableExpandable          : true,
    enableInfiniteScroll      : true,
    enableColumnMoving        : true,
    enableColumnResizing      : true,
    showColumnFooter          : true,

    enableGridMenu            : true,
    enablePaging              : true,
    paginationPageSizes       : [10, 20, 30],
    paginationPageSize        : 10,
    minRowsToShow             : 15,
    minimumColumnSize         : 100,
    minWidth                  : 200,
    rowHeight                 : 30,

    rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  },

  "VisitColumnDefs" : [ {
      field : 'visitid',                displayName : 'Visit ID',
      enableSorting : true,                  enableCellEdit : false,
      type : 'number',
      width : 60,
      },
      { field : 'getEntryTimeReadable()',    width : 200,    displayName : 'Entry Time',enableCellEdit : false,type:"date", },
      { field : 'getExitTimeReadable()',     width : 200,    displayName : 'Exit Time',enableCellEdit : false,type:"date",  },
      { field : 'userCreditedForVisit', width : 100,    displayName : 'User Credited For Visit',enableCellEdit : true, },
      { field : 'duration',             width : 100,    displayName : 'Duration',enableCellEdit : false,               },
      { field : 'userid',               width : 100,    displayName : 'User ID',enableCellEdit : false,                },
      { field : 'zoneid',               width : 100,    displayName : 'Zone ID',enableCellEdit : false,                },
      { field : 'fullname',             width : 200,    displayName : 'Fullname',enableCellEdit : false,               },
      { field : 'storeName',            width : 200,    displayName : 'Store Name',enableCellEdit : false,             }
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
      field : 'beaconid',             displayName    : 'Beacon ID',
      enableSorting : true,           enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field: 'locationid',    width : 100,     displayName: 'Location ID',enableCellEdit : false,     },
      {  field: 'major',         width : 100,     displayName: 'Major',                                  },
      {  field: 'minor',         width : 100,     displayName: 'Minor',                                  },
      {  field: 'transmitPower', width : 100,     displayName: 'Transmit Power',                         },
      {  field: 'uuid',          width : 300,     displayName: 'UUID',enableCellEdit : false,            }
    ],

  "addRowBeacon"    : {
    "beaconids"     : "",
    "dateTime"      : "",
    "major"         : "",
    "minor"         : "",
    "transmitPower" : ""
    },

  "BonusCodeColumnDefs" : [{
      field : 'BonusCodeid',          displayName : 'Bonus Code ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',              width : 200,displayName : 'Retailer ID',enableCellEdit : false,          },
      {  field : 'Value',             width : 100,displayName : 'Value',enableCellEdit : false,                },
      {  field : 'fullname',               width : 200,displayName : 'User ID',enableCellEdit : false,              },
      {  field : 'getDateTimeReadable()',  width : 200,displayName : 'Date Time',type:"date",enableCellEdit : false,}
    ],

  "addRowBonusCode" : {
    "bonusCodeid" : "",
    "retailerid"  : "",
    "value"       : "",
    "userid"      : "",
    "dateTime"    : ""
  },


  "ContentColumnDefs" : [{
      field : 'contentid',            displayName    : 'Content ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getEndDateReadable()',   width : 200,displayName : 'End Date',type:"date",                  },
      {  field : 'page1',             width : 200,displayName : 'Page 1',                                },
      {  field : 'page2',             width : 200,displayName : 'Page 2',                                },
      {  field : 'page3',             width : 200,displayName : 'Page 3',                                },
      {  field : 'retailerid',        width : 100,displayName : 'Retailer ID',enableCellEdit : false,    },
      {  field : 'getStartDateReadable()', width : 200,displayName : 'Start Date',type:"date",                }
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
      field : 'fullname',            displayName : 'User ID',
      enableSorting : true,          enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',        width : 200,displayName : 'Retailer ID',enableCellEdit : false,    }
    ],
  "addRowFavourite" : {
    "userid"     : "",
    "retailerid" : ""
  },

  "LocationColumnDefs" : [{
      field : 'locationid',           displayName    : 'locationid',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'altitude',          width : 100,displayName : 'Altitude',                                  },
      {  field : 'gpsLongtitude',     width : 100,displayName : 'GPS Longtitude',                            },
      {  field : 'gpsLatitude',       width : 100,displayName : 'GPS Latitude',                              },
      {  field : 'locationInShoppingCentre',  width : 100,displayName : 'Location In Shopping Centre',       },
      {  field : 'locationType',      width : 200,displayName : 'Location Type',                             },
      {  field : 'shoppingCentreid',  width : 100,displayName : 'Shopping Centre ID',enableCellEdit : false, }
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
      field : 'loyaltyRewardid',      displayName    : 'Loyalty Reward ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getEndDateReadable()',   width : 200, displayName : 'End Date',type:"date",               },
      {  field : 'pointsPerVisit',    width : 100, displayName : 'Points Per Visit',                   },
      {  field : 'rewardImage',       width : 200, displayName : 'Reward Image',                       },
      {  field : 'storeName',              width : 200, displayName : 'Retailer ID',enableCellEdit : false, },
      {  field : 'rewardTitle',       width : 200, displayName : 'Reward Title',                       },
      {  field : 'getStartDateReadable()', width : 200, displayName : 'Start Date',type:"date",             },
      {  field : 'visitTime',         width : 100, displayName : 'Visit Time',                         }
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
      {  field : 'getDateReadable()',   width : 200,   displayName : 'Date',type:"date",                  },
      {  field : 'storeName',           width : 200,   displayName : 'Retailer ID',enableCellEdit : false,},
      {  field : 'review',         width : 500,   displayName : 'Review',                            },

    ],

  "addRowRating" : {
    "userid"     : "",
    "date"       : "",
    "retailerid" : "",
    "rating"     : "",
    "review"     : ""
  },

  "RetailerColumnDefs" : [{
      field : 'retailerid',           displayName    : 'Retailer ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'defaultContentPage1',width : 200, displayName : 'Default Content Page1',                     },
      {  field : 'defaultContentPage2',width : 200, displayName : 'Default Content Page2',                     },
      {  field : 'defaultContentPage3',width : 200, displayName : 'Default Content Page3',                     },
      {  field : 'defaultLoyaltyRewardImage', width : 200,displayName : 'Default Loyalty Reward Image',        },
      {  field : 'facebookUrl',       width : 200, displayName : 'Facebook Url',                               },
      {  field : 'twitterUrl',        width : 200, displayName : 'Twitter Url',                                },
      {  field : 'websiteUrl',        width : 200, displayName : 'Website Url',                                },
      {  field : 'logoImageSmall',    width : 400, displayName : 'Logo Image Small',                           },
      {  field : 'logoImageLarge',    width : 400, displayName : 'Logo Image Large',                           },
      {  field : 'logoImageMedium',   width : 400, displayName : 'Logo Image Medium',                          },
      {  field : 'phone',             width : 150, displayName : 'Phone',                                      },
      {  field : 'storeName',         width : 150, displayName : 'Store Name',                                 },
      {  field : 'headerBackgroundImage', width : 200,displayName : 'Header Background Image',                 },
      {  field : 'managerid',         width : 100, displayName : 'Manager ID',enableCellEdit : false,          },
      {  field : 'shoppingCentreid',  width : 100, displayName : 'Shopping Centre ID',enableCellEdit : false,  },
      {  field : 'storeDefaultContentPage1',  width : 200,displayName : 'Store Default Content Page1',         },
      {  field : 'zoneid',            width : 100, displayName : 'Zone ID',enableCellEdit : false              }
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
      field : 'shoppingCentreid',  displayName : 'Shopping Centre ID',
      enableSorting : true,             enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'fullname',            width : 200,displayName : 'Admin ID',enableCellEdit : false,  },
      {  field : 'contentPage',    width : 200,    displayName : 'Content Page',                 },
      {  field : 'phone',          width : 150,    displayName : 'Phone',                        },
      {  field : 'facebookUrl',    width : 200,    displayName : 'Facebook Url',                 },
      {  field : 'twitterUrl',     width : 200,    displayName : 'Twitter Url',                  },
      {  field : 'websiteUrl',     width : 200,   displayName : 'Website Url',                   },
      {  field : 'logoImageSmall', width : 400,   displayName : 'Logo Image Small',              },
      {  field : 'logoImageMedium',width : 400,   displayName : 'Logo Image Medium',             },
      {  field : 'logoImageLarge', width : 400,   displayName : 'Logo Image Large',              }
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
      field : 'userid',       displayName    : 'User ID',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'firstname', width : 200,   displayName : 'Firstname',     },
      {  field : 'surname',   width : 200,   displayName : 'Surname',       },
      {  field : 'emailAddress',   width : 200,   displayName : 'Email Address', },
      {  field : 'phone',     width : 150,   displayName : 'Phone',         },
      {  field : 'gender',    width : 200,   displayName : 'Gender',        },
      {  field : 'password',  width : 200,   displayName : 'Password',      },
      {  field : 'type',      width : 200,   displayName : 'Type',          },
      {  field : 'yob',       width : 100,   displayName : 'Yob',           },
      {  field : 'active',    width : 100,   displayName : 'Active', type: 'boolean',cellTemplate: '<input type="checkbox" ng-model="row.entity.active">'}
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
    "active"      : ""
  },

  "UserPointColumnDefs" : [{
      field : 'fullname',          displayName    : 'User ID',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',      width : 300,  displayName : 'Retailer ID',enableCellEdit : false,  },
      {  field : 'points',    width : 100,  displayName : 'Points',                              }
    ],

  "addRowUserPoint" : {
    "userid"      : "",
    "retailerid"  : "",
    "points"      : ""
  },

  "ZoneColumnDefs" : [{
      field : 'zoneid',       displayName    : 'Zone ID',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'beaconid',  width : 100,      displayName : 'Beacon ID',enableCellEdit : false,  },
      {  field : 'zoneName',  width : 200,      displayName : 'Zone Name',                         }
    ],

  "addRowZone" : {
    "zoneid"   : "",
    "beaconid" : "",
    "zoneName" : ""
  }

});





