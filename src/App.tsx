import "bootstrap/dist/css/bootstrap.min.css";
import { MyBudgetTracker } from "./views/MyBudgetTracker";
import { AppContextProvider } from "./context/AppContext";

const App = () => {
  return (
    <AppContextProvider>
      <MyBudgetTracker />
    </AppContextProvider>
  );
};

export default App;