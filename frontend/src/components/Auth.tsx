import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupInputSchema } from "@rahu1_rawat/medium-commons";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState<signupInputSchema>({
    username: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        signupInputs
      );
      const { jwt, username } = response.data;
      localStorage.setItem("token", jwt);
      localStorage.setItem("username", username);
      navigate("/blogs");
    } catch (e) {
      //Handle Error
    }
  }

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div className="w-96 flex justify-center">
        <div className="w-80">
          <div className="flex justify-center">
            <span className="text-4xl font-bold">
              {type === "signup"
                ? "Create an account"
                : "Log in to your account"}
            </span>
          </div>
          <div className="flex justify-center">
            <span className="text-lg text-gray-500">
              {type === "signup"
                ? "Already have an account?"
                : "Don't have an account?"}
              <Link
                to={type === "signup" ? "/signin" : "/signup"}
                className="underline ml-1"
              >
                {type === "signup" ? "Login" : "Signup"}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="w-96">
        {type === "signup" ? (
          <LabelledInput
            label="Username"
            placeholder="Enter your username"
            type="text"
            onChange={(e) => {
              setSignupInputs((prevState: signupInputSchema) => ({
                ...prevState,
                username: e.target.value,
              }));
            }}
          />
        ) : null}
        <LabelledInput
          label="Email"
          placeholder="Enter your email"
          type="text"
          onChange={(e) => {
            setSignupInputs((prevState: signupInputSchema) => ({
              ...prevState,
              email: e.target.value,
            }));
          }}
        />
        <LabelledInput
          label="Password"
          placeholder="Enter your password"
          type="password"
          onChange={(e) => {
            setSignupInputs((prevState: signupInputSchema) => ({
              ...prevState,
              password: e.target.value,
            }));
          }}
        />
        <div className="mt-4">
          <button
            onClick={sendRequest}
            className="bg-black w-full text-white h-11 rounded font-semibold"
          >
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({
  label,
  placeholder,
  type,
  onChange,
}: LabelledInputType) {
  return (
    <div>
      <div className="mt-4">
        <span className="text-xl font-semibold">{label}</span>
      </div>
      <div className="mt-3">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full h-11 rounded border-gray-300 border-2 indent-2"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
