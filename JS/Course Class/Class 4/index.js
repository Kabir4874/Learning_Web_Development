// function run() {
//   console.log("Running");
// }
// run();

// let stand = function walk() {
//   console.log("Walking");
// };
// let stand2 = function () {
//   console.log("Stand2");
// };
// stand();

// let jump = stand;

// jump();
// stand2();

// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// console.log(sum(1, 2, 3, 4, 5));

// function sum(a,...args){
//     console.log(a);
//     console.log(args);
// }

// sum(1,2,3,4,5,6)

let arr = [1, 2, 3, 4];
let totalSum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(totalSum);
