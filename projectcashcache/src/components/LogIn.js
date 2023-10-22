import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logIn } from "../api/auth";
import UserContext from "../context/UserContext";

const LogIn = ({ showModal, setShowModal }) => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { mutate: logIn_ } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: () => logIn(userInfo),
    onSuccess: () => setUser(true),
  });

  const handleForm = (e) => {
    e.preventDefault();
    logIn_();
    navigate("/myprofile");
  };

  if (!showModal) return "";
  return (
    <div className="inset-0 fixed flex justify-center items-center flex-col z-20 overflow-hidden">
      <div className="bg-black absolute z-0 opacity-40 inset-0 "></div>
      <div className="relative z-10 flex flex-col gap-3 rounded-md w-[95%] md:w-[40%] h-[300px] md:h-[80%] bg-white ">
        <button
          onClick={() => setShowModal(false)}
          className="flex justify-end mx-9 my-5 text-xl text-slate-500"
        >
          X
        </button>
        <div className="flex mx-auto gap-2 ">
          <div className="font-sans font-black before:content-['$'] bg-yellow-500 w-7 h-7 text-center text-xl italic rounded-lg text-white"></div>
          <div className="font-semibold text-xl tracking-tighter font-sans flex-shrink">
            Cash Cache Bank
          </div>
        </div>
        <h1 className="font-sans text-4xl font-black text-center mt-4">
          Log In
        </h1>
        <form onSubmit={handleForm} className="mt-8 mx-auto">
          <label className="my-4 flex content-center gap-4">
            <span className="w-1/3 self-center text-sm font-medium">
              Username
            </span>
            <input
              type="text"
              name="username"
              className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              onChange={handleChange}
            ></input>
          </label>
          <label className="my-4 flex content-center gap-4">
            <span className="w-1/3 self-center text-sm font-medium">
              Password
            </span>
            <input
              type="Password"
              name="password"
              onChange={handleChange}
              className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
            ></input>
          </label>
          <Link to="/myprofile">
            <button
              type="submit"
              className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-white hover:text-yellow-500 w-full my-8"
              onClick={(e) => {
                setShowModal(false);
                handleForm(e);
              }}
            >
              Log In
            </button>
          </Link>
          <span className="text-center">
            Need an account?
            <Link
              to="/register"
              className="hover:text-slate-500 cursor-pointer hover:underline"
            >
              <button onClick={() => setShowModal(false)}>Register</button>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
