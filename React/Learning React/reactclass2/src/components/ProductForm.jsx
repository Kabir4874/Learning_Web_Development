import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const [newTitle, setTitle] = useState("");
  const [newDate, setDate] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function dateChangeHandler(event) {
    setDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const productData = {
      title: newTitle,
      date: newDate,
    };
    console.log(productData);
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="new-product_title">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-product_date">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2023-12-12"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-product_button">
          <button type="submit">Add Product</button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
