import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    <div>Loding...</div>;
  }
  return (
    <>
      <AppBar />
      <div className="flex items-center max-w-2xl flex-col mx-auto min-h-screen px-2">
        {blogs.map((blog) => (
          <BlogCard
            authorName="Tarun kk"
            publishedDate="12 feb 2024"
            title="how to get 20 dollar in a month how to get 20 dollar in a month"
            content="If you want to make money quickly, then keep trying and push yourself hard. If you want to make money quickly, then keep trying and push yourself hard.how to get 20 dollar in a month, how to get 20 dollar in a month"
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
