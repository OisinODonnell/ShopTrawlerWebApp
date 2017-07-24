"use strict";
/**
 * Created by oisin on 23/07/2017.
 */


class Zone {

  constructor (zoneId, beaconId)
  {
    this.zoneId	   = this.setZoneId     (zoneId);
    this.beaconId	 = this.setBeaconId   (beaconId);

    this.retailers = this.setRetailers  ([]);
    this.visits	   = this.setVisits     ([]);
    this.beacons	 = this.setBeacons    ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getZoneId     ()  { return this.zoneId;                 }
  setZoneId     (x) { this.zoneId           = x ? x : 0;  }
  getBeaconId   ()  { return this.beaconId;               }
  setBeaconId   (x) { this.beaconId         = x ? x : ""; }

  getRetailers  ()  { return this.retailers;              }
  setRetailers  (x) { this.retailers        = x ? x : []; }
  getVisits     ()  { return this.visits;                 }
  setVisits     (x) { this.visits           = x ? x : []; }
  getBeacons    ()  { return this.beacons;                }
  setBeacons    (x) { this.beacons          = x ? x : []; }

}





