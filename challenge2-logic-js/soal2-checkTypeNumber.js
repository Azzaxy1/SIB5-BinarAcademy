const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber !== "number") {
    return "ERROR"; // Mengembalikan "ERROR" jika tipe data bukan number
  }

  if (givenNumber % 2 === 0) {
    return "GENAP"; // Mengembalikan "GENAP" jika angka genap
  } else {
    return "GANJIL"; // Mengembalikan "GANJIL" jika angka ganjil
  }
};

console.log(checkTypeNumber(10)); // Output: "GENAP"
console.log(checkTypeNumber(3)); // Output: "GANJIL"
console.log(checkTypeNumber("3")); // Output: "ERROR"
console.log(checkTypeNumber({})); // Output: "ERROR"
console.log(checkTypeNumber([])); // Output: "ERROR"
console.log(checkTypeNumber()); // Output: "ERROR"
