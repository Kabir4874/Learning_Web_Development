let form = document.querySelector(".sign-up-form"),
    username= document.querySelector("#username"),
  email = document.querySelector("#email"),
  password = document.querySelector("#password");

let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$";

let usernamePattern= /^[A-Za-z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let passwordValue = password.value;

  let usernameValue= username.value;

  let result = passwordValue.match(passwordPattern);

  if (result) {
    console.log("Your Password is strong");
  } else {
    console.log("Try Again");
  }

  let result1= usernamePattern.test(usernameValue); 
  if(result1==true){
    console.log("Valid");
  }
  else{
    console.log("Not Valid");
  }


});
