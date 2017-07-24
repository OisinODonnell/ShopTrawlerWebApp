"use strict";
/**
 * Created by oisinon 05/04/2017.
 */




function StockReview(pStockItemId, pAccountId, pRating, pComment, pDate)   {

    var stockItemId;
    var accountId	;
    var rating		;
    var comment		;
    var date		;
    var stockItem 	;
    var account 	;

    // constructors
    if (this.arguments.length === 0) {
        this.setStockItemId( 0);
        this.setAccountId( 0);
        this.setRating	( 5);
        this.setComment	( "");
        this.setDate	( "");
        this.stockItem 	( {});
        this.account 	( {});

    } else {
        this.setStockItemId	(pStockItemId);
        this.setAccountId	(pAccountId);
        this.setRating		(pRating);
        this.setComment		(pComment);
        this.setDate		(pDate);
        this.setStockItem 	({});
        this.setAccount 	({});
    }

    // getters and setters
    this.getStockItemId = function() { return stockItemId; };
    this.setStockItemId = function(x) { stockItemId = x; };

    this.getAccountId = function() { return accountId; };
    this.setAccountId = function(x) { accountId = x; };

    this.getRating = function() { return rating; };
    this.setRating = function(x) { rating = x; };

    this.getComment = function() { return comment; };
    this.setComment = function(x) { comment = x; };

    this.getDate = function() { return date; };
    this.setDate = function(x) { date = x; };

    this.getStockItem = function() { return stockItem; };
    this.setStockItem = function(x) { stockItem = x; };

    this.getAccount = function() { return account; };
    this.setAccount = function(x) { account = x; };

}



