// import { add } from "./forImport.js";
// const { name, multiple } = require("./new.js");
// console.log("this is app .js");
// const result = multiple(1, 3);
// console.log(result, "multiple...", name, "name");

const { multiply, devide } = require("./calculate");

multiply(4, 6);
devide(100, 5);
