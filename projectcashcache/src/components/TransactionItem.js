import React from "react";

const TransactionItem = ({ transaction }) => {
  return (
    <div
      className={`${
        transaction.type === "deposit" ? "bg-green-200" : "bg-red-200"
      }`}
    >
      <div className="flex justify-center content-center shadow-lg rounded-lg mt-8 h-[60] p-4">
        <div className="flex w-full justify-between px-8 ">
          <div>
            <span>Type: </span>
            <span className="font-bold">{transaction?.type}</span>
          </div>
          <div>
            <span>Amount: </span>
            <span className="font-bold">{transaction?.amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
