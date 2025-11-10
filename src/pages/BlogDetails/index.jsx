import { Input } from "@/components/ui/input";
import React from "react";
import { blogDetail } from "@/services/api/blog.js";
import ContentLoader from "react-content-loader";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import loadingAnimation from "@/assets/loading_files.json";

function BlogDetails() {
  const [blog, setBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [notFound, setNotFound] = React.useState(false);
  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      setLoading(true);
      setNotFound(false);
      blogDetail(id)
        .then((response) => {
          setBlog(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error loading blog:", error);
          setLoading(false);
          // Nếu không tìm thấy blog (404) thì set notFound = true
          if (error.response?.status === 404) {
            setNotFound(true);
            setBlog(null);
          }
        });
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <ContentLoader
          speed={2}
          width={1000}
          height={600}
          viewBox="0 0 1000 600"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="20" y="20" rx="5" ry="5" width="960" height="20" />
          <rect x="20" y="60" rx="5" ry="5" width="960" height="20" />
          <rect x="20" y="100" rx="5" ry="5" width="960" height="20" />
          <rect x="20" y="140" rx="5" ry="5" width="960" height="20" />
          <rect x="20" y="180" rx="5" ry="5" width="960" height="20" />
        </ContentLoader>
      </div>
    );
  }

  if (!blog) {
    return (
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: 800, height: 200 }}
      />
    );
  }

  const { title, content, img, tags } = blog;

  return (
    <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
      <div>
        <div>
          <div className="text-center">
            <p className="text-primary font-medium">
              Published on November 2, 2025
            </p>
            <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto py-4">
              {title}
            </h1>
            <div className="flex justify-center gap-2">
              {tags?.map((tag) => (
                <p
                  key={tag}
                  className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
            <img alt={title} className="rounded-3xl mb-5 mx-auto" src={img} />
          </div>
          <div className="blog-details rich-text max-w-3xl mx-auto px-4 text-left text-foreground">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
