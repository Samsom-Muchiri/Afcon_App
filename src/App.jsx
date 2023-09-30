import { useState } from "react";
import "./App.css";
import { AppContext } from "./Components/Context/AppContext";
import Main from "./Components/Main";

function App() {
  return (
    <AppContext>
      <Main />
    </AppContext>
  );
}

export default App;
