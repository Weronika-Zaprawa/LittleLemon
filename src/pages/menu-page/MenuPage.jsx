import "./MenuPage.scss";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import salad from "../../assets/images/salad.jpg";
import pasta from "../../assets/images/pasta1.jpg";
import cake from "../../assets/images/cake6.png";
import aperol from "../../assets/images/aperol6.jpg";
import MenuSection from "../../components/menu-section/MenuSection";
import OrderElementConfigModal from "../../components/order-element-config-modal/OrderElementConfigModal";
import { useState } from "react";
import {
  menuSectionAntipasti,
  menuSectionMainCourse,
  menuSectionDesserts,
  menuSectionCocktails,
} from "./MenuPositions";

function MenuPage() {
  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <NavigationSection />
      <div className="menu-page-container">
        <h1>MENU</h1>
        <h2>See what we offer</h2>
        <div className="row">
          <img src={salad} alt="salad"></img>
          <div className="menu-section-right">
            <p className="name-menu-section">Antipasti</p>
            {menuSectionAntipasti.map((dish) => (
              <MenuSection
                dish={dish.dish}
                description={dish.description}
                price={dish.price}
                onOpen={() => {
                  setModalVisibility(true);
                }}
              />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="menu-section-right">
            <p className="name-menu-section">Main Course</p>
            {menuSectionMainCourse.map((dish) => (
              <MenuSection
                dish={dish.dish}
                description={dish.description}
                price={dish.price}
                onOpen={() => {
                  setModalVisibility(true);
                }}
              />
            ))}
          </div>
          <img src={pasta} alt="pasta"></img>
        </div>

        <div className="row">
          <img src={cake} alt="cake"></img>
          <div className="menu-section-right">
            <p className="name-menu-section">Desserts</p>
            {menuSectionDesserts.map((dish) => (
              <MenuSection
                dish={dish.dish}
                description={dish.description}
                price={dish.price}
                onOpen={() => {
                  setModalVisibility(true);
                }}
              />
            ))}
          </div>
        </div>

        <div className="row">
          <div className="menu-section-right">
            <p className="name-menu-section">Cocktails</p>
            {menuSectionCocktails.map((dish) => (
              <MenuSection
                dish={dish.dish}
                description={dish.description}
                price={dish.price}
                onOpen={() => {
                  setModalVisibility(true);
                }}
              />
            ))}
          </div>
          <img className="cocktails-img" src={aperol} alt="aperol spritz"></img>
        </div>
        {modalVisibility ? (
          <OrderElementConfigModal
            onCancel={() => {
              setModalVisibility(false);
            }}
          />
        ) : null}
      </div>
    </>
  );
}

export default MenuPage;
