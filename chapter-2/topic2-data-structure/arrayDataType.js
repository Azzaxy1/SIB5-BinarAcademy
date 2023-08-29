// Array Literal
let namaKeluarga = ["Azis", "Zisa", "Siza"];

// Array with multiple lines
let namaKeluargaSaya = ["Pak Azis", "Mak Zisa", "Nak Siza", "Ka Sazi"];

// Array with new keyword
let namaKK = new Array("Azis, Zisa, Siza");
console.log(namaKK);
/* output :
index 0, index 1, index 2
[ 'Azis, Zisa, Siza' ]
*/

console.log(namaKeluargaSaya.length); // output : 4 (Jumlah panjang index)

//Nested array
const arrays = [namaKeluarga, namaKeluargaSaya];
console.log(arrays);
/* output : [
  [ 'Azis', 'Zisa', 'Siza' ],
  [ 'Pak Azis', 'Mak Zisa', 'Nak Siza', 'Ka Sazi' ]
    ] */
