/**
 * Created by oisin.odonnell on 16/05/2017.
 */
myApp.service('NavController', function(){
  this.tab = 1;
  let admin = false;
  let cust = !admin;
  let loggedIn = false;
  let factory = {};

  // selectively enables disables elements bon the navbar depending on
  // whether the user is logged in or if = Administrator or Customer

  factory.selectTab = (setTab) =>  this.tab = setTab;
  factory.isSelected = (checkTab) => this.tab === checkTab;

  factory.showAdmin    = () => admin = true;
  factory.hideAdmin    = () => admin = false;
  factory.showCust     = () => admin = false;
  factory.hideCust     = () => admin = true;
  factory.showLoggedIn = () => loggedIn = true;
  factory.hideLoggedIn = () => loggedIn = false;

  factory.isAdmin     = ()    => admin;
  factory.isCust      = ()    => !admin;
  factory.isLoggedIn  = ()    => loggedIn;
  factory.setLoggedIn = state => loggedIn = state;
  factory.setAdmin    = state => admin = state;
  factory.setCust     = state => cust  = state;

  return factory;
});
