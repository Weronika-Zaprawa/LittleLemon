import { Calendar, Clock, People } from "../../assets/icons";
import "./ReservationConfirmationModal.scss";

function ReservationConfirmationModal() {
  return (
    <>
      <div className="confirmation-background"></div>
      <div className="confirmation-container">
        <div className="header-top-bar">
          <h1>Reservation at Little Lemon</h1>
          <h2>Chicago</h2>
        </div>
        <div className="middle-bar">
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <Clock />
              </div>
            </div>
            <p className="information">Jun 16, 2024</p>
          </div>
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <Calendar />
              </div>
            </div>
            <p className="information"> 19:00</p>
          </div>
          <div className="confirmation-information-container">
            <div className="icon-container">
              <div className="icon">
                <People />
              </div>
            </div>
            <p className="information"> 2 guests</p>
          </div>
        </div>
        <div className="button-container">
          <button className="cancel-button">CANCEL</button>
          <button className="confirmation-button">CONFIRM</button>
        </div>
      </div>
    </>
  );
}

export default ReservationConfirmationModal;
