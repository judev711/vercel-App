// import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function Login() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/", values)
      .then((res) => {
        console.log("Response:", res.data); // Pour déboguer
        if (res.data.status == "Succes !") {
          navigate("/Home");
        } else {
          alert("Error in navigation");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error with your request."); // Alerte en cas d'erreur
      });
  };
  return (
    <div className="w-full h-screen flex items-center justify-center fixed bg-gray-200 ">
      <div className=" max-w-[30rem] w-full lg:max-w-sm shadow-2xl ">
        <div className="bg-blue-300 rounded-2xl px-4 pt-4 pb-4 border-2 border-indigo-300">
          <h1 className=" max-sm:text-[20px]  font-extrabold text-2xl mb-3 bg-gray-300 p-2 rounded-md">
            Sign-In{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            {/* enter your email */}
            <div className="mb-3 flex flex-col">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                className="p-3 hover:bg-slate-300 rounded-md transition-all duration-300"
                type="text"
                placeholder="Enter your Email..."
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                required
              />
            </div>
            {/* Enter your Password */}
            <div className="mb-7 flex flex-col min-sm:gap-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                className="p-3 hover:bg-slate-300 rounded-md transition-all duration-300"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                required
              />
            </div>
            {/* sign up */}
            <div className="mb-3 ma">
              <Link to="/Home">
                <button className="bg-emerald-500 text-white text-xl w-full p-3 font-bold rounded-md hover:bg-yellow-200 hover:text-black ">
                  Login
                </button>
              </Link>
              <p className="text-sm font-bold text-center">
                Your agree to aour terms and policies{" "}
              </p>
            </div>
            <Link to="/register">
              <button className="bg-gray-600 w-[100%] text-white  text-xl text-center font-bold p-3 rounded-md hover:bg-amber-200 hover:text-black  ">
                Create Account
              </button>
            </Link>
            <div className="mt-5 text-center">
              <p className="font-extrabold md:hidden">~~Theodore711@2024~~</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
