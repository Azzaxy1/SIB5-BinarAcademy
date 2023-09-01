const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const getInfoJualan = (dataPenjualan) => {
  // Validasi apakah parameter adalah sebuah array
  if (!Array.isArray(dataPenjualan)) {
    return "ERROR: Parameter harus berupa array";
  }

  let totalModal = 0;
  let totalKeuntungan = 0;
  let produkBukuTerlaris = "";
  let penulisTerlaris = "";
  let maxTerjual = 0;

  for (const penjualan of dataPenjualan) {
    // Validasi apakah data penjualan memiliki properti yang diperlukan
    if (
      !penjualan.hargaBeli ||
      !penjualan.hargaJual ||
      !penjualan.totalTerjual
    ) {
      return "ERROR: Data penjualan tidak lengkap";
    }

    // Menghitung total modal dan total keuntungan
    totalModal += penjualan.hargaBeli * penjualan.totalTerjual;
    totalKeuntungan +=
      (penjualan.hargaJual - penjualan.hargaBeli) * penjualan.totalTerjual;

    // Menentukan produk buku terlaris
    if (penjualan.totalTerjual > maxTerjual) {
      maxTerjual = penjualan.totalTerjual;
      produkBukuTerlaris = penjualan.namaProduk;
    }

    // Menentukan penulis buku terlaris
    if (
      penjualan.totalTerjual === maxTerjual &&
      penjualan.penulis !== penulisTerlaris
    ) {
      penulisTerlaris += `, ${penjualan.penulis}`;
    } else if (penjualan.totalTerjual > maxTerjual) {
      maxTerjual = penjualan.totalTerjual;
      penulisTerlaris = penjualan.penulis;
    }
  }

  // Menghitung persentase keuntungan
  const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  return {
    totalModal,
    totalKeuntungan,
    produkBukuTerlaris,
    penulisTerlaris,
    persentaseKeuntungan,
  };
};

console.log(getInfoJualan(dataPenjualanNovel));
