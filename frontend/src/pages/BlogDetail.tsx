import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import AppBar from "../components/AppBar";
import BlogSkeleton from "../components/BlogSkeleton";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
  };
}

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setBlog(res.data.blog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return <BlogSkeleton />;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      <AppBar />
      <div className="max-w-4xl mx-auto mt-10">
        {/* Wrapper to align content and author info */}
        <div className="flex justify-between">
          {/* Blog content on the left */}
          <div className="w-3/4">
            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-600 mb-6">
              Published on: {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <div className="prose">
              <p>{blog.content}</p>
            </div>
          </div>

          {/* Author details on the right */}
          <div className="w-1/4 ml-8 p-4 border-l-2 border-gray-200">
            <h2 className="text-xl font-semibold mb-2">Author Details</h2>
            <p className="text-gray-800">Name: {blog.author.name}</p>
            <p className="text-gray-600">Author bio or other details...</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
