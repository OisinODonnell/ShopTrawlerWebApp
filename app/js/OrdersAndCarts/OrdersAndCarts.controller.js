/**
 * Created by oisin on 07/05/2017.
 */

myApp.controller('OrdersAndCartsController', ['$rootScope','$scope', 'DataFactory', 'Common',
  function ($rootScope,$scope, DataFactory, Common) {


  let vm = this;
  $scope.cart      = new Cart();
  $scope.order     = new Order();
  $scope.orders    = [];
  $scope.carts     = [];
  $scope.orderItems= [];
  $scope.cartItems = [];
  $rootScope.accountId = 15;

  Common.reloadJs("lib/sorttable.js");

    ListOrdersByAccountId($rootScope.accountId);
    ListCartsByAccountId($rootScope.accountId);
    ListOrders();
    ListCarts();


  // const urlBase = 'http://localhost:8080';

  let factory = {
    ListCartsByAccountId    : ListCartsByAccountId,
    ListCartItemsByCartId   : ListCartItemsByCartId,
    ListOrdersByAccountId   : ListOrdersByAccountId,
    ListOrderItemsByOrderId : ListOrderItemsByOrderId,
    ListCarts               : ListCarts,
    ListOrders              : ListOrders,
  };

  return factory;


  function CreateOrder(cartId) {

    // get cart details
    // copy cart details to new order
    // save new order

    let cart = new Cart();
    DataFactory.getCartById(cartId)
      .then( function(response) {
        $scope.cart = Common.createObjects(response.data, cart);
      },
        function (error) {
          $scope.status = 'Unable to load Cart data ' + error.message;
      });


  }

  function ConfirmOrder() {
  }
  function CancelOrder() {
  }
  function GoBackShopping() {
  }
  function CreateCart() {
  }
  function AddCartItem() {
  }
  function ReviewCart() {
  }


  function ListCarts() {
    vm.dataLoading = true;
    let cart = new Cart();
    DataFactory.getCarts()
      .then( function(response) {
          $scope.carts = Common.createObjects(response.data, cart);
        },
        function (error) { $scope.status = 'Unable to load Cart data ' + error.message; });
    vm.dataLoading = false;
  }
    function ListOrders() {
      vm.dataLoading = true;
      let order = new Order();
      DataFactory.getOrders()
        .then( function(response) {
            $scope.orders = Common.createObjects(response.data, order)
          },
          function (error) { $scope.status = 'Unable to load Order data ' + error.message  });
      vm.dataLoading = false;
    }
    function ListCartsByAccountId(id) {
      vm.dataLoading = true;
      let cart = new Cart();
      DataFactory.getCartsByAccountId(id)
        .then( function(response) {
            $scope.carts = Common.createObjects(response.data, cart);
          },
          function (error) { $scope.status = 'Unable to load Cart data ' + error.message; });
      vm.dataLoading = false;
    }
  function ListCartItemsByCartId(id) {
    vm.dataLoading = true;
    let cartItem = new CartItem();
    DataFactory.getCartItemsByCartId(id)
      .then( function(response) {
          $scope.cartItems = Common.createObjects(response.data, cartItem);

        },
        function (error) { $scope.status = 'Unable to load CartItem  data ' + error.message; });
    vm.dataLoading = false;
  }

  function ListOrdersByAccountId(id) {
    vm.dataLoading = true;
    let order = new Order();
    DataFactory.getOrdersByAccountId(id)
      .then( function(response) {
          $scope.orders = Common.createObjects(response.data, order)

        },
        function (error) { $scope.status = 'Unable to load Order data ' + error.message  });
    vm.dataLoading = false;
  }

  function ListOrderItemsByOrderId(id) {
    vm.dataLoading = true;
    let orderItem = new OrderItem();
    DataFactory.getOrderItemsByOrderId(id)
      .then( function(response) {
          $scope.orderItems = Common.createObjects(response.data, orderItem);
        },
        function (error) { $scope.status = 'Unable to load OrderItem data ' + error.message; });
    vm.dataLoading = false;
  }

}]);
