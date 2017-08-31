myApp.value('Globals', {
  // Chart Line Data options
  "PieColours" :  ["#0074D9", "#FF4136", "#2ECC40", "#FF851B",
                   "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC",
                   "#85144b", "#F012BE", "#3D9970", "#111111",
                  ],
  "ChartLineDataOptions": {
    lineTension               : .4,
    fill                      : true,
    backgroundColor           : "rgba(50, 192, 192, 0.4",
    borderColor               : "rgba(75, 192, 192, 1)",
    borderCapStyle            : 'butt',
    borderDash                : [],
    borderDashOffset          : 0.0,
    borderJoinStyle           : 'miter',
    pointBorderColor          : "rgba(75, 192, 192, 1)",
    pointBackgroundColor      : "#fff",
    pointBorderWidth          : 1,
    pointHoverRadius          : 5,
    pointHoverBackgroundColor : "rgba(75, 192, 192, 1)",
    pointHoverBorderColor     : "rgba(220, 220, 220, 1)",
    pointHoverBorderWith      : 2,
    // pointRadius: 1,
    // pointHitRadius: 10,
    // labels                  : [1,2,3,4,5,6,7,8,9,10,11,12],
    // xAxisID                 : "",
    // yAxisID                 : "",
    // backgroundColor         : Color,
    // cubicInterpolationMode  : "",
    // pointStyle              :	String/String[]/Image/Image[],
    // steppedLine             :	Boolean/String,
    // showLine                :	Boolean,
    // spanGaps                :	Boolean,
  },
  "ChartLineOptions": {
    responsive : true,
    scales: { // options.scales
      xAxes: [{ // option.scales.xAxes
        display: true, // option.scales.xAxes.display
        scaleLabel: { // option.scales.scaleLabel
           display     : true, // option.scales.scaleLabel.display
           labelString : 'Month' // option.scales.scaleLabel.labelString
        }
      }],
      yAxes: [{ // option.scales.yAxes
        display: true, // option.scales.yAxes.display
        ticks: { // option.scales.yAxes.ticks
          beginAtZero: false, // option.scales.yAxes.display.ticks.beginAtZero
          // suggestedMin: 0, // option.scales.yAxes[].display.ticks.suggestedMin

        }
      }]
    },
    title: { // options.title
      display: true, // options.title.display
      text: 'Visits Per Day for last 12 Days', //options.title.text
      fill: true, // options.title.fill
    }
  },
  "BackgroundChartColours" : [ "rgba(255,0,0,.4)","rgba(0,255,0,.4)","rgba(0,0,255,.4)","rgba(255,255,0,.4)",
    "rgba0,255,255,.4)","rgba(255,0,255,.4)","rgba(144,238,144,.4)","rgba(224,255,255,.4)"
  ],
  "BorderChartColours" : [ "rgba(255,0,0,.8)","rgba(0,255,0,.8)","rgba(0,0,255,.8)","rgba(255,255,0,.8)",
    "rgba0,255,255,.8)","rgba(255,0,255,.8)","rgba(144,238,144,.8)","rgba(224,255,255,.8)"
  ],




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
    enableCellEdit            : true,
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
    rowHeight                 : 50,  // in pixels
  },
  "ContentColumnDefs" : [{
    field : 'contentid',                displayName    : 'Content ID',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    // {
    //   name: 'Actions', field: 'edit', enableFiltering: false, enableSorting: false,
    //   cellTemplate: '<div><button ng-show="!row.entity.editrow" class="btn primary" ng-click="grid.appScope.edit(row.entity)"><ifa-edit"></i></button>' +  //Edit Button
    //   '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.saveRow(row.entity)"><i class="fa fa-floppy-o"></i></button>' +//Save Button
    //   '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.cancelEdit(row.entity)"><i class="fa fa-times"></i></button>' + //Cancel Button
    //   '</div>', width: 100
    // },
    {  field : 'getEndDateString()',  width : 200,displayName : 'End Date',type:"date",enableCellEdit : true, },
    {  field : 'page1',               width : 200,displayName : 'Page 1',enableCellEdit : true,
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 80

    },
    {  field : 'page2',               width : 200,displayName : 'Page 2',enableCellEdit : true,
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 80
    },
    {  field : 'page3',               width : 200,displayName : 'Page 3',enableCellEdit : true,
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 80
    },
    {  field : 'retailerid',          width : 100, type: 'number' ,  displayName : 'Retailer ID',enableCellEdit : true,          },
    {  field : 'getStartDateString()',width : 200, displayName : 'Start Date',type:"date",                      }

  ],

  "ContentColumnDefs2" : [{
    field : 'contentid',                displayName    : 'Content ID',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
  //   {
  //   name: 'Actions', field: 'edit', enableFiltering: false, enableSorting: false,
  //   cellTemplate: '<div><button ng-show="!row.entity.editrow" class="btn primary" ng-click="grid.appScope.edit(row.entity)"><ifa-edit"></i></button>' +  //Edit Button
  //   '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.saveRow(row.entity)"><i class="fa fa-floppy-o"></i></button>' +//Save Button
  //   '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.cancelEdit(row.entity)"><i class="fa fa-times"></i></button>' + //Cancel Button
  //   '</div>', width: 100
  // },
    {  field : 'page1',                 width : 200,displayName : 'Page 1',enableCellEdit : true,
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 80

    },
    {  field : 'page2',                 width : 200,displayName : 'Page 2',enableCellEdit : true,
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 80
    },
    {  field : 'page3',                 width : 200,displayName : 'Page 3',enableCellEdit : true,
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>', width: 80
    },
    {  field : 'retailerid',         type: 'number' ,   width : 100,displayName : 'Retailer ID',enableCellEdit : false,          },
    {  field : 'endDate',  width : 200,displayName : 'Start Date',type:"date",  enableCellEdit : true  },
    {  field : 'startDate',width : 200,displayName : 'End Date',type:"date",enableCellEdit : true, },
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
    {  field : 'retailerid',          type: 'number' ,  width : 100,displayName : 'Retailer ID',enableCellEdit : false,          },
    {  field : 'getStartDateReadable()',width : 200,displayName : 'Start Date' ,type:"date",   enableCellEdit  : false  },
    {  field : 'approved',             width : 100, displayName: 'Approved?', type: 'boolean',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}

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
  "VisitColumnDefs" : [ {
      field : 'visitid',                 displayName    : 'Visit ID',
      enableSorting : true,              enableCellEdit : false,
      type : 'number',
      width : 60,
      },
      { field : 'getEntryTimeReadable()',width : 200,    displayName : 'Entry Time',enableCellEdit : false,type:"date", },
      { field : 'getExitTimeReadable()', width : 200,    displayName : 'Exit Time', enableCellEdit : false,type:"date", },
      // { field : 'userCreditedForVisit', width : 100,    displayName : 'User Credited For Visit',enableCellEdit : true, },
      // { field : 'duration', type: 'number' ,            width : 100,    displayName : 'Duration',enableCellEdit : false,               },
      { field : 'storeName',             width : 200,    displayName : 'Store Name',enableCellEdit : false,             },
      { field : 'fullname',              width : 200,    displayName : 'Fullname',  enableCellEdit : false,             },
      { field : 'userid',   type: 'number' ,             width : 100,    displayName : 'User ID',   enableCellEdit : false,             },
      { field : 'zoneid',   type: 'number' ,             width : 100,    displayName : 'Zone ID',   enableCellEdit : false,             }
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
      {  field: 'locationid', type: 'number' ,   width : 100,     displayName: 'Location ID',   enableCellEdit : false,  },
      {  field: 'major', type: 'number' ,        width : 100,     displayName: 'Major',         enableCellEdit : false,  },
      {  field: 'minor', type: 'number' ,        width : 100,     displayName: 'Minor',         enableCellEdit : false,  },
      {  field: 'transmitPower', type: 'number' ,width : 100,     displayName: 'Transmit Power',enableCellEdit : false,  },
      {  field: 'uuid',                          width : 300,     displayName: 'UUID',          enableCellEdit : false,  }
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
      {  field : 'value',                type: 'number' ,  width : 100, displayName : 'Value',       enableCellEdit : false,         },
      {  field : 'fullname',             width : 200,displayName : 'User ID',     enableCellEdit : false,         },
      {  field : 'dateTime',width : 200,displayName : 'Date Time',type:"date",enableCellEdit : false,}
    ],

  "GenerateBonusCodeColumnDefs" : [{
    field : 'bonusCodeid',             displayName    : 'Bonus Code ID',
    enableSorting : true,              enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'storeName',            width : 200,displayName : 'Retailer ID', enableCellEdit : false,         },
    {  field : 'value',                type  : 'number', width : 100, displayName : 'Value',       enableCellEdit : false,         },
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
      {  field : 'altitude',          type: 'number' ,width : 100,displayName : 'Altitude',           enableCellEdit : false,                 },
      {  field : 'gpsLongtitude',     type: 'number' ,width : 100,displayName : 'GPS Longtitude',     enableCellEdit : false,                 },
      {  field : 'gpsLatitude',       type: 'number' ,width : 100,displayName : 'GPS Latitude',       enableCellEdit : false,                 },
      {  field : 'locationInShoppingCentre',  width : 100,displayName : 'Location In Shopping Centre',enableCellEdit : false, },
      {  field : 'locationType',      type: 'text'   ,width : 200,displayName : 'Location Type',      enableCellEdit : false,                 },
      {  field : 'shoppingCentreid',  type: 'number' ,width : 100,displayName : 'Shopping Centre ID', enableCellEdit : false,                 }
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
      {  field : 'getEndDateReadable()',  width : 200, displayName : 'End Date',type:"date",  enableCellEdit : true, },
      {  field : 'pointsPerVisit',        type: 'number', width : 100, displayName : 'Points Per Visit',      enableCellEdit : true, },
      {  field : 'rewardImage',           type : 'link', width : 200, displayName : 'Reward Image',          enableCellEdit : true, },
      {  field : 'storeName',             width : 200, displayName : 'Retailer ID',           enableCellEdit : true, },
      {  field : 'rewardTitle',           width : 200, displayName : 'Reward Title',          enableCellEdit : true, },
      {  field : 'getStartDateReadable()',width : 200, displayName : 'Start Date',type:"date",enableCellEdit : true, },
      {  field : 'visitTime',             type: 'number', width : 100, displayName : 'Visit Time',  enableCellEdit : true, }
    ],

  "LoyaltyRewardColumnDefs2" : [{

    name: 'Actions', width : 150,enableCellEdit : false, pinnedLeft:true,
    cellTemplate: '<div class="container " >' +
                  '<button class="btn-danger btn-circle " type="button" ng-click="grid.appScope.deleteRow(row)" ><img src="images/ic_delete_forever_black_18dp_2x.png"></button>'+
                  '<button class="btn-info btn-circle "   ng-click="grid.appScope.addRow(row)" ><img src="images/ic_add_circle_outline_black_18dp_2x.png"</button>' +
                  '<button class="btn-success btn-circle "  ng-click="grid.appScope.saveRow(row)" ><img src="images/ic_save_black_18dp_2x.png"</button>' +
                  '</div>'
    },
    {
    field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'rewardImage',   width : 200, displayName : 'Reward Image',          enableCellEdit : true, },
    {  field : 'storeName',     width : 200, displayName : 'Retailer ID',           enableCellEdit : true, },
    {  field : 'rewardTitle',   width : 200, displayName : 'Reward Title',          enableCellEdit : true, },
    {  field : 'pointsPerVisit',width : 100, type: 'number', displayName : 'Points Per Visit',enableCellEdit : true, },
    {  field : 'visitTime',     width : 100, type: 'number', displayName : 'Visit Time',      enableCellEdit : true, },
    {  field : 'startDate',     width : 200, type: "date",   displayName : 'Start Date',      enableCellEdit : true, },
    {  field : 'endDate',       width : 200, type: "date",   displayName : 'End Date',        enableCellEdit : true, },
  ],
  "ApproveLoyaltyRewardColumnDefs" : [{
    field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : 100,
  },
    {  field : 'rewardImage',           width : 200, displayName : 'Reward Image',              enableCellEdit : false, },
    {  field : 'storeName',             width : 200, displayName : 'Retailer ID',               enableCellEdit : false, },
    {  field : 'rewardTitle',           width : 200, displayName : 'Reward Title',              enableCellEdit : false, },
    {  field : 'pointsPerVisit',        width : 100, type: 'number',  displayName : 'Points Per Visit',          enableCellEdit : false, },
    {  field : 'visitTime',             width : 100, type: 'number',  displayName : 'Visit Time', enableCellEdit : false, },
    {  field : 'getStartDateReadable()',width : 200, type: "date",    displayName : 'Start Date', enableCellEdit : false, },
    {  field : 'getEndDateReadable()',  width : 200, type: "date",    displayName : 'End Date',   enableCellEdit : false, },
    {  field : 'approved',              width : 100, type: 'boolean', displayName : 'Approved?',  cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
  ],

  "addRowLoyaltyReward" : {
    "loyaltyRewardid" : 0,
    "endDate"         : null,
    "pointsPerVisit"  : 0,
    "rewardImage"     : "",
    "retailerid"      : 0,
    "rewardTitle"     : "",
    "startDate"       : null,
    "visitTime"       : 0
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
      {  field : 'managerid',          type: 'number', width : 100, displayName : 'Manager ID',                 enableCellEdit : false,          },
      {  field : 'shoppingCentreid',   type: 'number', width : 100, displayName : 'Shopping Centre ID',         enableCellEdit : false,          },
      {  field : 'storeDefaultContentPage1',  width : 200,displayName : 'Store Default Content Page1', enableCellEdit : false,   },
      {  field : 'zoneid',             type: 'number', width : 100, displayName : 'Zone ID',                    enableCellEdit : false           }
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
    {  field : 'yob',           type: 'number', width : 100, displayName : 'Yob',           enableCellEdit : false,  },
    {  field : 'approved',      width : 100, displayName : 'Approved?', type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
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
    {  field : 'yob',           type: 'number', width : 100, displayName : 'Yob',           enableCellEdit : false,  },
    {  field : 'approved',      width : 100, displayName : 'Approved?', type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
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
      {  field : 'points',     type: 'number', width : 100,  displayName : 'Points',      enableCellEdit : false,  }
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
      {  field : 'beaconid',  type: 'number', width : 100,      displayName : 'Beacon ID', enableCellEdit : false,  },
      {  field : 'zoneName',  width : 200,      displayName : 'Zone Name', enableCellEdit : false,  }
    ],

  "addRowZone" : {
    "zoneid"   : "",
    "beaconid" : "",
    "zoneName" : ""
  }
});





