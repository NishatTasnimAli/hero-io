import React from "react";
import logo from "../assets/logo.png";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center z-50">
      <img className="animate-spin w-16 h-16 mb-4" src={logo} alt="Loading" />
      <span className="text-2xl font-bold text-purple-500">Loading...</span>
    </div>
  );
};

export default Loader;