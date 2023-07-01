// import {order,laptopPrice,quantity} from './products.js'
// import * as singleVariable from "./products.js";

// console.log("Importing Module");
// singleVariable.order("jack", "Laptop");

// console.log(singleVariable.laptopPrice);
// console.log(singleVariable.quantity);

// let response = await fetch("https://jsonplaceholder.typicode.com/todos");

// let data = await response.json();

// console.log(data);

// let outerFunction = function(){
//     let outerVariable= "outer variable";
//     let innerFunction= function(){
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }

// let innerFunc= outerFunction();

// innerFunc();

let counter = function () {
  let count = 0;
  let innerCount = function () {
    return (count = count + 1);
  };
  return innerCount;
};
 
let innerCnt = counter();

console.log(innerCnt());
console.log(innerCnt());
