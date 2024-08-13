import { useNavigate } from "react-router-dom";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex items-center justify-center h-screen">
      <form action="">
        <div className="px-5">
          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <h2 className="text-gray-600 font-medium">
            Alredy have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="cursor-pointer"
            >
              Signin
            </span>
          </h2>
        </div>

        <h1 className="mt-2">Username</h1>
        <input
          type="text"
          placeholder="your name"
          className="w-full outline-none border-2 border-gray-800 rounded-lg h-9 p-2"
        />
        <h1 className="mt-2">Username</h1>
        <input
          type="text"
          placeholder="your name"
          className="w-full outline-none border-2 border-gray-800 rounded-lg h-9 p-2"
        />
        <h1 className="mt-2">Username</h1>
        <input
          type="text"
          placeholder="your name"
          className="w-full outline-none border-2 border-gray-800 rounded-lg h-9 p-2"
        />
      </form>
    </div>
  );
};

export default Auth;
