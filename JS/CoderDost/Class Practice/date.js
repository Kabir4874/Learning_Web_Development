// let currentDate = new Date();

// console.log(currentDate);

// let currentDate = new Date(0);

// console.log(currentDate);

// let currentDate = new Date().getTime();
// console.log(currentDate);

// let completeDateAndTime = new Date();
// console.log(completeDateAndTime);

// console.log(completeDateAndTime.getFullYear());

// !Digital Clock

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

let ticking = () => {
  let currentDate = new Date();

  let getHour = currentDate.getHours();
  let getMin = currentDate.getMinutes();
  let getSec = currentDate.getSeconds();

  hour.value = getHour;
  min.value = getMin;
  sec.value = getSec;
};

setInterval(() => {
  ticking();
}, 1000);
