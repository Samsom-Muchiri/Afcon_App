// import { useState } from "react";
import "./App.css";
import { AppContext } from "./Components/Context/AppContext";
import Main from "./Components/Main";
// import { Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <AppContext>
      {/* <ToastContainer position='bottom-right' theme='colored' hideProgressBar autoClose="2000" > */}
        <Main />
      {/* </ToastContainer> */}
    </AppContext>
  );
}

export default App;
