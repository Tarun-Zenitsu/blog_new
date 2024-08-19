import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/Publish");
  };
  const redirectToBlog = () => {
    navigate("/blogs");
  };
  return (
    <div className="flex justify-between items-center w-full bg-gray-100 p-4 px-7">
      <div
        className="text-2xl font-bold cursor-pointer shadow-md"
        onClick={redirectToBlog}
      >
        Tarun's Blogs
      </div>
      <div className="flex gap-2">
        <button
          className="bg-green-700 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full"
          onClick={handleOnClick}
        >
          Create Blog
        </button>
        <Avatar name="Tarun" size="big" />
      </div>
    </div>
  );
};

export default AppBar;
