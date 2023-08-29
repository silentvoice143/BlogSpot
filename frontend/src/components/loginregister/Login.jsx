import React, { useState, useContext } from "react";
import logo from "../images/572.png";
import "./Login.css";
import { loginUser } from "../../services/apiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import { DataContext } from "../../context/Dataprovider";
import { useNavigate, Link, Navigate } from "react-router-dom";
export default function Login({ setAuthentication }) {
  console.log(setAuthentication);
  const navigate = useNavigate();

  const { setAccount } = useContext(DataContext);
  const logindetail = {
    email: "",
    password: "",
  };

  const [log_user, setUser] = useState(logindetail);
  const [error, setError] = useState("");
  function onInputChange(e) {
    setUser({ ...log_user, [e.target.name]: e.target.value });
  }

  const loginuser = async (e) => {
    e.preventDefault();
    // console.log("login in process");
    let response = await loginUser(log_user);
    if (response) {
      // console.log(response.data.accessToken);
      setError("");
      sessionStorage.setItem(
        "accessToken",
        `Bearer ${response.data.accessToken}`
      );
      sessionStorage.setItem(
        "refreashToken",
        `Bearer ${response.data.refreshToken}`
      );

      setAccount({ email: response.data.email, name: response.data.name });
      setAuthentication(true);
      navigate("/");
    } else {
      setError("Something went wrong. Please try again later");
    }
  };
  return (
    <div className="container-wrapper">
      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form action="#">
            <h1>Login</h1>
            <div className="social-container">
              <span className="social links">
                <FontAwesomeIcon
                  icon={icon({ name: "google", style: "brands" })}
                />
              </span>
              <span className="social links">
                <FontAwesomeIcon
                  icon={icon({ name: "facebook", style: "brands" })}
                />
              </span>
            </div>
            <span>or use your account</span>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={log_user.email}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={log_user.password}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <span className="links">Forgot your password?</span>
            <button
              className="login-btn"
              onClick={(e) => {
                loginuser(e);
              }}
            >
              Log In
            </button>
            <span
              className="links"
              onClick={(e) => {
                navigate("/signup");
              }}
            >
              Don't have an account? Sign Up
            </span>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
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
  );
}
