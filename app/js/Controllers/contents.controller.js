myApp.controller('ContentsController', ['DataFactory','$scope','Common','$rootScope',
  '$uibModal','RowEditor', 'uiGridConstants','Globals','FileUploader','AWSconfig','Flash','AwsFactory','toast',

  function (  DataFactory, $scope, Common, $rootScope, $uibModal, RowEditor, uiGridConstants, Globals, FileUploader, AWSconfig, Flash, AwsFactory, toast) {
    let vm = this;
    let filePage1 = "";
    let filePage2 = "";
    let filePage3 = "";

    vm.chartTitle = "Retailer Content";

    $scope.filePage1 = filePage1;
    $scope.filePage2 = filePage2;
    $scope.filePage3 = filePage3;

    $rootScope.type = "C";

    $scope.uploader = new FileUploader();
    $rootScope.currentUser.type = "";

    $scope.uploadFile = function(grid, row) {

      let entry = "";
      AwsFactory.setupAWSconfig($rootScope.type);
      AwsFactory.setupAWSFileParams($rootScope.type, grid, row, this);
      AwsFactory.updateGrid(grid, row);

      if (! AwsFactory.checkFileSize($rootScope.file)) {
        toast({
          duration  : 2000,
          message   : "File too big! must be less than : 10MB" ,
          className : "alert-warning"
        });
        Flash.create("danger", "File is too big [ " + AwsFactory.fileSizeLabel() + " ] ... please reduce size and try again Limit is 10 MBytes", 4000)

        return false;
      } else {
        AwsFactory.sendFile();
        AwsFactory.updateGrid(grid, row);
        toast({
          duration  : 2000,
          message   : "File [ " + $rootScope.entry + " ]uploaded to Amazon Web Services!  ",
          className : "alert-success"
        });
      }
    };

    if ($rootScope.isAdmin) {
      $scope.allowAddRow = false; //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Administrator";
    } else {
      $scope.allowAddRow = true; //  view is affected
      $scope.allowEditRow = false; // action below
      $rootScope.currentUser.type = "Retailer";
    }

    $scope.awsUpload = function() {
      $scope.uploader.uploadAll();
      let ready = $scope.uploader.getReadyItems();
    };

    $scope.vm = vm;

    vm.addRowContent    = RowEditor.addRowContent;
    vm.editRowContent   = RowEditor.editRowContent;
    vm.deleteRowContent = RowEditor.deleteRowContent;
    vm.saveRowContent   = RowEditor.saveRowContent;

    let colDefs = Globals.ContentColumnDefs2;

    colDefs[2].editFileChooserCallback = $scope.uploadFile;
    colDefs[3].editFileChooserCallback = $scope.uploadFile;
    colDefs[4].editFileChooserCallback = $scope.uploadFile;

    // vm.serviceGrid      = Common.setupUiGrid(Globals.ContentColumnDefs2, $scope.allowEditRow );
    vm.serviceGrid      = Common.setupUiGrid(colDefs, $scope.allowEditRow );

    vm.upload = $scope.upload;
    vm.uploadFile = $scope.uploadFile;

    // grab hold of gridApi for use later
    vm.serviceGrid.onRegisterApi = function(gridApi){
      $scope.gridApi = gridApi;
    };
    // find which cell is active
    $scope.getCurrentFocus = function(){
      let rowCol = $scope.gridApi.cellNav.getFocusedCell();
      if(rowCol !== null) {
        $scope.currentFocused = 'Row Id:' + rowCol.row.entity.id + ' col:' + rowCol.col.colDef.name;
      }
    }

    if ($rootScope.currentUser.type === "Administrator")
      ListContents();
    else
      ListContentByRetailer($rootScope.currentUser.retailerid);

    /**
     * Return the content for all retailers
     * @constructor
     */
    function ListContents() {
      vm.dataLoading = true;

      DataFactory.listContent()
        .then( function(response) {
            vm.serviceGrid.data = buildNewContents(response.data);
            $scope.gridStyle = Common.gridStyle($scope.content.length);
            },
            function (error) {
            $scope.status = 'Unable to load Contents ' + error.message;
          });
      vm.dataLoading = false;
    }

    /**
     * Return a list of content for this retailer only
     *
     * @param id
     * @constructor
     */
    function ListContentByRetailer(id) {
      vm.dataLoading = true;

      DataFactory.listContentByRetailer(id)
        .then( function(response) {
            // Flash.create('success','Content added Successfully', 2000);
            vm.serviceGrid.data = buildNewContents(response.data);
          $scope.gridStyle = Common.gridStyle($scope.contents.length);

          },
          function (error) {
            Flash.create('danger','Content could not be added -> ' + error, 4000);
            $scope.status = 'Unable to load Contents ' + error.message;
        });
      vm.dataLoading = false;
    }

    vm.chartTitle = "Retailer Content";
    // Save new or updated entry to database
    $scope.saveRow = function(row) {
      // find retailerid
      // copy to new LR record
      // post to REST

      let userid = $rootScope.currentUser.userid;
      let retailerid = Common.getRetailerid(userid);
      let index = vm.serviceGrid.data.indexOf(row.entity);

      // check dates are valid first, then attempt to save/update record
      let response = Common.checkDates(row.entity.startDate, row.entity.endDate);

      if (response !== true) {
        Flash.create('danger', "Content not updated : -> " + response, 4000);
      } else {
        if (row.entity.contentid !== 0) { // existing row
          // check if dates are valid
          DataFactory.updateContent(row.entity)
            .then(function (response) {
                Flash.create("success", "Content Updated successfully", 2000);
                vm.serviceGrid.data = buildNewContents(response.data);
              },
              function (response) {
                Flash.create("danger", "Content not updated : " + response.data.message);
              });

        } else { // must be new row
          // check if dates are valid
          let content = createNewContents(row.entity, retailerid);
          DataFactory.addContent(content)
            .then(function (response) {
                Flash.create("success", "Content Added successfully", 2000);
                vm.serviceGrid.data = buildNewContents(response.data);
              },
              function (response) {
                Flash.create("danger", "Content not added : " + response.data.message);
              });
        }
      }
      console.log("save Row LR");
    };

    $scope.addRow = function(row) {
      console.log("save Row C");
      let content = Globals.NewContent;
      content.retailerid = Common.findStoreName($rootScope.currentUser.retailerid);
      vm.serviceGrid.data.push(content);
    };

    // Delete Row in Grid and delete row in Database if exists
    $scope.deleteRow = function(row) {
      if (row.entity.contentid !== 0) { // edits made to existing row
        DataFactory.deleteContent(row.entity.contentid)
          .then( function(response){
              Flash.create('success',"Content Deleted Successfully", 2000);
              vm.serviceGrid.data = buildNewContents(response.data);
            },
            function(error) {
              Flash.create('danger',"Content with id = ", row.entity.contentid + " could not be deleted -> " + response.data.message );
              vm.serviceGrid.data = buildNewContents(response.data);
            });
      }

      let index = vm.serviceGrid.data.indexOf(row.entity);
      vm.serviceGrid.data.splice(index, 1);

      console.log("delete Row LR");
    };

    $scope.addRow = function (row) {
      // add row to grid with default values
      console.log("adding LR");
      let content = new Content();
      content = Globals.NewContent;

      // get the retailers storename

      content.storeName = Common.findStoreName($rootScope.currentUser.retailerid);
      vm.serviceGrid.data.push(content);
    };

    /**
     * Create default values for a new row in the grid.
     * @param entity
     * @param retailerid
     * @returns {Content}
     */
    function createNewContents(entity, retailerid) {

      let endDate = new Date(entity.endDate).getTime();
      let startDate = new Date(entity.startDate).getTime();

      let content = new Content();
      content.setEndDate(endDate);
      content.setStartDate(startDate);
      content.setPage1(entity.page1);
      content.setPage2(entity.page2);
      content.setPage3(entity.page3);
      content.setRetailerid(retailerid);
      content.setApproved(false);

      return content;
    }

    function buildNewContents(data) {
      let contents;
      $scope.contents = [];
      let content = new Content();

      contents = Common.createObjects(data, content);
      contents.forEach(function (content, key) {
        content = Common.setDatesAndIDs(content);
        content.filename1="";
        contents[key] = content;
      });
      $scope.contents = contents;
      return $scope.contents;
    }

  }]);
