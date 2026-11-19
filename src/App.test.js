import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Little Lemon application", () => {
  test("renders the home page", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Little Lemon" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: /reserve a table/i }).length).toBeGreaterThan(0);
  });

  test("opens the booking page from the primary navigation", () => {
    render(<App />);
    fireEvent.click(within(screen.getByRole("navigation", { name: "Main navigation" })).getByRole("link", { name: "Reservations" }));
    expect(screen.getByRole("heading", { name: /let’s save you a seat/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /make a reservation/i })).toBeInTheDocument();
  });
});
