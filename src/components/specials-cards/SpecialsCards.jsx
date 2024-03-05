import "./SpecialsCards.scss";
import { Scooter } from "../../assets/icons";
function SpecialsCards({ photo, dishName, price, dishDescription }) {
  return (
    <div className="card">
      <div className="photo">
        <img src={photo}></img>
      </div>
      <div className="card-content">
        <div className="top-bar-content">
          <p className="dish-name">{dishName}</p>
          <p className="price">{price}</p>
        </div>
        <p className="dish-description">{dishDescription}</p>
        <div className="bottom-bar-content">
          <button>Order a delivery</button>
          <div className="icon">
            <Scooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialsCards;
