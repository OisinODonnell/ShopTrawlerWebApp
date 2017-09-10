myApp.factory('AwsFactory',[ '$rootScope','Globals','moment','AWSconfig','Flash','Common',  function ($rootScope, Globals, moment, AWSconfig, Flash, Common) {
  $rootScope.sizeLimit = 10585760; // 10MB in Bytes


  let factory = {};

  factory.setupAWSFileParams = (type, grid, row, file, id, storename) => {
    // gather the bits to create a unique filename;
    // type = C
    // contentid = number
    // page1 /page2 or page3
    // eg 'C10-page1-imag002.jpg'


    let filename = file.name;
    let filesize = file.size;
    // let id = grid.entity.contentid;
    let page = row.field;
    // eg C15-Page1-Nandos-promo.jpg
    let uniqueName = type + id + "-" + page + "-" + storename + "-" + filename;

    $rootScope.file = file;

    // set params for aws call
    $rootScope.params.Key = uniqueName;
    $rootScope.params.ContentType = $rootScope.file.type;
    $rootScope.params.Body = $rootScope.file;

    $rootScope.entry = $rootScope.entry + "/"+ uniqueName;

    return uniqueName;
  };

  factory.setupAWSconfig = (type) => {
    // parameters are in AWS.js .. a file which is not on in git.
    let AWScon = {};
    AWScon = {
      "ACCESS_KEY": AWSconfig.ACCESS_KEY,
      "SECRET_KEY": AWSconfig.SECRET_KEY,
      "BUCKET_C": AWSconfig.BUCKET_C,
      "BUCKET_LRC": AWSconfig.BUCKET_LRC,
      "BUCKET_SC": AWSconfig.BUCKET_SC,
      "BUCKET_RET": AWSconfig.BUCKET_RET,
      "SERVICE": AWSconfig.SERVICE,
      "ENCRYPTION": AWSconfig.ENCRYPTION,
      "REGION": AWSconfig.REGION,
      "type": type,
      "config": {
        region: AWSconfig.REGION,
      },
      "UPLOAD_SITE": AWSconfig.UPLOAD_SITE,
      "UPLOAD_BUCKET": "",
      params_c: "",
      params_lrc: "",
      params_sc: "",
      params_ret: "",
    };

    AWScon.params_c = {Bucket: AWScon.BUCKET_C, ServerSideEncryption: AWScon.ENCRYPTION};
    AWScon.params_lrc = {Bucket: AWScon.BUCKET_LRC, ServerSideEncryption: AWScon.ENCRYPTION};
    AWScon.params_sc = {Bucket: AWScon.BUCKET_SC, ServerSideEncryption: AWScon.ENCRYPTION};
    AWScon.params_ret = {Bucket: AWScon.BUCKET_RET, ServerSideEncryption: AWScon.ENCRYPTION};

    // for use in get operations

    $rootScope.AWS = {};
    $rootScope.AWS = AWScon;

    // now to begin the AWS app
    AWS.config.update({accessKeyId: $rootScope.AWS.ACCESS_KEY, secretAccessKey: $rootScope.AWS.SECRET_KEY});
    AWS.config.region = AWScon.REGION;

    $rootScope.bucket = {};
    $rootScope.params = {};
    // specify the params to use and the bucket to write to.
    switch (type) {
      case "C":
        $rootScope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_C}});
        $rootScope.params = $rootScope.AWS.params_c;
        $rootScope.AWS.UPLOAD_BUCKET = $rootScope.AWS.UPLOAD_SITE + $rootScope.AWS.BUCKET_C;
        break;
      case "LR":
        $rootScope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_LRC}});
        $rootScope.params = $rootScope.AWS.params_lrc;
        $rootScope.AWS.UPLOAD_BUCKET = $rootScope.AWS.UPLOAD_SITE + $rootScope.AWS.BUCKET_LRC;
        break;
      case "RET":
        $rootScope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_RET}});
        $rootScope.params = $rootScope.AWS.params_ret;
        $rootScope.AWS.UPLOAD_BUCKET = $rootScope.AWS.UPLOAD_SITE + $rootScope.AWS.BUCKET_RET;
        break;
      case "SC":
        $rootScope.bucket = new AWS.S3({params: {Bucket: $rootScope.AWS.BUCKET_SC}});
        $rootScope.params = $rootScope.AWS.params_sc;
        $rootScope.AWS.UPLOAD_BUCKET = $rootScope.AWS.UPLOAD_SITE + $rootScope.AWS.BUCKET_SC;
        break;
    }
    $rootScope.entry = $rootScope.AWS.UPLOAD_BUCKET;

  };

  factory.sendFile = () => {
    $rootScope.bucket.putObject($rootScope.params, function (err, data) {
      if (err) {
        Flash.create("danger", err.message + " : " + err.code, 4000);
        // toastr.error(err.message,err.code);
        return false;
      } else {
        // Upload Successfully Finished
        Flash.create("success", "File Uploaded Successfully", 2000);
        // toastr.success('File Uploaded Successfully', 'Done');

      }
    })
  };

  // $scope.uploadFile = function(grid, row) {

  factory.uploadFile = (grid, row, ctx) => {

    let files = this.editFileChooserCallback.arguments[2];
    $rootScope.file = files[0];


    let entry = "";
    // AwsFactory.setupAWSconfig($rootScope.type);
    // AwsFactory.setupAWSFileParams($rootScope.type, grid, row, this);
    // Common.updateGrid(grid, row);

    if (! Common.checkFileSize($rootScope.file)) {
      toast({
        duration  : 2000,
        message   : "File is too big! must be less than : 10MB" ,
        className : "alert-warning"
      });
      Flash.create("danger", "File is too big [ " + Common.fileSizeLabel() + " ] ... please reduce size and try again Limit is 10 MBytes", 4000)

      return false;
    } else {

      AwsFactory.setupAWSconfig($rootScope.type);
      AwsFactory.setupAWSFileParams($rootScope.type, grid, row, $rootScope.file);
      AwsFactory.sendFile();

      Common.updateGrid(grid, row);
      toast({
        duration  : 2000,
        message   : "File [ " + $rootScope.entry + " ] uploaded to Amazon Web Services Successfully!  ",
        className : "alert-success"
      });
    }
  };




  return factory;

}]);
