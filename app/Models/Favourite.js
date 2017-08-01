"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Favourite {

  constructor (userid, retailerid)
  {
    this.userid	        = this.setUserid       (userid);
    this.retailerid	    = this.setRetailerid   (retailerid);

    this.users	        = this.setUsers        ([]);
    this.retailers	    = this.setRetailers    ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getUserid           ()  { return this.userid;                }
  setUserid           (x) { this.userid          = x ? x : 0;  }
  getRetailerid       ()  { return this.retailerid;            }
  setRetailerid       (x) { this.retailerid      = x ? x : 0; }

  getUsers            ()  { return this.users;                 }
  setUsers            (x) { this.users           = x ? x : []; }
  getRetailers        ()  { return this.retailers;             }
  setRetailers        (x) { this.retailers       = x ? x : []; }
}





