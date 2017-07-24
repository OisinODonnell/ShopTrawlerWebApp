"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class OrderItem   {

    constructor ( orderId, stockItemId, unitPrice, quantity) {
        this.orderId		  = this.setOrderId    (orderId);
        this.stockItemId	= this.setStockItemId(stockItemId);
        this.unitPrice	  = this.setUnitPrice  (unitPrice);
        this.quantity	    = this.setQuantity   (quantity);
        this.stockItem 	  = this.setStockItem  ({});
        this.order 		    = this.setOrder      ({});
    }

    // getters and setter

    getOrderId    ()  { return this.orderId;           }
    setOrderId    (x) { this.orderId      = x ? x : 0; }
    getStockItemId()  { return this.stockItemId;       }
    setStockItemId(x) { this.stockItemId  = x ? x : 0; }
    getUnitPrice  ()  { return this.unitPrice;         }
    setUnitPrice  (x) { this.unitPrice    = x ? x : 0; }
    getQuantity   ()  { return this.quantity;          }
    setQuantity   (x) { this.quantity     = x ? x : 0; }
    getStockItem  ()  { return this.stockItem;         }
    setStockItem  (x) { this.stockItem    = x ? x : {}; }
    getOrder      ()  { return this.order;             }
    setOrder      (x) { this.order        = x ? x : {}; }
    getTotal      ()  { return this.quantity  * this.unitPrice };
}
