// !Strings

// let lastName = "Ridoy";
// let firstName = new String("Kabir");
// console.log(typeof firstName);

// !Array

// let number = [1, 4, 5, 7];
// number.push(5);
// number.unshift(6);
// number.splice(2, 0, "kabir");
// console.log(number);

// let courses = [
//   { no: 1, nam: "kabir" },
//   { no: 2, nam: "ahmed" },
// ];
// console.log(courses);

// let course = courses.find(function (course) {
//   return course.nam == "kabir";
// });

// console.log(course);
// number.length = 0;
// console.log(number);

// let first= [1,2,3]
// let second= [4,5,7]
// let combined= first.concat(second)
// console.log(combined);

// let sliced = combined.slice(2,4)
// console.log(sliced);
// console.log("Hello");

// let com= [...first,...second,'a','b']
// console.log(com);

// let arr = [1, 2, 3, 4, 5];
// for (let value of arr) {
//   console.log(value);
// }

// arr.forEach((number) => console.log(number));

// let numbers = [1, 2, 3, 4, 5, 6];
// const joined = numbers.join(",");
// console.log(joined);

// let message='This is my first message';
// let parts= message.split(' ');
// console.log(parts);

// let numbers = [1, 2, -1, -4];

// let filtered = numbers.filter(function (value) {
//   return value >= 0;
// });

// console.log(filtered);

// let numbers = [7, 8, 9, 10];

// let items = numbers.map(function (value) {
//   return "student_no" + value;
// });
// console.log(items);

// !Mapping with objects

let numbers = [1, 2, -6, -7];
// let filtered = numbers.filter((value) => value >= 0);

// let items = filtered.map(function (num) {
//   return { value: num };
// });

let items = numbers
  .filter((value) => value >= 0)
  .map((num) => ({ value: num }));
console.log(items);
