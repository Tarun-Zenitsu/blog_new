import Avatar from "./Avatar";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border-b-2 p-2">
      <div className="flex items-center gap-2">
        <Avatar size="small" name="Tarun" />
        <div className="">{authorName}</div>
        <div className="text-5xl text-gray-600 flex mb-1">&#183;</div>
        <div className="text-gray-500">{publishedDate}</div>
      </div>
      <div className="cursor-pointer">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-lg mb-5 font-light">
          {content.slice(0, 200) + "..."}
        </div>
      </div>
      <div className="mb-6">
        <div>{`${Math.ceil(content.length / 100)} minute read`}</div>
      </div>
    </div>
  );
};

export default BlogCard;
