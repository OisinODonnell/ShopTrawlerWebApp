
myApp.controller('ContentsController', ['DataFactory','$scope','Common','$rootScope',
  function ( DataFactory,$scope,Common,$rootScope) {
    let vm = this;

    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.contents       = [];
    $scope.contentId     = 0;
    $scope.content       = {};


    // This script is loaded in the index.html file, but fails to kick in when required when using a number of tables
    // Forcing a reload just prior to use, appears to bring is back into the dom and is now available within the tables.
    Common.reloadJs("lib/sorttable.js");

    ListContents();

    let factory = {
      ListContents : ListContents, // all users
      AddContent  : AddContent,
      GetContent  : GetContent,  // single user
    };

    return factory;



    function ListContents() {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.listContents()
        .then( function(response) {
            $scope.contents = Common.createObjects(response.data, content);
          },
          function (error) { $scope.status = 'Unable to load Contents ' + error.message; });
      vm.dataLoading = false;
    }

    function GetContent(contentId) {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.getContent(contentId)
        .then( function(response) {
            $scope.content = Common.createObjects(response.data, content);
          },
          function (error) { $scope.status = 'Unable to load Content ' + error.message; });
      vm.dataLoading = false;
    }



    function AddContent(newContent) {
      vm.dataLoading = true;
      let content = new Content();
      DataFactory.addContent(newContent)
        .then( function(response) {
            $scope.content = Common.createObjects(response.data, content);
          },
          function (error) { $scope.status = 'Unable to set content ' + error.message; });
      vm.dataLoading = false;
    }

  }]);
