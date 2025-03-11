import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  menuSectionAntipasti,
  menuSectionMainCourse,
  menuSectionDesserts,
  menuSectionCocktails,
} from "../pages/menu-page/MenuPositions";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const times = [
    { hour: "17:00", bookedOnDays: [] },
    { hour: "18:00", bookedOnDays: [] },
    { hour: "19:00", bookedOnDays: [] },
    { hour: "20:00", bookedOnDays: [] },
    { hour: "21:00", bookedOnDays: [] },
    { hour: "22:00", bookedOnDays: [] },
  ];

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const [date, setDate] = useState(new Date());
  const [sectionAntipasti, setSectionAntipasti] = useState([]);
  const [sectionMainCourse, setSectionMainCourse] = useState([]);
  const [sectionDesserts, setSectionDesserts] = useState([]);
  const [sectionCocktails, setSectionCocktails] = useState([]);
  const [loadingMenu, setLoadingMenu] = useState(true);

  const [idDish, setIdDish] = useState();

  const link = "https://littlelemonapi-production.up.railway.app";

  async function getMenu() {
    const response = await fetch(link + "/menu", {
      headers: {
        type: "applications/json",
      },
      credentials: "include",
    });

    if (response.ok === true) {
      const responseMenu = await response.json();

      setSectionAntipasti(
        responseMenu.filter((dish) => {
          return dish.sectionType === "Antipasti";
        })
      );
      setSectionMainCourse(
        responseMenu.filter((dish) => {
          return dish.sectionType === "MainCourse";
        })
      );
      setSectionDesserts(
        responseMenu.filter((dish) => {
          return dish.sectionType === "Desserts";
        })
      );
      setSectionCocktails(
        responseMenu.filter((dish) => {
          return dish.sectionType === "Cocktails";
        })
      );
      setLoadingMenu(false);
    } else {
      alert("Failed to load menu");
    }
  }

  async function addCard(id, quantity) {
    return fetch(link + "/card-update", {
      method: "PUT",
      body: JSON.stringify({
        menuItemId: id,
        numberOfItemsInBasket: quantity,
      }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
  }

  useEffect(() => {
    getMenu();
  }, []);

  function updateTimes(state, action) {
    switch (action.type) {
      case "book_table": {
        const reservedDateIndex = state.findIndex(
          (date) => date.hour === action.hour
        );

        state[reservedDateIndex].bookedOnDays.push(action.date);
        return state;
      }
    }
  }

  function initializeTimes() {
    return times;
  }

  const findSection = (sectionType, dishName, number) => {
    switch (sectionType) {
      case "Antipasti":
        setSectionAntipasti((prev) => {
          const index = prev.findIndex((dish) => dish.dish === dishName); //Szukamy w tablicy indexu obiektu
          prev[index].numberOfItemsInBasket = number; // Przypisujemy wartość number do odpowiedniego numberOfItemsInBasket
          return [...prev]; // Zwraca zaktualizowaną całą tablicę. Dodajemy ... po to aby
          //stworzyć "nową tablicę". Porównywanie tablic i obiektów odbywa się poprzez wskazanie na miejsce w pamięci
        });
        break;
      case "MainCourse":
        setSectionMainCourse((prev) => {
          const index = prev.findIndex((dish) => dish.dish === dishName);
          prev[index].numberOfItemsInBasket = number;
          return [...prev];
        });
        break;
      case "Desserts":
        setSectionDesserts((prev) => {
          const index = prev.findIndex((dish) => dish.dish === dishName);
          prev[index].numberOfItemsInBasket = number;
          return [...prev];
        });
        break;
      case "Cocktails":
        setSectionCocktails((prev) => {
          const index = prev.findIndex((dish) => dish.dish === dishName);
          prev[index].numberOfItemsInBasket = number;
          return [...prev];
        });
        break;
    }
  };

  const numberOfAddedDishes = [
    ...sectionAntipasti,
    ...sectionMainCourse,
    ...sectionDesserts,
    ...sectionCocktails,
  ].reduce((previousScore, currentScore) => {
    return previousScore + currentScore.numberOfItemsInBasket;
  }, 0);

  const yourCard = [
    ...sectionAntipasti,
    ...sectionMainCourse,
    ...sectionDesserts,
    ...sectionCocktails,
  ].filter((dish) => dish.numberOfItemsInBasket > 0);

  const summaryPrice = yourCard.reduce((previousScore, currentScore) => {
    return (
      previousScore + currentScore.numberOfItemsInBasket * currentScore.price
    );
  }, 0);

  return (
    <AppContext.Provider
      value={{
        times,
        availableTimes,
        setAvailableTimes,
        date,
        setDate,
        initializeTimes,
        updateTimes,
        numberOfAddedDishes,
        sectionAntipasti,
        setSectionAntipasti,
        sectionMainCourse,
        setSectionMainCourse,
        sectionDesserts,
        setSectionDesserts,
        sectionCocktails,
        setSectionCocktails,
        yourCard,
        findSection,
        summaryPrice,
        getMenu,
        addCard,
        loadingMenu,
        idDish,
        setIdDish,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
