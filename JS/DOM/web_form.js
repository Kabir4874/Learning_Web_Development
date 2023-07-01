let Username = document.querySelector("#Username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let form = document.querySelector('#Form');
function showError(input, message) {
  const FormControl = input.parentElement;
  FormControl.className = "form-control error";
  const small = FormControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const FormControl = input.parentElement;
  FormControl.className = "form-control success";
}
function checkMail(input) {
  const RegEx =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
  if (RegEx.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Is Not Valid");
  }
}
function CheckInputLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${GetFieldName(input)} You Must Be At Least ${min} Characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${GetFieldName(input)} You Must Be Less Than ${max} Characters`
    );
  } else {
    showSuccess(input);
  }
}
function GetFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkPasswordMatch(input1, input2){
    if(input1.value != input2.value)
    {
        showError(input2, 'Password Is Not Same')
    }
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    CheckInputLength(Username, 3,20);
    CheckInputLength(password, 6,30);
    checkMail(email);
    checkPasswordMatch(password,password2);
})