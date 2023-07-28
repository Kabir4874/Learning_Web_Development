import { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducer.jsx";

const AppContext = createContext();

const initialState = {
  name: "",
  image: "",
};

const updateHomePage = () => {
  return dispatch({
    type: "Home_Update",
    payload: {
      name: "Thapa Technical",
      image: "./images/hero.svg",
    },
  });
};

const updateAboutPage = () => {
  return dispatch({
    type: "About_Update",
    payload: {
      name: "Vinod Thapa",
      image: "./images/about1.svg",
    },
  });
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
