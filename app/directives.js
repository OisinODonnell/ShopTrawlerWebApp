'use strict';

let directives = angular.module('directives', []);

directives.directive('file', function() {
  return {
    restrict: 'AE',
    scope: {
      file: '@'
    },
    link: function(scope, el, attrs){
      el.bind('change', function(event){
        let files = event.target.files;
        let file = files[0];
        scope.file = file;
        scope.$parent.file = file;
        scope.$apply();
      });
    }
  };
});
// directives.directive('fileUpload', function($log, $parse) {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       var options = $parse(attrs.fileUpload)(scope) || {};
//
//       element.fileupload({
//         dataType: 'json',
//         url: '//jquery-file-upload.appspot.com/',
//         done: function(e, data) {
//           $log.log("done accessed");
//         },
//         fail: function(e, data) {
//           $log.log("fail accessed");
//         },
//         progress: function(e, data) {
//           options.progress = parseInt(data.loaded / data.total * 100, 10);
//           scope.$apply();
//           $log.log(options)
//           $log.log("progress");
//         },
//         //add: function(e,data){
//         //$log.log("add accessed");
//         //},
//         submit: function(e, data) {
//           $log.log("notetext:", options.notetext);
//           data.formData = {
//             Description: options.notetext
//           };
//           $log.log("submit accessed");
//         }
//       });
//     }
//   }
// });
directives.directive('myAlert', function($modal,$log) {
  return {
    restrict: 'E',
    scope: {
      mode: '@',
      boldTextTitle: '@',
      textAlert : '@'
    },
    link: function(scope, elm, attrs) {

      scope.data= {
        mode:scope.mode || 'info',
        boldTextTitle:scope.boldTextTitle || 'title',
        textAlert:scope.textAlert || 'text'
      }

      let ModalInstanceCtrl = function ($scope, $modalInstance, data) {

        console.log(data);

        $scope.data = data;
        $scope.close = function(){
          $modalInstance.close($scope.data);
        };
      };

      elm.parent().bind("click", function(e){
        scope.open();
      });

      scope.open = function () {

        let modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: ModalInstanceCtrl,
          backdrop: true,
          keyboard: true,
          backdropClick: true,
          size: 'lg',
          resolve: {
            data: function () {
              return scope.data;
            }
          }
        });


        modalInstance.result.then(function (selectedItem) {
          scope.selected = selectedItem;
        }, function () {
          $log.info('Modal dismissed at: ' + new Date());
        });
      }
    }
  };
})
