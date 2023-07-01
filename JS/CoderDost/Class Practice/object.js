// let car = {
//   color: "black",
//   model: "2022",
//   company: "Honda",
// };

// console.log(car);

// console.log(car["company"]);
// console.log(car.company);

// let propertyName = "color";

// console.log(car[propertyName]);

// Modify the Object

// car.color = "brown";
// console.log(car.color);

// let obj = {
//   prop1: "value1",
//   prop2: "value2",
// };

// delete(obj.prop1);
// console.log(obj);

// let person = {
//   firstName: "Kabir",
//   lastName: "Ahmed",
//   city: "Dhaka",
//   birthYear: 2001,
//   education: "CSE",
//   getSummary: function () {
//     return `${this.firstName} ${this.lastName} lives in ${this.city}`;
//     // return this
//   },
// };

// console.log(person.getSummary());

// let dishes = ["Biryani", "channy", "karahai", "Bhallay"];

// dishes.forEach((elem) => {
//   console.log(elem);
// });

// !Objects inside array

// let blockList= [{userName:"john", reason:"Abusive content"},{userName:"paul", reason:"copyRight Content"}];

// for(let i=0; i<blockList.length; i++){
//     console.log(blockList[i].userName,blockList[i].reason);
// }

// console.log(Math);

// !Call And Apply

// let mainPlane = {
//   airline: "Fly BD",
//   iatacode: "FI",
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} Booked Flight on ${this.airline} with flight number ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.airline}`, name: name });
//   },
// };

// mainPlane.book(333, "Charlos");
// console.log(mainPlane.bookings);


// let childPlain={
//     airline: "child plain",
//     iatacode: "cp",
//     bookings:[],
// }

// let book= mainPlane.book;

// book.call(childPlain, 123,"Zack");


// !Bind Method 

// function greet(){
//     console.log(`welcome ${this.firstName} ${this.lastName} on coder dost`);
// }

// let user={
//     firstName:"John",
//     lastName: "Paul",
// }

// let greets= greet.bind(user);

// greets();

