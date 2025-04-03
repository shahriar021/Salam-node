setImmediate(() => console.log("set immediate"));

setTimeout(() => {
  setTimeout(() => console.log("innner timeout"));

  process.nextTick(() => console.log("next tick"));
  console.log("set time out");
});

Promise.resolve("promise").then(() => console.log("promise.."));
Promise.resolve("promise").then(() => console.log("promise.."));
Promise.resolve("promise").then(() => console.log("promise.."));

process.nextTick(() => console.log("next tick"));
process.nextTick(() => console.log("next tick"));
process.nextTick(() => console.log("next tick"));

console.log("syncronous code printing.");
