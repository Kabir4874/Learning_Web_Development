let arr = [5,6,2];
let sum= arr.reduce((accumulator,elem, index, arr)=>{
    return accumulator+=elem;
},7);
console.log(sum);
