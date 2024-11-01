import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import axios from "axios";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/Register", values)
      .then((res) => {
        console.log("Response:", res.data); // Pour déboguer
        if (res.data.status == "Succes !") {
          navigate("/Login");
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
    <div className="w-full h-screen flex items-center justify-center fixed bg-gray-300 ">
      <div className=" max-w-[30rem] w-full lg:max-w-sm  ">
        <div className="bg-blue-300 rounded-2xl px-4 pt-4 pb-4 border-2 border-indigo-300">
          <div className="flex justify-center mb-2">
            <FaUserSecret className="text-[95px]   " />
          </div>
          <h1 className=" font-extrabold text-xl bg-gray-300 p-2 rounded-md  mb-3">
            Sign-Up{" "}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 flex flex-col">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                id="name" // Ajout d'un id pour le label
                className="p-3 hover:bg-slate-300 rounded-md transition-all duration-300"
                type="text"
                placeholder="Enter your Name..."
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                required
              />
            </div>
            {/* Enter your email */}
            <div className="mb-3 flex flex-col">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                id="email" // Ajout d'un id pour le label
                className="p-3 hover:bg-slate-300 rounded-md transition-all duration-300"
                type="email" // Changement du type à "email" pour validation automatique
                placeholder="Enter your Email..."
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                required
              />
            </div>
            {/* Enter your Password */}
            <div className="mb-3 flex flex-col">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                id="password" // Ajout d'un id pour le label
                className="p-3 hover:bg-slate-300 rounded-md transition-all duration-300"
                type="password"
                placeholder="Enter your password..."
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                required
              />
            </div>
            {/* Sign Up */}
            <div className="mb-4">
              <button
                type="submit"
                className="bg-emerald-500 text-white  w-full p-3 font-bold rounded-md hover:bg-yellow-200 hover:text-black"
              >
                Sign Up
              </button>
              <div className="flex items-center  gap-3 mt-3">
                <input className="space-x-3" type="checkbox" />
                <p className="text-sm font-bold text-center">
                  Your agree to aour terms and policies{" "}
                </p>
              </div>
            </div>
            <Link to="/">
              <button
                type="button"
                className="bg-gray-600 w-full text-white  font-bold p-3 rounded-md hover:bg-amber-200 "
              >
                Login
              </button>
            </Link>
            <div className="mt-3">
              <p className="text-center font-extrabold">
                droit d`auteur Theodore711@2024
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
