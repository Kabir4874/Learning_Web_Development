// !Reverse A Array (Mutate Method)

// let letters= ['a','b','c','d'];

// let reverse= letters.reverse();

// console.log(reverse);

//!Concat (non mutate)

// let nums= [1,2,3,4];

// let concated= nums.concat(letters);

// console.log(concated);

// !Join Method (non mutate)

// let joined= letters.join('-');

// console.log(joined);

// !Slice Method (non mutate)

// let num= [3,5,7,9,2];

// let extractedArray= num.slice(0,3);

// console.log(extractedArray);

// !Splice Method (mutate)

// let num = [3, 5, 7, 9, 2];

// let newArray = num.splice(1, 1, 1);

// console.log(num);

// console.log(newArray);

// !At Method (non mutate)

// let num=[23,54,77,85];

// console.log(num.at(-1));

// !Map Method (non mutate)

// let salaries = [3000, 5000, 8000, 6000, 9000];

// let newSalaries = salaries.map((salary) => {
//   let incrementAmount = salary / 2;

//   return salary + incrementAmount;
// });

// console.log(newSalaries);

// !Filter Method (non mutate)

// let gifts= ['watch', 'ring', 'chocolate', 'teddy-bear','toy-car'];

// let filterArray= gifts.filter(gift=>{
//     if(gift=='watch'|| gift== 'ring'){
//         return gift;
//     }
// })

// console.log(filterArray);

// !Reduce Method (non mutate)

// let nums = [1, 5, 8, 3, 9];

// let sum = nums.reduce((total, currentValue) => {
//   return total + currentValue;
// }, 0);

// console.log(sum);

// !Find Method (non mutate)

// let students = [
//   { id: 1, name: "alex" },
//   { id: 2, name: "john" },
// ];

// let result = students.find((students) => {
//   return students.id === 1;
// });

// console.log(result);

// !FindIndex Method (non mutate)

// let ages = [21, 18, 19, 23];

// let result = ages.findIndex((age) => {
//   return age > 21;
// });

// console.log(result);

// !Some and Every Method (non mutate)

// let scores = [23, 34, 67, 89, 92];

// let result = scores.some((score) => {
//   return score > 50;
// });

// let result1 = scores.every((score) => {
//   return score > 50;
// });

// console.log(result);

// console.log(result1);

// !Flat Method (non mutate)

// let arr = [1, 2, 3, 4, [5, 6, 7]];

// console.log(arr);

// let result = arr.flat();

// console.log(result);

// !Flat Map Method (non mutate)

// let cart = [
//   {
//     name: "mobile",
//     quantity: 2,
//     price: 500,
//   },
//   {
//     name: "tablet",
//     quantity: 1,
//     price: 700,
//   },
// ];

// let newCart = cart.flatMap((item) => {
//   if (item.name === "mobile") {
//     return [
//       item,
//       {
//         name: "screen protector",
//         quantity: 1,
//         price: 0,
//       },
//     ];
//   } else {
//     return [item];
//   }
// });

// console.log(newCart);

// !Sorting Method (non mutate)

// let letters = ["d", "e", "f", "a", "b"];

// console.log(letters.sort());

// let nums = [2, 5, 7, -1, -22, -43];

// nums.sort((a, b) => {
//   return a-b;
// });

// console.log(nums);

// !Chain of Methods

let num = [1, 2, 3, 4, 5, 6];

let result = num.slice(0, 3).splice(2, 1, 7);

console.log(result);
