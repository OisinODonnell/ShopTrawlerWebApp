"use strict";
/**
 * Created by oisin on 14/07/2017.
 */

class BonusCode {

  constructor (bonusCodeId, dateTime, retailerId, userId, value)
  {
    this.bonusCodeId	  = this.setBonusCodeId  (bonusCodeId);
    this.dateTime	      = this.setDateTime     (dateTime);
    this.retailerId	    = this.setRetailerId   (retailerId);
    this.userId	        = this.setUserId       (userId);
    this.value	        = this.setValue        (value);
    this.users	        = this.setUsers        ([]);
    this.retailers	    = this.setRetailers    ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getBonusCodeId   ()  { return this.bonusCodeId;             }
  setBonusCodeId   (x) { this.bonusCodeId       = x ? x : 0;  }
  getDateTimeString()  { return new Date(this.dateTime);      }
  setDateTime      (x) { this.dateTime          = x ? x : ""; }
  getRetailerId    ()  { return this.retailerId;              }
  setRetailerId    (x) { this.retailerId        = x ? x : 0;  }
  getUserId        ()  { return this.userId;                  }
  setUserId        (x) { this.userId            = x ? x : ""; }
  getValue         ()  { return this.value;                   }
  setValue         (x) { this.value             = x ? x : ""; }

  getUsers        ()   { return this.users;                   }
  setUsers        (x)  { this.users             = x ? x : []; }
  getRetailers    ()   { return this.retailers;               }
  setRetailers    (x)  { this.retailers         = x ? x : []; }
}





