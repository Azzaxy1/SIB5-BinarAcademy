const numbers = [1, 2, 3, 4, 5];
const mutatedItems = numbers.map((i) => {
  return i * 2;
});
console.log(mutatedItems);

const students = [
  {
    name: "Azis",
    bornIn: 2003,
  },
  {
    name: "Andre",
    bornIn: 2002,
  },
];

// calculate age of every student
const yearNow = new Date().getFullYear();
const studentsWithAge = students.map((student) => {
  const age = yearNow - student.bornIn;
  return {
    ...student,
    age,
  };
});
console.log(studentsWithAge);

// Sama seperti ini
let student = {
  name: "Azis",
  bornIn: 2003,
};
student = {
  ...student,
  age: 21,
};
console.log(student);
