"use strict";
/**
 * Created by oisin on 23/07/2017.
 */
class LoyaltyReward {

  constructor (loyaltyRewardid, endDate, pointsPerVisit, rewardImage, retailerid, rewardTitle, startDate, visitTime, approved)
  {
    this.loyaltyRewardid= this.setLoyaltyRewardid   (loyaltyRewardid * 1);
    this.endDate	      = this.setEndDate           (endDate);
    this.pointsPerVisit	= this.setPointsPerVisit    (pointsPerVisit);
    this.rewardImage	  = this.setRewardImage       (rewardImage);
    this.retailerid	    = this.setRetailerid        (retailerid * 1);
    this.rewardTitle	  = this.setRewardTitle       (rewardTitle);
    this.startDate	    = this.setStartDate         (startDate);
    this.visitTime	    = this.setVisitTime         (visitTime);
    this.approved 	    = this.setApproved         (approved);
  }

  // getters and setters with default values where attribute is not provided.

  getLoyaltyRewardid  ()  { return this.loyaltyRewardid;            }
  setLoyaltyRewardid  (x) { this.loyaltyRewardid     = x ? x : 0;   }
  getEndDateString    ()  { return new Date(this.endDate);          }
  getEndDate          ()  { return this.endDate;                    }
  getStartDate        ()  { return this.startDate;                  }
  setEndDate          (x) { this.endDate             = x ? x : "";  }
  getStartDateString  ()  { return new Date(this.startDate);        }
  setStartDate        (x) { this.startDate           = x ? x : "";  }
  getPointsPerVisit   ()  { return this.pointsPerVisit;             }
  setPointsPerVisit   (x) { this.pointsPerVisit      = x ? x : 0;   }
  getRewardImage      ()  { return this.rewardImage;                }
  setRewardImage      (x) { this.rewardImage         = x ? x : "";  }
  getRetailerid       ()  { return this.retailerid;                 }
  setRetailerid       (x) { this.retailerid          = x ? x : 0;   }
  getRewardTitle      ()  { return this.rewardTitle;                }
  setRewardTitle      (x) { this.rewardTitle         = x ? x : "";  }
  getVisitTime        ()  { return this.visitTime;                  }
  setVisitTime        (x) { this.visitTime           = x ? x : 0;   }
  isApproved          ()  { return this.approved;                   }
  setApproved         (x) { this.approved           = x ? x : false;}

  getEndDateReadable    () { return getReadableDate(this.endDate)   }
  getStartDateReadable  () { return getReadableDate(this.startDate) }

}

function getReadableDate(date) {


  let dateStr = new Date(date);

  // let month = dateStr.getMonth();
  // let monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  //   'July', 'August', 'September', 'October', 'November', 'December'];
  // let MonthNamesAbv = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // let monthName = monthNames[month];
  // let monthAbv = MonthNamesAbv[month];
  // let year = dateStr.getFullYear();
  // let day = dateStr.getDate();
  //
  // let hour = dateStr.getHours();
  // let minute = dateStr.getMinutes();
  // // let period = "am";
  // // if (hour >= 12) {
  // //   period = " pm";
  // //   hour = hour - 12;
  // // }
  //
  // let newDate = ""
  // if ((hour === 0) && (minute === 0))
  //
  //   newDate = monthName + " " + day + ", " + year;
  // else {
  //   if (minute < 10)
  //     minute = "0" + minute;
  //   if (hour < 10)
  //     hour = "0" + hour;
  //
  //   // newDate = hour + ":" + minute + " " + monthName + " " + day + ", " + year;
  //   newDate = year + "-" + monthAbv + "-" + day + " " + hour + ":" + minute;
  //
  // }

  return dateStr;

}




