import React from "react";
import { BASE_URL } from "../api";

const UserItem = ({ user }) => {
  return (
    <div className="flex justify-center content-center shadow-lg rounded-lg mt-8 h-[60] p-4">
      <div className="flex w-full justify-between content-center">
        <div className="flex content-center">
          <img
            className="rounded-full w-8 max-w-8 max-h-8 mr-8 "
            src={BASE_URL + "/" + user?.image}
            alt={user.username + "image"}
          />
          <span className="shrink">Name: </span>
          <span className="font-bold">{user?.username}</span>
        </div>
        <button className="bg-green-500 text-black py-1 px-2 rounded-lg hover:bg-yellow-500 hover:text-slate-500">
          Transfer
        </button>
      </div>
    </div>
  );
};

export default UserItem;
