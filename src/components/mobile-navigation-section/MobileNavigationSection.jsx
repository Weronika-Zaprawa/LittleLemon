import "./MobileNavigationSection.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import { HamburgerMenuIcon, Basket } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";

function MobileNavigationSection() {
  const { numberOfAddedDishes } = useAppContext();
  const navigate = useNavigate();
  const [hamburgerMenuVisibility, setHamburgerMenuVisibility] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className={"mobile-nav-container" + (showNav ? " visible" : " hidden")}
    >
      <div className="logo-container">
        <img
          src={logo}
          onClick={() => {
            navigate(ROUTE_PATHS.HOME);
          }}
        ></img>
      </div>

      <div className="left-corner">
        <Link to="/basket" className="logo-container-basket">
          <Basket />
          <div
            className={
              "numberOfDishes " + (numberOfAddedDishes === 0 ? "zero" : "")
            }
          >
            {numberOfAddedDishes}
          </div>
        </Link>
        <div
          className="hamburger-menu"
          onClick={() => {
            setHamburgerMenuVisibility(true);
          }}
        >
          <HamburgerMenuIcon />
        </div>
      </div>

      <HamburgerMenu
        visibility={hamburgerMenuVisibility}
        onCancel={() => {
          setHamburgerMenuVisibility(false);
        }}
      />
    </div>
  );
}

export default MobileNavigationSection;
