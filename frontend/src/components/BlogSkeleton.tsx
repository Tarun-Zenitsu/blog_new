const BlogSkeleton = () => {
  return (
    <div
      role="status"
      className="p-4 space-y-4 shadow-sm animate-pulse md:p-6 max-w-3xl mx-auto mt-12"
    >
      <div className="flex flex-col gap-14">
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-3">
            <div className="h-2.5 bg-gray-300 rounded-full  w-52 mb-2.5"></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="flex gap-4 flex-col mt-9">
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-4">
            <div className="h-2.5 bg-gray-300 rounded-full  w-52 mb-2.5"></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="flex gap-5 flex-col mt-9">
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-3">
            <div className="h-2.5 bg-gray-300 rounded-full  w-52 mb-2.5"></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
            <div className="w-96 h-2 bg-gray-200 rounded-full "></div>
          </div>
          <div className="flex gap-4 flex-col mt-9">
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
            <div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BlogSkeleton;
