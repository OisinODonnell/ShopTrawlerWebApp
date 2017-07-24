"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Order {

    constructor (orderId, accountId, date, total) {
        this.orderId	   = this.setOrderId    (orderId);
        this.accountId	 = this.setAccountId  (accountId);
        this.date	       = this.setDate       (date);
        this.total	     = this.setTotal      (total);
        this.orderItems  = this.setOrderItems ([]);
        this.account	   = this.setAccount    ({}) ;
    }

    // getters and setters

    getOrderId   ()  { return this.orderId;            }
    setOrderId   (x) { this.orderId      = x ? x : 0;  }
    getAccountId ()  { return this.accountId;          }
    setAccountId (x) { this.accountId    = x ? x : 0;  }
    getDateString()  { return new Date(this.date);     }
    getDate      ()  { return this.date;               }
    setDate      (x) { this.date         = x ? x : ""; }
    getTotal     ()  { return this.total;              }
    setTotal     (x) { this.total        = x ? x : 0;  }
    getOrderItems()  { return this.orderItems;         }
    setOrderItems(x) { this.orderItems   = x ? x : []; }
    getAccount   ()  { return this.account;            }
    setAccount   (x) { this.account      = x ? x : {}; }

    getOrderItemCount () { return this.orderItems.length }
}



