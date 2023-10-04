import React, { createContext, useState } from "react";

const CONT = createContext();
function AppContext({ children }) {
  const [payCardOpen, setPayCardOpen] = useState(false);

  const classes = {
    functions: "function",
    payCardState: payCardOpen,
    setPayCardState: setPayCardOpen,
  };

  return <CONT.Provider value={classes}>{children}</CONT.Provider>;
}

export { AppContext, CONT };
