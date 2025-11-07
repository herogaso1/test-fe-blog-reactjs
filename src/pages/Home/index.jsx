import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div>
        <div className="text-center mt-10 mb-8">
          <h1 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
            Your own
            <span className="text-primary">blogging</span>
            <br /> platform.
          </h1>
          <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether it's one word or a thousand, your
            story starts right here.
          </p>
          <div className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden">
            <input
              placeholder="Enter search title..."
              className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-base md:text-sm"
              value=""
            ></input>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-primary text-white px-8 py-2 m-1.5 rounded transition-all cursor-pointer hover:bg-primary/90 focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              Search
            </button>
          </div>
        </div>
        <div className="min-h-[200px]">
          <p className="text-center text-gray-500 text-xl font-medium mb-1">
            We could not find any blog
          </p>
          <p className="text-center text-gray-500 text-xs">
            Please try again with a different search query.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
