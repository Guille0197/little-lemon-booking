import React, { useReducer, useState } from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import { submitAPI } from "./api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { initializeTimes, toDateInputValue, toLocalDate, updateTimes } from "./utils/bookingReducer";

function NotFound() {
  return (
    <main className="not-found content-section">
      <p className="eyebrow">404 — Wrong turn</p>
      <h1>That page wandered off.</h1>
      <p>Let’s get you back to something delicious.</p>
      <Link className="button button-primary" to="/">Back to home</Link>
    </main>
  );
}

function AppContent() {
  const navigate = useNavigate();
  const initialDate = new Date();
  const [date, setDate] = useState(toDateInputValue(initialDate));
  const [availableTimes, dispatch] = useReducer(updateTimes, initialDate, initializeTimes);
  const [booking, setBooking] = useState(null);

  const handleDateChange = (nextDate) => {
    setDate(nextDate);
    dispatch({ type: "UPDATE_TIMES", date: toLocalDate(nextDate) });
  };

  const handleBookingSubmit = (formData) => {
    const accepted = submitAPI(formData);
    if (accepted) {
      setBooking(formData);
      navigate("/confirmed");
      return true;
    }
    return false;
  };

  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={
          <BookingPage date={date} availableTimes={availableTimes}
            onDateChange={handleDateChange} onSubmit={handleBookingSubmit} />
        } />
        <Route path="/confirmed" element={<ConfirmedBooking booking={booking} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return <BrowserRouter><AppContent /></BrowserRouter>;
}
export default App;
