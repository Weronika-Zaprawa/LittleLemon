import "./DeliveryDetailsModal.scss";
import React from "react";
import { Cancel, Plus } from "../../assets/icons";

function DeliveryDetailsModal({ onCancel }) {
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
          Order Summary
          <div className="row">
            <div className="icon">1</div>
            <div className="dish-name"> Ceaser Salad</div>
            <div className="dish-price">$13</div>
          </div>
          <p>Cash on delivery</p>
          <button>Order</button>
        </div>
      </div>
    </>
  );
}

export default DeliveryDetailsModal;
