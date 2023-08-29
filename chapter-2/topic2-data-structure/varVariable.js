var price;
price = 1000;
console.log("price :", price);

var price = 2000;
console.log("price :", price);

// Scope
var diskon = 500; //Gobal variable

if (true) {
  var diskon = 300; // Global scope
}
console.log("diskon :", diskon);

var diskon = 500; // Global scope
function localDiskon() {
  var diskon = 200; //Local variable
  console.log("diskon :", diskon);
}
localDiskon();
console.log("diskon :", diskon);

// Reassign & Redeclared
var name;
console.log(name);

name = "Bot";
console.log(name);

var name = "Bot Azis";
console.log(name);
