import React from "react";
import { Link } from "react-router";
import downloadIcon from "../assets/icon-downloads.png";
import starIcon from "../assets/icon-ratings.png";
import { formatNumber } from "../utility/formatNumber";

const App = ({ app }) => {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition duration-300 text-left block"
    >

      <div className="bg-gray-100 rounded-xl p-5 flex items-center justify-center">
        <img
          className="w-16 h-16 object-contain"
          src={app.image}
          alt={app.title}
        />
      </div>


      <h2 className="text-[16px] font-semibold text-gray-900 mt-4 leading-tight">
        {app.title}
      </h2>

      {/* Stats */}
      <div className="flex justify-between items-center mt-4">
        
        {/* Downloads */}
        <div className="flex items-center gap-1 text-xs font-medium text-[#00D390] bg-[#00D390]/10 px-2.5 py-1 rounded-md">
          <img className="w-3 h-3" src={downloadIcon} alt="" />
          {formatNumber(app.downloads)}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-xs font-medium text-[#FF8811] bg-[#FF8811]/10 px-2.5 py-1 rounded-md">
          <img className="w-3 h-3" src={starIcon} alt="" />
          {app.ratingAvg}
        </div>
      </div>
    </Link>
  );
};

export default App;