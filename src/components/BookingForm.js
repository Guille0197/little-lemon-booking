import React, { useEffect, useState } from "react";
import { getTodayDate, validateBooking } from "../utils/bookingValidation";

function BookingForm({ date, availableTimes, onDateChange, onSubmit }) {
  const [values, setValues] = useState({ date, time: "", guests: "2", occasion: "" });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setValues((current) => ({ ...current, date, time: "" }));
  }, [date]);

  const errors = validateBooking(values);
  const showError = (field) => (touched[field] || submitted) && errors[field];

  const updateField = (field, value) => {
    setValues((current) => ({ ...current, [field]: value }));
    setSubmitError("");
  };

  const handleDateChange = (event) => {
    const nextDate = event.target.value;
    updateField("date", nextDate);
    updateField("time", "");
    onDateChange(nextDate);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setSubmitError("");
    if (Object.keys(validateBooking(values)).length > 0 || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const accepted = onSubmit(values);
      if (!accepted) setSubmitError("We couldn't complete your reservation. Please try again.");
    } catch {
      setSubmitError("Something went wrong while sending your reservation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-intro">
        <p className="eyebrow">A table is waiting</p>
        <h2>Make a reservation</h2>
        <p>Tell us when you’re coming and we’ll take care of the rest.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="booking-date">Choose a date <span aria-hidden="true">*</span></label>
          <input id="booking-date" name="date" type="date" value={values.date} min={getTodayDate()} required aria-required="true"
            aria-invalid={Boolean(showError("date"))} aria-describedby={showError("date") ? "date-error" : undefined}
            onChange={handleDateChange} onBlur={() => setTouched((current) => ({ ...current, date: true }))} />
          {showError("date") && <p className="field-error" id="date-error">{errors.date}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="booking-time">Choose a time <span aria-hidden="true">*</span></label>
          <select id="booking-time" name="time" value={values.time} required aria-required="true"
            aria-invalid={Boolean(showError("time"))} aria-describedby={showError("time") ? "time-error" : undefined}
            onChange={(event) => updateField("time", event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, time: true }))}>
            <option value="">Select a time</option>
            {availableTimes.map((time) => <option key={time} value={time}>{time}</option>)}
          </select>
          {showError("time") && <p className="field-error" id="time-error">{errors.time}</p>}
          {availableTimes.length === 0 && <p className="field-hint">No times are available. Try another date.</p>}
        </div>

        <div className="form-field">
          <label htmlFor="booking-guests">Number of guests <span aria-hidden="true">*</span></label>
          <input id="booking-guests" name="guests" type="number" inputMode="numeric" min="1" max="10" step="1"
            value={values.guests} required aria-required="true"
            aria-invalid={Boolean(showError("guests"))}
            aria-describedby={showError("guests") ? "guests-error" : "guests-hint"}
            onChange={(event) => updateField("guests", event.target.value)}
            onBlur={() => setTouched((current) => ({ ...current, guests: true }))} />
          {showError("guests") && <p className="field-error" id="guests-error">{errors.guests}</p>}
          <p className="field-hint" id="guests-hint">For parties of 1–10 guests.</p>
        </div>

        <div className="form-field">
          <label htmlFor="booking-occasion">Occasion <span className="optional-label">(optional)</span></label>
          <select id="booking-occasion" name="occasion" value={values.occasion}
            onChange={(event) => updateField("occasion", event.target.value)}>
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Date night">Date night</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {submitError && <p className="form-alert" role="alert">{submitError}</p>}
      <div className="form-actions">
        <p className="required-note"><span aria-hidden="true">*</span> Required fields</p>
        <button className="button button-primary submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Reserve a table"} <span aria-hidden="true">→</span>
        </button>
      </div>
      <p className="privacy-note">Your reservation details are used only for this booking experience.</p>
    </form>
  );
}
export default BookingForm;
