import React from "react";
// import "./styles.css";
import "./styles.scss";
import Image from "./asset/genshi.jpg";

export const App = () => {
  return (
    <div className="container">
      <img src={Image} alt="" />
      <h1>Hello.</h1>
    </div>
  );
};
