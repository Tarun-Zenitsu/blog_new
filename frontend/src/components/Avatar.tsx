const Avatar = ({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-300 rounded-full cursor-pointer shadow-md ${
        size === "small" ? "w-7 h-7" : "w-10 h-10"
      }`}
    >
      <span className="font-medium text-lg">{name[0]}</span>
    </div>
  );
};

export default Avatar;
