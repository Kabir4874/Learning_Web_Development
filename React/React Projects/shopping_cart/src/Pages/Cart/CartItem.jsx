import { useContext } from "react";
import { ShoppingContext } from "../../Context/ShopContext";

const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShoppingContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            type="text"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
