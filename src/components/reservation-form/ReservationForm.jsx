import "./ReservationForm.scss";

function ReservationForm() {
  return (
    <div className="reservation-form-container">
      <form>
        <div className="cell-container">
          <label htmlFor="time">Select a time</label>
          <select id="time">
            <option value="" disabled selected>
              Select a time
            </option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </div>
        <div className="cell-container">
          <label htmlFor="guests">How many people?</label>
          <input
            className="number-of-guests"
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
          ></input>
        </div>
        <div className="cell-container">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option value="" disabled selected>
              Select an occasion
            </option>
            <option>Meeting</option>
            <option>Date</option>
            <option>Anniversary</option>
            <option>Birthday</option>
          </select>
        </div>
        <div className="cell-container">
          <label htmlFor="requests">Anything else we should know?</label>
          <input
            className="requests"
            id="requests"
            type="text"
            placeholder="Special requests (optional)"
          />
        </div>
        <p>We're holding your table for 5 people on May 25, 2023 at 6:30 PM.</p>
        <button>Reserve now</button>
      </form>
    </div>
  );
}
export default ReservationForm;

// https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/
