"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Beacon {


  constructor (beaconId, locationId, major, minor, transmitPower, uuid)
  {
    this.beaconId	    = this.setBeaconId      (beaconId);
    this.locationId	  = this.setLocationId    (locationId);
    this.major	      = this.setMajor         (major);
    this.minor	      = this.setMinor         (minor);
    this.transmitPower= this.setTransmitPower (transmitPower);
    this.uuid	        = this.setUuid          (uuid);
    this.locations	  = this.setLocations     ([]);
    this.zones	      = this.setZones         ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getBeaconId      ()  { return this.beaconId;                 }
  setBeaconId      (x) { this.beaconId           = x ? x : 0;  }
  getLocationId    ()  { return this.locationId;               }
  setLocationId    (x) { this.locationId         = x ? x : 0;  }
  getMajor         ()  { return this.major;                    }
  setMajor         (x) { this.major              = x ? x : 0;  }
  getMinor         ()  { return this.minor;                    }
  setMinor         (x) { this.minor              = x ? x : 0;  }
  getTransmitPower ()  { return this.transmitPower;            }
  setTransmitPower (x) { this.transmitPower      = x ? x : 0;  }
  getUuid          ()  { return this.uuid;                     }
  setUuid          (x) { this.uuid               = x ? x : ""; }

  getLocations     ()  { return this.locations;                }
  setLocations     (x) { this.locations          = x ? x : []; }
  getZones         ()  { return this.zones;                    }
  setZones         (x) { this.zones              = x ? x : []; }

}
