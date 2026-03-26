import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ErrorLayout({ errorComponent }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex justify-center items-center">
        {errorComponent}
      </main>
      <Footer />
    </div>
  );
}