"use strict";
/**
 * Created by oisin on 14/04/2017.
 */

/* Using ECMA6 classes*/

class Session  {

    constructor ( sessionId, accountId, dateStart, dateEnd) {
        this.sessionId	= this.setSessionId   (sessionId);
        this.accountId	= this.setAccountId   (accountId);
        this.dateStart	= this.setDateStart   (dateStart);
        this.dateEnd	  = this.setDateEnd     (dateEnd);
        this.account 	  = this.setAccount     ({});
    }

    // getters and setters

    getSessionId()  { return this.sessionId;         }
    setSessionId(x) { this.sessionId    = x ? x : 0; }
    getAccountId()  { return this.accountId;         }
    setAccountId(x) { this.accountId    = x ? x : 0; }
    getDateStartString()  { return new Date(this.dateStart); }
    getDateStart()  { return this.dateStart;         }
    setDateStart(x) { this.dateStart    = x ? x : "";}
  getDateEndString  ()  { return new Date(this.dateEnd);           }
  getDateEnd  ()  { return this.dateEnd;           }
    setDateEnd  (x) { this.dateEnd      = x ? x : "";}
    getAccount  ()  { return this.account;           }
    setAccount  (x) { this.account      = x ? x : {};}
}

