// function eventFunction() {
//   console.log("I Clicked on the document");
// }

// document.addEventListener("click", eventFunction);
// document.removeEventListener("click", eventFunction);

// const content = document.querySelector("#wrapper");
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// let links = document.querySelectorAll("a");

// let thirdLink = links[2];

// thirdLink.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("Chill");
// });

// let myDiv = document.createElement("div");

// function paraStatus(event) {
//   console.log(event.target.textContent);
// }
// myDiv.addEventListener("click", paraStatus);
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is pera" + i;
//   myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector("#wrapper");
element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("We click on span " + event.target.textContent);
  }
});
