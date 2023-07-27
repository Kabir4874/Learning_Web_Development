import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value="Kabir">{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
