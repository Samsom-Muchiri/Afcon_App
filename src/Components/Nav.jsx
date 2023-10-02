import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "../Style Sheets/nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const MobileNavStyle = {
    fontVariationSettings: '"FILL" 0, "wght" 200, "GRAD" -25, "opsz" 24"',
    fontSize: "30px", 
  };

  /* _____Menu operations */
  const openMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(true);
    console.log("dfbb");
  };

  useEffect(() => {
    const handleBodyClick = (event) => {
      if (!event.target.closest(".n-links")) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <div className="">
      <nav>
        <div className="top_header">
          <h1 className="name-logo">AFCON</h1>
          {/* _____________________Important desk links */}
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
          <h1 className="name-logo mobile">AFCON</h1>
          <div className="fxs">
            <div className="site-logo">
              <div className="logo-container">
                <img
                  src="https://i.pinimg.com/564x/2d/66/37/2d66377a5c7c0c621262c4f2cfdc4808.jpg"
                  alt="CAF"
                />
              </div>
            </div>
            <div className={menuOpen ? "n-links-container " : ""}>
              <div
                className={menuOpen ? "n-links open-mobile-menu" : "n-links"}
              >
                <ul className="fxs">
                  <li>
                    <Link to="/">AFCON 2024 Teams</Link>
                    <hr />
                  </li>
                  <li>
                    <Link to="/qualifiers">Qualifiers</Link>
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

                {/* _____________________Important mobile links */}

                <div className="important-link mobile ">
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
            </div>
          </div>

          <div className="profile">
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>

        {/* ___________Bottom mobile nav */}
        <div className="mobile-bottom-nav mobile">
          <ul>
            <NavLink to="/">
              <li>
                <span className="material-symbols-outlined" style={MobileNavStyle}>
                  home
                </span>{" "}
                Home
              </li>
            </NavLink>
            <NavLink to="/">
              {" "}
              <li>
                <span className="material-symbols-outlined" style={MobileNavStyle}>
                  brightness_high
                </span>{" "}
                Highlights
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <span className="material-symbols-outlined" style={MobileNavStyle}>
                  sports_score
                </span>{" "}
                Scores
              </li>
            </NavLink>

            <li onClick={openMenu}>
              <span className="material-symbols-outlined" style={MobileNavStyle}>
                menu
              </span>{" "}
              Menu
            </li>
          </ul>
        </div>
      </nav>
      <main className="lg:mt-[1.82rem] mt-[1.14rem]">
        <Outlet />
      </main> 
    </div>
  );
}

export default Nav;
