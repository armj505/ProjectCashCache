import React from "react";
import heroImg from "../img/hero1.png";

const Home = () => {
  return (
    <div className="flex mt-[100px] h-max">
      <div className="w-1/2 flex flex-col justify-center content-start mx-auto">
        <h1 className="font-sans font-black text-3xl mb-5 pt-5 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-slate-500">
          Clients 1st. Community 1st.
        </h1>
        <p className="font-sans font-medium text-base mb-5 text-slate-500 pr-4">
          We support your ambitions, wherever you are on your financial journey.
        </p>
        <a
          href="/"
          className="bg-yellow-500  mx-auto py-2 px-4 rounded-lg hover:bg-white hover:text-yellow-500"
        >
          Discover More
        </a>
      </div>
      <div className="w-1/2 bg-cover">
        <img src={heroImg} alt="hero Img" className="" />
      </div>
    </div>
  );
};

export default Home;
