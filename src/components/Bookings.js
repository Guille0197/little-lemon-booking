import React from "react";

function Bookings({ date, availableTimes, selectedTime }) {
  const formattedDate = date
    ? new Intl.DateTimeFormat("en-US", { weekday: "long", month: "long", day: "numeric" }).format(new Date(`${date}T12:00:00`))
    : "your selected date";

  return (
    <aside className="availability-card" aria-labelledby="availability-heading">
      <div className="availability-heading">
        <p className="eyebrow">Your evening, your way</p>
        <h2 id="availability-heading">Available times</h2>
        <p className="availability-date">{formattedDate}</p>
      </div>
      {availableTimes.length > 0 ? (
        <>
          <p className="availability-intro">Choose a time that works for you. We look forward to welcoming you.</p>
          <ul className="availability-list" aria-label="Available reservation times">
            {availableTimes.map((time) => (
              <li key={time}><span className={selectedTime === time ? "time-slot is-selected" : "time-slot"}><span aria-hidden="true">◷</span> {time}</span></li>
            ))}
          </ul>
        </>
      ) : <p className="empty-times" role="status">There are no available times for this date. Please choose another day.</p>}
      <p className="availability-footnote">Times are shown in local restaurant time.</p>
    </aside>
  );
}
export default Bookings;
