//---------------Array--------------------
// var myFriends=['kabir','ahmed','ridoy','rakib'];
// console.log(myFriends[1]);
// for(var i=0; i<myFriends.length; i++){
//     console.log(myFriends[i]);
// }
// for(let elem in myFriends){
//     console.log(elem);
// }
// for(let elem of myFriends){
//     console.log(elem);
// }
// myFriends.forEach(function(elem, index, myFriends){
//     console.log(elem);
// });
// myFriends.forEach((elem, index, myFriends)=>{
//         console.log(elem);
// });
// var myFriends=['kabir','ahmed','ridoy','rakib'];

// const count = myFriends.push('Rahman');
// console.log(myFriends);
// console.log(count);
// const newFriends = myFriends.splice(4,0,'rahim');
// console.log(myFriends);
const array1= [1,2,9,15,24];
const newArr = array1.map((elem,index,array1)=>{
    return elem>9;
})
console.log(newArr);