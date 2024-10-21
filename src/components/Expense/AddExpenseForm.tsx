import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types";

const AddExpenseForm = () => {
  const { expenses, setExpenses } = useContext(AppContext);
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<string>("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newExpense: Expense = {
      id: new Date().toISOString(), // Use a string ID based on the current timestamp
      name,
      cost: parseInt(cost), // Ensure cost is a number
    };

    setExpenses([...expenses, newExpense]);

    setName("");
    setCost("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;