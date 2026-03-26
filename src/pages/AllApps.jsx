import React, { useState } from "react";
import { useLoaderData } from "react-router";
import App from "../components/App";
import Loader from "../components/Loader";
import ErrorPage2 from "../pages/ErrorPage2";

const AllApps = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const appsData = useLoaderData();

  const searchApp = appsData.filter((app) =>
    app.title.toLowerCase().includes(input.toLowerCase())
  );

  const handleOnChange = (e) => {
    setIsLoading(true);
    setTimeout(() => {
      setInput(e.target.value);
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)] min-h-screen px-4 py-20">
      <div className="max-w-[1200px] mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900">
          Our All Applications
        </h1>
        <p className="text-gray-500 text-center mt-4 mb-10 text-sm md:text-base">
          Explore all apps on the market developed by us. We code for Millions
        </p>

        {/* Search + Count */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-8 gap-4">
          
          <h2 className="font-semibold text-lg md:text-xl text-gray-900">
            ({searchApp.length}) Apps Found
          </h2>

          <div className="relative w-full lg:w-1/3">
            <input
              type="search"
              placeholder="Search Apps"
              className="w-full pl-10 pr-4 py-4 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#632EE3] focus:border-transparent text-sm md:text-base"
              onChange={handleOnChange}
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>

        {isLoading ? (
          <Loader />
        ) : searchApp.length === 0 ? (
          <ErrorPage2 />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {searchApp.map((app) => (
              <App key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;