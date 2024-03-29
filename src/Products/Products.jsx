import React from "react";
import "./Products.css";
import { AiFillStar } from "react-icons/ai";
import { IoBagHandleOutline } from "react-icons/io5";

const Products = () => {
  return (
    <>
      <section className="card-container">
        <section className="card">
          <img
            src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
            alt="Shoe"
            className="card-img"
          />
          <div className="card-details">
            <h3 className="card-title">Shoe</h3>
            <section className="card-reviews">
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <AiFillStar className="ratings-star" />
              <span className="totla-reviews">5</span>
            </section>
            <section className="card-price">
              <div className="price">
                <del>$500</del>$200
              </div>
              <div className="bag">
                <IoBagHandleOutline className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
};

export default Products;
