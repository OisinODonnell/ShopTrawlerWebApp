"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Location {

  constructor (locationId, altitude, gpsLongtitude, gpsLatitude, locationInShoppingCentre, locationType, shoppingCentreId)
  {
    this.locationId	        = this.setLocationId         (locationId);
    this.altitude	          = this.setAltitude           (altitude);
    this.gpsLongtitude	    = this.setGpsLongtitude      (gpsLongtitude);
    this.gpsLatitude	      = this.setGpsLatitude        (gpsLatitude);
    this.locationInShoppingCentre	  = this.setLocationInShoppingCentre   (locationInShoppingCentre);
    this.locationType	      = this.setLocationType       (locationType);
    this.shoppingCentreId	  = this.setShoppingCentreId   (shoppingCentreId);

    this.beacons	          = this.setBeacons            ([]);
    this.shoppingCentres	  = this.setShoppingCentres    ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getLocationId         ()  { return this.locationId;                 }
  setLocationId         (x) { this.locationId          = x ? x : 0;   }
  getAltitude           ()  { return this.altitude;                   }
  setAltitude           (x) { this.altitude            = x ? x : 0;   }
  getGpsLongtitude      ()  { return this.gpsLongtitude;              }
  setGpsLongtitude      (x) { this.gpsLongtitude       = x ? x : 0;   }
  getGpsLatitude        ()  { return this.gpsLatitude;                }
  setGpsLatitude        (x) { this.gpsLatitude         = x ? x : 0;   }
  getLocationInShoppingCentre   ()  { return this.locationInShoppingCentre;           }
  setLocationInShoppingCentre   (x) { this.locationInShoppingCentre      = x ? x : "";}
  getLocationType       ()  { return this.locationType;               }
  setLocationType       (x) { this.locationType        = x ? x : "";  }
  getShoppingCentreId   ()  { return this.shoppingCentreId;           }
  setShoppingCentreId   (x) { this.shoppingCentreId    = x ? x : 0;   }

  getBeacons            ()  { return this.beacons;                    }
  setBeacons            (x) { this.beacons             = x ? x : [];  }
  getShoppingCentres    ()  { return this.shoppingCentres;            }
  setShoppingCentres    (x) { this.shoppingCentres     = x ? x : [];  }
}
