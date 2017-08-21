

class GenderCount {

    constructor (retailerid, storeName, maleCount, femaleCount) {

      this.retailerid    = this.setRetailerid       (retailerid);
      this.storeName     = this.setStoreName        (storeName);
      this.maleCount     = this.setMaleCount        (maleCount);
      this.femaleCount   = this.setFemaleCount      (femaleCount);
    }

  // getters and setters with default values where attribute is not provided.

  getRetailerid     ()  { return this.retailerid;           }
  setRetailerid     (x) { this.retailerid     = x ? x : 0;  }
  getStoreName      ()  { return this.storeName;            }
  setStoreName      (x) { this.storeName      = x ? x : ""; }
  getMaleCount      ()  { return this.maleCount;            }
  setMaleCount      (x) { this.maleCount      = x ? x : 0;  }
  getFemaleCount    ()  { return this.femaleCount;          }
  setFemaleCount    (x) { this.femaleCount    = x ? x : 0;  }

}
