"use strict";
/**
 * Created by oisin on 23/07/2017.
 */


class Zone {

  constructor (zoneid, beaconid)
  {
    this.zoneid	   = this.setZoneid     (zoneid);
    this.beaconid	 = this.setBeaconid   (beaconid);

    this.visitsByZoneid	   = this.setVisitsByZoneid     ([]);


  }

  // getters and setters with default values where attribute is not provided.

  getZoneid     ()  { return this.zoneid;                 }
  setZoneid     (x) { this.zoneid           = x ? x : 0;  }
  getBeaconid   ()  { return this.beaconid;               }
  setBeaconid   (x) { this.beaconid         = x ? x : ""; }

  getVisitsByZoneid     ()  { return this.visitsByZoneid;                 }
  setVisitsByZoneid     (x) { this.visitsByZoneid           = x ? x : []; }

}





