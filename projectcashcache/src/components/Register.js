import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { register } from "../api/auth";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userInfo, setUserInfo] = useState({});
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      console.log(e.target.value);
    }
  };

  const { mutate: registerfn } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo),
    onSuccess: () => setUser(true),
  });

  const handleForm = (e) => {
    e.preventDefault();
    registerfn();
    navigate("/myprofile");
  };
  return (
    <div className="flex justify-center content-center mt-[100px] h-max">
      <div>
        <div className="max-w-1/3 ">
          <div className="flex mx-auto gap-2 "></div>
          <div className="font-sans text-2xl font-black text-center my-8">
            Welcome to your Bank
          </div>
          <h1 className="font-sans text-4xl font-black text-center mt-4">
            Register
          </h1>
          <form onSubmit={handleForm} className="mt-8 mx-auto">
            <label htmlFor="name" className="my-4 flex content-center gap-4">
              <span className="w-1/3 self-center text-sm font-medium">
                Username
              </span>
              <input
                type="text"
                id="name"
                name="username"
                onChange={handleChange}
                className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              ></input>
            </label>
            <label
              htmlFor="password"
              className="my-4 flex content-center gap-4"
            >
              <span className="w-1/3 self-center text-sm font-medium">
                Password
              </span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="w-2/3 mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              ></input>
            </label>
            <label htmlFor="image" className="my-4 flex content-center gap-4">
              <span className="w-1/3 self-center text-sm font-medium">
                Profile Image
              </span>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className=" w-2/3 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                required
              ></input>
            </label>
            <button
              type="submit"
              className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-white hover:text-yellow-500 w-full my-8"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
