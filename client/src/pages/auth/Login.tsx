import React, { useState, useContext, useEffect } from "react";
import { loginUser } from "../../services/apiService";
import { DataContext } from "../../context/Dataprovider";
import { useNavigate } from "react-router-dom";
import { getPublicIP } from "../../utils/common-utils";
import { Input } from "@/components/ui/input";

export default function Login({ setAuthentication }) {
  const token = sessionStorage.getItem("accessToken");
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function onInputChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const loginuser = async () => {
    const ip = await getPublicIP();
    let data = await loginUser({ ...user, deviceIp: ip });

    if (data.success) {
      setError("");
      sessionStorage.setItem("accessToken", data.user.token);
      sessionStorage.setItem("refreshToken", data.user.refreshToken);
      setAccount({ email: data.user.email, token: data.user.token });
      setAuthentication(true);
      navigate("/");
    } else {
      setError("Something went wrong. Please try again later");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-100 font-montserrat">
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-[650px] max-w-full min-h-[480px] relativep-8">
        <div className="flex flex-col items-center justify-center w-1/2 px-6">
          <h1 className="text-2xl font-bold">Login</h1>
          <div className="flex my-4 space-x-4">
            <span className="text-sm text-gray-700 cursor-pointer">Google</span>
            <span className="text-sm text-gray-700 cursor-pointer">
              Facebook
            </span>
          </div>
          <span className="text-xs text-gray-600">or use your account</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={onInputChange}
            className="w-full p-3 mt-2 border-none bg-gray-tertiary rounded-xl focus:outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={onInputChange}
            className="w-full p-3 mt-2 border-none rounded-xl bg-gray-tertiary focus:outline-none"
          />
          <span className="mt-2 text-xs text-gray-600 cursor-pointer">
            Forgot your password?
          </span>
          <button
            className="px-12 py-3 mt-4 text-sm font-bold text-white uppercase transition bg-red-500 rounded-full hover:bg-red-600"
            onClick={loginuser}
          >
            Log In
          </button>
          <span
            className="mt-4 text-sm text-gray-700 cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Don't have an account? Sign Up
          </span>
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 h-full p-8 text-white bg-gradient-to-r from-red-500 to-pink-500">
          <h1 className="text-3xl font-bold">Login to BlogSpot</h1>
          <p className="mt-4 text-sm text-center">
            This platform is easy and simple to use. Create your own blog posts,
            share, like, and follow others.
          </p>
        </div>
      </div>
    </div>
  );
}
