"use strict";
/**
 * Created by oisin on 23/07/2017.
 */

class Account {

  constructor (accountId, dateJoined, name, email, phone, accountType, paymentType, loyaltyCard,
               password, addressStreet, addressCity, addressCountry)
  {
        this.accountId	    = this.setAccountId     (accountId);
        this.dateJoined	    = this.setDateJoined    (dateJoined);
        this.name	          = this.setName          (name);
        this.email	        = this.setEmail         (email);
        this.phone	        = this.setPhone         (phone);
        this.accountType	  = this.setAccountType   (accountType);
        this.paymentType	  = this.setPaymentType   (paymentType);
        this.loyaltyCard	  = this.setLoyaltyCard   (loyaltyCard);
        this.password	      = this.setPassword      (password);
        this.addressStreet	= this.setAddressStreet (addressStreet);
        this.addressCity	  = this.setAddressCity   (addressCity);
        this.addressCountry	= this.setAddressCountry(addressCountry);
        this.carts	        = this.setCarts         ([]);
        this.sessions	      = this.setSessions      ([]);
        this.orders	        = this.setOrders        ([]);
        this.stockReviews	  = this.setStockReviews  ([]);
    }

    // getters and setters with default values where attribute is not provided.

    getAccountId     ()  { return this.accountId;             }
    setAccountId     (x) { this.accountId        = x ? x : 0; }
    getDateJoinedString    ()  { return new Date(this.dateJoined);            }
    setDateJoined    (x) { this.dateJoined       = x ? x : "";}
    getName          ()  { return this.name;                  }
    setName          (x) { this.name             = x ? x : "";}
    getEmail         ()  { return this.email;                 }
    setEmail         (x) { this.email            = x ? x : "";}
    getPhone         ()  { return this.phone;                 }
    setPhone         (x) { this.phone            = x ? x : "";}
    getAccountType   ()  { return this.accountType;           }
    setAccountType   (x) { this.accountType      = x ? x : "CUSTOMER";}
    getPaymentType   ()  { return this.paymentType;           }
    setPaymentType   (x) { this.paymentType      = x ? x : "VISA";    }
    getLoyaltyCard   ()  { return this.loyaltyCard;           }
    setLoyaltyCard   (x) { this.loyaltyCard      = x ? x : 0; }
    getPassword      ()  { return this.password;              }
    setPassword      (x) { this.password         = x ? x : "";}
    getAddressStreet ()  { return this.addressStreet;         }
    setAddressStreet (x) { this.addressStreet    = x ? x : "";}
    getAddressCity   ()  { return this.addressCity;           }
    setAddressCity   (x) { this.addressCity      = x ? x : "";}
    getAddressCountry()  { return this.addressCountry;        }
    setAddressCountry(x) { this.addressCountry   = x ? x : "";}
    getCarts         ()  { return this.carts;                 }
    setCarts         (x) { this.carts            = x ? x : [];}
    getSessions      ()  { return this.sessions;              }
    setSessions      (x) { this.sessions         = x ? x : [];}
    getOrders        ()  { return this.orders;                }
    setOrders        (x) { this.orders           = x ? x : [];}
    getStockReviews  ()  { return this.stockReviews;          }
    setStockReviews  (x) { this.stockReviews     = x ? x : [];}
}





