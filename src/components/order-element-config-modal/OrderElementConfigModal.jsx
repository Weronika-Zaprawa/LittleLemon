import React from "react";
import "./OrderElementConfigModal.scss";
import { Plus2, Minus, Cancel } from "../../assets/icons";

function OrderElementConfigModal({ onCancel }) {
  return (
    <>
      <div className="modal-container">
        <div className="close" onClick={onCancel}>
          <Cancel />
        </div>
        <div className="dish-name">
          <h3>Caesar Salad</h3>
          <p>Crisp romaine & croutons tossed with caesar dressing</p>
        </div>
        <div className="add-dish">
          <div className="number-change">
            <Minus />
          </div>
          <div className="number">1</div>
          <div className="number-change">
            <Plus2 />
          </div>
        </div>
        <button className="add-button">Add 1 to card • $13.00</button>
      </div>
      <div className="modal-background"></div>
    </>
  );
}

export default OrderElementConfigModal;
