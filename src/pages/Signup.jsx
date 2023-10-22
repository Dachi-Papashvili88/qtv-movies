import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="/"
      />
      <div className="bg-overlay"></div>
      <div className="content-container">
        <div className="form-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit} className="form">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
            <button>Sign Up</button>
            <div className="checkbox-container">
              <p>
                <input type="checkbox" />
                Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p>
              <span>Already subscribed to Netflix?</span> <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
      </>
  );
};

export default Signup;
