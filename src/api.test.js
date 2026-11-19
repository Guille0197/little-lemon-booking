import { fetchAPI, submitAPI } from "./api";

describe("Capstone booking API", () => {
  test("returns a repeatable list of time slots for the same calendar date", () => {
    const date = new Date(2026, 10, 18);
    expect(fetchAPI(date)).toEqual(fetchAPI(new Date(2026, 10, 18)));
  });

  test("returns time slots in the expected evening format", () => {
    const times = fetchAPI(new Date(2026, 10, 18));
    expect(Array.isArray(times)).toBe(true);
    times.forEach((time) => expect(time).toMatch(/^(1[7-9]|2[0-3]):(00|30)$/));
  });

  test("accepts a booking payload using the course mock API", () => {
    expect(submitAPI({
      date: "2026-12-20",
      time: "18:30",
      guests: "2",
      occasion: "Birthday",
    })).toBe(true);
  });
});
