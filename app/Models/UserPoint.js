"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class UserPoint {

  constructor (userid, retailerid, points)
  {
    this.userid	        = this.setUserid     (userid);
    this.retailerid	    = this.setRetailerid (retailerid);
    this.points	        = this.setPoints     (points);
  }

  // getters and setters with default values where attribute is not provided.

  getUserid     ()  { return this.userid;                 }
  setUserid     (x) { this.userid           = x ? x : 0;  }
  getRetailerid ()  { return this.retailerid;             }
  setRetailerid (x) { this.retailerid       = x ? x : ""; }
  getPoints     ()  { return this.points;                 }
  setPoints     (x) { this.points           = x ? x : ""; }
}





