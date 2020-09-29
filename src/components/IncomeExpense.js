import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0);
  return (
    <div>
      <h3>Income</h3>
      <p>{income}</p>
      <h3>Expense</h3>
      <p>{expense}</p>
    </div>
  );
}

export default IncomeExpense;
