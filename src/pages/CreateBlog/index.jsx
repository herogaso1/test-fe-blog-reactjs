import { Input } from "@/components/ui/input";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/UploadImage";
import React from "react";
import { useState } from "react";
import { createblog } from "@/services/api/blog";
function CreateBlog() {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [listTag, setListTag] = useState([]);

  const handleUploadFile = (file) => {
    setFile(file);
  };

  const handleCreateBlog = async () => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await res.json();
    console.log(result.secure_url); // ==> URL ảnh
    setImageUrl(result.secure_url);
  };
  const handleAddTag = () => {
    if (tag.trim()) {
      const newTag = [...listTag, tag.trim()];
      setListTag(newTag);
      console.log("listTag", listTag);
      setTag("");
    }
  };
  const handleRemoveTag = (index) => {
    const newTag = [...listTag];
    newTag.splice(index, 1);
    setListTag(newTag);
  };
  return (
    <div>
      <div className="grid gap-6 px-5 mx-auto max-w-7xl my-20 min-h-[60vh]">
        <div>
          <h2 className="hero-title text-3xl sm:text-6xl font-semibold sm:leading-[4rem] text-primary text-center mt-10 mb-8">
            📝 Create a New Blog
          </h2>
          <div className="grid gap-6">
            <div className="space-y-4">
              <div className="grid gap-2  ">
                <legend className="font-medium">Blog Image</legend>
                <UploadImage onUpload={handleUploadFile} />
              </div>
            </div>
            <div className="grid gap-2">
              <label data-slot="label" value={title}>
                Blog Title
              </label>
              <Input
                data-slot="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <label
                data-slot="label"
                class="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                for="content"
              >
                Blog Content
              </label>
              <Editor
                value={content}
                onChange={(e) => setContent(e.target.value)}
                apiKey="2rf52b8n1vgp6f6dp0fd0jxevoyp9gj7x9rbwq0wbf0smge3"
                init={{
                  plugins: [
                    // Core editing features
                    "anchor",
                    "autolink",
                    "charmap",
                    "codesample",
                    "emoticons",
                    "link",
                    "lists",
                    "media",
                    "searchreplace",
                    "table",
                    "visualblocks",
                    "wordcount",
                    // Your account includes a free trial of TinyMCE premium features
                    // Try the most popular premium features until Nov 29, 2025:
                    "checklist",
                    "mediaembed",
                    "casechange",
                    "formatpainter",
                    "pageembed",
                    "a11ychecker",
                    "tinymcespellchecker",
                    "permanentpen",
                    "powerpaste",
                    "advtable",
                    "advcode",
                    "advtemplate",
                    "ai",
                    "uploadcare",
                    "mentions",
                    "tinycomments",
                    "tableofcontents",
                    "footnotes",
                    "mergetags",
                    "autocorrect",
                    "typography",
                    "inlinecss",
                    "markdown",
                    "importword",
                    "exportword",
                    "exportpdf",
                  ],
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                  tinycomments_mode: "embedded",
                  tinycomments_author: "Author name",
                  mergetags_list: [
                    { value: "First.Name", title: "First Name" },
                    { value: "Email", title: "Email" },
                  ],
                  ai_request: (request, respondWith) =>
                    respondWith.string(() =>
                      Promise.reject("See docs to implement AI Assistant")
                    ),
                  uploadcare_public_key: "6498bef256d99dc0e4b6",
                }}
                initialValue="Welcome to TinyMCE!"
              />
            </div>
            <div className="grid gap-2">
              <label
                data-slot="label"
                className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
                for="tag"
              >
                Blog Tag
              </label>
              <div class="flex gap-2">
                <Input
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Enter blog tag"
                />
                <Button onClick={handleAddTag}>Add Tag</Button>
              </div>
              {listTag ? (
                <div className="flex gap-2">
                  {listTag.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-200 px-2 rounded-full flex items-center gap-2"
                    >
                      {item}
                      <svg
                        onClick={() => handleRemoveTag(index)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="tabler-icon tabler-icon-x cursor-pointer w-3 h-3"
                      >
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <Button onClick={handleCreateBlog}>Create Blog</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlog;
