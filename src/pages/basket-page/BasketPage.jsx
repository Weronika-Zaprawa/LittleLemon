import "./BasketPage.scss";
import React from "react";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import { Plus2, Minus } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";
import { ROUTE_PATHS } from "../../App";
import { useNavigate } from "react-router-dom";

function BasketPage() {
  const { yourCard, findSection, summaryPrice } = useAppContext();
  const navigate = useNavigate();

  return (
    <>
      <NavigationSection />
      <div className="basket-page-container">
        <h1>your cart</h1>
        <div className="basket-modal">
          {yourCard.length === 0 ? (
            <h2
              className="empty-cart"
              onClick={() => {
                navigate(ROUTE_PATHS.MENU);
              }}
            >
              Your cart is empty<br></br> Add some dishes
            </h2>
          ) : null}
          {yourCard.map((dish) => (
            <div className="content-container">
              <div className="dish-name">
                <h3>{dish.dish}</h3>
                <p>{dish.description}</p>
              </div>
              <div className="bottom-row">
                <div className="add-dish">
                  <div
                    className="number-change"
                    onClick={() => {
                      findSection(
                        dish.sectionType,
                        dish.dish,
                        dish.numberOfItemsInBasket - 1
                      );
                    }}
                  >
                    <Minus />
                  </div>
                  <div className="number">{dish.numberOfItemsInBasket}</div>
                  <div
                    className="number-change"
                    onClick={() => {
                      findSection(
                        dish.sectionType,
                        dish.dish,
                        dish.numberOfItemsInBasket + 1
                      );
                    }}
                  >
                    <Plus2 />
                  </div>
                </div>
                <div className="price">
                  ${dish.price * dish.numberOfItemsInBasket}
                </div>
              </div>
              <div className="line"></div>

              <div className="cart-summary">
                <div className="summary-row">
                  <div>Summary</div>
                  <div>${summaryPrice}</div>
                </div>
                <div className="summary-row">
                  <div>Delivery</div>
                  <div>$5</div>
                </div>
                <div className="summary-row-bold">
                  <div>Total cost</div>
                  <div>${summaryPrice + 5}</div>
                </div>
              </div>

              <button className="add-button">Proceed to checkout</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BasketPage;
