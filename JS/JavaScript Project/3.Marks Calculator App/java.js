const inputEl= document.querySelectorAll("#calculateForm input");

const result= document.querySelector("#result");

let sum=0;


function calculateMarks(event){
    event.preventDefault();
    inputEl.forEach(el=>{
        sum+= parseInt(el.value);

     })
     let average= sum/4;

    result.innerHTML= `You have got ${sum} marks out of 400 and your percentage is ${average}%.`;
}