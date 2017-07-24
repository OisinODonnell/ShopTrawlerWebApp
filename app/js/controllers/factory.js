myApp.factory('DataFactory', ['$http', function ($http) {

    let factory   = {};
    const urlBase = 'http://localhost:8080';

    // login/logout/register
    factory.login       = (username, password)    => $http.get(urlBase  + '/Login/' + username + '/' + password );

    factory.registerAdmin    = (name, email, password, accountType ) =>
      $http.get( urlBase + '/Login/register/' + name + '/' + email + '/' + password + '/' + accountType);

    factory.registerCust    = (name, email, password, accountType, phone, loyaltyCard, addressStreet, addressCity, addressCountry, paymentType) =>
      $http.get( urlBase + '/Login/register/' + name + '/' + email + '/' + password + '/' + accountType + '/' + phone + '/' + loyaltyCard +
        '/' + addressStreet + '/' + addressCity + '/' + addressCountry + '/' + paymentType );


    factory.logout      = (id, startTime )        => $http.get( urlBase + '/Login/logout/' + id + '/' + startTime );

    // new app factory methods

    // ShoppingCentre

    factory.listShoppingCentre  = ()                => $http.get(urlBase + '/ShoppingCentre' );
    factory.getShoppingCentre   = (id)              => $http.get(urlBase + '/ShoppingCentre/' + id);
    factory.addShoppingCentre   = (shoppingCentre)  =>  $http.get(urlBase + '/ShoppingCentre/' + shoppingCentre );

    // Favourits
    factory.listFavourites      = ()            => $http.get(urlBase + '/Favourites' );
    factory.getFavourite        = (id)          => $http.get(urlBase + '/Favourites/' + id );
    factory.addFavourite        = (favourite)   => $http.get(urlBase + '/Favourites/' + favourite);

    // UserPoints
    factory.listUserPoints      = ()            => $http.get(urlBase + '/UserPoints' );
    factory.getUserPoints       = (id)          => $http.get(urlBase + '/UserPoints/' + id );
    factory.addUserPoints       = (userPoints)  => $http.get(urlBase + '/UserPoints/' + userPoints);

    // Ratings
    factory.listRatings         = ()            => $http.get(urlBase + '/Ratings' );
    factory.getRating           = (id)          => $http.get(urlBase + '/Ratings/' + id);
    factory.addRating           = (rating)      => $http.get(urlBase + '/Ratings/' + rating );

    // Visits
    factory.listVisits          = ()            => $http.get(urlBase + '/Visits' );
    factory.getVisit            = (id)          => $http.get(urlBase + '/Visits/' );
    factory.addVisit            = (visit)       => $http.get(urlBase + '/Visits/' + visit );

    // Zones
    factory.listZones           = ()            => $http.get(urlBase + '/Zones' );
    factory.getZone             = (id)          => $http.get(urlBase + '/Zones/' + id );
    factory.addZone             = (zone)        => $http.get(urlBase + '/Zones/' + zone );

    // Locations
    factory.listLocations       = ()            => $http.get(urlBase + '/Locations' );
    factory.getLocation         = (id)          => $http.get(urlBase + '/Locations/' + id );
    factory.addLocation         = (location)    => $http.get(urlBase + '/Locations/' + location);

    // Users
    factory.listUsers           = ()            => $http.get(urlBase + '/Users' );
    factory.getUser             = (id)          => $http.get(urlBase + '/Users/' + id);
    factory.addUser             = (user)        => $http.get(urlBase + '/Users/' + user);

    // Retailers
    factory.listRetailers       = ()            => $http.get(urlBase + '/Retailers' );
    factory.getRetailer         = (id)          => $http.get(urlBase + '/Retailers/' + id);
    factory.addRetailer         = (retailer)    => $http.get(urlBase + '/Retailers/' + retailer );

    // Beacons
    factory.listBeacons         = ()            => $http.get(urlBase + '/Beacons' );
    factory.getBeacon           = (id)          => $http.get(urlBase + '/Beacons/'+ id);
    factory.addBeacon           = (beacon)      => $http.get(urlBase + '/Beacons/' + beacon);

    // Content
    factory.listContent         = ()            => $http.get(urlBase + '/Content' );
    factory.getContent          = (id)          => $http.get(urlBase + '/Content/' + id );
    factory.addContent          = (content)     => $http.get(urlBase + '/Content/' + content );

    // LoyaltyRewards
    factory.listLoyaltyRewards  = ()              => $http.get(urlBase + '/' );
    factory.getLoyaltyReward    = (id)            => $http.get(urlBase + '/LoyaltyRewards/' + id);
    factory.addLoyaltyReward    = (loyaltyReward) =>  $http.get(urlBase + '/LoyaltyRewards/' + loyaltyReward );

    // BonusCodes
    factory.listBonusCodes      = ()            => $http.get(urlBase + '/' );
    factory.getBonusCode        = (id)          => $http.get(urlBase + '/BonusCodes/' + id );
    factory.addBonusCode        = (bonusCode)   =>  $http.get(urlBase + '/BonusCodes/' + bonusCode );



    // old factory methods

    //
    // // Account
    // factory.getAccounts           = ()            => $http.get( urlBase + '/Accounts' );
    // factory.getAccountById        = (id )         => $http.get( urlBase + '/Account/' + id );
    // factory.getAccountByEmail     = (email )      => $http.get( urlBase + '/Account/username/' + email );
    // factory.addAccount            = (account)     => $http.get( urlBase + '/Account/create', account);
    // factory.deleteAccountById     = (id )         => $http.get( urlBase + '/Account/delete/' + id );
    //
    // // Session
    // factory.getSessions           = ()            => $http.get( urlBase + '/Sessions');
    // factory.getSessionById        = (id )         => $http.get( urlBase + '/Session/' + id );
    // factory.addSession            = (session)     => $http.get( urlBase + '/Session/create', session);
    // factory.deleteSessionById     = (id )         => $http.get( urlBase + '/Session/delete/' + id );
    //
    // // StockItem
    // factory.getStockItems         = ()            => $http.get( urlBase + '/StockItems');
    // factory.getStockItemById      = (id )         => $http.get( urlBase + '/StockItem/' + id );
    // factory.addStockItem          = (stockItem)   => $http.get( urlBase + '/StockItem/create', stockItem);
    // factory.deleteStockItemById   = (id )         => $http.get( urlBase + '/StockItem/delete/' + id );
    // factory.updateStock           = (id, qty)     => $http.get(urlBase + '/StockItem/' + id + '/' +qty);
    // factory.getStockItemSearch    = (manufId, itemCId, product) =>
    //   $http.get(urlBase + '/StockItem/Search/' + manufId + '/' + itemCId + '/' + product) ;
    //
    //
    //
    //
    // // Manufacturer
    // factory.getManufacturers      = ()            => $http.get( urlBase + '/Manufacturers');
    // factory.getManufacturerById   = (id )         => $http.get( urlBase + '/Manufacturer/' + id );
    // factory.addManufacturer       = (manufacturer)=> $http.get( urlBase + '/Manufacturer/create', manufacturer);
    // factory.deleteManufacturerById= (id )         => $http.get( urlBase + '/Manufacturer/delete/' + id );
    //
    // // ItemCategory
    // factory.getItemCategories     = ()            => $http.get( urlBase + '/ItemCategories');
    // factory.getItemCategoryById   = (id )         => $http.get( urlBase + '/ItemCategory/' + id );
    // factory.addItemCategory       = (itemCategory)=> $http.get( urlBase + '/ItemCategory/create', itemCategory);
    // factory.deleteItemCategoryById= (id )         => $http.get( urlBase + '/ItemCategory/delete/' + id );
    //
    // // Cart
    // factory.getCarts              = ()            => $http.get( urlBase + '/Carts');
    // factory.getCartById           = (id )         => $http.get( urlBase + '/Cart/' + id );
    // factory.addCart               = (cart)        => $http.get( urlBase + '/Cart/create', cart);
    // factory.deleteCartById        = (id )         => $http.get( urlBase + '/Cart/delete/' + id );
    // factory.getCartsByAccountId    = id            => $http.get( urlBase + '/Carts/Account/'+id);
    //
    // // CartItem
    // factory.getCartItems          = ()            => $http.get( urlBase + '/CartItems');
    // factory.getCartItemById       = (id )         => $http.get( urlBase + '/CartItem/' + id );
    // factory.addCartItem           = (cartItem)    => $http.get( urlBase + '/CartItem/create', cartItem);
    // factory.deleteCartItemById    = (id )         => $http.get( urlBase + '/CartItem/delete/' + id );
    // factory.getCartItemsByCartId   = id            => $http.get( urlBase + '/CartItems/Cart/' + id);
    //
    // // Order
    // factory.getOrders             = ()            => $http.get( urlBase + '/Orders');
    // factory.getOrderById          = (id )         => $http.get( urlBase + '/Order/' + id );
    // factory.addOrder              = (order)       => $http.get( urlBase + '/Order/create', order);
    // factory.deleteOrderById       = (id )         => $http.get( urlBase + '/Order/delete/' + id );
    // factory.getOrdersByAccountId   = id            => $http.get( urlBase + '/Orders/Account/' + id);
    //
    // // OrderItem
    // factory.getOrderItems         = ()            => $http.get( urlBase + '/OrderItems');
    // factory.getOrderItemById      = (id )         => $http.get( urlBase + '/OrderItem/' + id );
    // factory.addOrderItem          = (orderItem)   => $http.get( urlBase + '/OrderItem/create', orderItem);
    // factory.deleteOrderItemById   = (id )         => $http.get( urlBase + '/OrderItem/delete/' + id );
    // factory.getOrderItemsByOrderId = id            => $http.get( urlBase + '/OrderItems/Order/' + id);
    //
    // // StockReview
    // factory.getStockReviews       = ()             => $http.get( urlBase + '/StockReviews');
    // factory.getStockReviewByStockItemId  = (id )   => $http.get( urlBase + '/StockReview/StockItem/' + id );
    // factory.addStockReview        = (stockReview)  => $http.get( urlBase + '/StockReview/create', stockReview);
    // factory.deleteStockReviewById = (id )          => $http.get( urlBase + '/StockReview/delete/' + id );
    // factory.getStockReviewsByStockItemId = id      => $http.get( urlBase + '/StockReviews/StockItem/' + id);
    // factory.getStockReviewsByAccountId   = (id)    => $http.get( urlBase + '/StockReviews/Account/' + id);
    return factory;
}]);

