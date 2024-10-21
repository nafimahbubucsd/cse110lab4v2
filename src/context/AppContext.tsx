import { createContext, useState } from "react";
import { Expense } from "../types/types";

// Updated AppContextType to include budget and setBudget
interface AppContextType {
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
}

// Initialize with default values for expenses and budget
const initialState: AppContextType = {
  expenses: [],
  setExpenses: () => {},
  budget: 1000, // Default budget value
  setBudget: () => {},
};

// Create the AppContext
export const AppContext = createContext<AppContextType>(initialState);

export const AppContextProvider = (props: any) => {
  // State management for expenses and budget
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);
  const [budget, setBudget] = useState<number>(initialState.budget);

  return (
    <AppContext.Provider
      value={{
        expenses: expenses,
        setExpenses: setExpenses,
        budget: budget,
        setBudget: setBudget,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};