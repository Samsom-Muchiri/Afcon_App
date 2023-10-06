import React, { createContext, useContext } from "react";

const CONT = createContext();
export const useMyCustomHook=()=>useContext(CONT)

function AppContext({ children }) {
  const API_URL="http://localhost:5555"
  const LOGGED_IN_NAME="Alan Walker"
  const classes = {
    functions: "function",
  };

  return <CONT.Provider value={{classes,API_URL,LOGGED_IN_NAME}}>{children}</CONT.Provider>;
}

export { AppContext, CONT };
