import React, { createContext } from "react";

const CONT = createContext();
function AppContext({ children }) {
  return <CONT.Provider value={"sam"}>{children}</CONT.Provider>;
}

export { AppContext, CONT };
