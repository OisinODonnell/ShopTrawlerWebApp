
class RatingCount {

    constructor(retailerid, storeName, rating) {
      this.retailerid    = this.setRetailerid       (retailerid);
      this.storeName     = this.setStoreName        (storeName);
      this.rating        = this.setRating           (rating);
    }

  // getters and setters with default values where attribute is not provided.

  getRetailerid     ()  { return this.retailerid;           }
  setRetailerid     (x) { this.retailerid     = x ? x : 0;  }
  getStoreName      ()  { return this.storeName;            }
  setStoreName      (x) { this.storeName      = x ? x : ""; }
  getRating         ()  { return this.rating;               }
  setRating         (x) { this.rating         = x ? x : 0;  }

}
