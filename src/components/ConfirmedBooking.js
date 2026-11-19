import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking({ booking }) {
  if (!booking) {
    return (
      <main className="confirmation-page content-section">
        <div className="confirmation-card">
          <span className="confirmation-icon" aria-hidden="true">🍋</span>
          <p className="eyebrow">Little Lemon</p>
          <h1>Your table is waiting.</h1>
          <p>There’s no reservation summary to display yet. You can start a new booking whenever you’re ready.</p>
          <Link className="button button-primary" to="/booking">Make a reservation</Link>
        </div>
      </main>
    );
  }
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  }).format(new Date(`${booking.date}T12:00:00`));

  return (
    <main className="confirmation-page content-section">
      <div className="confirmation-card" aria-live="polite">
        <span className="confirmation-icon" aria-hidden="true">🍋</span>
        <p className="eyebrow">Reservation received</p>
        <h1>We’ve saved you a seat!</h1>
        <p className="confirmation-lead">Thank you for choosing Little Lemon. We can’t wait to welcome you.</p>
        <dl className="booking-summary">
          <div><dt>Date</dt><dd>{formattedDate}</dd></div>
          <div><dt>Time</dt><dd>{booking.time}</dd></div>
          <div><dt>Guests</dt><dd>{booking.guests}</dd></div>
          {booking.occasion && <div><dt>Occasion</dt><dd>{booking.occasion}</dd></div>}
        </dl>
        <Link className="button button-primary" to="/">Back to home</Link>
      </div>
    </main>
  );
}
export default ConfirmedBooking;
