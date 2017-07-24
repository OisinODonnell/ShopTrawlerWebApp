"use strict";
/**
 * Created by oisin on 23/07/2017.
 */
class LoyaltyReward {

  constructor (loyaltyRewardId, endDate, pointsPerVisit, rewardImage, retailerId, rewardTitle, startDate, visitTime)
  {
    this.loyaltyRewardId= this.setLoyaltyRewardId   (loyaltyRewardId);
    this.endDate	      = this.setEndDate           (endDate);
    this.pointsPerVisit	= this.setPointsPerVisit    (pointsPerVisit);
    this.rewardImage	  = this.setRewardImage       (rewardImage);
    this.retailerId	    = this.setRetailerId        (retailerId);
    this.rewardTitle	  = this.setRewardTitle       (rewardTitle);
    this.startDate	    = this.setStartDate         (startDate);
    this.visitTime	    = this.setVisitTime         (visitTime);

    this.retailers	    = this.setRetailers         ([]);

  }

  // getters and setters with default values where attribute is not provided.

  getLoyaltyRewardId  ()  { return this.loyaltyRewardId;            }
  setLoyaltyRewardId  (x) { this.loyaltyRewardId     = x ? x : 0;   }
  getEndDateString    ()  { return new Date(this.endDate);          }
  setEndDate          (x) { this.endDate             = x ? x : "";  }
  getStartDateString  ()  { return new Date(this.startDate);        }
  setStartDate        (x) { this.startDate           = x ? x : "";  }
  getPointsPerVisit   ()  { return this.pointsPerVisit;             }
  setPointsPerVisit   (x) { this.pointsPerVisit      = x ? x : 0;   }
  getRewardImage      ()  { return this.rewardImage;                }
  setRewardImage      (x) { this.rewardImage         = x ? x : "";  }
  getRetailerId       ()  { return this.retailerId;                 }
  setRetailerId       (x) { this.retailerId          = x ? x : 0;   }
  getRewardTitle      ()  { return this.rewardTitle;                }
  setRewardTitle      (x) { this.rewardTitle         = x ? x : "";  }
  getVisitTime        ()  { return this.visitTime;                  }
  setVisitTime        (x) { this.visitTime           = x ? x : 0;   }

  getRetailers        ()  { return this.retailers;                  }
  setRetailers        (x) { this.retailers           = x ? x : [];  }

}





