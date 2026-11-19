import { validateBooking } from "./bookingValidation";

describe("validateBooking", () => {
  const today = "2026-11-18";

  test("requires a date and an available time", () => {
    expect(validateBooking({ date: "", time: "", guests: "2" }, today)).toEqual({
      date: "Please choose a reservation date.",
      time: "Please choose an available time.",
    });
  });

  test("rejects dates in the past", () => {
    expect(validateBooking({ date: "2026-11-17", time: "18:00", guests: "2" }, today))
      .toHaveProperty("date", "Please choose today or a future date.");
  });

  test("rejects guest counts outside the allowed range", () => {
    expect(validateBooking({ date: today, time: "18:00", guests: "11" }, today))
      .toHaveProperty("guests", "Choose between 1 and 10 guests.");
  });

  test("accepts a valid booking", () => {
    expect(validateBooking({ date: today, time: "18:00", guests: "2" }, today)).toEqual({});
  });
});
