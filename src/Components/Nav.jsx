import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Style Sheets/nav.css";

function Nav() {
  return (
    <div>
      <nav>
        <div className="top_header">
          <h1 className="name-logo">AFCON</h1>
          <div className="important-link">
            <ul className="fxsb">
              <li>
                <Link to="/">Buy Ticket</Link>
              </li>
              <li>
                <Link to="/">AFCON store</Link>
              </li>
              <li>
                <Link to="/">Inside Afcon</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="fxsb">
          <div className="fxs">
            <div className="site-logo">
              <div className="logo-container">
                <img
                  src="https://i.pinimg.com/564x/2d/66/37/2d66377a5c7c0c621262c4f2cfdc4808.jpg"
                  alt="CAF"
                />
              </div>
            </div>
            <div className="n-links">
              <ul className="fxs">
                <li>
                  <Link to="/">AFCON 2024 Teams</Link>
                  <hr />
                </li>
                <li>
                  <Link to="/">Qualifiers</Link>
                  <hr />
                </li>
                <li>
                  <Link to="/">Host Countries & Cities</Link>
                  <hr />
                </li>
                <li>
                  <Link to="/">Register your Intrests</Link>
                  <hr />
                </li>
              </ul>
            </div>
          </div>
          <div className="profile">
            <span class="material-symbols-outlined">person</span>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
