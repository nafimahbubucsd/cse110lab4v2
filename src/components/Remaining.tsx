import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  // Calculate total expenses using reduce
  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  // Calculate remaining budget
  const remaining = budget - totalExpenses;

  // Set alert type based on remaining balance
  const alertType = remaining < 0 ? "alert-danger" : "alert-success";

  // Show popup alert if remaining goes below zero
  useEffect(() => {
    if (remaining < 0) {
      window.alert("You have exceeded your budget!");
    }
  }, [remaining]); // Trigger the effect whenever 'remaining' changes

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${remaining}</span>
    </div>
  );
};

export default Remaining;