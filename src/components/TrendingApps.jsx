import React from "react";
import { Link } from "react-router";
import App from "./App";
import { FaChevronRight } from "react-icons/fa";

export default function TrendingApps({ appsData }) {
  return (
    <div className="w-full bg-[#F8FAFC] py-40">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-[22px] md:text-[40px] font-bold text-gray-900">
          Trending Apps
        </h2>

        <p className="text-gray-500 mt-3 text-sm md:text-base max-w-[500px] mx-auto">
          Explore all trending apps on the market developed by us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {appsData?.slice(0, 8).map((app) => (
            <App key={app.id} app={app} />
          ))}
        </div>

        {/* Show All Button */}
        <div className="flex justify-center">
          <Link to="/apps">
            <button className="mt-12 px-6 py-2.5 rounded-full text-white font-medium bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] hover:opacity-90 transition flex items-center gap-2">
              Show All
              <FaChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}