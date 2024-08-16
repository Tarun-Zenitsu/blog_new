import { Link, useNavigate } from "react-router-dom";
import InputBox from "./InputBox";
import { SignupInput } from "@tarun_zenitsu/blog";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInput, setPostInput] = useState<SignupInput>({
    email: "",
    name: "",
    password: "",
  });
  console.log(postInput);

  async function sendRequest() {
    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInput
      );
      const jwt = res.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blog");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="gap-4 flex flex-col">
        <div className="px-8">
          <h1 className="text-3xl font-semibold">Create an Account</h1>
          <div className="flex gap-1 justify-center">
            <h2 className="text-gray-600 font-medium">
              {type === "signup"
                ? "Alredy have an account?"
                : "Don't have an account?"}
            </h2>
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="text-blue-700 underline"
            >
              {type === "signup" ? "SignIn" : "SignUp"}
            </Link>
          </div>
        </div>
        <InputBox
          label="Email"
          placeholder="tarun@gmail.com"
          onChange={(e) =>
            setPostInput({
              ...postInput,
              email: e.target.value,
            })
          }
        />
        {type === "signup" && (
          <InputBox
            label="Username"
            placeholder="John Doe"
            onChange={(e) =>
              setPostInput({
                ...postInput,
                name: e.target.value,
              })
            }
          />
        )}
        <InputBox
          label="Password"
          placeholder="Password"
          onChange={(e) =>
            setPostInput({
              ...postInput,
              password: e.target.value,
            })
          }
          type="password"
        />
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full "
          onClick={sendRequest}
        >
          {type === "signup" ? "Sign Up" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default Auth;
