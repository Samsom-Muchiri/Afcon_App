import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer.jsx";
import "../Style Sheets/nav.css";
import Comments from "./Qualifiers/reusables/Comments.jsx";
import { Box, Fade, Modal, Typography } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [open3, setOpen3] =useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const {pathname}=useLocation()
  

  const MobileNavStyle = {
    fontVariationSettings: '"FILL" 0, "wght" 200, "GRAD" -25, "opsz" 24"',
    fontSize: "30px",
  };

  /* _____Menu operations */
  const openMenu = (e) => {
    e.stopPropagation();
    setMenuOpen(true);
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
      <nav
        className={`${
          pathname == "/signin" || pathname == "/signup" ? "hidden" : ""
        }`}
      >
        <div className="top_header">
          <h1 className="name-logo">AFCON</h1>
          {/* _____________________Important desk links */}
          <div className="important-link">
            <ul className="fxsb">
              <li>
                <Link to="/buy_ticket">Buy Ticket</Link>
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
                    <Link onClick={handleOpen3}>Comments</Link>

                    <hr />
                  </li>
                  <li>
                    <Link to="/host_cities">Host Countries & Cities</Link>
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
                      <Link to="/buy_ticket">Buy Ticket</Link>
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


          
          <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className='border-none'>
        <div className="profile">
          <span className="material-symbols-outlined text-white">person</span>
        </div>
        </Button>
            </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new" textValue="user" className="bg-orange-500 rounded-lg px-3 hover:bg-orange-600 py-2 hover:text-black mb-2 text-center" ><NavLink to='/signin' className='text-sm uppercase text-white'>Sign In</NavLink></DropdownItem>
        <DropdownItem key="copy" textValue="user" className="bg-green-600 rounded-lg px-3 py-2 hover:bg-green-700 hover:text-black mb-2 text-center"><NavLink to='/signup' className='text-sm uppercase text-white'>Sign Up</NavLink></DropdownItem>
      </DropdownMenu>
    </Dropdown>
            
          
        </div>


        {/* ___________Bottom mobile nav */}
        <div className="mobile-bottom-nav mobile">
          <ul>
            <NavLink to="/">
              <li>
                <span
                  className="material-symbols-outlined"
                  style={MobileNavStyle}
                >
                  home
                </span>{" "}
                Home
              </li>
            </NavLink>
            <NavLink to="host_cities">
              {" "}
              <li>
                <span
                  className="material-symbols-outlined"
                  style={MobileNavStyle}
                >
                  brightness_high
                </span>{" "}
                Hosts
              </li>
            </NavLink>
            <NavLink to="/">
              <li>
                <span
                  className="material-symbols-outlined"
                  style={MobileNavStyle}
                >
                  sports_score
                </span>{" "}
                Scores
              </li>
            </NavLink>

            <li onClick={openMenu}>
              <span
                className="material-symbols-outlined"
                style={MobileNavStyle}
              >
                menu
              </span>{" "}
              Menu
            </li>
          </ul>
        </div>
      </nav>
<<<<<<< HEAD:client/src/Components/Nav.jsx
      <main className={` ${pathname=='/signin'|| pathname=='/signup'?'mt-0 pt-0':'lg:mt-[1.5rem] mt-[1.14rem]'}`}>
=======
      <main
        className={` ${
          pathname == "/signin" || pathname == "/signup"
            ? "mt-0 pt-0"
            : "lg:mt-[1.82rem] mt-[1.14rem]"
        }`}
      >
>>>>>>> f0d23b669fdb153ce42f39622ba7575075372471:src/Components/Nav.jsx
        <Outlet />
      </main>
      <Footer /> 


      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open3} onClose={handleClose3} closeaftertransitionslots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500, },}} >
        <Fade in={open3}>
          <Box className="absolute top-[50%] rounded-lg overflow-hidden left-[50%] translate-x-[-50%] translate-y-[-50%] bg-secondary w-[50rem] h-[40rem]">
            <Typography  id="transition-modal-title" variant="h6" component="h2" className=''>
                <Comments handleClose3={handleClose3}/>
            </Typography>
          </Box>
        </Fade>
      </Modal>

    </div>
  );
}

export default Nav;
