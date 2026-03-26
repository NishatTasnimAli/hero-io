import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div>
      <div className="loader-container">
        <img className="spinner" src={logo} alt="" />
        <span className="text-2xl font-bold text-purple-500">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;