const students = [
  {
    name: "Putra",
    address: [
      {
        city: "Samarinda",
        province: "East Borneo",
      },
    ],
  },
  {
    name: "Barizi",
    address: [
      {
        city: "Bangkalan",
        province: "East Java",
      },
    ],
  },
  {
    name: "Nelan",
    address: [
      {
        city: "Bogor",
        province: "West Java",
      },
      {
        city: "Depok",
        province: "West Java",
      },
    ],
  },
];
console.log(
  `${students[0].name} is from ${students[0].address[0].city}, ${students[0].address[0].province} `
);
console.log(
  `${students[1].name} is from ${students[1].address[0].city}, ${students[1].address[0].province} `
);
console.log(
  `${students[2].name} is from ${students[2].address[0].city}, ${students[2].address[0].province} & ${students[2].address[1].city}, ${students[2].address[1].province}`
);
