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

function Main() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/qualifiers" element={<Qualifiers />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default Main;
