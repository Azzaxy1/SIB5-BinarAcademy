let nama = "azis",
  umur = "20",
  jenisKelamin = "Laki-laki";

console.log(nama);
console.log(umur);
console.log(jenisKelamin);

// Scope
let diskon = 500;
if (true) {
  let diskon = 300;
  console.log("diskon: ", diskon);
}
console.log("diskon: ", diskon);

// Reassign & Redeclared
let name;
console.log("name: ", name);
name = "Azis";
console.log("name: ", name);
