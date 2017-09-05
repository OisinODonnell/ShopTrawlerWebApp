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
    // headerCellClass: 'white',

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
      title : {
        fontSize : 40,
        text : "Sample Title",
      },
      xAxes: [{ // option.scales.xAxes
        display: true, // option.scales.xAxes.display
        scaleLabel: { // option.scales.scaleLabel
           display     : true, // option.scales.scaleLabel.display
          fontSize : 40,
           labelString : 'Sample Chart Footer' // option.scales.scaleLabel.labelString
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
      fontSize : 40,
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
    responsive                : true,
    enableCellEdit            : true,
    enableSorting             : true,
    enableFiltering           : true,
    enableHorizontalScrollbar : 1, // 0 = disabled,  1 = always, 2 = as needed
    enableVerticalScrollbar   : 1,
    enableColumnMoving        : true,
    enableColumnResizing      : true,
    showColumnFooter          : true, // useful for a couple of entities where aggregate values can be calculated
    rowTemplate               : "/ShopTrawlerWebApp/app/Views/rowTemplate2.html",

    enableGridMenu            : true, // menu in top right hand corner
    // enablePaging              : true,
    // paginationPageSizes       : [10, 20, 40],
    // paginationPageSize        : 10,
    minRowsToShow             : 6 ,  // again this does not appear to work, it appears to follow the 'paginationPageSizes'
    // minimumColumnSize         : 100, // this did not work, col width is specified individually below
    // minWidth                  : 200, //
    rowHeight                 : 50,  // in pixels
    // maxWidth                  : 9000,
  },
  "ContentColumnDefs" : [{
    field : 'contentid',        displayName    : 'Content ID',headerCellClass: 'white',
    enableSorting : true,       enableCellEdit : false,       type  : 'number',
    width : '10%',
  },
    // {
    //   name: 'Actions', field: 'edit', enableFiltering: false, enableSorting: false,
    //   cellTemplate: '<div><button ng-show="!row.entity.editrow" class="btn primary" ng-click="grid.appScope.edit(row.entity)"><ifa-edit"></i></button>' +  //Edit Button
    //   '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.saveRow(row.entity)"><i class="fa fa-floppy-o"></i></button>' +//Save Button
    //   '<button ng-show="row.entity.editrow" class="btn primary" ng-click="grid.appScope.cancelEdit(row.entity)"><i class="fa fa-times"></i></button>' + //Cancel Button
    //   '</div>', width: 100
    // },
    {  field : 'getEndDateString()',  width : '20%',displayName : 'End Date',type:"date",enableCellEdit : true,  headerCellClass: 'white'},
    {  field : 'page1',               width : '20%',displayName : 'Page 1',enableCellEdit : true,  headerCellClass: 'white',
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>',

    },
    {  field : 'page2',               width : '20%',displayName : 'Page 2',enableCellEdit : true,headerCellClass: 'white',
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>',
    },
    {  field : 'page3',               width : '20%',displayName : 'Page 3',enableCellEdit : true,headerCellClass: 'white',
      cellTemplate: '<div  ng-if="!row.entity.editrow">{{COL_FIELD}}</div><div ng-if="row.entity.editrow"><input type="text" style="height:30px" ng-model="MODEL_COL_FIELD"</div>',headerCellClass: 'white',
    },
    {  field : 'retailerid',          width : '10%', type: 'number' ,  displayName : 'Retailer ID',enableCellEdit : true, headerCellClass: 'white',         },
    {  field : 'getStartDateString()',width : '20%', displayName : 'Start Date',type:"date",  headerCellClass: 'white',                    }

  ],

  "ContentColumnDefs2" : [{

      name: 'Actions', width : 100,enableCellEdit : false, pinnedRight:true,headerCellClass: 'white',
      cellTemplate: '/ShopTrawlerWebApp/app/Views/cellTemplateActions.html',
    },
    {
    field : 'contentid',                displayName    : 'Content ID',headerCellClass: 'white',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : '10%',
  },
    {   field : 'page1',   width : '20%',  displayName : 'Page 1',enableCellEdit : true,headerCellClass: 'white',
      cellTemplate: "/ShopTrawlerWebApp/app/Views/cellTemplateFileChooserPage1.html",

    },
    {  field : 'page2',    width : '20%',  displayName : 'Page 2',enableCellEdit : true,headerCellClass: 'white',
      cellTemplate: "/ShopTrawlerWebApp/app/Views/cellTemplateFileChooserPage2.html",

    },
    {  field : 'page3',    width : '20%',  displayName : 'Page 3',enableCellEdit : true,headerCellClass: 'white',
      cellTemplate: "/ShopTrawlerWebApp/app/Views/cellTemplateFileChooserPage3.html",

    },
    {  field : 'retailerid',width : '10%',displayName : 'Retailer ID',enableCellEdit : false, type: 'number',headerCellClass: 'white',},
    {  field : 'startDate', width : '20%',displayName : 'Start Date', enableCellEdit : true,  type: "date",  headerCellClass: 'white',},
    {  field : 'endDate',   width : '20%',displayName : 'End Date',   enableCellEdit : true,  type: "date",  headerCellClass: 'white',},

  ],

  "ApproveContentColumnDefs" : [{
    field : 'contentid',                displayName    : 'Content ID',headerCellClass: 'white',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : '10%',
  },
    {  field : 'getEndDateReadable()',  width : '20%', displayName : 'End Date',type:"date",enableCellEdit : false, headerCellClass: 'white',},
    {  field : 'page1',                 width : '20%', displayName : 'Page 1',enableCellEdit : false,               headerCellClass: 'white',},
    {  field : 'page2',                 width : '20%', displayName : 'Page 2',enableCellEdit : false,               headerCellClass: 'white',},
    {  field : 'page3',                 width : '20%', displayName : 'Page 3',enableCellEdit : false,               headerCellClass: 'white',},
    {  field : 'retailerid',            width : '10%', displayName : 'Retailer ID',enableCellEdit : false,type: 'number', headerCellClass: 'white',         },
    {  field : 'getStartDateReadable()',width : '20%', displayName : 'Start Date' ,type:"date",   enableCellEdit  : false, headerCellClass: 'white', },
    {  field : 'approved',              width : '10%', displayName : 'Approved?', type: 'boolean',headerCellClass: 'white',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}

  ],
  // sets default values for addRow popup
  "addRowContent" : {
    "contentid"   : "",
    "endDate"     : "",
    "page1"       : "",
    "page2"       : "",
    "page3"       : "",
    "retailerid"  : "",
    "startDate"   : ""
  },

  // default values for a new row of content into the grid
  "NewContent" : {
    "contentid"   : 0,
    "endDate"     : new Date(),
    "page1"       : "Page 1",
    "page2"       : "Page 2",
    "page3"       : "Page 3",
    "retailerid"  : "",
    "startDate"   : new Date()
  },
  "VisitColumnDefs" : [ {
      field : 'visitid',                 displayName    : 'Visit ID',headerCellClass: 'white',
      enableSorting : true,              enableCellEdit : false,
      type : 'number',
      width : '6%',
      },
      { field : 'getEntryTimeReadable()',width : '18%',    displayName : 'Entry Time', enableCellEdit : false,type:"date", headerCellClass: 'white',},
      { field : 'getExitTimeReadable()', width : '18%',    displayName : 'Exit Time',  enableCellEdit : false,type:"date", headerCellClass: 'white',},
      // { field : 'userCreditedForVisit', width : 100,    displayName : 'User Credited For Visit',enableCellEdit : true, },
      // { field : 'duration', type: 'number' ,            width : 100,    displayName : 'Duration',enableCellEdit : false,               },
      { field : 'storeName',             width : '18%',    displayName : 'Store Name', enableCellEdit : false,             headerCellClass: 'white',},
      { field : 'fullname',              width : '18%',    displayName : 'Fullname',   enableCellEdit : false,            headerCellClass: 'white', },
      { field : 'userid',                width : '6%',    displayName : 'User ID',     enableCellEdit : false,type: 'number' ,headerCellClass: 'white',             },
      { field : 'zoneid',                width : '6%',    displayName : 'Zone ID',     enableCellEdit : false,type: 'number' ,headerCellClass: 'white',             }
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
      field : 'beaconid',        displayName    : 'Beacon ID',headerCellClass: 'white',
      enableSorting : true,      enableCellEdit : false,
      type  : 'number',
      width : '12%',
      },
      {  field: 'locationid',    width : '12%', displayName: 'Location ID',   enableCellEdit : false,type: 'number' ,headerCellClass: 'white', },
      {  field: 'major',         width : '12%', displayName: 'Major',         enableCellEdit : false,type: 'number' ,headerCellClass: 'white',  },
      {  field: 'minor',         width : '12%', displayName: 'Minor',         enableCellEdit : false,type: 'number' , headerCellClass: 'white', },
      {  field: 'transmitPower', width : '12%', displayName: 'Transmit Power',enableCellEdit : false,type: 'number' , headerCellClass: 'white', },
      {  field: 'uuid',          width : '40%', displayName: 'UUID',          enableCellEdit : false,headerCellClass: 'white',  }
    ],

  "addRowBeacon"    : {
    "beaconids"     : "",
    "dateTime"      : "",
    "major"         : "",
    "minor"         : "",
    "transmitPower" : ""
    },

  "BonusCodeColumnDefs" : [{
      field : 'bonusCodeid',             displayName    : 'Bonus Code ID',headerCellClass: 'white',
      enableSorting : true,              enableCellEdit : false,
      type  : 'number',
      width : '10%',
      },
      {  field : 'storeName', width : '30%', displayName  : 'Retailer ID', enableCellEdit : false,  headerCellClass: 'white',       },
      {  field : 'value',     width : '10%', displayName : 'Value',       enableCellEdit : false, type: 'number' , headerCellClass: 'white',       },
      {  field : 'fullname',  width : '30%', displayName  : 'User ID',     enableCellEdit : false,   headerCellClass: 'white',      },
      {  field : 'dateTime',  width : '20%', displayName  : 'Date Time',   enableCellEdit : false, type:"date",headerCellClass: 'white',}
    ],

  "GenerateBonusCodeColumnDefs" : [{
    field : 'bonusCodeid',             displayName    : 'Bonus Code ID',headerCellClass: 'white',
    enableSorting : true,              enableCellEdit : false,
    type  : 'number',
    width : '10%',
  },
    {  field : 'storeName',            width : '30%',displayName : 'Retailer ID', enableCellEdit : false,       headerCellClass: 'white',  },
    {  field : 'value',                width : '10%', displayName : 'Value',       enableCellEdit : false,type  : 'number',  headerCellClass: 'white',       },
    {  field : 'fullname',             width : '30%',displayName : 'User ID',     enableCellEdit : false,     headerCellClass: 'white',    },
    {  field : 'getDateTimeReadable()',width : '20%',displayName : 'Date Time',type:"date",enableCellEdit : false,headerCellClass: 'white',}
  ],

  "addRowBonusCode" : {
    "bonusCodeid" : "",
    "retailerid"  : "",
    "value"       : "",
    "userid"      : "",
    "dateTime"    : ""
  },





  "FavouriteColumnDefs" : [{
      field : 'fullname',        displayName : 'User ID',headerCellClass: 'white',
      enableSorting : true,      enableCellEdit : false,
      type  : 'number',
      width : '34%',
      },
      {  field : 'storeName',    width : '66%',displayName : 'Retailer ID',enableCellEdit : false, headerCellClass: 'white',   }
    ],
  "addRowFavourite" : {
    "userid"     : "",
    "retailerid" : ""
  },

  "LocationColumnDefs" : [{
      field : 'locationid',           displayName    : 'locationid',headerCellClass: 'white',
      enableSorting : true,           enableCellEdit : false,
      type  : 'number',
      width : '10%',
      },
      {  field : 'altitude',          type: 'number' ,width : '15%',displayName : 'Altitude',           enableCellEdit : false,         headerCellClass: 'white',        },
      {  field : 'gpsLongtitude',     type: 'number' ,width : '15%',displayName : 'GPS Longtitude',     enableCellEdit : false,         headerCellClass: 'white',        },
      {  field : 'gpsLatitude',       type: 'number' ,width : '15%',displayName : 'GPS Latitude',       enableCellEdit : false,         headerCellClass: 'white',        },
      {  field : 'locationInShoppingCentre',          width : '15%',displayName : 'Location In Shopping Centre',enableCellEdit : false, headerCellClass: 'white',},
      {  field : 'locationType',      type: 'text'   ,width : '20%',displayName : 'Location Type',      enableCellEdit : false,        headerCellClass: 'white',         },
      {  field : 'shoppingCentreid',  type: 'number' ,width : '10%',displayName : 'Shopping Centre ID', enableCellEdit : false,        headerCellClass: 'white',         }
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
      field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',headerCellClass: 'white',
      enableSorting : true,               enableCellEdit : false,
      type  : 'number',
      width : '10%',
      },
      {  field : 'getEndDateReadable()',  width : '20%', displayName : 'End Date',type:"date",  enableCellEdit : true,headerCellClass: 'white', },
      {  field : 'pointsPerVisit',        width : '10%', type: 'number',  displayName : 'Points Per Visit',      enableCellEdit : true, headerCellClass: 'white',},
      {  field : 'rewardImage',           width : '20%', type : 'link',  displayName : 'Reward Image',          enableCellEdit : true,headerCellClass: 'white', },
      {  field : 'storeName',             width : '20%', displayName : 'Retailer ID',           enableCellEdit : true, headerCellClass: 'white',},
      {  field : 'rewardTitle',           width : '20%', displayName : 'Reward Title',          enableCellEdit : true, headerCellClass: 'white',},
      {  field : 'getStartDateReadable()',width : '20%', displayName : 'Start Date',type:"date",enableCellEdit : true, headerCellClass: 'white',},
      {  field : 'visitTime',             width : '10%', type: 'number',displayName : 'Visit Time',  enableCellEdit : true, headerCellClass: 'white',}
    ],

  "LoyaltyRewardColumnDefs2" : [{

    name: 'Actions', width : 130,enableCellEdit : false, pinnedRight:true,headerCellClass: 'white',
    cellTemplate: '<div  >' +
                    '<button class="btn-success btn-circle"  ng-click="grid.appScope.saveRow(row)" ><img src="images/ic_save_black_24dp_1x.png"</button>' +
                    '<button class="btn-danger btn-circle "  ng-click="grid.appScope.deleteRow(row)" ><img src="images/ic_delete_forever_black_24dp_1x.png"></button>'+
                  '</div>'
    },
    {
    field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',headerCellClass: 'white',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : '10%',
  },
    {  field : 'rewardImage',   width : '20%', displayName : 'Reward Image',          enableCellEdit : true, headerCellClass: 'white',},
    {  field : 'storeName',     width : '20%', displayName : 'Retailer ID',           enableCellEdit : true, headerCellClass: 'white',},
    {  field : 'rewardTitle',   width : '20%', displayName : 'Reward Title',          enableCellEdit : true, headerCellClass: 'white',},
    {  field : 'pointsPerVisit',width : '10%', type: 'number', displayName : 'Points Per Visit',enableCellEdit : true,headerCellClass: 'white', },
    {  field : 'visitTime',     width : '10%', type: 'number', displayName : 'Visit Time',      enableCellEdit : true, headerCellClass: 'white',},
    {  field : 'startDate',     width : '20%', type: "date",   displayName : 'Start Date',      enableCellEdit : true, headerCellClass: 'white',},
    {  field : 'endDate',       width : '20%', type: "date",   displayName : 'End Date',        enableCellEdit : true, headerCellClass: 'white',},
  ],
  "ApproveLoyaltyRewardColumnDefs" : [{
    field : 'loyaltyRewardid',          displayName    : 'Loyalty Reward ID',headerCellClass: 'white',
    enableSorting : true,               enableCellEdit : false,
    type  : 'number',
    width : '10%',
  },
    {  field : 'rewardImage',           width : '20%', displayName : 'Reward Image',              enableCellEdit : false,headerCellClass: 'white', },
    {  field : 'storeName',             width : '20%', displayName : 'Retailer ID',               enableCellEdit : false, headerCellClass: 'white',},
    {  field : 'rewardTitle',           width : '20%', displayName : 'Reward Title',              enableCellEdit : false, headerCellClass: 'white',},
    {  field : 'pointsPerVisit',        width : '10%', type: 'number',  displayName : 'Points Per Visit',          enableCellEdit : false, headerCellClass: 'white',},
    {  field : 'visitTime',             width : '10%', type: 'number',  displayName : 'Visit Time', enableCellEdit : false, headerCellClass: 'white',},
    {  field : 'getStartDateReadable()',width : '20%', type: "date",    displayName : 'Start Date', enableCellEdit : false, headerCellClass: 'white',},
    {  field : 'getEndDateReadable()',  width : '20%', type: "date",    displayName : 'End Date',   enableCellEdit : false,headerCellClass: 'white', },
    {  field : 'approved',              width : '10%', type: 'boolean', displayName : 'Approved?',  headerCellClass: 'white',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
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
  "NewLoyaltyReward" : {
    "loyaltyRewardid" : 0,
    "endDate"         : new Date(),
    "pointsPerVisit"  : 10,
    "rewardImage"     : "Reward Image",
    "retailerid"      : "",
    "rewardTitle"     : "Reward Title",
    "startDate"       : new Date(),
    "visitTime"       : 10
  },

  "RatingColumnDefs" : [{
      field : 'fullname',               displayName : 'User ID',headerCellClass: 'white',
      enableSorting : true,             enableCellEdit : false,
      type  : 'number',
      width : '10%',
      },
      {  field : 'getDateReadable()',   width : '20%',   displayName : 'Date',type:"date",enableCellEdit : false,headerCellClass: 'white',  },
      {  field : 'storeName',           width : '20%',   displayName : 'Retailer ID',     enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'review',              width : '40%',   displayName : 'Review',          enableCellEdit : false,headerCellClass: 'white',  }

    ],

  "addRowRating" : {
    "userid"     : "",
    "date"       : "",
    "retailerid" : "",
    "rating"     : "",
    "review"     : ""
  },

  "RetailerColumnDefs" : [{
      field : 'retailerid',            displayName    : 'Retailer ID',headerCellClass: 'white',
      enableSorting : true,            enableCellEdit : false,
      type  : 'number',
      width : 100,
      },
      {  field : 'defaultContentPage1',               width : '9%',   displayName : 'Default Content Page1',      enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'defaultContentPage2',               width : '9%',   displayName : 'Default Content Page2',      enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'defaultContentPage3',               width : '9%',   displayName : 'Default Content Page3',      enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'defaultLoyaltyRewardImage',         width : '9%',   displayName : 'Default Loyalty Reward Image',enableCellEdit : false,headerCellClass: 'white',   },
      {  field : 'facebookUrl',                       width : '9%',   displayName : 'Facebook Url',               enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'twitterUrl',                        width : '9%',   displayName : 'Twitter Url',                enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'websiteUrl',                        width : '9%',   displayName : 'Website Url',                enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'logoImageSmall',                    width : '11%',  displayName : 'Logo Image Small',           enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'logoImageLarge',                    width : '11%',  displayName : 'Logo Image Large',           enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'logoImageMedium',                   width : '11%',  displayName : 'Logo Image Medium',          enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'phone',                             width : '5%',   displayName : 'Phone',                      enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'storeName',                         width : '5%',   displayName : 'Store Name',                 enableCellEdit : false, headerCellClass: 'white',         },
      {  field : 'headerBackgroundImage',             width : '9%',   displayName : 'Header Background Image',  enableCellEdit : false,   headerCellClass: 'white',       },
      {  field : 'managerid',          type: 'number',width : '4.5%', displayName : 'Manager ID',         enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'shoppingCentreid',   type: 'number',width : '4.5%', displayName : 'Shopping Centre ID', enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'storeDefaultContentPage1',          width : '9%',   displayName : 'Store Default Content Page1',  enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'zoneid',             type: 'number',width : '4.5%', displayName : 'Zone ID',            enableCellEdit : false,  headerCellClass: 'white', }
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
      field : 'shoppingCentreid',  displayName    : 'Shopping Centre ID',headerCellClass: 'white',
      enableSorting : true,        enableCellEdit : false,
      type  : 'number',
      width : '9%',
      },
      {  field : 'fullname',       width : '12%', displayName : 'Admin ID',           enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'contentPage',    width : '12%', displayName : 'Content Page',       enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'phone',          width : '10%', displayName : 'Phone',              enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'facebookUrl',    width : '12%', displayName : 'Facebook Url',       enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'twitterUrl',     width : '12%', displayName : 'Twitter Url',        enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'websiteUrl',     width : '12%', displayName : 'Website Url',        enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'logoImageSmall', width : '25%', displayName : 'Logo Image Small',   enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'logoImageMedium',width : '25%', displayName : 'Logo Image Medium',  enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'logoImageLarge', width : '25%', displayName : 'Logo Image Large',   enableCellEdit : false, headerCellClass: 'white', }
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
    field : 'userid',           displayName    : 'User ID',headerCellClass: 'white',
    enableSorting : true,       enableCellEdit : false,
    type  : 'number',
    width : '6%',
  },
    {  field : 'firstname',     width : '11%', displayName : 'Firstname',     enableCellEdit : false,headerCellClass: 'white',  },
    {  field : 'surname',       width : '11%', displayName : 'Surname',       enableCellEdit : false,headerCellClass: 'white',  },
    {  field : 'emailAddress',  width : '20%', displayName : 'Email Address', enableCellEdit : false,headerCellClass: 'white',  },
    {  field : 'phone',         width : '13%', displayName : 'Phone',         enableCellEdit : false,headerCellClass: 'white',  },
    {  field : 'gender',        width : '11%', displayName : 'Gender',        enableCellEdit : false,headerCellClass: 'white',  },
    // {  field : 'password',   width : '11%', displayName : 'Password',      enableCellEdit : false,  },
    {  field : 'type',          width : '11%', displayName : 'Type',          enableCellEdit : false,headerCellClass: 'white',  },
    {  field : 'yob',           width : '6%' , displayName : 'Yob',      enableCellEdit : false, headerCellClass: 'white', type: 'number',},
    {  field : 'approved',      width : '11%', displayName : 'Approved?', type: 'boolean', headerCellClass: 'white',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
  ],
  "UserRetailerColumnDefs" : [{
    field : 'userid',           displayName    : 'User ID',headerCellClass: 'white',
    enableSorting : true,       enableCellEdit : false,
    type  : 'number',
    width : '6%',
  },
    {  field : 'firstname',     width : '10%', displayName : 'Firstname',     enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'surname',       width : '10%', displayName : 'Surname',       enableCellEdit : false,headerCellClass: 'white',  },
    {  field : 'emailAddress',  width : '17%', displayName : 'Email Address', enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'phone',         width : '10%', displayName : 'Phone',         enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'gender',        width : '10%', displayName : 'Gender',        enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'password',      width : '10%', displayName : 'Password',      enableCellEdit : false, headerCellClass: 'white',type : 'password',  },
    {  field : 'type',          width : '10%', displayName : 'Type',          enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'yob',           width : '6%' , displayName : 'Yob',           enableCellEdit : false, headerCellClass: 'white',type: 'number',},
    {  field : 'approved',      width : '11%', displayName : 'Approved?',     headerCellClass: 'white',type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
  ],
  "ApproveUserColumnDefs" : [{
    field : 'userid',           displayName    : 'User ID',headerCellClass: 'white',
    enableSorting : true,       enableCellEdit : false,
    type  : 'number',
    width : '6%',
  },
    {  field : 'firstname',     width : '15%', displayName : 'Firstname',     enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'surname',       width : '15%', displayName : 'Surname',       enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'emailAddress',  width : '16%', displayName : 'Email Address', enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'phone',         width : '11%', displayName : 'Phone',         enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'gender',        width : '13%', displayName : 'Gender',        enableCellEdit : false, headerCellClass: 'white', },
    // {  field : 'password',      width : '13%', displayName : 'Password',      enableCellEdit : false,  },
    {  field : 'type',          width : '10%', displayName : 'Type',          enableCellEdit : false, headerCellClass: 'white', },
    {  field : 'yob',           width : '6%', displayName : 'Yob',           enableCellEdit : false, headerCellClass: 'white',type: 'number', },
    {  field : 'approved',      width : '8%', displayName : 'Approved?', type: 'boolean', headerCellClass: 'white',cellTemplate: '<input type="checkbox" ng-model="row.entity.approved">'}
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
      field : 'fullname',      displayName    : 'User ID',headerCellClass: 'white',
      enableSorting : true,    enableCellEdit : false,
      type  : 'number',
      width : '33%',
      },
      {  field : 'storeName',  width : '34%',  displayName : 'Retailer ID', enableCellEdit : false, headerCellClass: 'white', },
      {  field : 'points',     type: 'number', width : '33%',  displayName : 'Points',      enableCellEdit : false, headerCellClass: 'white', }
    ],

  "addRowUserPoint" : {
    "userid"      : "",
    "retailerid"  : "",
    "points"      : ""
  },

  "ZoneColumnDefs" : [{
      field : 'zoneid',       displayName    : 'Zone ID',headerCellClass: 'white',
      enableSorting : true,   enableCellEdit : false,
      type  : 'number',
      width : '20%',
      },
      {  field : 'beaconid',  type: 'number', width : '20%',      displayName : 'Beacon ID', headerCellClass: 'white',enableCellEdit : false,  },
      {  field : 'zoneName',  width : '60%',      displayName : 'Zone Name', headerCellClass: 'white',enableCellEdit : false,  }
    ],

  "addRowZone" : {
    "zoneid"   : "",
    "beaconid" : "",
    "zoneName" : ""
  }
});





