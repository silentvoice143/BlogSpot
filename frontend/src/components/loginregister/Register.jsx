import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
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
    signupUser(sign_user)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        // alert("Error");
        console.log(err);
      });
  }
  return (
    <div className="container-wrapper">
      <div className="container" id="container">
        <div className="form-container log-in-container">
          <form action="#">
            <h1>Sign Up</h1>
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
              name="name"
              type="name"
              placeholder="Name"
              value={sign_user.name}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={sign_user.email}
              onChange={(e) => {
                onInputChange(e);
              }}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={sign_user.password}
              onChange={(e) => {
                onInputChange(e);
              }}
            />

            <button
              className="login-btn"
              onClick={(e) => {
                signupuser(e);
              }}
            >
              Signup
            </button>
            <span
              className="links"
              onClick={(e) => {
                navigate("/login");
              }}
            >
              Already have an account? Sign In
            </span>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
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
