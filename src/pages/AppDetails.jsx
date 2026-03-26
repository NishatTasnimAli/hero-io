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
    toast.success("The app has been installed successfully");
  };

  return (
    <div className="bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)]">
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="lg:flex gap-10">
          <img
            className="bg-white p-10 shadow-xl lg:w-1/3 md:h-1/2 mb-6 lg:mb-0"
            src={app.image}
            alt={app.title}
          />
          <div className="space-y-4 w-full lg:w-2/3 md:h-1/2">
            <h2 className="text-4xl font-bold">{app.title}</h2>
            <p className="text-gray-500">
              Developed by{" "}
              <span className="font-semibold bg-[linear-gradient(180deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent">
                {app.companyName}
              </span>
            </p>
            <hr className="border-gray-300" />

            <div className="-ml-6">
              <div className="stats">
                <div className="stat">
                  <img className="mb-2" src={downloadIcon} alt="downloads" />
                  <div className="stat-title">Downloads</div>
                  <div className="stat-value">{formatNumber(app.downloads)}</div>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <img className="mb-2" src={ratingIcon} alt="ratings" />
                  <div className="stat-title">Average Ratings</div>
                  <div className="stat-value">{app.ratingAvg}</div>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <img className="mb-2" src={likeIcon} alt="reviews" />
                  <div className="stat-title">Total Reviews</div>
                  <div className="stat-value">{formatNumber(app.reviews)}</div>
                </div>
              </div>
            </div>

            <button
              disabled={installed}
              onClick={() => handleInstallBtn(app.id)}
              className={`btn bg-[#00D390] text-white ${installed ? "bg-blue-700" : ""}`}
            >
              {installed ? "Installed" : `Install Now (${app.size}MB)`}
            </button>
          </div>
        </div>

        <hr className="border-gray-300 my-8" />

        <RatingsChart ratings={ratings} />

        <hr className="border-gray-300 my-8" />

        <h2 className="text-2xl font-bold mb-4">Description</h2>
        {description.map((des, index) => (
          <p key={index} className="text-gray-500 mb-4 leading-8">
            {des}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AppDetails;