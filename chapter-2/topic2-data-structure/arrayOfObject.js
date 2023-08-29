// Array of Object
var kartuKeluarga = {
  Azis: {
    name: "Azis",
    alamat: "Serang",
    gender: "Male",
  },
  Zisa: {
    name: "Zisa",
    alamat: "Pandeglang",
    gender: "Female",
  },
};

// Menggunakan notasi DOT
console.log("notasi DOT : " + kartuKeluarga.Azis.gender); // output : Male

// Menggunakan notasi Kurung Siku
console.log("notasi [] : " + kartuKeluarga.Zisa["alamat"]); // output : Pandeglang
