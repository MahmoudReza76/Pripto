// import logo from "../asset/Logo/bitcoindown03_generated.png";
import { useState, useEffect, useRef } from "react";
import Login from "../Components/Forms/Login";
import classes from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";
import logo from "../asset/Logo/Pripto-sel_1_.png";
import { useAuth, logout } from "./Forms/Firebase";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavCurrentUser from "./NavCurrentUser";

import "../styles/navbar.scss";
const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const currentUser = useAuth();
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setUserLoggedIn] = useState(true);
  const [mobile, setMobile] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  async function logOutHandler() {
    setLoading(false);
    try {
      await logout().then(async (res) => {
        setUserLoggedIn(false);
      });
    } catch {
      alert("error");
    }
    setLoading(true);
  }

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 970;

  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Link to="/logo">
          <img src={logo} alt="logo website" />
        </Link>
      </div>
      {currentUser && isLoggedIn ? (
        <div className={classes.mobile}>
          <nav
            style={{ width: "100%" }}
            className={mobile ? "nav_links_mobile" : "navbar"}
            onClick={() => setMobile(false)}
          >
            <div>
              <ul className={classes.nav__link}>
                <li className={classes.nav__item}>
                  <Link to="/market">Market</Link>
                  <Link to="/fiat">Fiat</Link>
                  <Link to="/swap">Swap</Link>
                  <Link to="/exchange">Exchange</Link>
                  <Link to="/futures">Futures</Link>
                  <Link to="/finance">Finance</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className={classes.nav__btn}>
                <ul></ul>
              </div>
            </div>
          </nav>
          <nav className={classes.mobile__userlogin}>
            <NavCurrentUser logOutHandler={logOutHandler} />
          </nav>
        </div>
      ) : (
        <nav
          className={mobile ? "nav_links_mobile" : "navbar"}
          onClick={() => setMobile(false)}
        >
          <div>
            <ul className={classes.nav__link}>
              <li className={classes.nav__item}>
                <Link to="/market">Market</Link>
                <Link to="/fiat">Fiat</Link>
                <Link to="/swap">Swap</Link>
                <Link to="/exchange">Exchange</Link>
                <Link to="/futures">Futures</Link>
                <Link to="/finance">Finance</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className={classes.nav__btn}>
                  <Link to="/Sign">SignUp</Link>
                  {isMobile ? (
                    <Link to="/mlogin">LogIn</Link>
                  ) : (
                    <Link
                      disabled={loading || currentUser}
                      onClick={() => setModalOpen(true)}
                    >
                      LogIn
                    </Link>
                  )}

                  {modalOpen && <div className={classes.container__overlay} />}
                  {modalOpen && (
                    <Login toggleModal={toggleModal} menuRef={menuRef} />
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      )}
      <button
        className={classes.mobile_menu_icon}
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? (
          <CloseIcon
            sx={{ width: "100%", fontSize: "3rem", color: "#00ffff" }}
          />
        ) : (
          <MenuIcon
            sx={{ width: "100%", fontSize: "3rem", color: "#00ffff" }}
          />
        )}
      </button>
    </div>
  );
};

export default Navbar;
