"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Cart  {

    constructor (cartId, accountId, date, total) {
        this.cartId	    = this.setCartId    (cartId);
        this.accountId	= this.setAccountId (accountId);
        this.date	      = this.setDate      (date);
        this.total	    = this.setTotal     (total);
        this.cartItems	= this.setCartItems ([]);
        this.account	  = this.setAccount   ({});
    }

    // getters and setters

    getCartId   ()  { return this.cartId;            }
    setCartId   (x) { this.cartId       = x ? x : 0; }
    getAccountId()  { return this.accountId;         }
    setAccountId(x) { this.accountId    = x ? x : 0; }

    getDateString (){ return new Date(this.date);    }
    getDate     ()  { return this.date;              }
    setDate     (x) { this.date         = x ? x : "";}
    getTotal    ()  { return this.total;             }
    setTotal    (x) { this.total        = x ? x : 0; }
    getCartItems()  { return this.cartItems;         }
    setCartItems(x) { this.cartItems    = x ? x : [];}
    getAccount  ()  { return this.account;           }
    setAccount  (x) { this.account      = x ? x : {};}

    getCartItemCount () { return this.cartItems.length }
}

