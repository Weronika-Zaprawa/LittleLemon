import "./FooterSection.scss";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";

function FooterSection() {
  const navigate = useNavigate();
  return (
    <div className="footer-container section-container">
      <div className="column">
        <ul>
          <li className="heading">Doormat Navigation</li>
          <div className="info-container">
            <li className="info">
              <Link to="/home">Home</Link>
            </li>
            <li className="info">
              <li
                onClick={() => {
                  navigate(ROUTE_PATHS.HOME, {
                    state: { scrollToAbout: true },
                  });
                }}
              >
                About
              </li>
            </li>
            <li className="info">
              <Link to="/menu">Menu/Order</Link>
            </li>
            <li className="info">
              <Link to="/reservations">Reservations</Link>
            </li>
          </div>
        </ul>
      </div>
      <div className="column">
        <ul>
          <li className="heading">Contact</li>
          <div className="info-container">
            <li className="info">Adres: ul. Krótka 1 00-002 Warszawa</li>
            <li className="info">Phone: +48 123 456 789</li>
            <li className="info">Email: info@littlelemon.pl</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default FooterSection;
