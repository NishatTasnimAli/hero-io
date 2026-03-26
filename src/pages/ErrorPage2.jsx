import React from "react";
import appError from '../assets/App-Error.png'
import { Link } from 'react-router';

export default function ErrorPage2() {
  return (
    <div className="text-center py-20 text-gray-500">
      <img src={appError} alt="App Error" className="mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-4">No Apps Found</h2>
      <p>Try searching with a different keyword.</p>
    </div>
  );
}