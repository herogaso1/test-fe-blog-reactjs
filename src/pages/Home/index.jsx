import React, { useState } from "react";
import Logo from "@/assets/logo-lGLL0Zb0.png";
import { Input } from "@/components/ui/input";
import { DialogAuth } from "@/components/DialogAuth";
function Home() {
  return (
    <div>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <div className="text-center mt-10 mb-8">
            <h1 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
              Your own <span className="text-primary">blogging</span> platform.
            </h1>
            <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
              This is your space to think out loud, to share what matters, and
              to write without filters. Whether it's one word or a thousand,
              your story starts right here.
            </p>
            <form className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden">
              <Input
                placeholder="Enter search title..."
                className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-base md:text-sm"
                value=""
              ></Input>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-blue-700 text-white px-8 py-2 m-1.5 rounded transition-all hover:cursor-pointer hover:bg-blue-600 focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                Search
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            <div>
              <a
                className="grid h-full"
                data-discover="true"
                href="/blog-details/6907271b51815442eb7df4e1"
              >
                <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                  <img
                    alt="test"
                    className="w-full h-48 object-cover"
                    src={Logo}
                  ></img>
                  <div className="p-4 bg-card">
                    <div className="flex gap-2 mb-2">
                      <span className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-[#dcdafa] text-primary rounded-full">
                        Test
                      </span>
                    </div>
                    <h5 className="text-lg font-semibold mb-2 text-ellipsis whitespace-nowrap overflow-hidden">
                      test
                    </h5>
                    <p className="text-foreground mb-2 text-xs">Test...</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
