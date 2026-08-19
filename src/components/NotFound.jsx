import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-[120px] sm:text-[160px] font-extrabold leading-none tracking-tight text-white">
          404
        </h1>

        {/* Small line */}
        <div className="mx-auto mt-2 mb-6 h-1 w-20 rounded-full bg-indigo-500"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md mx-auto text-slate-400 text-base sm:text-lg">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl
                     bg-indigo-600 text-white font-semibold
                     hover:bg-indigo-500
                     transition-all duration-300
                     hover:-translate-y-1
                     shadow-lg shadow-indigo-600/20"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;