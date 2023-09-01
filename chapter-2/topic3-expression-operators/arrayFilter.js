const numbers = [1, 2, 3, 4, 5];
const filteredItems = numbers.filter((item) => {
  return item >= 3;
});
console.log(filteredItems);

const students = [
  {
    name: "Azis",
    bornIn: 2003,
  },
  {
    name: "Andre",
    bornIn: 2002,
  },
  {
    name: "Ilham",
    bornIn: 2003,
  },
  {
    name: "Ravel",
    bornIn: 2004,
  },
];
const filteredStudent = students.filter((student) => {
  if (student.bornIn > 2003) {
    return true;
  }
  return false;
});
console.log(filteredStudent);
