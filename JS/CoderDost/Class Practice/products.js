console.log("Exporting Module");

export let order = function (buyer, item) {
  console.log(`${buyer} ordered this ${item}`);
};

let laptopPrice= 50000;
let quantity= 25;

export{laptopPrice,quantity}

export default order