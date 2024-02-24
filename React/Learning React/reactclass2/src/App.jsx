import "./App.css";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";

function App() {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      title: "Sirf Excel",
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: "p3",
      title: "Tide",
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: "p4",
      title: "Maggi",
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];
  function printProductData(data) {
    console.log("I am in APP.jsx");
    console.log(data);
  }
  return (
    <>
      <NewProduct printProduct={printProductData} />
      <Products items={products} />
    </>
  );
}

export default App;
