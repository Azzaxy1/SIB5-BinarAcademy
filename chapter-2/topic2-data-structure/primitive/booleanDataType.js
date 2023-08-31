// Output : True or False
let apakahSedangTerjadiPandemi = true;
let apakahHarusKeluarRumah = false;

// Perbandingan Logical Operator
let apakahLebihDariDua = 1 > 2;
console.log(apakahLebihDariDua); // output : false

// ----
let a = 1;
let b = 1;
let apakahASamaDenganB = a == b;
console.log(apakahASamaDenganB); // output : true

// AND Logic is to find the first false value
// if there are all true, it will get the last value
let x = 1;
let y = 1;
const z = x && y && true && "berhasil";
console.log("z :", z); // output : berhasil

// OR Logic is to find the first true value
let d = 2;
const e = false || false || false || "" || true || 8;
console.log("e:", e); // output : true

// Ternary Operator
//Normal if
let trueBool = true;
let falseBool = false;
let newBool;
if (trueBool) {
  newBool = 1;
} else {
  newBool = 0;
}
console.log("newBool:", newBool);

// Ternary
newBool = trueBool ? 1 : 0;
console.log("newBool ternary:", newBool);
