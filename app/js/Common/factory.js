myApp.factory('DataFactory', ['$http','Globals','$rootScope', function($http, Globals) {

  let factory   = {};
  const urlBase = Globals.URL_BASE;

  // login/logout/register

  factory.login             = (username, password)  =>  $http.get( urlBase + '/login/' + username + '/' + password );
  factory.logout            = (id, startTime )      =>  $http.get( urlBase + '/Login/logout/' + id + '/' + startTime );

  factory.registerAdmin     = ( a ) =>
    $http.get( urlBase + '/Login/register/Admin/' + a.firstname + '/' + a.surname + '/' + a.password + '/' + "Administrator" +
                                                        '/' + a.phone + '/' + a.gender + '/' + a.yob + '/' + a.emailAddress );
  factory.registerRetailer  = ( r ) =>
    $http.get( urlBase + '/Login/register/Retailer/' + r.firstname + '/'+ r.surname  + '/' + r.password + '/' + "Retailer" +
                                       '/' + r.phone + '/' + r.retailer  + '/' + r.gender + '/' + r.yob + '/' + r.emailAddress);

  // Beacons
  factory.listBeacons                   = ()              => $http.get(urlBase + '/Beacons'                       );
  factory.getBeacon                     = (id)            => $http.get(urlBase + '/Beacon/'+ id                   );
  factory.addBeacon                     = (beacon)        => $http.post(urlBase + '/Beacon/create' , beacon       );
  factory.deleteBeacon                  = (id)            => $http.delete(urlBase + '/Beacon/delete/' + id        );
  factory.updateBeacon                  = (beacon)        => $http.put(urlBase + '/Beacon/update' , beacon        );

  // BonusCodes
  factory.listBonusCodes                = ()              => $http.get(urlBase + '/BonusCodes'                    );
  factory.generateBonusCodes            = (id)            => $http.get(urlBase + '/BonusCodes/Generate/' + id     );
  factory.generateBonusCodes250         = (id)            => $http.put(urlBase + '/BonusCodes/Generate/250/' + id );
  factory.generateBonusCodes500         = (id)            => $http.put(urlBase + '/BonusCodes/Generate/500/' + id );
  factory.listBonusCodesByRetailer      = (id)            => $http.get(urlBase + '/BonusCodes/Retailer/' + id     );
  factory.listBonusCodesByUser          = (id)            => $http.get(urlBase + '/BonusCodes/User/' + id         );
  factory.getBonusCode                  = (id)            => $http.get(urlBase + '/BonusCode/' + id               );
  factory.getBonusCodes                 = (id)            => $http.get(urlBase + '/BonusCode/Retailer/' + id      );
  factory.addBonusCode                  = (bonusCode)     => $http.post(urlBase + '/BonusCode' , bonusCode        );
  factory.deleteBonusCode               = (id)            => $http.delete(urlBase + '/BonusCode/delete/' + id     );
  factory.updateBonusCode               = (bonusCode)     => $http.put(urlBase + '/BonusCode/update' , bonusCode  );

  // Content
  factory.listContent                   = ()              => $http.get(urlBase + '/Content/'                      );
  factory.listContentForApproval        = ()              => $http.get(urlBase + '/Content/ForApproval'           );
  factory.listContentByRetailer         = (id)            => $http.get(urlBase + '/Content/Retailer/' + id        );
  factory.getContent                    = (id)            => $http.get(urlBase + '/Content/' + id                 );
  factory.addContent                    = (content)       => $http.post(urlBase + '/Content/create' , content     );
  factory.deleteContent                 = (id)            => $http.delete(urlBase + '/Content/delete/' + id       );
  factory.updateContent                 = (content)       => $http.put(urlBase + '/Content/update' , content      );
  factory.contentCheckDates             = (content)       => $http.put(urlBase + '/Content/CheckDates', content   );

  // Favourits
  factory.listFavourites                = ()              => $http.get(urlBase + '/Favourites'                    );
  factory.listFavouritesByRetailer      = (id)            => $http.get(urlBase + '/Favourites/Retailer/' + id     );
  factory.listFavouritesByUser          = (id)            => $http.get(urlBase + '/Favourites/User/' + id         );
  factory.getFavourite                  = (id)            => $http.get(urlBase + '/Favourite/' + id               );
  factory.addFavourite                  = (favourite)     => $http.post(urlBase + '/Favourite/create', favourite  );
  factory.deleteFavourite               = (id)            => $http.delete(urlBase + '/Favourite/delete/' + id     );
  factory.updateFavourite               = (favourite)     => $http.put(urlBase + '/Favourite/update' , favourite  );

  // Locations
  factory.listLocations                 = ()              => $http.get(urlBase + '/Locations'                     );
  factory.getLocation                   = (id)            => $http.get(urlBase + '/Location/' + id                );
  factory.addLocation                   = (location)      => $http.post(urlBase + '/Location' , location          );
  factory.deleteLocation                = (id)            => $http.delete(urlBase + '/Location/delete/' + id      );
  factory.updateLocation                = (location)      => $http.put(urlBase + '/Location/update' , location    );

  // LoyaltyRewards
  factory.listLoyaltyRewards            = ()              => $http.get(urlBase + '/LoyaltyRewards'                );
  factory.listLoyaltyRewardsForApproval = ()              => $http.get(urlBase + '/LoyaltyRewards/ForApproval'    );
  factory.listLoyaltyRewardsByRetailer  = (id)            => $http.get(urlBase + '/LoyaltyRewards/Retailer/' + id );
  factory.getLoyaltyReward              = (id)            => $http.get(urlBase + '/LoyaltyReward/' + id           );
  factory.addLoyaltyReward              = (loyaltyReward) => $http.post(urlBase + '/LoyaltyReward/create' , loyaltyReward );
  factory.deleteLoyaltyReward           = (id)            => $http.delete(urlBase + '/LoyaltyReward/delete/' + id );
  factory.updateLoyaltyReward           = (loyaltyReward) => $http.put(urlBase + '/LoyaltyReward/update' , loyaltyReward );
  factory.loyaltyRewardCheckDates       = (loyaltyReward) => $http.put(urlBase + '/LoyaltyReward/CheckDates', loyaltyReward );

  // Ratings
  factory.listRatings                   = ()              => $http.get(urlBase + '/Ratings'                       );
  factory.listRatingsByRetailer         = (id)            => $http.get(urlBase + '/Ratings/Retailer/' + id        );
  factory.listRatingsByUser             = (id)            => $http.get(urlBase + '/Ratings/User' + id             );
  factory.getRating                     = (id)            => $http.get(urlBase + '/Rating/' + id                  );
  factory.addRating                     = (rating)        => $http.post(urlBase + '/Rating/create' , rating       );
  factory.deleteRating                  = (id)            => $http.delete(urlBase + '/Rating/delete/' + id        );
  factory.updateRating                  = (rating)        => $http.put(urlBase + '/Rating/update' , rating        );
  factory.listRatingsReportAdmin        = ()              => $http.get(urlBase + '/Ratings/Report/Admin'          );
  factory.listRatingsReportRetailer     = (id)            => $http.get(urlBase + '/Ratings/Report/Retailer/' + id );

  // Retailers
  factory.listRetailers                 = ()              => $http.get(urlBase + '/Retailers'                     );
  factory.getRetailer                   = (id)            => $http.get(urlBase + '/Retailer/' + id                );
  factory.addRetailer                   = (retailer)      => $http.post(urlBase + '/Retailer/create' , retailer   );
  factory.deleteRetailer                = (id)            => $http.delete(urlBase + '/Retailer/delete/' + id      );
  factory.updateRetailer                = (retailer)      => $http.put(urlBase + '/Retailer/update' , retailer    );


  // ShoppingCentre
  factory.listShoppingCentres           = ()              => $http.get(urlBase + '/ShoppingCentres'               );
  factory.getShoppingCentre             = (id)            => $http.get(urlBase + '/ShoppingCentre/' + id          );
  factory.addShoppingCentre             = (shoppingCentre)=> $http.post(urlBase + '/ShoppingCentre/create' , shoppingCentre );
  factory.deleteShoppingCentre          = (id)            => $http.delete(urlBase + '/ShoppingCentre/delete/' + id );
  factory.updateShoppingCentre          = (shoppingCentre)=> $http.put(urlBase + '/ShoppingCentre/update' , shoppingCentre );

  // Users
  factory.listUsers                     = ()              => $http.get(urlBase + '/Users'                         );
  factory.listUser                      = (id)            => $http.get(urlBase + '/Users/' + id                   );
  factory.listUsersForApproval          = ()              => $http.get(urlBase + '/Users/ForApproval'             );
  factory.listUsersByRetailer           = (id)            => $http.get(urlBase + '/Users/Retailer/' + id          );
  factory.getUser                       = (id)            => $http.get(urlBase + '/User/' + id                    );
  factory.addUser                       = (user)          => $http.post(urlBase + '/User/create' , user           );
  factory.addRetailManager              = (user)          => $http.put(urlBase + '/User/retailer/update' , user);
  factory.getUserByEmailAddress         = (email)         => $http.get(urlBase + '/User/ByEmail/' + email         );
  factory.deleteUserById                = (id)            => $http.delete(urlBase + '/User/delete/' + id          );
  factory.deleteUserByEmailAddress      = (email)         => $http.delete(urlBase + '/User/deleteByEmail/' + email);
  factory.deleteUserByUser              = (user)          => $http.delete(urlBase + '/User/delete/' + user        );
  factory.updateUser                    = (user)          => $http.put(urlBase + '/User/update' , user            );

  // UserPoints
  factory.listUserPoints                = ()              => $http.get(urlBase + '/UserPoints'                    );
  factory.listUserPointsByRetailer      = (id)            => $http.get(urlBase + '/UserPoints/Retailer/' + id     );
  factory.listUserPointsByUser          = (id)            => $http.get(urlBase + '/UserPoints/User/' + id         );
  factory.listUserPointsByUserRetailer  = (userid, retailerid)   => $http.get(urlBase + '/UserPoints/UserRetailer/' + userid + '/' + retailerid );
  factory.getUserPoints                 = (id)            => $http.get(urlBase + '/UserPoint/' + id               );
  factory.addUserPoints                 = (userPoints)    => $http.post(urlBase + '/UserPoint/create' , userPoints      );
  factory.deleteUserPoint               = (id)            => $http.delete(urlBase + '/UserPoint/delete/' + id     );
  factory.updateUserPoint               = (userPoint)     => $http.put(urlBase + '/UserPoint/update' , userPoint );


  // Visits
  factory.listVisits                    = ()              => $http.get(urlBase + '/Visits'                        );
  factory.listVisitsByUser              = (id)            => $http.get(urlBase + '/Visits/User/' + id             );
  factory.listVisitsByRetailer          = (id)            => $http.get(urlBase + '/Visits/Retailer/' + id         );

  factory.listVisitsReportsByGenderAdmin    = ()          => $http.get(urlBase + '/Visits/Report/Gender/Admin'    );
  factory.listVisitsReportsByGenderRetailer = (id)        => $http.get(urlBase + '/Visits/Report/Gender/Retailer/' + id );

  factory.listVisitsReportsByAgeAdmin       = ()          => $http.get(urlBase + '/Visits/Report/Age/Admin'       );
  factory.listVisitsReportsByAgeRetailer    = (id)        => $http.get(urlBase + '/Visits/Report/Age/Retailer/' + id    );

  factory.listVisitsReportsAdminDays        = ()          => $http.get(urlBase + '/Visits/Report/Admin/Day'       );
  factory.listVisitsReportsAdminWeeks       = ()          => $http.get(urlBase + '/Visits/Report/Admin/Week'      );
  factory.listVisitsReportsAdminMonths      = ()          => $http.get(urlBase + '/Visits/Report/Admin/Month'     );

  factory.listVisitsReportsRetailerDays     = (id)        => $http.get(urlBase + '/Visits/Report/Retailer/Day/' + id    );
  factory.listVisitsReportsRetailerWeeks    = (id)        => $http.get(urlBase + '/Visits/Report/Retailer/Week/' + id   );
  factory.listVisitsReportsRetailerMonths   = (id)        => $http.get(urlBase + '/Visits/Report/Retailer/Month/' + id  );

  factory.getVisit                          = (id)        => $http.get(urlBase + '/Visit/'                        );
  factory.addVisit                          = (visit)     => $http.post(urlBase + '/Visit/create' , visit          );
  factory.deleteVisit                       = (id)        => $http.delete(urlBase + '/Visit/delete/' + id            );
  factory.updateVisit                       = (visit)     => $http.put(urlBase + '/Visit/update' , visit          );

  // Zones
  factory.listZones                         = ()          => $http.get(urlBase + '/Zones'                         );
  factory.getZone                           = (id)        => $http.get(urlBase + '/Zone/' + id                    );
  factory.addZone                           = (zone)      => $http.post(urlBase + '/Zone/create' , zone            );
  factory.deleteZone                        = (id)        => $http.delete(urlBase + '/Zone/delete/' + id             );
  factory.updateZone                        = (zone)      => $http.put(urlBase + '/Zone/update' , zone            );

  // complex queries all under /Main mapping
  // returns all Visits, Users and Retailers
    factory.getVisitsUsersRetailers       = ()            => $http.get(urlBase + '/Main/VUR'                      );
    factory.getUsersRetailers             = ()            => $http.get(urlBase + '/Main/UR'                       );

    return factory;
}]);

