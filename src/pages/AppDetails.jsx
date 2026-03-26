import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { formatNumber } from "../utility/formatNumber";
import downloadIcon from "../assets/icon-downloads.png";
import ratingIcon from "../assets/icon-ratings.png";
import likeIcon from "../assets/icon-review.png";
import RatingsChart from "../components/RatingsChart";
import { getFromLocalStorage, saveToLocalStorage } from "../utility/localStorage";
import { toast } from "react-toastify";

const AppDetails = () => {
  const appsData = useLoaderData();
  const { id } = useParams();
  const app = appsData.find((single) => single.id === parseInt(id));

  if (!app)
    return (
      <div className="text-center py-20">
        <h2 className="text-4xl font-bold">App Not Found</h2>
        <p className="text-gray-500 mt-4">The app you are looking for does not exist.</p>
      </div>
    );

  const { ratings, description } = app;

  const [installed, setInstalled] = useState(() => {
    const installedApps = getFromLocalStorage() || [];
    return installedApps.includes(app.id);
  });

  const handleInstallBtn = (id) => {
    saveToLocalStorage(id);
    setInstalled(true);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-4 py-20">

        <div className="lg:flex gap-10 items-start">
          <div className="bg-white p-6 rounded-2xl shadow-xl lg:w-1/5 flex-shrink-0">
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="lg:w-2/3 space-y-6 mt-6 lg:mt-0">
            <h1 className="text-4xl font-bold text-[#0F172A]">{app.title}</h1>
            <p className="text-gray-500 text-lg">
              Developed by{" "}
              <span className="font-semibold underline bg-gradient-to-b from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>

            {/* Stats Boxes */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex items-center bg-white rounded-xl p-4 shadow border border-gray-100 flex-1 gap-2">
                <img src={downloadIcon} alt="downloads" className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-500">Downloads</p>
                  <p className="font-bold text-sm text-green-500">{formatNumber(app.downloads)}</p>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl p-4 shadow border border-gray-100 flex-1 gap-2">
                <img src={ratingIcon} alt="ratings" className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-500">Average Ratings</p>
                  <p className="font-bold text-sm text-orange-500">{app.ratingAvg}</p>
                </div>
              </div>
              <div className="flex items-center bg-white rounded-xl p-4 shadow border border-gray-100 flex-1 gap-2">
                <img src={likeIcon} alt="reviews" className="w-6 h-6" />
                <div>
                  <p className="text-xs text-gray-500">Total Reviews</p>
                  <p className="font-bold text-sm text-blue-500">{formatNumber(app.reviews)}</p>
                </div>
              </div>
            </div>

            {/* Install Button */}
            <button
              disabled={installed}
              onClick={() => handleInstallBtn(app.id)}
              className={`mt-6 w-full md:w-auto px-6 py-3  font-semibold text-white transition-colors ${
                installed
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90"
              }`}
            >
              {installed ? "Installed" : `Install Now (${app.size}MB)`}
            </button>
          </div>
        </div>

        {/* Ratings Chart */}
        <div className="my-12 bg-white p-6 rounded-2xl shadow">
          <RatingsChart ratings={ratings} />
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          {description.map((des, index) => (
            <p key={index} className="text-gray-500 mb-4 leading-7">
              {des}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppDetails;