import React from "react";
import "../Style Sheets/tickets.css";
import TicketHeader from "./ticket components/TicketHeader";
import Packages from "./ticket components/Packages";

function TicketStore() {
  return (
    <>
      <TicketHeader />
      <Packages />
    </>
  );
}

export default TicketStore;
