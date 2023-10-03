import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Qualifiers from "./Qualifiers/Qualifiers";
import SpecificCountry from "./Qualifiers/reusables/SpecificCountry";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Main() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/qualifiers" element={<Qualifiers />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/countries/:id" element={<SpecificCountry/>} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />
}

export default Main;
