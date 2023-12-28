import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">All</span>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Sneakers</span>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Flats</span>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Sandals</span>
        </label>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark">Hells</span>
        </label>
      </div>
    </>
  );
};

export default Category;
