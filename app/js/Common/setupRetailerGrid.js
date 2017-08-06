
grid.setupRetailerGrid = () => {

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
  this.retailerid	                  = this.setRetailerid                (retailerid);
  this.defaultContentPage1	        = this.setDefaultContentPage1       (defaultContentPage1);
  this.defaultContentPage2	        = this.setDefaultContentPage2       (defaultContentPage2);
  this.defaultContentPage3	        = this.setDefaultContentPage3       (defaultContentPage3);
  this.defaultLoyaltyRewardImage	  = this.setDefaultLoyaltyRewardImage (defaultLoyaltyRewardImage);
  this.facebookUrl	                = this.setFacebookUrl               (facebookUrl);
  this.twitterUrl	                  = this.setTwitterUrl                (twitterUrl);
  this.websiteUrl	                  = this.setWebsiteUrl                (websiteUrl);
  this.logoImageSmall	              = this.setLogoImageSmall            (logoImageSmall);
  this.logoImageLarge	              = this.setLogoImageLarge            (logoImageLarge);
  this.logoImageMedium	            = this.setLogoImageMedium           (logoImageMedium);
  this.phone                        = this.setPhone                     (phone);
  this.storeName                    = this.setStoreName                 (storeName);
  this.headerBackgroundImage	      = this.setHeaderBackgroundImage     (headerBackgroundImage);
  this.managerid	                  = this.setManagerid                 (managerid);
  this.shoppingCentreid	            = this.setShoppingCentreid          (shoppingCentreid);
  this.storeDefaultContentPage1	    = this.setStoreDefaultContentPage1  (storeDefaultContentPage1);
  this.zoneid	                      = this.setZoneid                    (zoneid);

  vm.serviceGrid.columnDefs = [ {
    field : 'getRetailerid()',      displayName : 'Retailer ID',
    enableSorting : true,       enableCellEdit : false,
    type : 'number',
    width : 60,
    sort : {
      direction : uiGridConstants.ASC,
      priority : 1,
    },
  }, {
    field : 'getDefaultContentPage1()', displayName : 'Default Content Page1',
    enableSorting : true,             enableCellEdit : false,
  }, {
    field : 'getDefaultContentPage2()', displayName : 'Default Content Page2',
    enableSorting : true,             enableCellEdit : false,
  }, {
    field : 'getDefaultContentPage3()', displayName : 'Default Content Page3',
    enableSorting : true,             enableCellEdit : false,
  }, {
    field : 'getDefaultLoyaltyRewardImage()', displayName : 'Default Loyalty Reward Image',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getFacebookUrl()',       displayName : 'Facebook Url',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getTwitterUrl()',        displayName : 'Twitter Url',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getWebsiteUrl()',        displayName : 'Website Url',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getLogoImageSmall()',    displayName : 'Logo Image Small',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getLogoImageLarge()',    displayName : 'Logo Image Large',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getLogoImageMedium()',   displayName : 'Logo Image Medium',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getPhone()',             displayName : 'Phone',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getStoreName()',         displayName : 'Store Name',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getHeaderBackgroundImage()', displayName : 'Header Background Image',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getManagerid()',         displayName : 'Manager ID',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getShoppingCentreid()',  displayName : 'Shopping Centre ID',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getStoreDefaultContentPage1()',  displayName : 'Store Default Content Page1',
    enableSorting : true,             enableCellEdit : false
  }, {
    field : 'getZoneid()',            displayName : 'Zone ID',
    enableSorting : true,             enableCellEdit : false
  } ];
};
