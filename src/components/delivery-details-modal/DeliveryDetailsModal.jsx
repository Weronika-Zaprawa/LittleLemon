import "./DeliveryDetailsModal.scss";
import React from "react";
import { Cancel } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";

function DeliveryDetailsModal({ onCancel }) {
  const { yourCard, resetSections } = useAppContext();
  return (
    <>
      <div className="delivery-details-background"></div>
      <div className="delivery-details-modal-container">
        <div className="top-row">
          <h1>Delivery Details</h1>
          <div className="close" onClick={onCancel}>
            <Cancel />
          </div>
        </div>
        <form className="delivery-form">
          <div className="form-top-row">
            <div className="small-cell-container">
              <label htmlFor="name">Name</label>
              <input
                className="name"
                id="name"
                type="text"
                placeholder="Enter your name"
              ></input>
            </div>
            <div className="small-cell-container">
              <label htmlFor="surname">Surname</label>
              <input
                className="surname"
                id="surname"
                type="text"
                placeholder="Enter your surname"
              ></input>
            </div>
          </div>
          <div className="cell-container">
            <label htmlFor="street">Street</label>
            <input
              className="street"
              id="street"
              type="text"
              placeholder="Enter street name"
            ></input>
          </div>
          <div className="cell-container">
            <label htmlFor="city">City</label>
            <input
              className="city"
              id="city"
              type="text"
              placeholder="Enter city name"
            ></input>
          </div>
          <div className="cell-container">
            <label htmlFor="zip-code">Zip Code</label>
            <input
              className="zip-code"
              id="zip-code"
              type="text"
              placeholder="Enter zip-code"
            ></input>
          </div>
          <div className="cell-container">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              className="phone-number"
              id="phone-number"
              type="text"
              placeholder="Enter phone number"
            ></input>
          </div>
          <div className="cell-container">
            <label htmlFor="email">E-mail Adres</label>
            <input
              className="email"
              id="email"
              type="text"
              placeholder="Enter e-mail adres"
            ></input>
          </div>
        </form>
        <div className="order-summary">
          <p className="summary">Order Summary</p>
          {yourCard.map((dish) => (
            <div className="row">
              <div className="icon">{dish.numberOfItemsInBasket}</div>
              <div className="dish-name">{dish.dish}</div>
              <div className="dish-price">${dish.price}</div>
            </div>
          ))}
          <p className="delivery">Cash on delivery</p>
          <button
            onClick={() => {
              onCancel();
              alert("Order placed");
              resetSections();
            }}
          >
            Order
          </button>
        </div>
      </div>
    </>
  );
}

export default DeliveryDetailsModal;
