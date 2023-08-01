import { products } from "../../Products";
import { ShoppingContext } from "../../Context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = () => {
  const {  cartItems } = useContext(ShoppingContext);
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {products.map((product, index) => {
          if (cartItems[product.id] != 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
