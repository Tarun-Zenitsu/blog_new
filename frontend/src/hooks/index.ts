import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: string;
  createdAt: string;
  author: {
    name: string;
  };
}

const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User is not authenticated.");
        }

        const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBlogs(res.data.blogs);
      } catch (error: any) {
        console.error("Error fetching blogs:", error);
        setError(error.response?.data?.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
    setBlogs, // <-- Exposing setBlogs
    error,
  };
};

export default useBlogs;
