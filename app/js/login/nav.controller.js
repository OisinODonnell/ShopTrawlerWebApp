/**
 * Created by oisin.odonnell on 16/05/2017.
 */
myApp.service('NavController', function(){
  this.tab = 1;
  let isAdmin = false;
  let isRetailer = !admin;
  let loggedIn = false;
  let factory = {};

  // selectively enables disables elements on the navbar depending on
  // whether the user is logged in or if = Administrator or Customer

  factory.selectTab = (setTab) =>  this.tab = setTab;
  factory.isSelected = (checkTab) => this.tab === checkTab;

  factory.showAdmin    = () => isAdmin = true;
  factory.hideAdmin    = () => isAdmin = false;
  factory.showCust     = () => isAdmin = false;
  factory.hideCust     = () => isAdmin = true;
  factory.showLoggedIn = () => loggedIn = true;
  factory.hideLoggedIn = () => loggedIn = false;

  factory.isAdmin     = ()    => isAdmin;
  factory.isCust      = ()    => !isAdmin;
  factory.isLoggedIn  = ()    => loggedIn;
  factory.setLoggedIn = state => loggedIn = state;
  factory.setAdmin    = state => isAdmin = state;
  factory.setCust     = state => isRetailer  = state;

  return factory;
});
