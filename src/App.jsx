import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/home-page/HomePage";
import ReservationPage from "./pages/reservation-page/ReservationPage";

export const ROUTE_PATHS = {
  HOME: "/home",
  RESERVATIONS: "/reservations",
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE_PATHS.RESERVATIONS} element={<ReservationPage />} />
        <Route path={ROUTE_PATHS.HOME} element={<HomePage />} />
        <Route path="*" element={<Navigate to={ROUTE_PATHS.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};

function App() {
  return <AppRoutes />;
}
export default App;
