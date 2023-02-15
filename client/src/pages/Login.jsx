import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Logo from "../assets/logo.svg";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem("simple-chat-app-user")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("simple-chat-app-user", JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { username, password } = values;
    if (password === "") {
      toast.error("Please fill out Username and Password", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Please fill out Username and Password", toastOptions);
      return false;
    }
    return true;
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="Logo" />
          </div>
          <input
            type="text"
            placeholder="Username"
            min="4"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Sign Up.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #16161e;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 20rem;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    background-color: #1a1b26;
    border-radius: 2rem;
    padding: 2rem 6rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #03989e;
      border-radius: 1rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid white;
        outline: none;
      }
      &:hover {
        border: 0.1rem solid #737373;
      }
    }
    button {
      background-color: #737373;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 1rem;
      font-size: 1rem;
      text-transform: uppercase;
      &:hover {
        background-color: #03989e;
      }
    }
    span {
      color: white;
      text-align: center;
      a {
        color: #03989e;
        text-decoration: none;
        &:hover {
          color: #737373;
        }
      }
    }
  }
`;
