import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getTransactions } from "../api/auth";
import TransactionItem from "./TransactionItem";
import { useSearchParams } from "react-router-dom";

const TransactionList = () => {
  const [query, setQuery] = useState("");
  const [searchParam, setSearchParam] = useSearchParams();

  const filter = searchParam.get(`filter`);
  const { data: transactionList_ } = useQuery({
    queryKey: ["tranactions"],
    queryFn: () => getTransactions(),
  });

  const transactions =
    query !== ""
      ? transactionList_?.filter((transaction) => transaction.amount === query)
      : transactionList_;

  const filteredTreansactions =
    filter !== null
      ? transactions
          ?.filter((transaction) => transaction.type === filter)
          .map((transaction) => (
            <TransactionItem transaction={transaction} key={transaction._id} />
          ))
      : transactionList_?.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction._id} />
        ));

  return (
    <div className="flex flex-col px-4 w-full  ">
      <h1 className=" inline-block text-lg font-bold">Transactions</h1>
      <input
        className=" w-full mt-1 block px-3 py-2 bg-white border border-slate-900 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
        placeholder="Search Transactions"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      ></input>
      <div className="flex justify-center gap-8 py-3">
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-transparent hover:text-blue-500"
          onClick={() => {
            setSearchParam({ filter: "transfer" });
          }}
        >
          Transfers
        </button>
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-trnsaparent hover:text-blue-500"
          onClick={() => {
            setSearchParam({ filter: "deposit" });
          }}
        >
          Deposits
        </button>
        <button
          className="bg-blue-500 text-white py-1 px-2 rounded-lg hover:bg-transparent hover:text-blue-500"
          onClick={() => {
            setSearchParam({ filter: "withdraw" });
          }}
        >
          Withdraws
        </button>
      </div>
      <div className="">{filteredTreansactions}</div>
    </div>
  );
};

export default TransactionList;
