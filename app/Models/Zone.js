"use strict";
/**
 * Created by oisin on 23/07/2017.
 */


class Zone {

  constructor (zoneid, beaconid, zoneName)
  {
    this.zoneid	   = this.setZoneid     (zoneid);
    this.beaconid	 = this.setBeaconid   (beaconid);
    this.zoneName	 = this.setZoneName   (zoneName);

    this.visitsByZoneid	   = this.setVisitsByZoneid     ([]);


  }

  // getters and setters with default values where attribute is not provided.

  getZoneid     ()  { return this.zoneid;                 }
  setZoneid     (x) { this.zoneid           = x ? x : 0;  }
  getBeaconid   ()  { return this.beaconid;               }
  setBeaconid   (x) { this.beaconid         = x ? x : ""; }
  getZoneName   ()  { return this.zoneName;               }
  setZoneName   (x) { this.zoneName         = x ? x : 0;  }

  getVisitsByZoneid     ()  { return this.visitsByZoneid;                 }
  setVisitsByZoneid     (x) { this.visitsByZoneid           = x ? x : []; }

}





