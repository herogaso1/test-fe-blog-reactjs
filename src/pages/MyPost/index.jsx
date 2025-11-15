import React from "react";
import { createblog } from "@/services/api/blog";

function MyPost() {
  const handleCreateBlog = async (e) => {
    e.preventDefault();

    const blogData = {
      title: e.target.title.value,
      content: e.target.content.value,
      tags: [e.target.tag.value],
      // Image handling would go here
    };
    try {
      const response = await createblog(blogData);
      console.log("Blog created:", response.data);
      // Optionally, redirect to a success page or show a success message
    } catch (error) {
      console.error("Error creating blog:", error);
      // Optionally, show an error message to the user
    } finally {
      // Reset form or perform any cleanup if necessary
      // Reset form fields
      e.target.reset();
    }
  };
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div>
        <h2 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
          📝 Create a New Blog
        </h2>

        <div className="grid gap-6">
          <form className="space-y-4">
            <div className="grid gap-2">
              <legend className="font-medium">Blog Image</legend>

              <div className="border border-dashed border-gray-400 rounded-lg p-4 grid justify-center">
                <label
                  htmlFor="blog-image"
                  className="border-gray-400 rounded-lg p-2 text-center cursor-pointer hover:bg-gray-50 transition"
                >
                  <span className="text-sm text-gray-600">
                    <div className="text-sm text-gray-600 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="tabler-icon tabler-icon-upload inline-block mr-2 w-5 h-5"
                      >
                        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M7 9l5 -5l5 5"></path>
                        <path d="M12 4l0 12"></path>
                      </svg>
                      Click to upload image
                    </div>
                  </span>

                  <input
                    data-slot="input"
                    className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hidden"
                    id="blog-image"
                    accept="image/*"
                    type="file"
                  />
                </label>
              </div>
            </div>
          </form>

          <div className="grid gap-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none"
              htmlFor="title"
            >
              Blog Title
            </label>

            <input
              data-slot="input"
              className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]"
              id="title"
              placeholder="Enter blog title"
            />
          </div>

          <div className="grid gap-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none"
              htmlFor="content"
            >
              Blog Content
            </label>

            {/* TinyMCE Placeholder */}
            <textarea
              id="tiny-react_90371206811762777154962"
              style={{ display: "none" }}
              aria-hidden="true"
            ></textarea>

            <div
              role="application"
              className="tox tox-tinymce"
              aria-disabled="false"
              style={{ visibility: "hidden", height: "400px" }}
            ></div>
          </div>

          <div className="grid gap-2">
            <label
              data-slot="label"
              className="flex items-center gap-2 text-sm leading-none font-medium select-none"
              htmlFor="tag"
            >
              Blog Tag
            </label>

            <div className="flex gap-2">
              <input
                data-slot="input"
                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium"
                id="tag"
                placeholder="Enter blog tag"
              />

              <button
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary hover:bg-primary/90 h-9 px-4 py-2 text-white"
              >
                Add Tag
              </button>
            </div>
          </div>

          <button
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary hover:bg-primary/90 h-9 px-4 py-2 w-fit mx-auto text-white"
          >
            Create Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyPost;
