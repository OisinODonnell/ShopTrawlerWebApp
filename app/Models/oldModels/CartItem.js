"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/
class  CartItem {

    constructor (cartId, stockItemId, unitPrice, quantity) {
        this.cartId	     = this.setCartId     (cartId)      ;
        this.stockItemId = this.setStockItemId(stockItemId) ;
        this.unitrice	   = this.setUnitPrice  (unitPrice)   ;
        this.quantity	   = this.setQuantity   (quantity)    ;
        this.stockItem	 = this.setStockItem  ({}) ;
        this.cart	       = this.setCart       ({}) ;
    }

    // getters and setters

    getCartId     ()  { return this.cartId;                }
    setCartId     (x) { this.cartId           = x ? x : 0; }
    getStockItemId()  { return this.stockItemId;           }
    setStockItemId(x) { this.stockItemId      = x ? x : 0; }
    getUnitPrice  ()  { return this.unitPrice;             }
    setUnitPrice  (x) { this.unitPrice        = x ? x : 0; }
    getQuantity   ()  { return this.quantity;              }
    setQuantity   (x) { this.quantity         = x ? x : 0; }
    getCart       ()  { return this.cart;                  }
    setCart       (x) { this.cart             = x ? x : {};}
    getStockItem  ()  { return this.stockItem;             }
    setStockItem  (x) { this.stockItem        = x ? x : {};}

    getTotal      ()  { return this.quantity * this.unitPrice };
}

