import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./ReservationForm.scss";
import ReservationConfirmationModal from "../reservation-confirmation-modal/ReservationConfirmationModal";

function ReservationForm() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const handleClick = () => setModalVisibility(true);
  console.log(modalVisibility);

  const validationSchema = Yup.object().shape({
    time: Yup.string().required("Select time"),
    guests: Yup.string()
      .min(1, "Must be at least 1 guest")
      .max(20, "There can't be more than 20 guests")
      .required("Select the number of guests"),
    occasion: Yup.string().required("Select occasion"),
    requests: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="reservation-form-container">
      <form
        onSubmit={handleSubmit(
          (e) => console.log("sukces 🐶🐶🐶", e),
          (e) => console.log("są errorki 😽😽😽", e)
        )}
      >
        <div className="cell-container">
          <label htmlFor="time">Select a time</label>
          <select id="time" {...register("time")}>
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
          <div className="invalid-feedback">{errors.time?.message}</div>
        </div>

        <div className="cell-container">
          <label htmlFor="guests">How many people?</label>
          <input
            className="number-of-guests"
            type="number"
            placeholder="Number of guests"
            min="1"
            max="20"
            id="guests"
            {...register("guests")}
          ></input>
          <div className="invalid-feedback">{errors.guests?.message}</div>
        </div>
        <div className="cell-container">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" {...register("occasion")}>
            <option value="" disabled selected>
              Select an occasion
            </option>
            <option>Meeting</option>
            <option>Date</option>
            <option>Anniversary</option>
            <option>Birthday</option>
          </select>
          <div className="invalid-feedback">{errors.occasion?.message}</div>
        </div>
        <div className="cell-container">
          <label htmlFor="requests">Anything else we should know?</label>
          <input
            className="requests"
            id="requests"
            type="text"
            placeholder="Special requests (optional)"
            {...register("requests")}
          />
        </div>
        <button>Reserve now</button>
      </form>

      <div>{modalVisibility ? <ReservationConfirmationModal /> : null}</div>
    </div>
  );
}
export default ReservationForm;

// https://blog.logrocket.com/react-calendar-tutorial-build-customize-calendar/
