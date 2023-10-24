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
    <SignupWrapper>
      <div className="cover-image">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="content-container">
            <div className="form-container">
              <h1>რეგისტრაცია</h1>
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
                <button className="signup-btn">Sign Up</button>
                <div className="checkbox-container">
                  <p>
                    <input type="checkbox" />
                    დამახსოვრება
                  </p>
                </div>
                <p className="span-section">
                  <span>უკვე გაქვთ ანგარიში?</span>{" "}
                  <Link to="/login">შესვლა</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SignupWrapper>
  );
};

export default Signup;

const SignupWrapper = styled.div`
     font-family: "BPG LE Studio 02", sans-serif;
  .cover-image {
    background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media(max-width: 768px){
      background-image: none;
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px 40px;
    position: relative;
    top: 7px;
    @media(max-width: 768px){
      height: 80vh;
    }
  }

  .content-container {
    display: flex;
    background-color: black;
    max-width: 450px;
    height: 500px;
    background-color: black;
    opacity: 0.9;
    padding: 20px 40px;
    border-radius: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 298px;
  }

  .checkbox-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
  }

  input {
    padding: 10px;
    color: var(--clr-primary-default);
    margin-bottom: 15px;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  input:focus {
    outline: none;
  }

  .signup-btn {
    maring-top: 50px;
    padding: 13px;
    background-color: var(--clr-active);
    border: none;
    border-radius: 5px;
    color: var(--be-text);
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  } 

  .span-section{
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: var(--be-text);
    a {
      color: var(--clr-active);
      font-weight: bold;
      text-decoration: none;
    }
  }
`;
