import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";

const ExpenseItem = ({ id, name, cost }: Expense) => {
  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = (expenseId: string) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== expenseId);
    setExpenses(updatedExpenses);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{name}</div>
      <div>${cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(id)} className="btn btn-danger">
          x
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;