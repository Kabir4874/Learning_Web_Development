// const t1 = performance.now();
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is Para " + i;
//   document.body.appendChild(newElement);
// }

// const t2 = performance.now();
// console.log("This took " + (t2 - t1) + " ms");

// !Optimizing a bit

// const t3 = performance.now();
// let myDiv = document.createElement("div");
// for (let i = 1; i <= 100; i++) {
//   let element = document.createElement("p");
//   element.textContent = "This is Para " + i;
//   myDiv.appendChild(element);
// }
// document.body.appendChild(myDiv);
// const t4 = performance.now();
// console.log("This took " + (t4 - t3) + " ms");

// !Using Fragment

// const t1 = performance.now();
// let fragment = document.createDocumentFragment();

// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is Para " + i;
//   fragment.appendChild(newElement);
// }

// document.body.appendChild(fragment);
// const t2 = performance.now();
// console.log("This took " + (t2 - t1) + " ms");

// !Single Threading

function addPara() {
  let para = document.createElement("p");
  para.textContent = "Js is Single Threaded";
  document.body.appendChild(para);
}

function appendNewsMessage() {
  let para = document.createElement("p");
  para.textContent = "How are you?";
  document.body.appendChild(para);
}

addPara();
appendNewsMessage();

document.addEventListener("click", function () {
  console.log("Hello World");
});
