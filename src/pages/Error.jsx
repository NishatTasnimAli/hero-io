import React from "react";
import { Link } from "react-router";
import errorImage from '../assets/error-404.png'
import { FaChevronRight } from "react-icons/fa";


export default function Error() {
  return (
    <div className="text-center py-40">
      <img src={errorImage} alt="Error 404" className="mx-auto mb-6" />
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">Page Not Found</p>
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