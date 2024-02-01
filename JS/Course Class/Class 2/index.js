console.log("Lets Start");

// object Creation
// function createRectangle(length,breadth) {
//   return (rectangle = {
//     length,
//     breadth,
//     draw: function () {
//       console.log("Drawing Rectangle");
//     },
//   });
// }

// let obj1 = createRectangle(2,3);

// obj1.draw();
// console.log(obj1.breadth);

// !Constructor Function

// function rectangle() {
//   this.length = 1;
//   this.breadth = 2;
//   this.draw = function () {
//     console.log("Drawing");
//   };
// }

// let rectangleObj= new rectangle();

let rectangle = {
  side: 2,
  breadth: 4,
};

// !For in loop

for (let key in rectangle) {
  console.log(key, rectangle[key]);
}
