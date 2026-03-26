// Installation.jsx
import React, { useState, useEffect } from "react";
import InstalledApps from "../pages/InstalledAppsPage";
import { getFromLocalStorage, removeFromLocalStorage } from "../utility/localStorage";
import { useLoaderData } from "react-router-dom";
import ErrorPage3 from "./ErrorPage3";
import { toast } from "react-toastify";

export default function Installation() {
  const appsData = useLoaderData();
  const [installedApps, setInstalledApps] = useState([]);
  const [sortType, setSortType] = useState("");

  // Load installed apps from localStorage
  useEffect(() => {
    const installedIds = getFromLocalStorage();
    const filteredApps = appsData.filter((app) => installedIds.includes(app.id));
    setInstalledApps(filteredApps);
  }, [appsData]);

  // Uninstall app handler
  const handleUninstallBtn = (id) => {
    removeFromLocalStorage(id);
    setInstalledApps(installedApps.filter((app) => app.id !== id));
  };

  // Sort apps by download count
  const handleSortBtn = (type) => {
    const sorted = [...installedApps];

    if (type === "highToLow") sorted.sort((a, b) => b.downloads - a.downloads);
    if (type === "lowToHigh") sorted.sort((a, b) => a.downloads - b.downloads);

    setSortType(type === "highToLow" ? "Downloads: High to Low" : "Downloads: Low to High");
    setInstalledApps(sorted);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      <div className="py-16 text-center bg-slate-50/50 mb-10">
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Your Installed Apps</h1>
        <p className="text-slate-500">Manage all your applications in one place</p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* Sort Dropdown + App Count */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            ({installedApps.length}) Apps Found
          </h2>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-md bg-white border-slate-200 text-black font-medium normal-case gap-3 px-4 py-2"
            >
              {sortType || "Sort By Downloads"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-down"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-3 shadow bg-white rounded-box w-52"
            >
              <li>
                <button
                  className="w-full px-4 py-2 bg-white text-black hover:bg-gray-100 hover:text-black"
                  onClick={() => handleSortBtn("highToLow")}
                >
                  High-Low
                </button>
              </li>
              <li>
                <button
                  className="w-full px-4 py-2 bg-white text-black hover:bg-gray-100 hover:text-black"
                  onClick={() => handleSortBtn("lowToHigh")}
                >
                  Low-High
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Installed Apps List */}
        {installedApps.length === 0 ? (
          <ErrorPage3 />
        ) : (
          <div className="space-y-4">
            {installedApps.map((app) => (
              <InstalledApps
                key={app.id}
                app={app}
                handleUninstallBtn={handleUninstallBtn}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}