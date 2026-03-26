import React from "react";
import downloadImage from "../assets/icon-downloads.png";
import starImage from "../assets/icon-ratings.png";
import { formatNumber } from "../utility/formatNumber";

const InstalledApps = ({ app, handleUninstallBtn }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
      
      <div className="flex items-center w-full md:w-auto">
        <div className="w-16 h-16 bg-slate-200 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="ml-4 flex-1">
          <h3 className="text-lg font-bold text-slate-800">{app.title}</h3>

          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1 text-green-500 font-bold text-xs">
              <img className="w-3 h-3" src={downloadImage} alt="downloads" />
              {formatNumber(app.downloads)}
            </div>

            <div className="flex items-center gap-1 text-orange-500 font-bold text-xs">
              <img className="w-3 h-3" src={starImage} alt="ratings" />
              {app.ratingAvg}
            </div>

            <div className="text-slate-400 text-xs font-medium">{app.size} MB</div>
          </div>
        </div>
      </div>

      {/* Uninstall Button */}
      <button
        onClick={() => handleUninstallBtn(app.id)}
        className="btn bg-purple-500 hover:bg-purple-600 text-white btn-sm px-10 rounded normal-case mt-4 md:mt-0"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstalledApps;