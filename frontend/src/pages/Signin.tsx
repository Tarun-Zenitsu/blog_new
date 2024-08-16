import Auth from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <div className="w-full lg:w-1/2">
        <Auth type="signin" />
      </div>
      <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
        <Quote />
      </div>
    </div>
  );
};

export default Signin;
