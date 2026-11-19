import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Little Lemon application", () => {
  test("renders the home page", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Little Lemon" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reserve a table/i })).toBeInTheDocument();
  });

  test("opens the booking page from the primary navigation", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("link", { name: "Reservations" }));
    expect(screen.getByRole("heading", { name: /let’s save you a seat/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /make a reservation/i })).toBeInTheDocument();
  });
});
