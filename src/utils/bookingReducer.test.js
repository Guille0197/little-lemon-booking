import { fetchAPI } from "../api";
import { initializeTimes, updateTimes } from "./bookingReducer";

describe("booking time reducer helpers", () => {
  test("initializeTimes returns the available times for the initial date", () => {
    const date = new Date(2026, 5, 18);
    expect(initializeTimes(date)).toEqual(fetchAPI(date));
  });

  test("updateTimes refreshes available times when the date changes", () => {
    const nextDate = new Date(2026, 5, 19);
    const result = updateTimes(["17:00"], { type: "UPDATE_TIMES", date: nextDate });
    expect(result).toEqual(fetchAPI(nextDate));
  });

  test("updateTimes preserves the current state for unknown actions", () => {
    const current = ["17:00", "18:30"];
    expect(updateTimes(current, { type: "UNKNOWN" })).toBe(current);
  });
});
