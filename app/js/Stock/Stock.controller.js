/**
 * Created by oisin on 07/05/2017.
 */

myApp.controller('StockController', ['DataFactory','$http', '$scope', 'Common','$rootScope',
  function ( DataFactory,$http, $scope, Common, $rootScope) {
    let vm = this;
    $scope.test="";
    $scope.testMessage="List Stock/Manufacturers/ItemCategories/Reviews ...";

    // placeholders
    $scope.dropdownCategories    = [];
    $scope.dropdownmanufacturers = [];
    $scope.manufacturerId        = 0;
    $scope.itemCategoryId        = 0;
    $scope.reviews               = {};
    $scope.manufacturers         = {};
    $scope.manufacturersList     = {};
    $scope.itemCategories        = {};
    $scope.itemCategoriesList    = {};
    $scope.stockItems            = {};
    $scope.stockReviews          = {};
    $scope.orderQuantity         = 0;

    Common.reloadJs("lib/sorttable.js");

    $scope.manufacturer = "none selected";
    $scope.itemCategory = "none selected";

    $scope.dropdown1 = (id,name)    => { $scope.manufacturerId  = id; $scope.manufacturer = name; };
    $scope.dropdown2 = (id,type)    => { $scope.itemCategoryId  = id; $scope.itemCategory = type; };
    $scope.formEntry = entry => $scope.searchText      = entry;

    $scope.val=0;

    ListManufacturers();
    ListItemCategories();
    ListStockReviews();

    // simple collections auto run these before gathering any stock data
    // these will be used to populate the dropdown lists


    let factory = {
      ProductSearch        : ProductSearch,
      ListManufacturers    : ListManufacturers,
      ListItemCategories   : ListItemCategories,
      ProductSearchAdmin   : ProductSearchAdmin,
      incrementOrderQty    : incrementOrderQty,
      decrementOrderQty    : decrementOrderQty,
      increment            : increment,
      decrement            : decrement,
      stockUpdate          : stockUpdate,

    };

    return factory;

    function increment(v)         {  v.stockLevel --;    }
    function decrement(v)         {  v.stockLevel ++;    }
    function incrementOrderQty()  {  $scope.orderQuantity ++;   }
    function decrementOrderQty()  {  $scope.orderQuantity --;   }

    function stockUpdate(id, qty) {
      vm.dataLoading = true;
      DataFactory.updateStock(id, qty)
        .then( function(response) {
            if(response.data.success === "1") {
              ProductSearch();
              // add option for no entry
              // let manufacturer = new Manufacturer();
            } else {
              alert (response.data.message)
            }
          },
          function (error) { $scope.status = 'Unable to update stock levels ' + error.message; });
      vm.dataLoading = false;
    }

    function ListManufacturers() {
      vm.dataLoading = true;
      let manufacturer = new Manufacturer();
      DataFactory.getManufacturers()
        .then( function(response) {
            $scope.manufacturers = Common.createObjects(response.data, manufacturer);
            // add option for no entry to top of list
            manufacturer.setManufacturerId(0);
            manufacturer.setName("None Selected");
            // keep a copy without the extra line at the top
            $scope.manufacturersList = angular.copy($scope.manufacturers);
            $scope.manufacturers.unshift(manufacturer);
          },
          function (error) { $scope.status = 'Unable to load Manufacturer data ' + error.message; });
      vm.dataLoading = false;
    }

    function ListStockReviews() {
      vm.dataLoading = true;
      let stockReview = new StockReview();
      DataFactory.getStockReviewsByAccountId($rootScope.accountId)
        .then( function(response) {
            $scope.stockReviews = Common.createObjects(response.data, stockReview);
          },
          function (error) { $scope.status = 'Unable to load Stock Review data ' + error.message; });
      vm.dataLoading = false;
    }

    function ListItemCategories() {
      vm.dataLoading = true;
      let itemCategory = new ItemCategory();
      DataFactory.getItemCategories()
        .then( function(response) {
            $scope.itemCategories = Common.createObjects(response.data, itemCategory);
            // add option for no entry
            itemCategory.setItemCategoryId(0);
            itemCategory.setType("None Selected");
            $scope.itemCategoriesList = angular.copy($scope.itemCategories);
            $scope.itemCategories.unshift(itemCategory);
          },
          function (error) { $scope.status = 'Unable to load Item Category data ' + error.message; });
      vm.dataLoading = false;
    }

    function ProductSearch() {
      vm.dataLoading = true;
      let stockItem = new StockItem();
      // no search parameters given
      DataFactory.getStockItemSearch($scope.manufacturerId, $scope.itemCategoryId, $scope.searchText)
        .then(function (response) {
            $scope.stockItems = Common.createObjects(response.data, stockItem);
            $scope.stockitems = Common.updateRatings($scope);
            //----no get the reviews for these products
            //getStockReviews();

            let a = 54;
          },
          function (error) {
            $scope.status = 'Unable to load Cart data ' + error.message;
          });
      vm.dataLoading = false;
    }

    function ProductSearchAdmin() {
      vm.dataLoading = true;
      let stockItem = new StockItem();
      // no search parameters given
      DataFactory.getStockItemSearch($scope.manufacturerId, $scope.itemCategoryId, $scope.searchText)
        .then(function (response) {
            $scope.stockItems = Common.createObjects(response.data, stockItem);
            let a = 54;
          },
          function (error) {
            $scope.status = 'Unable to load Cart data ' + error.message;
          });
      vm.dataLoading = false;
    }

  }]);
