import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { signupUser } from "../../services/apiService.js";

import { loginUser } from "../../services/apiService.js";
import "./Login.css";

import { DataContext } from "../../context/Dataprovider.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginorSignup() {
  const isLogin = false;
  const navigate = useNavigate();

  const { setAccount } = useContext(DataContext);

  const logindetail = {
    email: "",
    password: "",
  };

  const [log_user, setLogUser] = useState(logindetail);
  const [error, setError] = useState("");
  function onInputloginChange(e) {
    setLogUser({ ...log_user, [e.target.name]: e.target.value });
  }

  const loginuser = async (e) => {
    e.preventDefault();
    console.log("login in process");
    let response = await loginUser(log_user);
    if (response.isSuccess) {
      // console.log(response);
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreashToken",
        `Bearer ${response.data.refreashToken}`
      );

      setAccount({ email: response.data.email, name: response.data.name });
      navigate("/");
    } else {
      setError("Something went wrong. Please try again later");
    }
  };

  const registerdetail = {
    name: "",
    email: "",
    password: "",
  };

  const [sign_user, setSignUser] = useState(registerdetail);
  function onInputsignupChange(e) {
    // console.log({ [e.target.name]: e.target.value });
    setSignUser({ ...sign_user, [e.target.name]: e.target.value });
  }

  async function signupuser(e) {
    e.preventDefault();
    signupUser(sign_user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        // alert("Error");
        console.log(err.response.data);
      });
  }

  return isLogin ? (
    <div className="container-wrapper">
      <div class="container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>
            <div class="social-container">
              <a href="#" class="social">
                <FontAwesomeIcon
                  icon={icon({ name: "google", style: "brands" })}
                />
              </a>
              <a href="#" class="social">
                <FontAwesomeIcon
                  icon={icon({ name: "facebook", style: "brands" })}
                />
              </a>
            </div>
            <span>or use your account</span>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={log_user.email}
              onChange={(e) => {
                onInputloginChange(e);
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={log_user.password}
              onChange={(e) => {
                onInputloginChange(e);
              }}
            />
            <a href="#">Forgot your password?</a>
            <button
              onClick={(e) => {
                loginuser(e);
              }}
            >
              Log In
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Login to BlogSpot</h1>
              <p>
                This platform is easy and simple to use. Create your own blog
                posts share, like and follow others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container-wrapper">
      <div class="container" id="container">
        <div class="form-container log-in-container">
          <form action="#">
            <h1>Signup</h1>
            <div class="social-container">
              <a href="#" class="social">
                <FontAwesomeIcon
                  icon={icon({ name: "google", style: "brands" })}
                />
              </a>
              <a href="#" class="social">
                <FontAwesomeIcon
                  icon={icon({ name: "facebook", style: "brands" })}
                />
              </a>
            </div>
            <span>or use your account</span>
            <input
              name="name"
              type="name"
              placeholder="Name"
              value={sign_user.name}
              onChange={(e) => {
                onInputsignupChange(e);
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={sign_user.email}
              onChange={(e) => {
                onInputsignupChange(e);
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={sign_user.password}
              onChange={(e) => {
                onInputsignupChange(e);
              }}
            />
            <a href="#">Already have an account? Signin</a>
            <button
              onClick={(e) => {
                signupuser(e);
              }}
            >
              Signup
            </button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-right">
              <h1>Signup to BlogSpot</h1>
              <p>
                This platform is easy and simple to use. Create your own blog
                posts share, like and follow others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
