import React from "react";
import "./Sidebar.css";
import { BsCartCheck } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo">
          <h1>
            <BsCartCheck style={{ height: "3rem", width: "3rem" }} />
          </h1>
        </div>
        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
};

export default Sidebar;
