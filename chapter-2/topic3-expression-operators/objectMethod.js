// calculate age of every student
const yearNow = new Date().getFullYear();
const students = [
  {
    name: "Azis",
    bornIn: 2003,
    getAge: function () {
      return yearNow - this.bornIn;
    },
  },
  {
    name: "Andre",
    bornIn: 2002,
    getAge: function () {
      return yearNow - this.bornIn; // object
    },
  },
];
console.log(students[1].getAge());

const studentsWithAge = students.map((student) => {
  const age = student.getAge();
  return Object.assign(student, { age });
});
console.log(studentsWithAge);
