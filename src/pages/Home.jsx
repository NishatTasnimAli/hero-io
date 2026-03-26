import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import TrendingApps from "../components/TrendingApps";

const Home = () => {
  const appsData = useLoaderData();
  return (
     <div className="overflow-x-hidden">
      <Banner />
      <TrendingApps appsData={appsData} />
    </div>
  );
};

export default Home;