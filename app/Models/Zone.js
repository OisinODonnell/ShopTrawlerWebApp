"use strict";
/**
 * Created by oisin on 23/07/2017.
 */


class Zone {

  constructor (zoneid, beaconid)
  {
    this.zoneid	   = this.setZoneid     (zoneid);
    this.beaconid	 = this.setBeaconid   (beaconid);

    this.retailers = this.setRetailers  ([]);
    this.visits	   = this.setVisits     ([]);
    this.beacons	 = this.setBeacons    ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getZoneid     ()  { return this.zoneid;                 }
  setZoneid     (x) { this.zoneid           = x ? x : 0;  }
  getBeaconid   ()  { return this.beaconid;               }
  setBeaconid   (x) { this.beaconid         = x ? x : ""; }

  getRetailers  ()  { return this.retailers;              }
  setRetailers  (x) { this.retailers        = x ? x : []; }
  getVisits     ()  { return this.visits;                 }
  setVisits     (x) { this.visits           = x ? x : []; }
  getBeacons    ()  { return this.beacons;                }
  setBeacons    (x) { this.beacons          = x ? x : []; }

}





