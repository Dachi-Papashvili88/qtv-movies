import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import styled from "styled-components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)

    }
  };

  return (
    <SignupWrapper>
      <div className="cover-image">
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="content-container">
            <div className="form-container">
              <h1>Sign In</h1>
              {error ? <p>{error}</p> : null}
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
                <button>Sign In</button>
                <div className="checkbox-container">
                  <p>
                    <input type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p>
                  <span>New to Netflix?</span> <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SignupWrapper>
  );
};

export default Login;

const SignupWrapper = styled.nav`
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
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;  

    padding: 20px 40px;
    position: relative;
    top: 7px;

  }

  .content-container {
    display: flex;

    background-color: black;
    max-width: 450px;
    height: 500px;
    background-color: black;
    opacity: 0.9;
    padding: 40px;
    border-radius: 5px;

    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 20px;
    }

    .checkbox-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.7rem;

    }
    
  }
`;
