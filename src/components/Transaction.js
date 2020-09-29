import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li>
      {transaction.text}
      <span>
        {sign}£{Math.abs(transaction.amount)}{" "}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
    </li>
  );
};

export default Transaction;
