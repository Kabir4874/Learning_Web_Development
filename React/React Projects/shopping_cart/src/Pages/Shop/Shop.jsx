import { products } from "../../Products";
import Product from "./Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>KineFelo Shop</h1>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
