import "./ReservationConfirmationModal.scss";

function ReservationConfirmationModal() {
  return (
    <div className="confirmation-container">
      <div className="header-top-bar">
        <h1>Reservation at Little Lemon</h1>
        <h2>Chicago</h2>
      </div>
      <div className="middle-bar">
        <div className="confirmation-information-container">
          <div className="icon-container">
            <img></img>
          </div>
          <p className="information">Jun 16, 2024</p>
        </div>
        <div className="confirmation-information-container">
          <div className="icon-container">
            <img></img>
          </div>
          <p className="information"> 19:00</p>
        </div>
        <div className="confirmation-information-container">
          <div className="icon-container">
            <img></img>
          </div>
          <p className="information"> 2 guests</p>
        </div>
      </div>
      <div className="button-container">
        <button className="cancel-button"></button>
        <button className="confirmation-button"></button>
      </div>
    </div>
  );
}

export default ReservationConfirmationModal;
