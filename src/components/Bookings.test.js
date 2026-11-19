import React from "react";
import { render, screen } from "@testing-library/react";
import Bookings from "./Bookings";

describe("Bookings availability panel", () => {
  test("shows the available times for the selected date", () => {
    render(<Bookings date="2026-12-20" availableTimes={["17:00", "18:30"]} />);
    expect(screen.getByRole("heading", { name: /available times/i })).toBeInTheDocument();
    expect(screen.getByText("17:00")).toBeInTheDocument();
    expect(screen.getByText("18:30")).toBeInTheDocument();
  });

  test("explains when no reservation times are available", () => {
    render(<Bookings date="2026-12-20" availableTimes={[]} />);
    expect(screen.getByRole("status")).toHaveTextContent(/no available times/i);
  });
});
