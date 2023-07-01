// localStorage.setItem("passion", "Programming");
// localStorage.setItem("age", 24);

// console.log(localStorage);

// console.log(localStorage.getItem('passion'));

// localStorage.setItem("age", 43);
// console.log(localStorage.getItem('age'));

// localStorage.removeItem("age");

// localStorage.clear();

let vehicles = [
  { company: "Honda", model: "2009" },
  { company: "Toyota", model: "2010" },
];

// console.log(vehicles);

let stringOfVehicles = JSON.stringify(vehicles);
console.log(stringOfVehicles);

localStorage.setItem("vehicles", stringOfVehicles);

console.log(stringOfVehicles);

let storeData = localStorage.getItem("vehicles");

let objectFormate = JSON.parse(storeData);

console.log(objectFormate);
