'use strict';

myApp.controller('UploadController',['$scope','$rootScope','AWSconfig',  function($scope, $rootScope, AWSconfig) {
    $scope.sizeLimit      = 10585760; // 10MB in Bytes
    $scope.uploadProgress = 0;
    $scope.creds          = {};

    // temp setting, this will be set outside the controller
    $rootScope.type = "C";

    // initialise AWS.
    setupAWS($rootScope.type);

    // upload file and write to AWS
    $scope.upload = function() {

        if($scope.file) {
            // Perform File Size Check First
            let fileSize = Math.round(parseInt($scope.file.size));
            if (fileSize > $scope.sizeLimit) {
                toastr.error("Sorry, your attachment is too big. <br/> Maximum "  + $scope.fileSizeLabel() + " file attachment allowed","File Too Large");
                return false;
            }
            // Prepend Unique String To Prevent Overwrites
            // The uniqueness is used as a key to locate the file.
            // This will be changed to become one of 4 content types (C, LR, SC or RET) plus the id of that entity
            // eg  ... C0001, or LR020
            let uniqueFileName = $scope.uniqueString() + '-' + $scope.file.name;

            // add file details to parameters
            $scope.params.Key = uniqueFileName;
            $scope.params.ContentType = $scope.file.type;
            $scope.params.Body = $scope.file;


            $scope.bucket.putObject($scope.params, function(err, data) {
                if(err) {
                    toastr.error(err.message,err.code);
                    return false;
                } else {
                    // Upload Successfully Finished
                    toastr.success('File Uploaded Successfully', 'Done');

                    // Reset The Progress Bar
                    setTimeout(function() {
                        $scope.uploadProgress = 0;
                        $scope.$digest();
                    }, 4000);
                }
            })
            .on('httpUploadProgress',function(progress) {
                $scope.uploadProgress = Math.round(progress.loaded / progress.total * 100);
                $scope.$digest();
            });
        }
        else {
            // No File Selected
            toastr.error('Please select a file to upload');
        }
    };

    $scope.fileSizeLabel = function() {
        // Convert Bytes To MB
        return Math.round($scope.sizeLimit / 1024 / 1024) + 'MB';
    };

    $scope.uniqueString = function() {
        let text     = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 8; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };



    function setupAWS(type) {

        $rootScope.AWS = {};
        $rootScope.AWS.ACCESS_KEY = AWSconfig.ACCESS_KEY;
        $rootScope.AWS.SECRET_KEY = AWSconfig.SECRET_KEY
        $rootScope.AWS.BUCKET_C   = "/shoptrawler/Content";
        $rootScope.AWS.BUCKET_LRC = "/shoptrawler/LRContent";
        $rootScope.AWS.BUCKET_SC  = "/shoptrawler/ShoppingCenter";
        $rootScope.AWS.BUCKET_RET = "/shoptrawler/Retailer";
        $rootScope.AWS.SERVICE    = "s3";
        $rootScope.AWS.ENCRYPTION = 'AES256';
        $rootScope.AWS.REGION     = "eu-west-1";
        $rootScope.AWS.type       = type; // default content type (Content.js entries) others SC, LR, and RET

        $rootScope.AWS.config = {};
        $rootScope.AWS.config.region = $rootScope.AWS.region;

        $rootScope.AWS.params_c   = { Bucket : $rootScope.AWS.BUCKET_C   , ServerSideEncryption : 'AES256'};
        $rootScope.AWS.params_lrc = { Bucket : $rootScope.AWS.BUCKET_LRC , ServerSideEncryption : 'AES256'};
        $rootScope.AWS.params_sc  = { Bucket : $rootScope.AWS.BUCKET_SC  , ServerSideEncryption : 'AES256'};
        $rootScope.AWS.params_ret = { Bucket : $rootScope.AWS.BUCKET_RET , ServerSideEncryption : 'AES256'};

        // for use in get operations
        $rootScope.AWS.server = "https://" +  $rootScope.AWS.service + "-" +
            $rootScope.AWS.region + ".amazonaws.com";

        AWS.config.update({ accessKeyId : $rootScope.AWS.ACCESS_KEY, secretAccessKey : $rootScope.AWS.SECRET_KEY});
        AWS.config.region = $rootScope.AWS.REGION;
        $scope.bucket = {};
        $scope.params = {};
        // specify the params to use and the bucket to write to.
        switch(type) {
            case "C":
                $scope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_C}});
                $scope.params = $rootScope.AWS.params_c;
                break;
            case "LRC":
                $scope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_LRC}});
                $scope.params = $rootScope.AWS.params_lrc;
                break;
            case "RET":
                $scope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_RET}});
                $scope.params = $rootScope.AWS.params_ret;
                break;
            case "SC":
                $scope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_SC}});
                $scope.params = $rootScope.AWS.params_sc;
                break;
        }
    }
}]);




// .provider('AWSservice', [
//     function() {
//
//         let region, S3bucketName, dynamoTableName, roleArn, dynamo, s3bucket;
//         region = 'eu-west-1';
//         s3bucketName = "shoptrawler";
//
//         this.setRoleArn = function (arn) {
//             roleArn = arn;
//
//         };
//     };
