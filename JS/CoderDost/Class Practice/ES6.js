//  ?Destructuring the Array

// let hotel = {
//   name: "hottell",
//   location: "street no xyz",
//   categories: ["chineese", "italian", "english"],
// };

// let items = [2, 3, 5, 8];

// let [x, y, z, p] = items;

// console.log(x, y, z, p);

// let [first, , third] = hotel.categories;

// console.log(first, third);

// [third, first] = [first, third];

// console.log(first, third);

//? Destructuring the Nested Array

// let nums = [2, 3,[5, 6]];
// // let [a, b] = nums;

// let [a,,[b,c]] = nums;

// console.log(a, b,c);

// ?Destructuring the Object

// let hotel = {
//   name: "hottell",
//   location: "street No xyz Delhi",
//   categories: ["chinese", "italian", "english"],
//   mainMenu: ["FoodA", "FoodB", "FoodC"],
//   openingHours: {
//     sunday: { open: "9:00AM", close: "11:00PM" },
//     monday: { open: "10:00AM", close: "10:00PM" },
//   },
// };

// let {name,location,mainMenu}=hotel;

// console.log(name,location,mainMenu);

// let {name:hotelName,location:hotelLocation, mainMenu:menu}= hotel;

// console.log(hotelName,hotelLocation,menu);

// let { name, openingHours } = hotel;

// console.log(name, openingHours);

// let { monday:{open,close} } = openingHours;

// console.log(open,close);

// ?Spread Operator

let hotel = {
  name: "hottell",
  location: "street No xyz Delhi",
  categories: ["chinese", "italian", "english"],
  mainMenu: ["FoodA", "FoodB", "FoodC"],
  openingHours: {
    sunday: { open: "9:00AM", close: "11:00PM" },
    monday: { open: "10:00AM", close: "10:00PM" },
  },
};

// let num = [2, 3, 5, 7];

// console.log(...num);

// let newArray = [9, 10, ...num];
// console.log(newArray);

// let updatedMainMenu = [...hotel.mainMenu, "foodD", "foodE"];

// console.log(updatedMainMenu);

// let properties= Object.keys(hotel);
// console.log(properties);

// let itemset = new Set([1, 2, 3, 4, 5, 6, 2, 2, 13, 4, 3, 2]);

// console.log(itemset);
// console.log(itemset.has(8));
// console.log(itemset.size);
// itemset.add(9);
// console.log(itemset);

let restaurantMap= new Map();

restaurantMap.set('name', "Bombay Hotel");
restaurantMap.set(1,"address1")
restaurantMap.set(2,"address2")
console.log(restaurantMap);

console.log(restaurantMap.get(2));

console.log(restaurantMap.size)