import "./HamburgerMenu.scss";
import { CancelWhite } from "../../assets/icons";
import { Link } from "react-router-dom";

function HamburgerMenu({ onCancel, visibility }) {
  return (
    <div className={"hamburger-menu-container" + (visibility ? "" : " hidden")}>
      <div className="cancel-icon" onClick={onCancel}>
        <CancelWhite />
      </div>
      <nav className="hamburger-menu-links">
        <ul className="list-of-links">
          <li>
            <Link
              to="/home"
              onClick={() => {
                onCancel();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                onCancel();
                const aboutSection = document.getElementById("about");
                aboutSection.scrollIntoView({
                  block: "start",
                });
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link to="/menu">Menu/Order</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/basket">Basket</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
