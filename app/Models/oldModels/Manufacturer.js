"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Manufacturer {

    constructor ( manufacturerId, name, contactName, contactPhone, contactEmail ) {
        this.manufacturerId = this.setManufacturerId(manufacturerId);
        this.name           = this.setName          (name);
        this.contactName    = this.setContactName   (contactName);
        this.contactPhone   = this.setContactPhone  (contactPhone);
        this.contactEmail   = this.setContactEmail  (contactEmail);
        this.stockItems     = this.setStockItems    ([]);    }

    // getters and setters

    getManufacturerId()  { return this.manufacturerId;         }
    setManufacturerId(x) { this.manufacturerId   = x ? x : 0;  }
    getName          ()  { return this.name;                   }
    setName          (x) { this.name             = x ? x : ""; }
    getContactName   ()  { return this.contactName;            }
    setContactName   (x) { this.contactName      = x ? x : ""; }
    getContactPhone  ()  { return this.contactPhone;           }
    setContactPhone  (x) { this.contactPhone     = x ? x : ""; }
    getContactEmail  ()  { return this.contactEmail;           }
    setContactEmail  (x) { this.contactEmail     = x ? x : ""; }
    getStockItems    ()  { return this.stockItems;             }
    setStockItems    (x) { this.stockItems       = x ? x : []; }
}


