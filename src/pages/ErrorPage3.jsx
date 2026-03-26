import React from "react";
import errorImage from "../assets/App-Error.png";
import { Link } from "react-router";
import { FaChevronRight } from "react-icons/fa";

export default function ErrorPage3() {
  return (
    <div className="text-center py-20 text-gray-500">
      <img src={errorImage} alt="App Error" className="mx-auto mb-4" />
      <h2 className="text-4xl text-black font-bold mb-4">OPPS!! APP NOT FOUND</h2>
      <p>The App you are requesting is not found on our system. Please try installing it from Apps page!</p>
      
      <div className="flex justify-center">
          <Link to="/apps">
            <button className="mt-12 px-6 py-2.5 rounded-full text-white font-medium bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] hover:opacity-90 transition flex items-center gap-2">
              Go Back
              <FaChevronRight />
            </button>
          </Link>
      </div>

    </div>
  );
}