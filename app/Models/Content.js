"use strict";
/**
 * Created by oisin on 23/07/2017.
 */
class Content {

  constructor (contentid, endDate, page1, page2, page3, startDate, retailerid, approved)
  {
    this.contentid	    = this.setContentid    (contentid);
    this.page1	        = this.setPage1        (page1);
    this.page2	        = this.setPage2        (page2);
    this.page3	        = this.setPage3        (page3);
    this.retailerid	    = this.setRetailerid   (retailerid);
    this.startDate	    = this.setStartDate    (startDate);
    this.endDate	      = this.setEndDate      (endDate);
    this.approved 	    = this.setApproved     (approved);
  }

  // getters and setters with default values where attribute is not provided.

  getContentid         ()  { return this.contentid;             }
  setContentid         (x) { this.contentid       = x ? x : 0;  }
  getPage1             ()  { return this.page1;                 }
  setPage1             (x) { this.page1           = x ? x : ""; }
  getPage2             ()  { return this.page2;                 }
  setPage2             (x) { this.page2           = x ? x : ""; }
  getPage3             ()  { return this.page3;                 }
  setPage3             (x) { this.page3           = x ? x : ""; }
  getRetailerid        ()  { return this.retailerid;            }
  setRetailerid        (x) { this.retailerid      = x ? x : 0;  }
  getStartDate         ()  { return this.startDate;             }
  setStartDate         (x) { this.startDate       = x ? x : ""; }
  getEndDate           ()  { return this.endDate;               }
  setEndDate           (x) { this.endDate         = x ? x : ""; }

  isApproved           ()  { return this.approved;                   }
  setApproved          (x) { this.approved           = x ? x : false;}


  getEndDateReadable   ()  { return getReadableDate(this.startDate); }
  getStartDateReadable ()  { return getReadableDate(this.endDate);  }


}


function getReadableDate(date) {


  let dateStr = new Date(date);

  let month = dateStr.getMonth();
  let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  let MonthNamesAbv = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let monthName = monthNames[month];
  let monthAbv = MonthNamesAbv[month];
  let year = dateStr.getFullYear();
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

    // newDate = hour + ":" + minute + " " + monthName + " " + day + ", " + year;
    newDate = year + "-" + monthAbv + "-" + day + " " + hour + ":" + minute;

  }

  return newDate;

}



