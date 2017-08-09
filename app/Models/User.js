"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class User {

  constructor (userid, firstname, surname, emailAddress, phone, gender, password, type, yob, active)
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
    this.active	        = this.setActive        (active);

    this.bonusCodesByUserid	    = this.setBonusCodesByUserid    ([]);
    this.favouritesByUserid	    = this.setFavouritesByUserid    ([]);
    this.ratingsByUserid	      = this.setRatingsByUserid       ([]);
    this.userPointsByUserid	    = this.setUserPointsByUserid    ([]);
    this.visitsByUserid	        = this.setVisitsByUserid        ([]);

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
  getActive       ()  { return this.active;                 }
  setActive       (x) { this.active           = x ? x : ""; }

  getBonusCodesByUserid  ()  { return this.bonusCodesByUserid;              }
  setBonusCodesByUserid  (x) { this.bonusCodesByUserid        = x ? x : []; }
  getFavouritesByUserid  ()  { return this.favouritesByUserid;              }
  setFavouritesByUserid  (x) { this.favouritesByUserid        = x ? x : []; }
  getRatingsByUserid     ()  { return this.ratingsByUserid;                 }
  setRatingsByUserid     (x) { this.ratingsByUserid           = x ? x : []; }
  getUserPointsByUserid  ()  { return this.userPointsByUserid;              }
  setUserPointsByUserid  (x) { this.userPointsByUserid        = x ? x : []; }
  getVisitsByUserid      ()  { return this.visitsByUserid;                  }
  setVisitsByUserid      (x) { this.visitsByUserid            = x ? x : []; }

  getFullname            ()  { return this.firstname + " " + this.surname;  }

}





