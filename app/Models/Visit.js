"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Visit {

  constructor (visitId, entryTime, exitTime, userCreditedForVisit, duration, userId, zoneId)
  {
    this.visitId	      = this.setVisitId       (visitId);
    this.entryTime	    = this.setEntryTime     (entryTime);
    this.exitTime	      = this.setExitTime      (exitTime);
    this.userCreditedForVisit = this.setUserCreditedForVisit(userCreditedForVisit);
    this.duration	      = this.setDuration      (duration);
    this.userId	        = this.setUserId        (userId);
    this.zoneId	        = this.setZoneId        (zoneId);

    this.users	        = this.setUsers         ([]);
    this.zones	        = this.setZones         ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getVisitId              ()  { return this.visitId;              }
  setVisitId              (x) { this.visitId        = x ? x : 0;  }
  getEntryTimeString      ()  { return new Date(this.entryTime);  }
  setEntryTime            (x) { this.entryTime      = x ? x : ""; }
  getExitTimeString       ()  { return new Date(this.exitTime);   }
  setExitTime             (x) { this.exitTime       = x ? x : ""; }
  getUserCreditedForVisit ()  { return this.userCreditedForVisit; }
  setUserCreditedForVisit (x) { this.userCreditedForVisit  = x ? x : "";  }
  getDuration             ()  { return this.duration;             }
  setDuration             (x) { this.duration       = x ? x : ""; }
  getUserId               ()  { return this.userId;               }
  setUserId               (x) { this.userId         = x ? x : ""; }
  getZoneId               ()  { return this.zoneId;               }
  setZoneId               (x) { this.zoneId         = x ? x : ""; }

  getUsers                ()  { return this.users;                }
  setUsers                (x) { this.users          = x ? x : []; }
  getZones                ()  { return this.zones;                }
  setZones                (x) { this.zones          = x ? x : []; }

}





