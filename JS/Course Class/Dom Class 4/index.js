// setTimeout(function () {
//   console.log("Third");
// },3000);

// function sync() {
//   console.log("First");
// }
// sync();
// console.log("Second");

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("I am inside Promise");
  }, 5000);
  // resolve(1998);
  reject(new Error("Error Occurred"));
});

promise.then((value) => {
  console.log(value);
});
promise.catch((error) => {
  console.log(error);
});
console.log("First");
