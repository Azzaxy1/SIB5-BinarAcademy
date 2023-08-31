// Object Literal
let azis = {
  name: "Azis",
  address: {
    city: "Serang",
    province: "Banten",
  },
};
console.log(azis);

// Add new object data
azis.job = "student";
console.log(azis);

const azisDetails = `${azis.name} is from ${azis.address.city}, ${azis.address.province}.`;
console.log(azisDetails);

// retrieve data from objects
console.log(azis.name); // output : Azis
console.log(azis["address"]["province"]); // output : Banten
console.log(azis.address["province"]); // Output : Banten

// // Array di dalam Object
// azis.job.forEach(function (item) {
//   console.log(`${item} adalah ${azis.name}`);
// });
