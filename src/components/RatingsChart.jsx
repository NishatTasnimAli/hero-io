import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const RatingsChart = ({ ratings }) => {
  const reversedRatings = [...ratings].reverse();

  return (
    <div className="p-6">
      <h3 className="font-bold text-lg mb-4">Ratings</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={reversedRatings}
          layout="vertical"
          margin={{ top: 0, right: 20, left: 10, bottom: 0 }}
        >
          <CartesianGrid horizontal={false} stroke="#f0f0f0" />
          <XAxis type="number" tick={{ fontSize: 12, fill: "#999" }} axisLine={false} tickLine={false} tickFormatter={(val) => val.toLocaleString()} />
          <YAxis type="category" dataKey="name" tick={{ fontSize: 12, fill: "#555" }} axisLine={false} tickLine={false} width={45} />
          <Tooltip formatter={(value) => [value.toLocaleString(), "Count"]} cursor={{ fill: "#f5f5f5" }} contentStyle={{ borderRadius: "8px", border: "none", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }} />
          <Bar dataKey="count" fill="#F97316" barSize={32} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;