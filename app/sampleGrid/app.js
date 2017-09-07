let myApp = angular.module('myApp', []).

controller('UploadCtrl', ['$scope', function (scope) {
  scope.image = "";
}]).

directive('myUpload', [function () {
  return {
    restrict: 'A',
    link: function (scope, elem, attrs) {
      let reader = new FileReader();
      reader.onload = function (e) {
        scope.image = e.target.result;
        scope.$apply();
      };

      elem.on('change', function() {
        reader.readAsDataURL(elem[0].files[0]);
      });
    }
  };
}]);
'use strict';




myApp.controller('AppController', ['$scope', 'FileUploader', function($scope, FileUploader) {
    let uploader = $scope.uploader = new FileUploader({
      url: 'upload.php'
    });

    // FILTERS

    uploader.filters.push({
      name: 'imageFilter',
      fn: function(item /*{File|FileLikeObject}*/, options) {
        let type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // CALLBACKS

    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
      console.info('onWhenAddingFileFailed', item, filter, options);
    };
    uploader.onAfterAddingFile = function(fileItem) {
      console.info('onAfterAddingFile', fileItem);
    };
    uploader.onAfterAddingAll = function(addedFileItems) {
      console.info('onAfterAddingAll', addedFileItems);
    };
    uploader.onBeforeUploadItem = function(item) {
      console.info('onBeforeUploadItem', item);
    };
    uploader.onProgressItem = function(fileItem, progress) {
      console.info('onProgressItem', fileItem, progress);
    };
    uploader.onProgressAll = function(progress) {
      console.info('onProgressAll', progress);
    };
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
      console.info('onSuccessItem', fileItem, response, status, headers);
    };
    uploader.onErrorItem = function(fileItem, response, status, headers) {
      console.info('onErrorItem', fileItem, response, status, headers);
    };
    uploader.onCancelItem = function(fileItem, response, status, headers) {
      console.info('onCancelItem', fileItem, response, status, headers);
    };
    uploader.onCompleteItem = function(fileItem, response, status, headers) {
      console.info('onCompleteItem', fileItem, response, status, headers);
    };
    uploader.onCompleteAll = function() {
      console.info('onCompleteAll');
    };

    console.info('uploader', uploader);
  }]);
myApp    .directive('ngThumb', ['$window', function($window) {
  let helper = {
    support: !!($window.FileReader && $window.CanvasRenderingContext2D),
    isFile: function(item) {
      return angular.isObject(item) && item instanceof $window.File;
    },
    isImage: function(file) {
      let type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
      return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    }
  };

  return {
    restrict: 'A',
    template: '<canvas/>',
    link: function(scope, element, attributes) {
      if (!helper.support) return;

      let params = scope.$eval(attributes.ngThumb);

      if (!helper.isFile(params.file)) return;
      if (!helper.isImage(params.file)) return;

      let canvas = element.find('canvas');
      let reader = new FileReader();

      reader.onload = onLoadFile;
      reader.readAsDataURL(params.file);

      function onLoadFile(event) {
        let img = new Image();
        img.onload = onLoadImage;
        img.src = event.target.result;
      }

      function onLoadImage() {
        let width = params.width || this.width / this.height * params.height;
        let height = params.height || this.height / this.width * params.width;
        canvas.attr({ width: width, height: height });
        canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
      }
    }
  };
}]);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.data = '';
    $scope.mimeType = 'Image/png';
    $scope.fileName = 'test.png';
  }]);

myApp.directive('imageDisplay', function() {

    function link (scope, element, attrs) {
      //Pass image data in here
      attrs.$observe('fileData', function (complexValue) {
        let data = '';
        let mime = 'Image/png';
        let fileName = 'test.png';
        let parts = [];
        //let parts = complexValue.split(',');

        //Rebuild Base64 String
        data = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAwACkDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+vO/ib8UoPAYt7G2tVu9WuU8xI3bakSZIDNjk5IIAHoeRgZ9EryDxktxpnxTlnWO0+z6jpsCyy3SKweNJiJbcBs8OpXJ7ZH1pSkoq7Gk27IyfC/x6vZ9Wgt/Eum2sFnO/li6tQyiI8ZJDE7gMjOCCAc89D7rXzN40Wa0+HY0oavBfRWhhIi8tVCMHfdIuMkSMZQCCfuq55zhfojw/cfbPDel3O/f51pFJuznOUBzU06kaivB3Q5RcXaRo0UUVZIjMqIXdgqqMkk4AFePeE4IPij4417xReiSTRbMf2bpkYZlDDhmfggg4wcEf8tMH7tbvxt1qXR/htcxwMUfUZksi4PRWyz/AJqrL/wKrnwgi0+D4badHp8iuA0hmxjcshckhvcAr9RtPQik0nowTsJ4m+Gml6n4O1DS7CELfSIGguJnLMJFO5Rk/dUkYOB0OeTXnHwa8eXGi6j/AMIfrqSRQy3DQ2jS5Bt584aFgemW6ejHHO7j6Br5e+LDQw+O/FEUR8pg1vPHsOD53lJyMdDhmJ96FFJWQ223dn1DRVTSrpr7R7K7fG6e3jlOPVlB/rVumI8/8b3UWqXn9kXFpBJBaSJLieMPvfbwQDxgBj+NYHhXTYdF8bJqdtqUmn2EyFLmwSIeTK2CFJORtAJB6HHOCAxrtdf8JzanqL31rcxq7qAY5QcZHGQw6DpxisGLwvrhu1ha1CITgzmRWRR64B3H6YGfbqPJq/WoVnKKbX4WO6HsZU7M7nWr5NO0S8vGmSIxxHY7kAbzwg57liAB3JArwfX/AAc/iDxEdQuL8fY5ijTxbP3p2jGA/o3c9cnvgV6VdfCfSLwxtcatrkzwuJYvNvNyRyDkMqbdowewAFTad4JuvPH9pTwiBD923ZiZB7kgbfwyfcda6MTGu5xdLtYxpOnytTNHwZfGXTTp5TBswArD7uwk7VHptAxj0ArpqitrWCzhENtCkUY6KgwPr9alrqowlCCjJ3aMpyUpNo//2Q==';

        //Get Canvas Context
        let ctx = element[0].getContext("2d");

        //Clear Previous Display
        ctx.clearRect(0, 0, element[0].width, element[0].height);

        //Parse Content Type
        parts = mime.split('/');
        let contentType = parts[0];

        let image = new Image();
        image.onload = function () {
          element[0].height = image.height;
          element[0].width = image.width;
          ctx.drawImage(image, 1, 1, image.width, image.height);

        };
        image.src = data;
      });
    }
    return {
      restrict: 'A',
      link: link
    };
  });
