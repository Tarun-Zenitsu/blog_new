import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import useBlogs from "../hooks";

const Blogs = () => {
  const { loading, blogs, setBlogs } = useBlogs();

  const handleDelete = (id: string) => {
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id)); // Update the list of blogs
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AppBar />
      <div className="flex items-center max-w-2xl flex-col mx-auto min-h-screen px-2">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogCard
              blogId={blog.id}
              key={blog.id}
              authorName={blog.author.name || "Anonymous"}
              publishedDate={new Date(blog.createdAt).toLocaleDateString()}
              title={blog.title}
              content={blog.content}
              onDelete={handleDelete} // Pass the delete handler to BlogCard
            />
          ))
        ) : (
          <div>No blogs available</div>
        )}
      </div>
    </>
  );
};

export default Blogs;
