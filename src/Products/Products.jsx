import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <div className="card-reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <span className="totla-reviews">5</span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
