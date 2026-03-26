import React from "react";
import { Link } from "react-router";

export default function Error() {
  return (
    <div className="text-center py-40">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">Page Not Found</p>
      <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded">
        Go Home
      </Link>
    </div>
  );
}