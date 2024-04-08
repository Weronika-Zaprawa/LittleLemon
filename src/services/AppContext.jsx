import React, { createContext, useContext, useReducer, useState } from "react";

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
