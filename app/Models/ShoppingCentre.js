"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class ShoppingCentre {

  constructor (shoppingCentreid, adminid, contentPage, phone, facebookUrl, twitterUrl, websiteUrl,
               logoImageSmall, logoImageMedium, logoImageLarge, shoppingCentreName)
  {
    this.shoppingCentreid	= this.setShoppingCentreid  (shoppingCentreid);
    this.adminid	        = this.setAdminid           (adminid);
    this.contentPage	    = this.setContentPage       (contentPage);
    this.phone	          = this.setPhone             (phone);
    this.facebookUrl	    = this.setFacebookUrl       (facebookUrl);
    this.twitterUrl	      = this.setTwitterUrl        (twitterUrl);
    this.websiteUrl	      = this.setWebsiteUrl        (websiteUrl);
    this.logoImageSmall	  = this.setLogoImageSmall    (logoImageSmall);
    this.logoImageMedium	= this.setLogoImageMedium   (logoImageMedium);
    this.logoImageLarge	  = this.setLogoImageLarge    (logoImageLarge);
    this.shoppingCentreName = this.setShoppingCentreName (shoppingCentreName);
    this.usersByAdminid   = this.setUsersByAdminid    ({});
    this.locationsByShoppingCentreid	      = this.setLocationsByShoppingCentreid   ([]);
    this.retailersByShoppingCentreid	      = this.setRetailersByShoppingCentreid   ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getShoppingCentreid     ()  { return this.shoppingCentreid;       }
  setShoppingCentreid     (x) { this.shoppingCentreid = x ? x : 0;  }
  getAdminid              ()  { return this.adminid;                }
  setAdminid              (x) { this.adminid          = x ? x : 0;  }
  getContentPage          ()  { return this.contentPage;            }
  setContentPage          (x) { this.contentPage      = x ? x : ""; }
  getPhone                ()  { return this.phone;                  }
  setPhone                (x) { this.phone            = x ? x : ""; }
  getFacebookUrl          ()  { return this.facebookUrl;            }
  setFacebookUrl          (x) { this.facebookUrl      = x ? x : ""; }
  getTwitterUrl           ()  { return this.twitterUrl;             }
  setTwitterUrl           (x) { this.twitterUrl       = x ? x : ""; }
  getWebsiteUrl           ()  { return this.websiteUrl;             }
  setWebsiteUrl           (x) { this.websiteUrl       = x ? x : ""; }
  getLogoImageSmall       ()  { return this.logoImageSmall;         }
  setLogoImageSmall       (x) { this.logoImageSmall   = x ? x : ""; }
  getLogoImageMedium      ()  { return this.logoImageMedium;        }
  setLogoImageMedium      (x) { this.logoImageMedium  = x ? x : ""; }
  getLogoImageLarge       ()  { return this.logoImageLarge;         }
  setLogoImageLarge       (x)  { this.logoImageLarge   = x ? x : ""; }
  getShoppingCentreName   ()  { return this.shoppingCentreName;     }
  setShoppingCentreName   (x) { this.shoppingCentreName= x ? x : "";}



  getUsersByAdminid       ()  { return this.usersByAdminid;         }
  setUsersByAdminid       (x) { this.usersByAdminid   = x ? x : []; }

  getFullname             ()  { return this.usersByAdminid.firstname + " " + this.usersByAdminid.surname;}

  getLocationsByShoppingCentreid    ()  { return this.locationsByShoppingCentreid;              }
  setLocationsByShoppingCentreid    (x) { this.locationsByShoppingCentreid        = x ? x : []; }
  getRetailersByShoppingCentreid    ()  { return this.retailersByShoppingCentreid;              }
  setRetailersByShoppingCentreid    (x) { this.retailersByShoppingCentreid        = x ? x : []; }

}





