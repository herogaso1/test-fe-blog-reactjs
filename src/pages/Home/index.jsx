import React, { useState } from "react";
import Logo from "@/assets/logo-lGLL0Zb0.png";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { DialogAuth } from "@/components/DialogAuth";
import { searchPosts } from "@/services/api/home.js";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loading_files.json";

function Home() {
  const [searchTitle, setSearchTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasSearched, setHasSearched] = useState(false);

  React.useEffect(() => {
    // Load initial posts
    setLoading(true);
    searchPosts()
      .then((response) => {
        console.log("API Response:", response.data); // Debug log
        // Kiểm tra cấu trúc data
        const postsData = Array.isArray(response.data)
          ? response.data
          : response.data?.posts || response.data?.data || [];
        setPosts(postsData);
      })
      .catch((error) => {
        console.error("Error loading posts:", error);
        setPosts([]); // Set empty array nếu lỗi
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    setLoading(true);
    setHasSearched(true);
    searchPosts({ title: searchTitle })
      .then((response) => {
        console.log("Search Response:", response.data); // Debug log
        // Kiểm tra cấu trúc data
        const postsData = Array.isArray(response.data)
          ? response.data
          : response.data?.posts || response.data?.data || [];
        setPosts(postsData);
      })
      .catch((error) => {
        console.error("Error searching posts:", error);
        setPosts([]); // Set empty array nếu lỗi
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <div className="text-center mt-10 mb-8">
            <h1 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-gray-700">
              Your own <span className="text-primary">blogging</span> <br />{" "}
              platform.
            </h1>
            <p className="my-6 sm:my-8 max-w-2xl mx-auto max-sm:text-xs text-gray-500">
              This is your space to think out loud, to share what matters, and
              to write without filters. Whether it's one word or a thousand,
              your story starts right here.
            </p>
            <div className="flex bg-card justify-between items-center max-w-lg max-sm:scale-75 mx-auto border border-gray-300 rounded overflow-hidden">
              <Input
                onChange={(e) => setSearchTitle(e.target.value)}
                placeholder="Enter search title..."
                className="w-full pl-4 h-9 bg-transparent outline-none border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground text-base md:text-sm"
                value={searchTitle}
              ></Input>
              <button
                onClick={handleSearch}
                type="submit"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-[#5044e5] text-white px-8 py-2 m-1.5 rounded transition-all hover:cursor-pointer hover:bg-[#695ff1] focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                Search
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
            {loading ? (
              // Hiển thị loading khi đang tải
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">Loading...</p>
              </div>
            ) : posts.length === 0 && hasSearched ? (
              // Chỉ hiển thị animation khi đã search và không có kết quả
              <div className="col-span-full flex flex-col items-center justify-center py-12">
                <Lottie
                  animationData={loadingAnimation}
                  loop={true}
                  style={{ width: 400, height: 200 }}
                />
                <h3 className="text-xl font-semibold text-gray-700 mt-4">
                  We could not find any blog
                </h3>
                <p className="text-muted-foreground mt-2">
                  Please try again with a different search query.
                </p>
              </div>
            ) : (
              // Hiển thị danh sách blog từ API
              posts.map((post) => (
                <div key={post._id}>
                  <Link
                    className="grid h-full"
                    data-discover="true"
                    to={`/blog-details/${post._id}`}
                  >
                    <div className="shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-[1.02]">
                      <img
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        src={post.img}
                      />
                      <div className="p-4 bg-card">
                        <div className="flex gap-2 mb-2">
                          {post.tags &&
                            post.tags.length > 0 &&
                            post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center justify-center border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 overflow-hidden border-transparent bg-[#dcdafa] text-primary rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>
                        <h5 className="text-lg font-semibold mb-2 text-ellipsis whitespace-nowrap overflow-hidden">
                          {post.title}
                        </h5>
                        <p className="text-foreground mb-2 text-xs">
                          {post.content?.slice(0, 100)}...
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
