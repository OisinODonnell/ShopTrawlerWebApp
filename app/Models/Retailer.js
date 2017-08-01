"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Retailer {

  constructor (retailerid, defaultContentPage1, defaultContentPage2, defaultContentPage3, defaultLoyaltyRewardImage, facebookUrl, twitterUrl,
               websiteUrl, logoImageSmall, logoImageLarge, logoImageMedium, headerBackgroundImage, managerid, shoppingCentreid, zoneid, phone, storeName, storeDefaultContentPage1)
  {
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

    this.bonusCodes	                  = this.setBonusCodes                ([]);
    this.content	                    = this.setContent                   ([]);
    this.favourites	                  = this.setFavourites                ([]);
    this.loyaltyRewards	              = this.setLoyaltyRewards            ([]);
    this.ratings                      = this.setRatings                   ([]);
    this.shoppingCentres              = this.setShoppingCentres           ([]);
    this.users                        = this.setUsers                     ([]);
    this.zones                        = this.setZones                     ([]);
    this.userPoints                   = this.setUserPoints                ([]);

  }

  getHeaderBackgroundImage      ()  { return this.headerBackgroundImage;         }
  setHeaderBackgroundImage      (x) { this.headerBackgroundImage   = x ? x : ""; }
  getManagerid                  ()  { return this.managerid;                     }
  setManagerid                  (x) { this.managerid               = x ? x : ""; }
  getShoppingCentreid           ()  { return this.shoppingCentreid;              }
  setShoppingCentreid           (x) { this.shoppingCentreid        = x ? x : ""; }
  getStoreDefaultContentPage1   ()  { return this.storeDefaultContentPage1;      }
  setStoreDefaultContentPage1   (x) { this.storeDefaultContentPage1= x ? x : ""; }
  getZoneid                     ()  { return this.zoneid;                        }
  setZoneid                     (x) { this.zoneid                  = x ? x : ""; }
  getPhone                      ()  { return this.phone;                         }
  setPhone                      (x) { this.phone                   = x ? x : ""; }
  getStoreName                  ()  { return this.storeName;                     }
  setStoreName                  (x) { this.storeName               = x ? x : ""; }


  // getters and setters with default values where attribute is not provided.

  getRetailerid                 ()  { return this.retailerid;                           }
  setRetailerid                 (x) { this.retailerid                     = x ? x : 0;  }
  getDefaultContentPage1        ()  { return this.defaultContentPage1;                  }
  setDefaultContentPage1        (x) { this.defaultContentPage1            = x ? x : ""; }
  getDefaultContentPage2        ()  { return this.defaultContentPage2;                  }
  setDefaultContentPage2        (x) { this.defaultContentPage2            = x ? x : ""; }
  getDefaultContentPage3        ()  { return this.defaultContentPage3;                  }
  setDefaultContentPage3        (x) { this.defaultContentPage3            = x ? x : ""; }
  getDefaultLoyaltyRewardImage  ()  { return this.defaultLoyaltyRewardImage;            }
  setDefaultLoyaltyRewardImage  (x) { this.defaultLoyaltyRewardImage      = x ? x : ""; }
  getFacebookUrl                ()  { return this.facebookUrl;                   }
  setFacebookUrl                (x) { this.facebookUrl            = x ? x : "";  }
  getTwitterUrl                 ()  { return this.twitterUrl;                    }
  setTwitterUrl                 (x) { this.twitterUrl             = x ? x : "";  }
  getWebsiteUrl                 ()  { return this.websiteUrl;                    }
  setWebsiteUrl                 (x) { this.websiteUrl             = x ? x : "";  }
  getLogoImageSmall             ()  { return this.logoImageSmall;                }
  setLogoImageSmall             (x) { this.logoImageSmall         = x ? x : "";  }
  getLogoImageLarge             ()  { return this.logoImageLarge;                }
  setLogoImageLarge             (x) { this.logoImageLarge         = x ? x : "";  }
  getLogoImageMedium            ()  { return this.logoImageMedium;               }
  setLogoImageMedium            (x) { this.logoImageMedium        = x ? x : "";  }

  getBonusCodes                 ()  { return this.bonusCodes;                    }
  setBonusCodes                 (x) { this.bonusCodes             = x ? x : [];  }
  getContent                    ()  { return this.content;                       }
  setContent                    (x) { this.content                = x ? x : [];  }
  getFavourites                 ()  { return this.favourites;                    }
  setFavourites                 (x) { this.favourites             = x ? x : [];  }
  getLoyaltyRewards             ()  { return this.loyaltyRewards;                }
  setLoyaltyRewards             (x) { this.loyaltyRewards         = x ? x : [];  }
  getRatings                    ()  { return this.ratings;                       }
  setRatings                    (x) { this.ratings                = x ? x : [];  }
  getUsers                      ()  { return this.users;                         }
  setUsers                      (x) { this.users                  = x ? x : [];  }
  getShoppingCentres            ()  { return this.shoppingCentres;               }
  setShoppingCentres            (x) { this.shoppingCentres        = x ? x : [];  }
  getZones                      ()  { return this.zones;                         }
  setZones                      (x) { this.zones                  = x ? x : [];  }
  getUserPoints                 ()  { return this.userPoints;                    }
  setUserPoints                 (x) { this.userPoints             = x ? x : [];  }

}





