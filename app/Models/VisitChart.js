"use strict";
/**
 * Created by oisin on 23/08/2017.
 */

class VisitChart {

  constructor (counts, xLabels, storeName, retailerid)
  {
    this.counts      = this.setCounts      (counts);
    this.xLabels	   = this.setXLabels     (xLabels);
    this.storeName   = this.setStoreName   (storeName);
    this.retailerid  = this.setRetailerid  (retailerid);
  }

  // getters and setters with default values where attribute is not provided.

  getCounts      ()  { return this.counts;                   }
  setCounts      (x) {        this.counts      = x ? x : 0;  }
  getXLabels     ()  { return this.xLabels;                  }
  setXLabels     (x) {        this.xLabels     = x ? x : ""; }
  getStoreName   ()  { return this.storeName;                }
  setStoreName   (x) {        this.storeName   = x ? x : ""; }
  getRetailerid  ()  { return this.retailerid                }
  setRetailerid  (x) {        this.retailerid  = x ? x :  0; }

}
