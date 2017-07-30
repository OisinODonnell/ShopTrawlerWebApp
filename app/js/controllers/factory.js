
myApp.factory('DataFactory', ['$http', function ($http) {

    let factory   = {};
    const urlBase = 'http://localhost:8080';

    // login/logout/register

    factory.login       = (username, password)    =>
      $http.get(urlBase  + '/login/' + username + '/' + password );

    factory.registerAdmin    = (name, email, password, accountType ) =>
      $http.get( urlBase + '/Login/register/' + name + '/' + email + '/' + password + '/' + accountType);

    factory.registerCust    = (name, email, password, accountType, phone, loyaltyCard, addressStreet, addressCity, addressCountry, paymentType) =>
      $http.get( urlBase + '/Login/register/' + name + '/' + email + '/' + password + '/' + accountType + '/' + phone + '/' + loyaltyCard +
        '/' + addressStreet + '/' + addressCity + '/' + addressCountry + '/' + paymentType );

    factory.logout      = (id, startTime )        => $http.get( urlBase + '/Login/logout/' + id + '/' + startTime );

    // ShoppingCentre
    factory.listShoppingCentres  = ()                 => $http.get(urlBase + '/ShoppingCentres' );
    factory.getShoppingCentre    = (id)               => $http.get(urlBase + '/ShoppingCentre/' + id);
    factory.addShoppingCentre    = (shoppingCentre)   => $http.get(urlBase + '/ShoppingCentre/' + shoppingCentre );
    factory.deleteShoppingCentre = (id)               => $http.get(urlBase + '/ShoppingCentre/delete/' + id );
    factory.updateShoppingCentre = (shoppingCentre)   => $http.get(urlBase + '/ShoppingCentre/update/' + shoppingCentre );


  // Favourits
    factory.listFavourites      = ()            => $http.get(urlBase + '/Favourites' );
    factory.getFavourite        = (id)          => $http.get(urlBase + '/Favourite/' + id );
    factory.addFavourite        = (favourite)   => $http.get(urlBase + '/Favourite/' + favourite);
    factory.deleteFavourite     = (id)          => $http.get(urlBase + '/Favourite/delete/' + id );
    factory.updateFavourite     = (favourite)   => $http.get(urlBase + '/Favourite/update/' + favourite );

    // UserPoints
    factory.listUserPoints      = ()            => $http.get(urlBase + '/UserPoints' );
    factory.getUserPoints       = (id)          => $http.get(urlBase + '/UserPoint/' + id );
    factory.addUserPoints       = (userPoints)  => $http.get(urlBase + '/UserPoint/' + userPoints);
    factory.deleteUserPoint     = (id)          => $http.get(urlBase + '/UserPoint/delete/' + id );
    factory.updateUserPoint     = (userPoint)   => $http.get(urlBase + '/UserPoint/update/' + userPoint );

    // Ratings
    factory.listRatings         = ()            => $http.get(urlBase + '/Ratings' );
    factory.getRating           = (id)          => $http.get(urlBase + '/Rating/' + id);
    factory.addRating           = (rating)      => $http.get(urlBase + '/Rating/' + rating );
    factory.deleteRating        = (id)          => $http.get(urlBase + '/Rating/delete/' + id );
    factory.updateRating        = (rating)      => $http.get(urlBase + '/Rating/update/' + rating );

    // Visits
    factory.listVisits          = ()            => $http.get(urlBase + '/Visits' );
    factory.getVisit            = (id)          => $http.get(urlBase + '/Visit/' );
    factory.addVisit            = (visit)       => $http.get(urlBase + '/Visit/' + visit );
    factory.deleteVisit         = (id)          => $http.get(urlBase + '/Visit/delete/' + id );
    factory.updateVisit         = (visit)       => $http.get(urlBase + '/Visit/update/' + visit );

    // Zones
    factory.listZones           = ()            => $http.get(urlBase + '/Zones' );
    factory.getZone             = (id)          => $http.get(urlBase + '/Zone/' + id );
    factory.addZone             = (zone)        => $http.get(urlBase + '/Zone/' + zone );
    factory.deleteZone          = (id)          => $http.get(urlBase + '/Zone/delete/' + id );
    factory.updateZone          = (zone)        => $http.get(urlBase + '/Zone/update/' + zone );

    // Locations
    factory.listLocations       = ()            => $http.get(urlBase + '/Locations' );
    factory.getLocation         = (id)          => $http.get(urlBase + '/Location/' + id );
    factory.addLocation         = (location)    => $http.get(urlBase + '/Location/' + location);
    factory.deleteLocation      = (id)          => $http.get(urlBase + '/Location/delete/' + id );
    factory.updateLocation      = (location)    => $http.get(urlBase + '/Location/update/' + location );

    // Users
    factory.listUsers           = ()            => $http.get(urlBase + '/Users' );
    factory.getUsers            = ()            => $http.get(urlBase + '/Users/' );
    factory.getUser             = (id)          => $http.get(urlBase + '/User/' + id);
    factory.addUser             = (user)        => $http.get(urlBase + '/User/' + user);
    factory.getUserByEmailAddress = (email)     => $http.get(urlBase + '/User/ByEmail/' + email);
    factory.deleteUserById      = (id)          => $http.get(urlBase + '/User/delete' + id);
    factory.updateUser          = (user)        => $http.get(urlBase + '/User/update/' + user );

    // Retailers
    factory.listRetailers       = ()            => $http.get(urlBase + '/Retailers' );
    factory.getRetailer         = (id)          => $http.get(urlBase + '/Retailer/' + id);
    factory.addRetailer         = (retailer)    => $http.get(urlBase + '/Retailer/' + retailer );
    factory.deleteRetailer      = (id)          => $http.get(urlBase + '/Retailer/delete/' + id );
    factory.updateRetailer      = (retailer)    => $http.get(urlBase + '/Retailer/update/' + retailer );

    // Beacons
    factory.listBeacons         = ()            => $http.get(urlBase + '/Beacons' );
    factory.getBeacon           = (id)          => $http.get(urlBase + '/Beacon/'+ id);
    factory.addBeacon           = (beacon)      => $http.get(urlBase + '/Beacon/' + beacon);
    factory.deleteBeacon        = (id)          => $http.get(urlBase + '/Beacon/delete/' + id );
    factory.updateBeacon        = (beacon)      => $http.get(urlBase + '/Beacon/update/' + beacon );

    // Content
    factory.listContent         = ()            => $http.get(urlBase + '/Content' );
    factory.getContent          = (id)          => $http.get(urlBase + '/Content/' + id );
    factory.addContent          = (content)     => $http.get(urlBase + '/Content/' + content );
    factory.deleteContent       = (id)          => $http.get(urlBase + '/Content/delete/' + id );
    factory.updateContent       = (content)     => $http.get(urlBase + '/Content/update/' + content );

    // LoyaltyRewards
    factory.listLoyaltyRewards  = ()              => $http.get(urlBase + '/LoyaltyRewards' );
    factory.getLoyaltyReward    = (id)            => $http.get(urlBase + '/LoyaltyReward/' + id);
    factory.addLoyaltyReward    = (loyaltyReward) => $http.get(urlBase + '/LoyaltyReward/' + loyaltyReward );
    factory.deleteLoyaltyReward = (id)            => $http.get(urlBase + '/LoyaltyReward/delete/' + id );
    factory.updateLoyaltyReward = (loyaltyReward) => $http.get(urlBase + '/LoyaltyReward/update/' + loyaltyReward );

    // BonusCodes
    factory.listBonusCodes      = ()            => $http.get(urlBase + '/BonusCodes' );
    factory.getBonusCode        = (id)          => $http.get(urlBase + '/BonusCode/' + id );
    factory.addBonusCode        = (bonusCode)   => $http.get(urlBase + '/BonusCode/' + bonusCode );
    factory.deleteBonusCode     = (id)          => $http.get(urlBase + '/BonusCode/delete/' + id );
    factory.updateBonusCode     = (bonusCode)   => $http.get(urlBase + '/BonusCode/update/' + bonusCode );

    return factory;
}]);

