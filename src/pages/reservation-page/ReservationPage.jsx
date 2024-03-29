import "./ReservationPage.scss";
import NavigationSection from "../../components/navigation-section/NavigationSection";
import ReservationForm from "../../components/reservation-form/ReservationForm";
import Calendar from "react-calendar";
import "./Calendar.scss";
import React, { useState } from "react";

function ReservationPage() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <NavigationSection />
      <div className="reservation-page-container ">
        <h1>Reserve a table</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <ReservationForm date={date} />
      </div>
    </>
  );
}

export default ReservationPage;
