import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppProvider } from "./services/AppContext";
import "./App.scss";
import HomePage from "./pages/home-page/HomePage";
import ReservationPage from "./pages/reservation-page/ReservationPage";
import MenuPage from "./pages/menu-page/MenuPage";
import BasketPage from "./pages/basket-page/BasketPage";

export const ROUTE_PATHS = {
  HOME: "/home",
  MENU: "/menu",
  RESERVATIONS: "/reservations",
  BASKET: "/basket",
};

export const AppRoutes = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={ROUTE_PATHS.RESERVATIONS}
            element={<ReservationPage />}
          />
          <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
          <Route path={ROUTE_PATHS.MENU} element={<MenuPage />} />
          <Route path={ROUTE_PATHS.BASKET} element={<BasketPage />} />

          <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

function App() {
  return <AppRoutes />;
}
export default App;
