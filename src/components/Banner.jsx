import React from "react";
import playStore from "../assets/Group.png";
import appStore from "../assets/fi_5977575.png";
import bannerImage from "../assets/hero.png";

export default function Banner() {
  return (
    <div className="relative bg-[linear-gradient(180deg,#EEF0F5_0%,#F8F9FC_100%)] pt-28 pb-40 text-center px-4">
      <div className="max-w-[1100px] mx-auto">
        <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.2] text-gray-900">
          We Build <br />
          <span className="bg-[linear-gradient(180deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent">
            Productive{" "}
            <span className="text-[40px] md:text-[56px] font-bold leading-[1.2] text-gray-900">
              Apps
            </span>
          </span>
        </h1>

        <p className="text-gray-500 mt-6 text-[14px] md:text-[16px] max-w-[620px] mx-auto leading-relaxed">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://play.google.com/store/apps" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-200 px-5 py-2.5 rounded-md bg-white shadow-sm hover:shadow-md transition"
          >
            <img src={playStore} alt="Google Play" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">Google Play</span>
          </a>

          <a
            href="https://www.apple.com/store" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-200 px-5 py-2.5 rounded-md bg-white shadow-sm hover:shadow-md transition"
          >
            <img src={appStore} alt="App Store" className="w-5 h-5" />
            <span className="text-sm font-medium text-gray-700">App Store</span>
          </a>
        </div>

        <img
          src={bannerImage}
          alt="Banner"
          className="mx-auto mt-10 w-full max-w-[450px]"
        />
      </div>

      {/* STATS SECTION */}
      <div className="absolute left-0 bottom-6 w-full translate-y-1/2">
        <div className="bg-[linear-gradient(90deg,#632EE3_0%,#9F62F2_100%)] py-14 text-white">
          <div className="max-w-[1500px] mx-auto px-4 text-center">
            <h1 className="text-[30px] md:text-[40px] font-bold mb-8">
              Trusted By Millions, Built For You
            </h1>

            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">29.6M</h2>
                <p className="text-sm opacity-80 mt-1">Total Downloads</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold">906K</h2>
                <p className="text-sm opacity-80 mt-1">Total Reviews</p>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold">132+</h2>
                <p className="text-sm opacity-80 mt-1">Active Apps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}