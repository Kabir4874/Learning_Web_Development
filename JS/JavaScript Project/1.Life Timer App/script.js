let isDOBOpen= false;

let dateOfBirth;

const setting= document.querySelector("#settingIcon");

const settingContentEl= document.querySelector("#settingContent");

const initialTextEl= document.querySelector("#initialText");

const afterDOBTextEl= document.querySelector("#afterDOBBtnTxt");

const dobButton= document.querySelector("#dobButton");

const dobInput= document.querySelector("#dobInput");

const yearEl= document.querySelector("#year");
const monthEl= document.querySelector("#month");
const dayEl= document.querySelector("#day");
const hourEl= document.querySelector("#hour");
const minuteEl= document.querySelector("#minute");
const secondEl= document.querySelector("#second");

const toggleDOB= ()=>{
    if(isDOBOpen){
        settingContentEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
}


const setDobHandler= ()=>{
    dateOfBirth= dobInput.value;

    if(dateOfBirth){
        initialTextEl.classList.add("hide");
    }
    else{
        afterDOBTextEl.classList.add("hide");
    }
    
}


const updateAge=()=>{

    const currentDate= new Date();

    const date= new Date(dateOfBirth);

    const dateDiff=  Math.floor(( currentDate - date) /1000);

    const year= Math.floor(dateDiff/(365*24*60*60));

    const month= Math.floor(dateDiff/(30*24*60*60))%12;

    const day= Math.floor(dateDiff/(24*60*60))%30;

    const hour= Math.floor(dateDiff/(60*60))%24;

    const minute= Math.floor(dateDiff/(60))%60;

    const second= Math.floor(dateDiff%60);
    
    const tempYear= year.toString();


    yearEl.innerHTML= check(year);
    monthEl.innerHTML= check(month);
    dayEl.innerHTML= check(day);
    hourEl.innerHTML= check(hour);
    minuteEl.innerHTML= check(minute);
    secondEl.innerHTML= check(second);
}

function check(data){
    return data<10?`0${data}`:data;
}

setInterval(() => {
    updateAge();
}, 1000);

setting.addEventListener("click", toggleDOB);

dobButton.addEventListener("click", ()=>{
    setDobHandler();
    updateAge();
});

