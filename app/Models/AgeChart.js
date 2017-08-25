
class AgeChart {

    constructor (retailerid, storeName, counts, xLabels, maleCounts, femaleCounts)
    {
      this.retailerid     = this.setRetailerid        (retailerid);
      this.storeName      = this.setStoreName         (storeName);
      this.counts         = this.setCounts            (counts);
      this.xLabels        = this.setXLabels           (xLabels);
      this.maleCounts     = this.setMaleCounts        (maleCounts);
      this.femaleCounts   = this.setFemaleCounts      (femaleCounts);
    }

  // getters and setters with default values where attribute is not provided.

  getRetailerid     ()  { return this.retailerid;            }
  setRetailerid     (x) { this.retailerid      = x ? x : 0;  }
  getStoreName      ()  { return this.storeName;             }
  setStoreName      (x) { this.storeName       = x ? x : 0;  }
  getCounts         ()  { return this.counts;                }
  setCounts         (x) { this.counts          = x ? x : 0;  }
  getXLabels         ()  { return this.xLabels;              }
  setXLabels         (x) { this.xLabels        = x ? x : ""; }
  getMaleCounts     ()  { return this.maleCounts;            }
  setMaleCounts     (x) { this.maleCounts      = x ? x : 0;  }
  getFemaleCounts   ()  { return this.femaleCounts;          }
  setFemaleCounts   (x) { this.femaleCounts    = x ? x : 0;  }

}
