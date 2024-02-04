// setTimeout(function () {
//   console.log("Third");
// },3000);

// function sync() {
//   console.log("First");
// }
// sync();
// console.log("Second");

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("I am inside Promise");
//   }, 5000);
// resolve(1998);
//   reject(new Error("Error Occurred"));
// });

// promise.then((value) => {
//   console.log(value);
// });
// promise.catch((error) => {
//   console.log(error);
// });
// console.log("First");

// let wada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setTimeOut1 Started");
//   }, 2000);
//   resolve(true);
// });

// let output = wada1.then(() => {
//   let wada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("setTimeOut2 Started");
//     }, 3000);
//     resolve("Wada 2 resolved");
//   });
//   return wada2;
// });

// output.then((value) => {
//   console.log(value);
// });

// async function abcd(){
//   return 7;
// }
// console.log(abcd());

async function utility() {
  let mh = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World");
    }, 10000);
  });

  let ah = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello World 2");
    }, 20000);
  });

  let am = await mh;
  let hm = await ah;
  return [am, hm];
}
