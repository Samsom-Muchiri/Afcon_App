import React, { createContext } from "react";

const CONT = createContext();
function AppContext({ children }) {
  const classes = {
    functions: "function",
  };

  return <CONT.Provider value={classes}>{children}</CONT.Provider>;
}

export { AppContext, CONT };
