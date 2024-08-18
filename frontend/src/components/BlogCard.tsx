import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface BlogCardProps {
  blogId: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  onDelete: (id: string) => void;
}

const BlogCard = ({
  blogId,
  authorName,
  title,
  content,
  publishedDate,
  onDelete,
}: BlogCardProps) => {
  const navigate = useNavigate();
  const handleBlogClick = () => {
    navigate(`/blog/${blogId}`); // Navigate to the blog's detailed page using its ID
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token"); // Get the JWT token
      await axios.delete(`${BACKEND_URL}/api/v1/blog/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDelete(blogId); // Call the onDelete function to remove the post from the list
    } catch (error) {
      console.error("Failed to delete blog", error);
    }
  };

  return (
    <div className="border-b-2 p-4 w-full max-w-2xl mb-2 rounded-lg shadow-sm bg-white">
      <div className="flex items-center gap-2 mb-2">
        <Avatar size="small" name={authorName} />{" "}
        {/* Dynamically set avatar name */}
        <div>{authorName}</div>
        <div className="text-5xl text-gray-600 flex mb-1">&#183;</div>
        <div className="text-gray-500">{publishedDate}</div>
      </div>
      <div className="cursor-pointer" onClick={handleBlogClick}>
        <div className="text-2xl font-bold">{title}</div>
        <div className="text-base mb-5 font-light">
          {content.length > 200 ? content.slice(0, 200) + "..." : content}
        </div>
      </div>
      <div className="mb-6 flex justify-between">
        <div>{`${Math.ceil(content.length / 100)} minute read`}</div>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
