import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

describe("Little Lemon application", () => {
  test("renders the home page with clear reservation calls to action", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "Little Lemon" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /reserve your table/i })).toBeInTheDocument();
    expect(within(screen.getByRole("navigation", { name: "Main navigation" }))
      .getByRole("link", { name: /book a table/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /explore this week’s menu/i })).toBeInTheDocument();
  });

  test("opens the booking page from the header booking call to action", () => {
    render(<App />);
    fireEvent.click(within(screen.getByRole("navigation", { name: "Main navigation" }))
      .getByRole("link", { name: /book a table/i }));
    expect(screen.getByRole("heading", { name: /let’s save you a seat/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /make a reservation/i })).toBeInTheDocument();
  });
});
