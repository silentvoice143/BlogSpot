import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../../services/apiService.js";

export default function Register() {
  const navigate = useNavigate();
  const registerdetail = {
    name: "",
    email: "",
    password: "",
  };

  const [sign_user, setUser] = useState(registerdetail);
  function onInputChange(e) {
    // console.log({ [e.target.name]: e.target.value });
    setUser({ ...sign_user, [e.target.name]: e.target.value });
  }

  async function signupuser(e) {
    e.preventDefault();
    const data = await signupUser(sign_user);
    console.log(data);
  }
  return (

    <div className="flex flex-col justify-center items-center h-screen bg-pink-100 font-montserrat">
      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-[650px] max-w-full min-h-[480px] relativep-8">
        <div className="flex flex-col items-center justify-center w-1/2 px-6">
          <h1 className="font-bold text-2xl">Sign up</h1>
          <div className="my-4 flex space-x-4">
            <span className="cursor-pointer text-gray-700 text-sm">Google</span>
            <span className="cursor-pointer text-gray-700 text-sm">Facebook</span>
          </div>
          <span className="text-xs text-gray-600">or use your account</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={sign_user.email}
            onChange={onInputChange}
            className="w-full bg-gray-200 p-3 mt-2 rounded border-none focus:outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={sign_user.password}
            onChange={onInputChange}
            className="w-full bg-gray-200 p-3 mt-2 rounded border-none focus:outline-none"
          />
          <span className="text-xs text-gray-600 cursor-pointer mt-2">Forgot your password?</span>
          <button
            className="bg-red-500 text-white font-bold py-3 px-12 rounded-full uppercase text-sm mt-4 hover:bg-red-600 transition"
            onClick={signupUser}
          >
            Sign Up
          </button>
          <span
            className="text-sm text-gray-700 cursor-pointer mt-4"
            onClick={() => navigate("/login")}
          >
            Already have an account? Login
          </span>
        </div>
        <div className="h-full w-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold text-center">Sign up to BlogSpot</h1>
          <p className="text-center mt-4 text-sm">
            This platform is easy and simple to use. Create your own blog posts, share, like, and follow others.
          </p>
        </div>
      </div>

    </div>
  );
}
