"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class User {

  constructor (userid, firstname, surname, emailAddress, phone, gender, password, type, yob)
  {
    this.userid	        = this.setUserid        (userid);
    this.firstname	    = this.setFirstname     (firstname);
    this.surname	      = this.setSurname       (surname);
    this.emailAddress	  = this.setEmailAddress  (emailAddress);
    this.phone	        = this.setPhone         (phone);
    this.gender	        = this.setGender        (gender);
    this.password	      = this.setPassword      (password);
    this.type	          = this.setType          (type);
    this.yob	          = this.setYob           (yob);

    this.bonusCodess	  = this.setBonusCodess   ([]);
    this.favourites	    = this.setFavourites    ([]);
    this.ratings	      = this.setRatings       ([]);
    this.retailers	    = this.setStockReviews  ([]);
    this.shoppingCentres= this.setShoppingCentres([]);
    this.userPoints	    = this.setUserPoints    ([]);
    this.visits	        = this.setVisits        ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getUserid       ()  { return this.userid;                 }
  setUserid       (x) { this.userid           = x ? x : 0;  }
  getFirstname    ()  { return this.firstname;              }
  setFirstname    (x) { this.firstname        = x ? x : ""; }
  getSurname      ()  { return this.surname;                }
  setSurname      (x) { this.surname          = x ? x : ""; }
  getEmailAddress ()  { return this.emailAddress;           }
  setEmailAddress (x) { this.emailAddress     = x ? x : ""; }
  getPhone        ()  { return this.phone;                  }
  setPhone        (x) { this.phone            = x ? x : ""; }
  getGender       ()  { return this.gender;                 }
  setGender       (x) { this.gender           = x ? x : ""; }
  getType         ()  { return this.type;                   }
  setType         (x) { this.type             = x ? x : 0;  }
  getPassword     ()  { return this.password;               }
  setPassword     (x) { this.password         = x ? x : ""; }
  getYob          ()  { return this.yob;                    }
  setYob          (x) { this.yob              = x ? x : ""; }

  getBonusCodess      ()  { return this.bonusCodess;             }
  setBonusCodess      (x) { this.bonusCodess       = x ? x : []; }
  getFavourites       ()  { return this.favourites;              }
  setFavourites       (x) { this.favourites        = x ? x : []; }
  getRatings          ()  { return this.ratings;                 }
  setRatings          (x) { this.ratings           = x ? x : []; }
  getStockReviews     ()  { return this.retailers;               }
  setStockReviews     (x) { this.retailers         = x ? x : []; }
  getShoppingCentres  ()  { return this.shoppingCentres;         }
  setShoppingCentres  (x) { this.shoppingCentres   = x ? x : []; }
  getUserPoints       ()  { return this.userPoints;              }
  setUserPoints       (x) { this.userPoints        = x ? x : []; }
  getVisits           ()  { return this.visits;                  }
  setVisits           (x) { this.visits            = x ? x : []; }

}





