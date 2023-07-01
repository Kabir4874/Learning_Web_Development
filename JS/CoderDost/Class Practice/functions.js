// function nameOfFunction() {
//   console.log("You are running code present inside the function");
// }

// nameOfFunction();

//Function Expression

// let fun= function(){
//     console.log("This is an example of function expression")
// }

// fun();

// let invitation = (name="Default Value") => {
//   console.log(`Welcome! ${name} you are invited on our event`);
// };

// invitation();

// let ageCalculation= function(birthYear){
//     let age= 2023-birthYear;
//     return age;
// }

// console.log(ageCalculation(2002));

// let invitation = (name) => `Welcome ${name} to this event`;

// console.log(invitation("Kabir"));

// !Higher Order Function

// let upperCase= function(str){
//     return str.toUpperCase();
// }

// let lowerCase= function(str){
//     return str.toLowerCase();
// }

// let transformer= function(str, fun){
//     return fun(str);
// }

// console.log(transformer("hello", upperCase));

// let compliment = function (msg) {
//   return function (name) {
//     console.log(`${msg} ${name}`);
//   };
// };

// console.log(compliment("Your are good coder")("Lurie"));

// let complimented = compliment("You are good coder");

// console.log(complimented);

// (function (name) {
//   console.log("This function will never execute again ", name);
// })("IIFE");

// setTimeout(() => {
//     console.log("Hello Kabir");
// }, 2000);

// setInterval(() => {
//   console.log("Hello Kabir");
// }, 2000);


// !Practice Problem 


function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition()); //You are not allowed to modify this line any more

