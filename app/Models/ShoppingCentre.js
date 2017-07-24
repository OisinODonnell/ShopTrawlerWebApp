"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class ShoppingCentre {

  constructor (shoppingCentreId, adminId, contentPage, phone, facebookUrl, twitterUrl, websiteUrl,
               logoImageSmall, logoImageMedium, logoImageLarge)
  {
    this.shoppingCentreId	= this.setShoppingCentreId  (shoppingCentreId);
    this.adminId	        = this.setAdminId           (adminId);
    this.contentPage	    = this.setContentPage       (contentPage);
    this.phone	          = this.setPhone             (phone);
    this.facebookUrl	    = this.setFacebookUrl       (facebookUrl);
    this.twitterUrl	      = this.setTwitterUrl        (twitterUrl);
    this.websiteUrl	      = this.setWebsiteUrl        (websiteUrl);
    this.logoImageSmall	  = this.setLogoImageSmall    (logoImageSmall);
    this.logoImageMedium	= this.setLogoImageMedium   (logoImageMedium);
    this.logoImageLarge	  = this.setLogoImageLarge    (logoImageLarge);

    this.users	          = this.setUsers             ([]);
    this.locations	      = this.setLocations         ([]);
    this.retailers	      = this.setRetailers         ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getShoppingCentreId     ()  { return this.shoppingCentreId;       }
  setShoppingCentreId     (x) { this.shoppingCentreId = x ? x : 0;  }
  getAdminId              ()  { return this.adminId;                }
  setAdminId              (x) { this.adminId          = x ? x : 0;  }
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
  setLogoImageLarge       (x) { this.logoImageLarge   = x ? x : ""; }

  getUsers                ()  { return this.users;                  }
  setUsers                (x) { this.users            = x ? x : []; }
  getLocations            ()  { return this.locations;              }
  setLocations            (x) { this.locations        = x ? x : []; }
  getRetailers            ()  { return this.retailers;              }
  setRetailers            (x) { this.retailers        = x ? x : []; }
}




