"use strict";
/**
 * Created by oisin on 23/07/2017.
 */
class Content {

  constructor (contentId, endDate, page1, page2, page3, startDate, retailerId)
  {
    this.contentId	    = this.setContentId    (contentId);
    this.endDate	      = this.setEndDate      (endDate);
    this.page1	        = this.setPage1        (page1);
    this.page2	        = this.setPage2        (page2);
    this.page3	        = this.setPage3        (page3);
    this.retailerId	    = this.setRetailerId   (retailerId);
    this.startDate	    = this.setStartDate    (startDate);
    this.retailers	    = this.setRetailers    ([]);
  }

  // getters and setters with default values where attribute is not provided.

  getContentId      ()  { return this.contentId;             }
  setContentId      (x) { this.contentId       = x ? x : 0;  }
  getEndDateString  ()  { return new Date(this.endDate);     }
  setEndDate        (x) { this.endDate         = x ? x : ""; }
  getPage1          ()  { return this.page1;                 }
  setPage1          (x) { this.page1           = x ? x : ""; }
  getPage2          ()  { return this.page2;                 }
  setPage2          (x) { this.page2           = x ? x : ""; }
  getPage3          ()  { return this.page3;                 }
  setPage3          (x) { this.page3           = x ? x : ""; }
  getRetailerId     ()  { return this.retailerId;            }
  setRetailerId     (x) { this.retailerId      = x ? x : 0;  }

  getStartDateString()  { return new Date(this.startDate);   }
  setStartDate      (x) { this.startDate       = x ? x : ""; }
  getRetailers      ()  { return this.retailers;             }
  setRetailers      (x) { this.retailers       = x ? x : []; }

}





