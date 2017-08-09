myApp.value('Globals', {
  "extraRows" : 4,
  "rowHeightPixels" : 30,
  "gridStyle" : "Width:1000px; ",
  "URL_BASE": "http://localhost:8080/",
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
      field : 'getVisitid()',                displayName : 'Visit ID',
      enableSorting : true,                  enableCellEdit : false,
      type : 'number',
      width : 60,
      },
      { field : 'getEntryTimeReadable()',    width : 200,    displayName : 'Entry Time',enableCellEdit : false,type:"date", },
      { field : 'getExitTimeReadable()',     width : 200,    displayName : 'Exit Time',enableCellEdit : false,type:"date",  },
      { field : 'getUserCreditedForVisit()', width : 100,    displayName : 'User Credited For Visit',enableCellEdit : true, },
      { field : 'getDuration()',             width : 100,    displayName : 'Duration',enableCellEdit : false,               },
      { field : 'getUserid()',               width : 100,    displayName : 'User ID',enableCellEdit : false,                },
      { field : 'getZoneid()',               width : 100,    displayName : 'Zone ID',enableCellEdit : false,                },
      { field : 'fullname',                  width : 200,    displayName : 'Fullname',enableCellEdit : false,               },
      { field : 'storeName',                 width : 200,    displayName : 'Store Name',enableCellEdit : false,             }
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
      {  field: 'getLocationid()',    width : 100,     displayName: 'Location ID',enableCellEdit : false,     },
      {  field: 'getMajor()',         width : 100,     displayName: 'Major',                                  },
      {  field: 'getMinor()',         width : 100,     displayName: 'Minor',                                  },
      {  field: 'getTransmitPower()', width : 100,     displayName: 'Transmit Power',                         },
      {  field: 'getUuid()',          width : 300,     displayName: 'UUID',enableCellEdit : false,            }
    ],

  "addRowBeacon"    : {
    "beaconids"     : "",
    "dateTime"      : "",
    "major"         : "",
    "minor"         : "",
    "transmitPower" : ""
    },

  "BonusCodeColumnDefs" : [{
      field : 'getBonusCodeid()',          displayName : 'Bonus Code ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'storeName',              width : 200,displayName : 'Retailer ID',enableCellEdit : false,          },
      {  field : 'getValue()',             width : 100,displayName : 'Value',enableCellEdit : false,                },
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
      field : 'getContentid()',            displayName    : 'Content ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getEndDateReadable()',   width : 200,displayName : 'End Date',type:"date",                  },
      {  field : 'getPage1()',             width : 200,displayName : 'Page 1',                                },
      {  field : 'getPage2()',             width : 200,displayName : 'Page 2',                                },
      {  field : 'getPage3()',             width : 200,displayName : 'Page 3',                                },
      {  field : 'getRetailerid()',        width : 100,displayName : 'Retailer ID',enableCellEdit : false,    },
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
      field : 'getLocationid()',           displayName    : 'locationid',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getAltitude()',          width : 100,displayName : 'Altitude',                                  },
      {  field : 'getGpsLongtitude()',     width : 100,displayName : 'GPS Longtitude',                            },
      {  field : 'getGpsLatitude()',       width : 100,displayName : 'GPS Latitude',                              },
      {  field : 'getLocationInShoppingCentre()',  width : 100,displayName : 'Location In Shopping Centre',       },
      {  field : 'getLocationType()',      width : 200,displayName : 'Location Type',                             },
      {  field : 'getShoppingCentreid()',  width : 100,displayName : 'Shopping Centre ID',enableCellEdit : false, }
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
      field : 'getLoyaltyRewardid()',      displayName    : 'Loyalty Reward ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getEndDateReadable()',   width : 200, displayName : 'End Date',type:"date",               },
      {  field : 'getPointsPerVisit()',    width : 100, displayName : 'Points Per Visit',                   },
      {  field : 'getRewardImage()',       width : 200, displayName : 'Reward Image',                       },
      {  field : 'storeName',              width : 200, displayName : 'Retailer ID',enableCellEdit : false, },
      {  field : 'getRewardTitle()',       width : 200, displayName : 'Reward Title',                       },
      {  field : 'getStartDateReadable()', width : 200, displayName : 'Start Date',type:"date",             },
      {  field : 'getVisitTime()',         width : 100, displayName : 'Visit Time',                         }
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
      {  field : 'getRating()',         width : 100,   displayName : 'Rating',                            },
      {  field : 'getReview()',         width : 500,   displayName : 'Review',                            }
    ],

  "addRowRating" : {
    "userid"     : "",
    "date"       : "",
    "retailerid" : "",
    "rating"     : "",
    "review"     : ""
  },

  "RetailerColumnDefs" : [{
      field : 'getRetailerid()',           displayName    : 'Retailer ID',
      enableSorting : true,                enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getDefaultContentPage1()',width : 200, displayName : 'Default Content Page1',                     },
      {  field : 'getDefaultContentPage2()',width : 200, displayName : 'Default Content Page2',                     },
      {  field : 'getDefaultContentPage3()',width : 200, displayName : 'Default Content Page3',                     },
      {  field : 'getDefaultLoyaltyRewardImage()', width : 200,displayName : 'Default Loyalty Reward Image',        },
      {  field : 'getFacebookUrl()',       width : 200, displayName : 'Facebook Url',                               },
      {  field : 'getTwitterUrl()',        width : 200, displayName : 'Twitter Url',                                },
      {  field : 'getWebsiteUrl()',        width : 200, displayName : 'Website Url',                                },
      {  field : 'getLogoImageSmall()',    width : 400, displayName : 'Logo Image Small',                           },
      {  field : 'getLogoImageLarge()',    width : 400, displayName : 'Logo Image Large',                           },
      {  field : 'getLogoImageMedium()',   width : 400, displayName : 'Logo Image Medium',                          },
      {  field : 'getPhone()',             width : 150, displayName : 'Phone',                                      },
      {  field : 'getStoreName()',         width : 150, displayName : 'Store Name',                                 },
      {  field : 'getHeaderBackgroundImage()', width : 200,displayName : 'Header Background Image',                 },
      {  field : 'getManagerid()',         width : 100, displayName : 'Manager ID',enableCellEdit : false,          },
      {  field : 'getShoppingCentreid()',  width : 100, displayName : 'Shopping Centre ID',enableCellEdit : false,  },
      {  field : 'getStoreDefaultContentPage1()',  width : 200,displayName : 'Store Default Content Page1',         },
      {  field : 'getZoneid()',            width : 100, displayName : 'Zone ID',enableCellEdit : false              }
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
      field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',
      enableSorting : true,             enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'fullname',            width : 200,displayName : 'Admin ID',enableCellEdit : false,  },
      {  field : 'getContentPage()',    width : 200,    displayName : 'Content Page',                 },
      {  field : 'getPhone()',          width : 150,    displayName : 'Phone',                        },
      {  field : 'getFacebookUrl()',    width : 200,    displayName : 'Facebook Url',                 },
      {  field : 'getTwitterUrl()',     width : 200,    displayName : 'Twitter Url',                  },
      {  field : 'getWebsiteUrl()',     width : 200,   displayName : 'Website Url',                   },
      {  field : 'getLogoImageSmall()', width : 400,   displayName : 'Logo Image Small',              },
      {  field : 'getLogoImageMedium()',width : 400,   displayName : 'Logo Image Medium',             },
      {  field : 'getLogoImageLarge()', width : 400,   displayName : 'Logo Image Large',              }
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
      field : 'getUserid()',       displayName    : 'User ID',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getFirstname()', width : 200,  displayName : 'Firstname',      },
      {  field : 'getSurname()',   width : 200,   displayName : 'Surname',       },
      {  field : 'getEmailAddress()',   width : 200,   displayName : 'Email Address', },
      {  field : 'getPhone()',     width : 150,   displayName : 'Phone',         },
      {  field : 'getGender()',    width : 200,   displayName : 'Gender',        },
      {  field : 'getPassword()',  width : 200,   displayName : 'Password',      },
      {  field : 'getType()',      width : 200,   displayName : 'Type',          },
      {  field : 'getYob()',       width : 100,   displayName : 'Yob',           },
      {  field : 'getActive()',    width : 100,   displayName : 'Active', type: 'boolean',cellTemplate: '<input type="checkbox" ng-model="row.entity.isActive">'}
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
      {  field : 'getPoints()',    width : 100,  displayName : 'Points',                              }
    ],

  "addRowUserPoint" : {
    "userid"      : "",
    "retailerid"  : "",
    "points"      : ""
  },

  "ZoneColumnDefs" : [{
      field : 'getZoneid()',       displayName    : 'Zone ID',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'getBeaconid()',  width : 100,      displayName : 'Beacon ID',enableCellEdit : false,  },
      {  field : 'getZoneName()',  width : 200,      displayName : 'Zone Name',                         }
    ],

  "addRowZone" : {
    "zoneid"   : "",
    "beaconid" : "",
    "zoneName" : ""
  }

});





