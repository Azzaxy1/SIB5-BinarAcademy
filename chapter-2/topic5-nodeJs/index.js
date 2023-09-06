import chalk from "chalk"; //* Third party module / library / package
import os from "os"; //* Core module
import fs from "fs";

//* Import local module
// import * as calculateTriangle from "./module/calculateTriangleArea.js";

// import calculateTriangle from "./module/calculateTriangleArea.js";

// import { calculateTriangleArea, azis } from "./module/calculateTriangleArea.js";

//* Paling sering dipakai
import calculateTriangle, {
  calculateTriangleAround,
  azis,
} from "./module/calculateTriangle.js";

//* Name (Third party module)
console.log(chalk.red("Im Azis"));
console.log(chalk.green("Im Azis"));
console.log(chalk.blue("Im Azis"));

//* Memory (Core module)
const totalMemory = os.freemem() / 1024 / 1024;
const freeMemory = os.totalmem() / 1024 / 1024;
console.log("Free Memory", freeMemory);
console.log("Total Memory", totalMemory);

//* Calculate Triangle (Local module)
const exampleFile = fs.readFileSync("./example.txt");
console.log("exampleFile: ", exampleFile.toString());

const triangleArea = calculateTriangle(15, 20);
console.log("triangle area: ", triangleArea);

const triangleAround = calculateTriangleAround(10);
console.log("triangle around: ", triangleAround);

console.log(azis);
