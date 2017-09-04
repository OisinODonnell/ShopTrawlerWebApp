myApp.factory('AwsFactory',[ '$rootScope','Globals','moment','AWSconfig','Flash',  function ($rootScope, Globals, moment, AWSconfig, Flash) {
  $rootScope.sizeLimit = 10585760; // 10MB in Bytes


  let factory = {};

  factory.checkFileSize = (file) => {
    let fileSize = Math.round(parseInt(file.size));
    return (fileSize <= $rootScope.sizeLimit)
  };

  factory.setupAWSFileParams = (type, grid, row, ctx) => {
    // gather the bits to create a unique filename;
    // type = C
    // contentid = number
    // page1 /page2 or page3
    // eg 'C10-page1-imag002.jpg'
    let files = ctx.editFileChooserCallback.arguments[2];
    let file = files[0];
    let filename = file.name;
    let filesize = file.size;
    let id = grid.entity.contentid;
    let page = row.field;
    let uniqueName = type + id + "-" + page + "-" + filename;
    $rootScope.file = file;

    // set params for aws call
    $rootScope.params.Key = uniqueName;
    $rootScope.params.ContentType = $rootScope.file.type;
    $rootScope.params.Body = $rootScope.file;

    $rootScope.entry = $rootScope.entry + uniqueName;

    return uniqueName;
  };

  factory.fileSizeLabel = () => {
    // Convert Bytes To MB
    return Math.round($scope.sizeLimit / 1024 / 1024) + 'MB';
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

  factory.updateGrid = (grid, row) => {

    switch (row.field) {
      case 'page1':
        grid.entity.page1 = $rootScope.entry;
        break;
      case 'page2':
        grid.entity.page2 = $rootScope.entry;
        break;
      case 'page3':
        grid.entity.page3 = $rootScope.entry;
        break;
    }
  }

  return factory;

}]);
