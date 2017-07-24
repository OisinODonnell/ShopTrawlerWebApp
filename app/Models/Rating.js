"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Rating {

  constructor (userId, date, retailerId, rating, review)
  {
    this.userId	      = this.setUserId      (userId);
    this.date	        = this.setDate        (date);
    this.retailerId	  = this.setRetailerId  (retailerId);
    this.rating	      = this.setRating      (rating);
    this.review	      = this.setReview      (review);
    this.users	      = this.setUsers       ([]);
    this.retailers	  = this.setRetailers   ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getUserId         ()  { return this.userId;                      }
  setUserId         (x) { this.userId              = x ? x : 0;    }
  getDateString     ()  { return new Date(this.date);              }
  setDate           (x) { this.date                = x ? x : "";   }
  getRetailerId     ()  { return this.retailerId;                  }
  setRetailerId     (x) { this.retailerId          = x ? x : "";   }
  getRating         ()  { return this.rating;                      }
  setRating         (x) { this.rating              = x ? x : "";   }
  getReview         ()  { return this.review;                      }
  setReview         (x) { this.review              = x ? x : "";   }

  getRetailers      ()  { return this.retailers;                   }
  setRetailers      (x) { this.retailers           = x ? x : [];   }
  getUsers          ()  { return this.users;                       }
  setUsers          (x) { this.users               = x ? x : [];   }

}





