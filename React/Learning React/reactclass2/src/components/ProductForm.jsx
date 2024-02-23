import React from "react";
import "./ProductForm.css";

const ProductForm = () => {
  return (
    <>
      <form>
        <div>
          <label>Title</label>
          <input type="text" />
        </div>
        <div>
          <label>Date</label>
          <input type="date" min="2023-01-01" max="2023-12-12" />
        </div>
      </form>
    </>
  );
};

export default ProductForm;
