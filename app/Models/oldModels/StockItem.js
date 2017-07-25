"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class StockItem  {

    constructor (stockItemId,title,stockLevel,image,price,manufacturerId,itemCategoryId,newStockQty) {

        this.stockItemId	   = this.setStockItemId      (stockItemId);
        this.title			     = this.setTitle            (title);
        this.stockLevel	     = this.setStockLevel       (stockLevel);
        this.image			     = this.setImage            (image);
        this.price			     = this.setPrice            (price);
        this.manufacturerId  = this.setManufacturerId   (manufacturerId);
        this.itemCategoryId  = this.setItemCategoryId   (itemCategoryId);
        this.cartItems 	     = this.setCartItems        ([]);
        this.orderItems 	   = this.setOrderItems       ([]);
        this.manufacturer 	 = this.setManufacturer     ("");
        this.itemCategory 	 = this.setItemCategory     ("");
        this.stockReviews 	 = this.setStockReviews     ([]);
        this.newStockQty     = this.setNewStockQty      (0);

    }

    // getters and setters
    getStockItemId   ()  { return this.stockItemId;             }
    setStockItemId   (x) { this.stockItemId      = (x) ? x : 0; }
    getTitle         ()  { return this.title;                   }
    setTitle         (x) { this.title            = (x) ? x : "";}
    getStockLevel    ()  { return this.stockLevel;              }
    setStockLevel    (x) { this.stockLevel       = (x) ? x : 0; }
    getImage         ()  { return this.image;                   }
    setImage         (x) { this.image            = (x) ? x : "";}
    getPrice         ()  { return this.price;                   }
    setPrice         (x) { this.price            = (x) ? x : 0; }
    getManufacturerId()  { return this.manufacturerId;          }
    setManufacturerId(x) { this.manufacturerId   = (x) ? x : 0; }
    getItemCategoryId()  { return this.itemCategoryId;          }
    setItemCategoryId(x) { this.itemCategoryId   = (x) ? x : 0; }
    getStockReviews  ()  { return this.stockReviews;            }
    setStockReviews  (x) { this.stockReviews     = (x) ? x : [];}
    getCartItems     ()  { return this.cartItems;               }
    setCartItems     (x) { this.cartItems        = (x) ? x : [];}
    getOrderItems    ()  { return this.orderItems;              }
    setOrderItems    (x) { this.orderItems       = (x) ? x : [];}
    getManufacturer  ()  { return this.manufacturer;            }
    setManufacturer  (x) { this.manufacturer     = (x) ? x : "";}
    getItemCategory  ()  { return this.itemCategory;            }
    setItemCategory  (x) { this.itemCategory     = (x) ? x : "";}
    getNewStockQty  ()   { return this.newStockQty;             }
    setNewStockQty  (x)  { this.newStockQty      = (x) ? x : "";}

}
