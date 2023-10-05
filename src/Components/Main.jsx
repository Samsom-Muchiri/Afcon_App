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
import TicketStore from "./TicketStore";
import HostCities from "./HostCities";

function Main() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="buy_ticket" element={<TicketStore />} />
        <Route path="/qualifiers" element={<Qualifiers />} />
        <Route path="/host_cities" element={<HostCities />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default Main;
