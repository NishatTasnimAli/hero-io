import React from "react";
import { Link } from "react-router";
import App from "./App";

export default function TrendingApps({ appsData }) {
  return (
    <div className="max-w-[1300px] mx-auto px-4 pt-40 pb-20 text-center">
      

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
      <Link to="/apps">
        <button className="mt-12 px-6 py-2.5 rounded-md text-white font-medium bg-[linear-gradient(138deg,#632EE3_0%,#9F62F2_100%)] hover:opacity-90 transition">
          Show All
        </button>
      </Link>

    </div>
  );
}