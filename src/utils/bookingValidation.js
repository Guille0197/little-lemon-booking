export const getTodayDate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const validateBooking = (values, today = getTodayDate()) => {
  const errors = {};
  if (!values.date) errors.date = "Please choose a reservation date.";
  else if (values.date < today) errors.date = "Please choose today or a future date.";
  if (!values.time) errors.time = "Please choose an available time.";
  const guests = Number(values.guests);
  if (!Number.isInteger(guests) || guests < 1 || guests > 10) {
    errors.guests = "Choose between 1 and 10 guests.";
  }
  return errors;
};
