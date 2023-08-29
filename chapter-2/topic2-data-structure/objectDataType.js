// Object Literal
let ktp = {
  nama: "Azis",
  alamat: {
    kota: "Serang",
    desa: "Pamarayan",
  },
  pekerjaan: ["Coder", "FE Developer"],
};

console.log(ktp.nama); // output : Azis
console.log(ktp["alamat"]["desa"]); // output : Pamarayan
console.log(ktp.alamat["desa"]); // Output : Pamarayan

// Array di dalam Object
ktp.pekerjaan.forEach(function (item) {
  console.log(`${item} adalah pekerjaan ${ktp.nama}`);
});
/* output : Coder adalah pekerjaan Azis
            FE Developer adalah pekerjaan Azis */
