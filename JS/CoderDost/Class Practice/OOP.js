// let Car = function (color, model) {
//   this.color = color;
//   this.model = model;
//   this.login = function () {
//     console.log("Login");
//   };
// };
// Car.prototype.startEngine = function () {
//   console.log("Start Engine");
// };
// let result = new Car("black", 2023);

// console.log(result);

// result.startEngine();

// class Car {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }
//   startEngine() {
//     console.log("Star Engine");
//   }
//   get start() {
//     console.log("This is start");
//   }
//   set changeColor(color) {
//     this.color = color;
//   }
// }
// Car.breakMethod = function () {
//   console.log("this is break method");
// };

// class Bike extends Car{

// }

// let newBike= new Bike("black", 2023);

// console.log(newBike);

// let honda = new Car("Red", 2002);

// console.log(honda);
// honda.startEngine();
// honda.start;

// honda.changeColor = "Blue";

// console.log(honda);
// Car.breakMethod();

class bankAccount {
  constructor(owner, pin) {
    this.owner = owner;
    this.pin = pin;
    this.movements = [];
  }
  getMovements() {
    return this.movements;
  }
  deposit(val) {
    this.movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
}

let account = new bankAccount("Zack", 5686);
account.deposit(45).withdraw(25).deposit(100);
// account.withdraw(65);

console.log(account.getMovements());

console.log(account);
