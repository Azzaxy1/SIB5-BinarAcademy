const bumi = "bulat";
const aku = "tamvan syekali";
const pi = "3.14";

// Uppercase Constants
const WARNA_MERAH = "#f00";
const WARNA_BIRU = "#00F";
const WARNA_HIJAU = "#0F0";

// Ketika ingin memanggil warna hanya perlu memanggil variablenya saja
let warnaBaju = WARNA_MERAH;
console.log(warnaBaju);

// Scope
const diskon = 500;

if (true) {
  const diskon = 300;
  console.log("diskon :", diskon);
}
console.log("diskon :", diskon);

// Reassign & Redeclared const can not be reassigned and redeclared
const earth = "bulat";
// earth = "datar"; error
// const earth ="datar"; error

// Object dengan variable const masih bisa diubah propertynya
const object = { id: 1, name: "Azis" };
object.location = "Serang";
console.log("object :", object);
// const object ={}; error

/* Array dengan variable const masih bisa diubah propertynya */
const array = [1, 2, 3, 4];
array.push(5);
console.log(array);
