"use strict";
/**
 * Created by oisin on 14/07/2017.
 */

class BonusCode {

  constructor (bonusCodeid, dateTime, retailerid, userid, value)
  {
    this.bonusCodeid	  = this.setBonusCodeid  (bonusCodeid);
    this.dateTime	      = this.setDateTime     (dateTime);
    this.retailerid	    = this.setRetailerid   (retailerid);
    this.userid	        = this.setUserid       (userid);
    this.value	        = this.setValue        (value);
  }

  // getters and setters with default values where attribute is not provided.

  getBonusCodeid   ()  { return this.bonusCodeid;             }
  setBonusCodeid   (x) { this.bonusCodeid       = x ? x : 0;  }
  getDateTimeString()  { return new Date(this.dateTime);      }
  setDateTime      (x) { this.dateTime          = x ? x : ""; }
  getRetailerid    ()  { return this.retailerid;              }
  setRetailerid    (x) { this.retailerid        = x ? x : 0;  }
  getUserid        ()  { return this.userid;                  }
  setUserid        (x) { this.userid            = x ? x : ""; }
  getValue         ()  { return this.value;                   }
  setValue         (x) { this.value             = x ? x : ""; }


  getDateTimeReadable(){ return getReadableDate(this.dateTime); }


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

  let newDate = "";
  if (this.dateTime > 0) {
    if ((hour === 0) && (minute === 0)) {
      newDate = monthName + " " + day + ", " + year;
    } else {
      // package the time with leading zeros where needed.
      if (minute < 10)
        minute = "0" + minute;
      if (hour < 10)
        hour = "0" + hour;
      newDate = hour + ":" + minute + " " + monthName + " " + day + ", " + year;
    }
  }
  return newDate;

}



