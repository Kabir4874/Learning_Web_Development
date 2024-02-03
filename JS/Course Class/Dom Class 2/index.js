function eventFunction() {
  console.log("I Clicked on the document");
}

document.addEventListener("click", eventFunction);
document.removeEventListener("click", eventFunction);
