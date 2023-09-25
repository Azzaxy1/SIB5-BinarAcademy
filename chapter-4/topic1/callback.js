const fs = require("fs");

console.log("Start....");
fs.readFile("./data/Students.json", "utf-8", (error, data) => {
  if (error) {
    throw error;
  }

  console.log(data);

  fs.readFile("./data/try.json", "utf-8", (error, data) => {
    if (error) {
      throw error;
    }

    console.log(data);
    console.log("End....");
  });
});
