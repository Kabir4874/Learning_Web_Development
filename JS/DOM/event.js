// let btn = document.querySelector('#btn');
// btn.addEventListener('click',function(e){
//     alert('Button was Clicked');
// })


// function Clicked(){
//     alert('The button was clicked');
// }

// let btn = document.querySelector('#Clicked');
// btn.onclick = function(){
//     alert('This message from DOM 0 level handler')
// }
// let dom2= document.querySelector('#DomTwo');
// dom2.addEventListener('click',function(){
//     alert('Dom 2 label handler')
// })

// let track= document.querySelector('#track');
// function mouseEvent(e){
//     console.log(e.type)
// }
// track.addEventListener("mousedown", mouseEvent)
// track.addEventListener("mouseup", mouseEvent)
// track.addEventListener('click', mouseEvent);
// track.addEventListener('dblclick', mouseEvent);
// track.addEventListener('mouseover', mouseEvent);
// track.addEventListener('mouseout', mouseEvent);
// track.addEventListener('mouseenter', mouseEvent);
// track.addEventListener('mouseleave', mouseEvent);
// track.addEventListener('mousemove', mouseEvent);

// let message = document.querySelector('#message');
// function EventName(e){
//     console.log(e.key)
// }
// message.addEventListener('keyup', EventName)
// message.addEventListener('keydown', EventName)
// message.addEventListener('keypress', EventName)


//  window.onscroll= ()=>{
//     console.log('scrolled')
//     alert('your window is scrolled')
//  }
// window.addEventListener('scroll' , ()=>{
//     console.log('Scrolled down')
// })

// let scroller= 0;
// window.addEventListener('scroll' , ()=>{
//     let newScroller= window.screenYoffset || document.documentElement.scrollTop;
//     if( newScroller > scroller)
//     {
//         console.log('Scroll is down');
//     }
//     else
//     {
//         console.log('Scroll is up');
//     }
//     scroller= newScroller;
// })


const MyInput= document.querySelector('#MyInput');
MyInput.addEventListener('focus' , (e)=>{
    // e.target.style.backgroundColor= "red";
    let newTarget = e.target.className= "myClass";
    console.log(newTarget);
})