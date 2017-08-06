
grid.setupUserGrid = () => {

  vm.editRow = RowEditor.editRow;

  vm.serviceGrid = {
    enableRowSelection: true,
    enableRowHeaderSelection: false,
    multiSelect: false,
    enableSorting: true,
    enableFiltering: true,
    enableGridMenu: true,
    rowTemplate: "<div ng-dblclick=\"grid.appScope.vm.editRow(grid, row)\" ng-repeat=\"(colRenderIndex, col) in colContainer.renderedColumns track by col.colDef.name\" class=\"ui-grid-cell\" ng-class=\"{ 'ui-grid-row-header-cell': col.isRowHeader }\" ui-grid-cell></div>"
  };
  this.userid	        = this.setUserid        (userid);
  this.firstname	    = this.setFirstname     (firstname);
  this.surname	      = this.setSurname       (surname);
  this.emailAddress	  = this.setEmailAddress  (emailAddress);
  this.phone	        = this.setPhone         (phone);
  this.gender	        = this.setGender        (gender);
  this.password	      = this.setPassword      (password);
  this.type	          = this.setType          (type);
  this.yob	          = this.setYob           (yob);

  vm.serviceGrid.columnDefs = [ {
    field : 'getUserid()',      displayName : 'User ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getFirstname()',   displayName : 'Firstname',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getSurname()',     displayName : 'Surname',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getEmailAddress()',displayName : 'Email Address',
    enableSorting : true,       enableCellEdit : false,
  }, {
    field : 'getPhone()',       displayName : 'Phone',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getGender()',      displayName : 'Gender',
    enableSorting : true,       enableCellEdit : false
  }, {
    field : 'getPassword()',    displayName : 'Password',
    enableSorting : true,       enableCellEdit : false
  },  {
    field : 'getType()',        displayName : 'Type',
    enableSorting : true,       enableCellEdit : false
  },{
    field : 'getYob()',         displayName : 'Yob',
    enableSorting : true,       enableCellEdit : false
  } ];
};
