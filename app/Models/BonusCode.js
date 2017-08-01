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
    this.users	        = this.setUsers        ([]);
    this.retailers	    = this.setRetailers    ([]);
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

  getUsers        ()   { return this.users;                   }
  setUsers        (x)  { this.users             = x ? x : []; }
  getRetailers    ()   { return this.retailers;               }
  setRetailers    (x)  { this.retailers         = x ? x : []; }
}





