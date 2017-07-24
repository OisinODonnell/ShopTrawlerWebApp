"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Favourite {

  constructor (userId, retailerId)
  {
    this.userId	        = this.setUserId       (userId);
    this.retailerId	    = this.setRetailerId   (retailerId);

    this.users	        = this.setUsers        ([]);
    this.retailers	    = this.setRetailers    ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getUserId           ()  { return this.userId;                }
  setUserId           (x) { this.userId          = x ? x : 0;  }
  getRetailerId       ()  { return this.retailerId;            }
  setRetailerId       (x) { this.retailerId      = x ? x : 0; }

  getUsers            ()  { return this.users;                 }
  setUsers            (x) { this.users           = x ? x : []; }
  getRetailers        ()  { return this.retailers;             }
  setRetailers        (x) { this.retailers       = x ? x : []; }
}





