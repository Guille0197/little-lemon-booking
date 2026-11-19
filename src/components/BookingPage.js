import React from "react";
import BookingForm from "./BookingForm";
import Bookings from "./Bookings";

function BookingPage({ date, availableTimes, onDateChange, onSubmit }) {
  return (
    <main className="booking-page">
      <section className="booking-banner">
        <div className="booking-banner-inner">
          <p className="eyebrow eyebrow-light">Good food. Good company.</p>
          <h1>Let’s save you a seat.</h1>
          <p>Join us for a taste of the Mediterranean. Choose your date and time below.</p>
        </div>
      </section>
      <section className="booking-content content-section" aria-label="Table reservation">
        <div className="booking-layout">
          <BookingForm date={date} availableTimes={availableTimes} onDateChange={onDateChange} onSubmit={onSubmit} />
          <Bookings date={date} availableTimes={availableTimes} />
        </div>
        <p className="booking-help">Need a hand? Call us at <a href="tel:+13125550142">(312) 555-0142</a>.</p>
      </section>
    </main>
  );
}
export default BookingPage;
