// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log("Call Back Function");
// }, 3000);

// console.log(3)
// console.log(4)

// let todos = (callback) => {
//   let request = new XMLHttpRequest();

//   console.log(request);

//   request.addEventListener("readystatechange", () => {
//     console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status == 200) {
//       console.log(request.responseText);
//       let data= JSON.parse(request.responseText);
//       callback(undefined, data);

//     } else if (request.readyState === 4) {
//       console.log("Data could not fetched");
//       callback("data could not found", undefined);
//     }
//   });

//   request.open("Get", "https://jsonplaceholder.typicode.com/todos");

//   request.send();
// };

// todos((error,data) => {
//   console.log("Callback function is fired");
//   if(error){
//     console.log(error);
//   }
//   else{
//     console.log(data)
//   }

// });

// let getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("Some Data");
//     reject("Some Error");
//   });
// };

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// !Fetch API

// let getTodos= async()=>{

//     let response= await fetch("data.json");
//     if(response.status!=200){
//         throw new Error("Error in fetching Data");
//     }
//     let data= await response.json();
//     return data;

// }

// getTodos().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// fetch("data.json")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// !Error handling Using Try and Catch 

let getTodos = async () => {
  try{
    let response = await fetch("data.json");

  let data = await response.json();

  let response2 = await fetch("mario.json");
  let marioData = await response2.json();

  console.log(data, marioData);
  }
  catch(error){
    console.log(error.message);
  }
};

getTodos();


// try{
//     let x=4;
//     const y=6;
//     y=x;
// }
// catch(error){
//     console.log(error);
// }