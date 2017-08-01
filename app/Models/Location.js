"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Location {

  constructor (locationid, altitude, gpsLongtitude, gpsLatitude, locationInShoppingCentre, locationType, shoppingCentreid)
  {
    this.locationid	        = this.setLocationid         (locationid);
    this.altitude	          = this.setAltitude           (altitude);
    this.gpsLongtitude	    = this.setGpsLongtitude      (gpsLongtitude);
    this.gpsLatitude	      = this.setGpsLatitude        (gpsLatitude);
    this.locationInShoppingCentre	  = this.setLocationInShoppingCentre   (locationInShoppingCentre);
    this.locationType	      = this.setLocationType       (locationType);
    this.shoppingCentreid	  = this.setShoppingCentreid   (shoppingCentreid);

    this.beacons	          = this.setBeacons            ([]);
    this.shoppingCentres	  = this.setShoppingCentres    ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getLocationid         ()  { return this.locationid;                 }
  setLocationid         (x) { this.locationid          = x ? x : 0;   }
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
  getShoppingCentreid   ()  { return this.shoppingCentreid;           }
  setShoppingCentreid   (x) { this.shoppingCentreid    = x ? x : 0;   }

  getBeacons            ()  { return this.beacons;                    }
  setBeacons            (x) { this.beacons             = x ? x : [];  }
  getShoppingCentres    ()  { return this.shoppingCentres;            }
  setShoppingCentres    (x) { this.shoppingCentres     = x ? x : [];  }
}
