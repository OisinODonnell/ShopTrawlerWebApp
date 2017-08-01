"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Visit {


  constructor (visitid, entryTime, exitTime, userCreditedForVisit, duration, userid, zoneid)
  {
    this.visitid	      = this.setVisitid       (visitid);
    this.entryTime	    = this.setEntryTime     (entryTime);
    this.exitTime	      = this.setExitTime      (exitTime);
    this.userCreditedForVisit = this.setUserCreditedForVisit(userCreditedForVisit);
    this.duration	      = this.setDuration      (duration);
    this.userid	        = this.setUserid        (userid);
    this.zoneid	        = this.setZoneid        (zoneid);
    this.users	        = this.setUsers         ([]);
    this.zones	        = this.setZones         ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getVisitid              ()  { return this.visitid;              }
  setVisitid              (x) { this.visitid        = x ? x : 0;  }
  getEntryTimeString      ()  { return new Date(this.entryTime);  }
  setEntryTime            (x) { this.entryTime      = x ? x : ""; }
  getExitTimeString       ()  { return new Date(this.exitTime);   }
  setExitTime             (x) { this.exitTime       = x ? x : ""; }
  getUserCreditedForVisit ()  { return this.userCreditedForVisit; }
  setUserCreditedForVisit (x) { this.userCreditedForVisit  = x ? x : "";  }
  getDuration             ()  { return this.duration;             }
  setDuration             (x) { this.duration       = x ? x : ""; }
  getUserid               ()  { return this.userid;               }
  setUserid               (x) { this.userid         = x ? x : ""; }
  getZoneid               ()  { return this.zoneid;               }
  setZoneid               (x) { this.zoneid         = x ? x : ""; }

  getUsers                ()  { return this.users;                }
  setUsers                (x) { this.users          = x ? x : []; }
  getZones                ()  { return this.zones;                }
  setZones                (x) { this.zones          = x ? x : []; }
  getEntryTimeReadable    ()  { return getReadableDate(this.entryTime); }
  getExitTimeReadable     ()  { return getReadableDate(this.exitTime);  }

}

function getReadableDate(date) {


  let dateStr = new Date(date);

  let month = dateStr.getMonth();
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  let monthName = monthNames[month];
  let year = dateStr.getFullYear()
  let day = dateStr.getDate();

  let hour = dateStr.getHours();
  let minute = dateStr.getMinutes();
  // let period = "am";
  // if (hour >= 12) {
  //   period = " pm";
  //   hour = hour - 12;
  // }


  let newDate = ""
  if ((hour === 0) && (minute === 0))

    newDate = monthName + " " + day + ", " + year;
  else {
    if (minute < 10)
      minute = "0" + minute;
    if (hour < 10)
      hour = "0" + hour;

    newDate = hour + ":" + minute + " " + monthName + " " + day + ", " + year;
  }

  return newDate;

}

