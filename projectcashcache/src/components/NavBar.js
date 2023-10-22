import React, { useContext, useState } from "react";
import LogIn from "./LogIn";
import { NavLink, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { logOut } from "../api/auth";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    setUser(false);
    navigate("/");
  };
  return (
    <nav className="fixed top-0 w-2/3 h-[100px] py-8 mb-auto bg-white">
      <div className="flex items-center justify-between flex-wrap ">
        <div className="flex gap-2 grow">
          <div className="font-sans font-black before:content-['$'] bg-yellow-500 w-7 h-7 text-center text-xl italic rounded-lg text-white"></div>
          <NavLink
            to="/"
            className="font-semibold text-xl tracking-tighter font-sans flex-shrink"
          >
            Cash Cache Bank
          </NavLink>
        </div>
        <ul className="flex items-center w-auto gap-9  underline-offset-8 font-sans grow">
          <li className=" hover:text-slate-500 cursor-pointer hover:underline">
            <NavLink to="/">About Us</NavLink>
          </li>

          <li className=" hover:text-slate-500 cursor-pointer hover:underline">
            <NavLink to="/">Contact Us</NavLink>
          </li>
          <li className=" hover:text-slate-500 cursor-pointer hover:underline">
            <NavLink to="/">Branches & ATMs</NavLink>
          </li>
        </ul>
        {user ? (
          <>
            <span className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500 mr-2">
              <NavLink to="/myprofile">Profile</NavLink>
            </span>
            <button
              className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-yellow-500 py-2 px-4 rounded-lg hover:bg-transparent hover:text-yellow-500"
              onClick={() => setShowModal(true)}
            >
              Log In
            </button>
            <LogIn showModal={showModal} setShowModal={setShowModal} />
          </>
        )}
      </div>
    </nav>
  );
};
export default NavBar;
