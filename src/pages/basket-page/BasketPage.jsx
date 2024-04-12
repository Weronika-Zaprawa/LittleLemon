import "./BasketPage.scss";
import React from "react";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import { Plus2, Minus } from "../../assets/icons";
import { useAppContext } from "../../services/AppContext";

function BasketPage() {
  const { yourCard, findSection } = useAppContext();

  return (
    <>
      <NavigationSection />
      <div className="basket-page-container">
        <h1>your card</h1>
        <div className="basket-modal">
          {yourCard.map((dish) => (
            <>
              <div className="dish-name">
                <h3>{dish.dish}</h3>
                <p>{dish.description}</p>
              </div>
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
              <div className="line"></div>
            </>
          ))}
          {/* <button className="add-button">Add 1 to card • $12</button> */}
        </div>
      </div>
    </>
  );
}

export default BasketPage;
