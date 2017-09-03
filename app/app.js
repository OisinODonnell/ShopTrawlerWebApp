// TODO: Add Delete, Edit and Create Elements for each entity.
//       Not needed for every entity (CRUD) A=Admin R=Retailer G=Generate /=done S=summary Reports x = no operation required
//
//       BonusCode     A-x       R-R/UG
//       Beacon        A-R/      R-x/
//       Content       A-U/      R-RCU/
//       LoyaltyReward A-U/      R-RCU/
//       UserPoint     A-x/      R-R/
//       User          A-RUD/    R-U/
//       Retailer      A-RCUD/   R-U/
//       Rating        A-R/      R-RS/
//       Zone          A-R/      R-x/
//       Favourite     A-x/      R-R/
//       ShoppingCentres A-RU/   R-x/
//       Visit         A-R/      R-RS/
//       Location      A-R/      R-x/
//
// Admin
//        Content: Only Show content yet to be approved
//        LoyaltyRewards: Show content yet to be approved
//        Retailer : Row contents do not appear when row is clicked
//        Rating :  Add new item for Rating Summary per Retailer
//        SC: Remove Add
// Retailer
//        Ratings: Show report . or show avg in footer under rating column
//        BonusCodes (is empty except for retailer name
//                    Add 'Generate BonusCodes'
//        Users ... Block access except to Stores manager
//        Visits :  Provide Monthly/weekly report/daily
//                  + Add in alot more data (2000 over one year)
// (A)    Retailer : Add/Delete Record
//        Users (own record) : Update
//
// (R)    Content : Add/Update/Delete
//        LoyaltyReward : add/update/delete
//        Users (own record) : Update
//
// import Chart from "../node_modules/chart.js/dist/Chart.js"
//


let myApp =  angular.module('app', ['ng','angularFileUpload','directives','ngRoute','routes',
  'ngMaterial','ngMessages', 'ngAria','ngCookies','ngFlash',  'ngAnimate', 'ui.grid', 'ui.grid.moveColumns',
  'ngMaterialDatePicker',  'ui.grid.selection', 'ui.grid.resizeColumns', 'ui.bootstrap', 'ui.grid.edit',
  'ui.grid.pagination','tc.chartjs','angularMoment', 'ui.grid.pinning' ])

  .config(config)
  .run(run);

  config.$inject = ['FlashProvider', '$compileProvider'];
    function config(FlashProvider, $compileProvider) {
      FlashProvider.setTimeout(2000);
      FlashProvider.setShowClose(true);
      $compileProvider.preAssignBindingsEnabled(true);
  }

  run.$inject = ['$rootScope', '$location', '$cookies', '$http'];
  function run($rootScope, $location, $cookies, $http ) {
    // keep user logged in after page refresh
    // $rootScope.globals.currentUser = "";

    this.myDate = new Date();
    this.isOpen = false;

    // $http.get('/api/config')
    //   .then(function(config) {
    //   $rootScope.config = config;
    // });

    $rootScope.globals = $cookies.getObject('globals') || {};

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
      // redirect to login page if not logged in and trying to access a restricted page
      let restrictedPage = $.inArray($location.path(), [ '/login', '/register','/home' ]) === -1;
      let loggedIn       = $rootScope.globals.currentUser;
      if (restrictedPage && !loggedIn) {
        $location.path('/login');

      }
    });
  }


myApp.config(['$httpProvider',function($httpProvider) {
  // $httpProvider.defaults.useXDomain = true;
  // $httpProvider.defaults.withCredentials = true;
  // delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


}]);

myApp.factory('AuthInterceptor', ['$rootScope', function($rootScope) {
  return {

    // Sent the token (if present) with each request
    'request': function(config) {
      config.headers = config.headers || {};
      let auth = $rootScope.globals.currentUser.authdata;

      config.headers.Authorization = 'Basic ' + auth;
      config.headers['Accept'] = 'application/json;odata=verbose';
      return config;
    }
  };
}]);



myApp.controller('AppCtrl', function($scope) {
  this.myDate = new Date();
  this.isOpen = false;

  $scope.myDate = new Date();
  $scope.minDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() - 2,
    $scope.myDate.getDate());
  $scope.maxDate = new Date(
    $scope.myDate.getFullYear(),
    $scope.myDate.getMonth() + 2,
    $scope.myDate.getDate());
  $scope.onlyWeekendsPredicate = function(date) {
    let day = date.getDay();
    return day === 0 || day === 6;
  };
});

myApp.config(['$mdDateLocaleProvider', function ($mdDateLocaleProvider) {
  $mdDateLocaleProvider.formatDate = function(date) {
    let m = moment(date);
    return m.isValid()? m.format('DD-MM-YYYY') : '';
  }}]);

myApp.filter("mysqlDateFormatToTimestamp", function(){
  return function(date){
    let date1 = '';
    let date2 = '';
    let date3 = '';
    let timestamp = '';
    let hours = '';
    let minutes = '';
    let seconds = '';

    date1 = date.split(':');
    date2 = date1[0].split(' ');
    date3 = date2[0].split('-'); // Change it based on your format

    if( date1.length === 1 && date2.length === 1 ){
      hours = '00';
      minutes = '00';
      seconds = '00';
    }else{
      hours = parseInt(date2[1]);
      minutes = parseInt(date1[1]);
      seconds = parseInt(date1[2]);
    }
    timestamp = new Date(parseInt(date3[0]), parseInt(date3[1])-1, parseInt(date3[2]), hours, minutes, seconds);
    return timestamp;
  }
});

myApp.filter('timestampToISO', function() {
  return function(input) {
    input = new Date(input).toISOString();
    return input;
  };
});


myApp.controller('UploadCtrl', function ($scope, $http, $location, $upload, $rootScope) {
    $scope.imageUploads = [];
    $scope.abort = function(index) {
      $scope.upload[index].abort();
      $scope.upload[index] = null;
    };

    $scope.onFileSelect = function ($files) {
      $scope.files = $files;
      $scope.upload = [];
      for (let i = 0; i < $files.length; i++) {
        let file = $files[i];
        file.progress = parseInt(0);
        (function (file, i) {
          $http.get('/api/s3Policy?mimeType='+ file.type).success(function(response) {
            let s3Params = response;
            $scope.upload[i] = $upload.upload({
              url: 'https://' + $rootScope.config.awsConfig.bucket + '.s3.amazonaws.com/',
              method: 'POST',
              transformRequest: function (data, headersGetter) {
                //Headers change here
                let headers = headersGetter();
                delete headers['Authorization'];
                return data;
              },
              data: {
                'key' : 's3UploadExample/'+ Math.round(Math.random()*10000) + '$$' + file.name,
                'acl' : 'public-read',
                'Content-Type' : file.type,
                'AWSAccessKeyId': s3Params.AWSAccessKeyId,
                'success_action_status' : '201',
                'Policy' : s3Params.s3Policy,
                'Signature' : s3Params.s3Signature
              },
              file: file,
            });
            $scope.upload[i]
              .then(function(response) {
                file.progress = parseInt(100);
                if (response.status === 201) {
                  let data = xml2json.parser(response.data),
                    parsedData;
                  parsedData = {
                    location: data.postresponse.location,
                    bucket: data.postresponse.bucket,
                    key: data.postresponse.key,
                    etag: data.postresponse.etag
                  };
                  $scope.imageUploads.push(parsedData);

                } else {
                  alert('Upload Failed');
                }
              }, null, function(evt) {
                file.progress =  parseInt(100.0 * evt.loaded / evt.total);
              });
          });
        }(file, i));
      }
    };
  });

