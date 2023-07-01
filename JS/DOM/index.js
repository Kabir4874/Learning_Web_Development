// let ID1 = document.getElementById("ID1");
// ID1.innerHTML= "Kabir Ahmed";
// let p1 = document.getElementsByClassName("paragraph")[0];
// p1.innerHTML= "Hello World"

// document.querySelector("#ID1");
// function ClickMe(){
    // document.write("How are you?")
//     document.getElementById("ID1").innerHTML= Date();
// }
// let pNote =  document.querySelector(".pNote");
// console.log(pNote.parentNode)

// let ParentDiv = document.querySelector(".ParentDiv");
// console.log(ParentDiv.firstElementChild);
// console.log(ParentDiv.lastElementChild);
// console.log(ParentDiv.children);
// let Current = document.querySelector(".MiddleChild");
// console.log(Current.previousElementSibling)



// let div = document.createElement("div");
// div.id="div1"
// div.className= "div1"
// div.innerHTML= "<p>This is p tag</p>"
// let text= document.createTextNode("Inner text into the div");
// div.appendChild(text)
// document.body.appendChild(div)
// let ul=document.createElement("ul")
// ul.id= "menu"
// let li1= document.createElement("li")
// li1.textContent="Home"
// ul.appendChild(li1)
// let li2= document.createElement("li")
// li2.textContent="About"
// ul.appendChild(li2)
// let li3= document.createElement("li")
// li3.textContent="Contact"
// ul.appendChild(li3)
// document.body.appendChild(ul)
// let script = document.createElement("script")
// script.src= "index.js"
// document.body.appendChild(script)

// let div = document.createElement("div")
// div.id="menu";
// let p = document.createElement("p")
// p.textContent= "P tag";
// div.appendChild(p);
// document.body.appendChild(div);
// let menu= document.querySelector("#menu")
// function CreateMenu (name){
//     let li = document.createElement("li");
//     li.textContent= name;
//     return li;
// }
// menu.appendChild(CreateMenu("About"))
// menu.appendChild(CreateMenu("Home"))
// menu.appendChild(CreateMenu("Contact"))


// let menu = document.querySelector("#menu");
// let lang= ['Python', 'JavaScript', 'C','C++', 'java', 'PHP'];
// let fragment= new DocumentFragment();
// lang.forEach( (language)=>{
//     let li = document.createElement('li');
//     li.textContent= language;
//     fragment.appendChild(li); 
// })
// menu.appendChild(fragment);


// let menu= document.querySelector('#menu');
// let li = document.createElement('li');
// li.textContent= 'Home';
// menu.insertBefore(li,menu.firstElementChild);


// let app = document.querySelector('#app');
// let names= ['Kabir','Ahmed', 'Ridoy'];
// let DOMScript = names.map((names)=>{
//     let li = document.createElement('li');
//     li.textContent= names;
//     return li;
// })
// app.append(...DOMScript);
// app.prepend(...DOMScript);

// let menu = document.querySelector("#menu");
// menu.insertAdjacentHTML("beforebegin" , "<h3>Before Being</h3>");

// let menu = document.querySelector('#menu')
// let li= document.createElement('li')
// li.textContent= 'Home';
// menu.replaceChild(li, menu.firstElementChild)

// menu.removeChild(menu.firstElementChild)

// let cloneNode = menu.cloneNode(true)
// cloneNode.id= 'CloneId'
// document.body.appendChild(cloneNode)


// let div= document.querySelector('div');
// div.id= 'menu';

// let btn= document.querySelector('#btn');
// if(btn){
//     btn.setAttribute('name','kabir')
// }


// if(btn){
//     let target= btn.getAttribute('target')
//     console.log(target);
// }



// let menu= document.querySelector('#menu');
// menu.style.backgroundColor= 'green';
// let style= getComputedStyle(menu);
// console.log(style.width)



// let menu = document.querySelector('.menu');
// menu.classList.add('Kabir')

// let menu = document.querySelector('div');
// let width= menu.offsetWidth;
// let height= menu.offsetHeight;
// console.log(width, height);



// const group= document.querySelector('.group');
// const output= document.querySelector('.output');
// const size=['XS', 'S','M','L','XL','XXL'];
// group.innerHTML = size.map((size)=>
//     `<div>
//     <input type="radio" id="${size}" value="${size}" name="size">
//     <label for="${size}">${size}</label>
//     </div>`
// ).join(" ");

// const RadioButton= document.querySelectorAll('input');
// for(const radiobtn of RadioButton)
// {
//     radiobtn.addEventListener('change', ShowOutput)
// }

// function ShowOutput(e){
//     console.log(e);
//     if(this.checked){
//         document.querySelector('.output').innerHTML = `You Selected ${this.value}`;
//     }
// }

// const btn = document.querySelector('#btn');

// btn.addEventListener('click', (e)=>{

//     let checkbox = document.querySelectorAll("input[name='color']:checked");
//     let values=[];
//     checkbox.forEach((checkbox)=>{
//     values.push(checkbox.value);
// })
// console.log(values);
// })


const lang = document.querySelector('#lang');
const btn = document.querySelector("#btn");
btn.onclick = (e)=>{
    e.preventDefault();
    const optionValues = [].filter
    .call(lang.options, (option)=>option.selected)
    .map((option)=>option.text)
    console.log(optionValues)
}