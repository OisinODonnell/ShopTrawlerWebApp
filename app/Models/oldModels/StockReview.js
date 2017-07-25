"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class StockReview {

    constructor (stockItemId, accountId, rating, comment, date) {

        this.stockItemId = this.setStockItemId (stockItemId);
        this.accountId   = this.setAccountId   (accountId);
        this.rating      = this.setRating      (rating);
        this.comment     = this.setComment     (comment);
        this.date        = this.setDate        (date);
        this.stockItem   = this.setStockItem   ({});
        this.account     = this.setAccount     ({});
    }

    // getters and setters

    getStockItemId()  { return this.stockItemId;           }
    setStockItemId(x) { this.stockItemId      = x ? x : 0; }
    getAccountId  ()  { return this.accountId;             }
    setAccountId  (x) { this.accountId        = x ? x : 0; }
    getRating     ()  { return this.rating;                }
    setRating     (x) { this.rating           = x ? x : 5; }
    getComment    ()  { return this.comment;               }
    setComment    (x) { this.comment          = x ? x : "";}
    getDateString ()  { return new Date(this.date);        }
    getDate       ()  { return this.date;                  }
    setDate       (x) { this.date             = x ? x : "";}
    getStockItem  ()  { return this.stockItem;             }
    setStockItem  (x) { this.stockItem        = x ? x : {};}
    getAccount    ()  { return this.account;               }
    setAccount    (x) { this.account          = x ? x : {};}
}


