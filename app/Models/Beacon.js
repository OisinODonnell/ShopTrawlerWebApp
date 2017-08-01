"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Beacon {


  constructor (beaconid, locationid, major, minor, transmitPower, uuid)
  {
    this.beaconid	        = this.setBeaconid        (beaconid);
    this.locationid	      = this.setLocationid      (locationid);
    this.major	          = this.setMajor           (major);
    this.minor	          = this.setMinor           (minor);
    this.transmitPower    = this.setTransmitPower   (transmitPower);
    this.uuid	            = this.setUuid            (uuid);
    this.zonesByBeaconid	= this.setZonesByBeaconid ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getBeaconid      ()  { return this.beaconid;                 }
  setBeaconid      (x) { this.beaconid           = x ? x : 0;  }
  getLocationid    ()  { return this.locationid;               }
  setLocationid    (x) { this.locationid         = x ? x : 0;  }
  getMajor         ()  { return this.major;                    }
  setMajor         (x) { this.major              = x ? x : 0;  }
  getMinor         ()  { return this.minor;                    }
  setMinor         (x) { this.minor              = x ? x : 0;  }
  getTransmitPower ()  { return this.transmitPower;            }
  setTransmitPower (x) { this.transmitPower      = x ? x : 0;  }
  getUuid          ()  { return this.uuid;                     }
  setUuid          (x) { this.uuid               = x ? x : ""; }

  getZonesByBeaconid   ()  { return this.zonesByBeaconid;       }
  setZonesByBeaconid   (x) { this.zonesByBeaconid = x ? x : []; }

}
