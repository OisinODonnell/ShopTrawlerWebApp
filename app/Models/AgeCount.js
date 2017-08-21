
class AgeCount {

    constructor (retailerid, storeName, counts, labels, maleCounts, femaleCounts)
    {
      this.retailerid     = this.setRetailerid        (retailerid);
      this.storeName      = this.setStoreName         (storeName);
      this.counts         = this.setCounts            (counts);
      this.labels         = this.setLabels            (labels);
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
  getLabels         ()  { return this.labels;                }
  setLabels         (x) { this.labels          = x ? x : "";  }
  getMaleCounts     ()  { return this.maleCounts;            }
  setMaleCounts     (x) { this.maleCounts      = x ? x : 0;  }
  getFemaleCounts   ()  { return this.femaleCounts;          }
  setFemaleCounts   (x) { this.femaleCounts    = x ? x : 0; }

}
