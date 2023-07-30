const CartItem = ({data}) => {
  const { id, productName, price, productImage } = data;
  return (
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
