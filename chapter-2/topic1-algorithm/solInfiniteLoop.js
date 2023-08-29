const lantaiBersih = true;
let lantaiGedung = 5;

while (lantaiBersih) {
  console.log(`Saya sudah Mengepel Lantai ${lantaiGedung}.`);
  lantaiGedung--;
  if (lantaiGedung === 0) {
    console.log(`Lantai Bersih`);
    break;
  }
}
