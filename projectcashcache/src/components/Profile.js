import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile, putDeposit, putWithdraw } from "../api/auth";
import { BASE_URL } from "../api";
import TransactionList from "./TransactionList";
import UserList from "./UserList";

const Profile = () => {
  const [view, setView] = useState("transactions");

  const handleClick = (e) => {
    return setView(e);
  };
  const { data: profile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
  });
  const { mutate: deposit } = useMutation({
    mutationKey: ["deposit"],
    mutationFn: (v) => putDeposit(v),
  });
  const { mutate: withdraw } = useMutation({
    mutationKey: ["withdraw"],
    mutationFn: (v) => putWithdraw(v),
  });

  return (
    <div className="flex flex-col pt-[100px]">
      <div className="h-full  first-letter:gap-9 bg-yellow-500 pt-2">
        <div className="flex w-auto justify-around py-2">
          <img
            className="rounded-full w-20   "
            src={BASE_URL + "/" + profile?.image}
            alt="pfp"
          />
          <ul className="flex flex-col items-center w-auto gap-4  font-sans">
            <li>
              <span>Welcome,</span> {profile?.username}
            </li>
            <li>
              <span>Available Balance: </span>${profile?.balance}
            </li>
          </ul>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => deposit(1000)}
              className="bg-green-500 text-black py-1 px-2 rounded-lg hover:bg-yellow-500 hover:text-slate-500"
            >
              Deposit
            </button>
            <button
              onClick={() => withdraw(1000)}
              className=" text-black  py-1 px-2 rounded-lg hover:bg-yellow-500 hover:text-slate-500"
            >
              Withdraw
            </button>
          </div>
        </div>
        <div className="flex flex-col content-center w-full justify-between first-letter:gap-9 bg-slate-500 rounded-t-3xl px-2">
          <div>
            <ul className="flex content-center justify-center w-auto gap-24 font-sans py-4 hover:underline-offset-8">
              <li>
                <button
                  onClick={() => handleClick("transactions")}
                  className="hover:text-black cursor-pointer hover:underline"
                >
                  Transactions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleClick("userlist")}
                  className="hover:text-black cursor-pointer hover:underline"
                >
                  Users
                </button>
              </li>
            </ul>
          </div>
          <div className="flex content-center w-full justify-between bg-white rounded-t-3xl pt-8 px-48 pb-48">
            {view === "transactions" ? <TransactionList /> : <UserList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
