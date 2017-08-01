"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Favourite {

  constructor (userid, retailerid)
  {
    this.userid	        = this.setUserid       (userid);
    this.retailerid	    = this.setRetailerid   (retailerid);
  }

  // getters and setters with default values where attribute is not provided.

  getUserid           ()  { return this.userid;                }
  setUserid           (x) { this.userid          = x ? x : 0;  }
  getRetailerid       ()  { return this.retailerid;            }
  setRetailerid       (x) { this.retailerid      = x ? x : 0; }

}





