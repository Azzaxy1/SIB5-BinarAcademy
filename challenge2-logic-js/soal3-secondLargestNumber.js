const getAngkaTerbesarKedua = (dataNumbers) => {
  // Validasi apakah parameter adalah sebuah array
  if (!Array.isArray(dataNumbers)) {
    return "ERROR : Parameter harus berupa array.";
  }

  if (dataNumbers.length < 2) {
    return "ERROR : Array harus memiliki setidaknya 2 angka.";
  }

  // Menghapus duplikat dan mengurutkan dalam urutan menurun
  const uniqueSortedNumbers = Array.from(new Set(dataNumbers)).sort(
    (a, b) => b - a
  );

  // Mengembalikan angka terbesar kedua
  return uniqueSortedNumbers[1];
};

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka)); // Output: 8

console.log(getAngkaTerbesarKedua(0)); // Output: "ERROR : Parameter harus berupa array."

console.log(getAngkaTerbesarKedua()); // Output: "ERROR : Parameter harus berupa array."
