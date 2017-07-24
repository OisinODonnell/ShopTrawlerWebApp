/**
 * Created by liam.odonnell on 18/04/2017.
 */
(function(){
    function load(script) {
        document.write('<'+'script src="'+script+'" ><' + '/script>');

        // type="text/javascript"
    }

    load("../Models/Account.js");
    load("../Models/Manufacturer.js");
    load("../Models/ItemCategory.js");
    load("../Models/StockItem.js");
    load("../Models/Session.js");
    load("../Models/Cart.js");
    load("../Models/CartItem.js");
    load("../Models/Order.js");
    load("../Models/OrderItem.js");
    load("../Models/StockReview.js");
})();