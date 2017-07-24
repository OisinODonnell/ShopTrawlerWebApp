"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class UserPoint {

  constructor (userId, retailerId, points)
  {
    this.userId	        = this.setUserId     (userId);
    this.retailerId	    = this.setRetailerId (retailerId);
    this.points	        = this.setPoints     (points);

    this.retailers	    = this.setRetailers  ([]);
    this.users	        = this.setUsers      ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getUserId     ()  { return this.userId;                 }
  setUserId     (x) { this.userId           = x ? x : 0;  }
  getRetailerId ()  { return this.retailerId;             }
  setRetailerId (x) { this.retailerId       = x ? x : ""; }
  getPoints     ()  { return this.points;                 }
  setPoints     (x) { this.points           = x ? x : ""; }

  getRetailers  ()  { return this.retailers;              }
  setRetailers  (x) { this.retailers        = x ? x : []; }
  getUsers      ()  { return this.users;                  }
  setUsers      (x) { this.users            = x ? x : []; }

}





