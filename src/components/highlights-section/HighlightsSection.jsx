import "./HighlightsSection.scss";
import salad from "../../assets/images/greek salad.jpg";
import bruchetta from "../../assets/images/bruchetta.svg";
import dessert from "../../assets/images/lemon dessert.jpg";
import SpecialsCards from "../specials-cards/SpecialsCards";

function HighlightsSection() {
  return (
    <div className="highlights-container section-container">
      <div className="top-bar">
        <header>Specials</header>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <SpecialsCards
          photo={salad}
          dishName="Greek Salad"
          price="$12.99"
          dishDescription="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <SpecialsCards
          photo={bruchetta}
          dishName="Bruchetta"
          price="$5.99"
          dishDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        />
        <SpecialsCards
          photo={dessert}
          dishName="Lemon Dessert"
          price="$5.00"
          dishDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </div>
  );
}

export default HighlightsSection;
