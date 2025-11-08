import { Input } from "@/components/ui/input";
import React from "react";

function BlogDetails() {
  return (
    <>
      <div class="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <div>
            <div class="text-center">
              <p class="text-primary font-medium">
                Published on November 2, 2025
              </p>
              <h1 class="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto! py-4">
                12tsfasdasd
              </h1>
              <p class="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
                lennhatthanh
              </p>
            </div>
            <div class="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
              <img
                alt=""
                class="rounded-3xl mb-5 mx-auto"
                src="http://res.cloudinary.com/dwpizqbrm/image/upload/v1762079079/lv2uuahpvjbfuseoz4vn.jpg"
              />
            </div>
            <div class="blog-details rich-text max-w-3xl mx-auto px-4 text-left text-foreground">
              <p>
                <p>This is the initial content of the editor.</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
