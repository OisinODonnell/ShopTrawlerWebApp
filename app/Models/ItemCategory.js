"use strict";
/**
* Created by oisin on 14/04/2017.
*/

/* Using ECMA6 classes*/

class ItemCategory {

    constructor ( itemCategoryId, type)   {
        this.itemCategoryId = this.setItemCategoryId(itemCategoryId);
        this.type           = this.setType          (type)           ;
        this.stockItems     = this.setStockItems    ([]);
    }
    // public getters and setters

    getItemCategoryId()  { return this.itemCategoryId;        }
    setItemCategoryId(x) { this.itemCategoryId   = x ? x : 0; }
    getType          ()  { return this.type;                  }
    setType          (x) { this.type             = x ? x : "";}
    getStockItems    ()  { return this.stockItems;            }
    setStockItems    (x) { this.stockItems       = x ? x : [];}
}


