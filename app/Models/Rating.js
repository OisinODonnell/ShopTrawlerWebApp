"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Rating {

  constructor (userid, date, retailerid, rating, review)
  {
    this.userid	      = this.setUserid      (userid);
    this.date	        = this.setDate        (date);
    this.retailerid	  = this.setRetailerid  (retailerid);
    this.rating	      = this.setRating      (rating);
    this.review	      = this.setReview      (review);
    this.users	      = this.setUsers       ([]);
    this.retailers	  = this.setRetailers   ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getUserid         ()  { return this.userid;                      }
  setUserid         (x) { this.userid              = x ? x : 0;    }
  getDateString     ()  { return new Date(this.date);              }
  setDate           (x) { this.date                = x ? x : "";   }
  getRetailerid     ()  { return this.retailerid;                  }
  setRetailerid     (x) { this.retailerid          = x ? x : "";   }
  getRating         ()  { return this.rating;                      }
  setRating         (x) { this.rating              = x ? x : "";   }
  getReview         ()  { return this.review;                      }
  setReview         (x) { this.review              = x ? x : "";   }

  getRetailers      ()  { return this.retailers;                   }
  setRetailers      (x) { this.retailers           = x ? x : [];   }
  getUsers          ()  { return this.users;                       }
  setUsers          (x) { this.users               = x ? x : [];   }

  getDateReadable    () { return getReadableDate(this.date)          }

}

function getReadableDate(date) {


  let dateStr = new Date(date);

  let month = dateStr.getMonth();
  let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];
  let monthName = monthNames[month];
  let year = dateStr.getFullYear()
  let day = dateStr.getDate();

  let hour = dateStr.getHours();
  let minute = dateStr.getMinutes();
  // let period = "am";
  // if (hour >= 12) {
  //   period = " pm";
  //   hour = hour - 12;
  // }

  let newDate = ""
  if ((hour === 0) && (minute === 0))

    newDate = monthName + " " + day + ", " + year;
  else {
    if (minute < 10)
      minute = "0" + minute;
    if (hour < 10)
      hour = "0" + hour;

    newDate = hour + ":" + minute + " " + monthName + " " + day + ", " + year;
  }




  return newDate;
}



