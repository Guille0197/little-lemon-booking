import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const props = {
    date: "2026-12-20",
    availableTimes: ["17:00", "18:30"],
    onDateChange: jest.fn(),
    onSubmit: jest.fn(() => true),
  };

  beforeEach(() => jest.clearAllMocks());

  test("renders the required booking fields with accessible labels", () => {
    render(<BookingForm {...props} />);
    expect(screen.getByLabelText(/choose a date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose a time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toHaveValue(2);
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("updates the available date through the parent callback", () => {
    render(<BookingForm {...props} />);
    fireEvent.change(screen.getByLabelText(/choose a date/i), { target: { value: "2026-12-21" } });
    expect(props.onDateChange).toHaveBeenCalledWith("2026-12-21");
  });

  test("submits a valid booking payload", () => {
    render(<BookingForm {...props} />);
    fireEvent.change(screen.getByLabelText(/choose a time/i), { target: { value: "18:30" } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
    fireEvent.click(screen.getByRole("button", { name: /reserve a table/i }));
    expect(props.onSubmit).toHaveBeenCalledWith({
      date: "2026-12-20", time: "18:30", guests: "2", occasion: "Birthday",
    });
  });

  test("shows validation messages when required values are missing", () => {
    render(<BookingForm {...props} date="" />);
    fireEvent.click(screen.getByRole("button", { name: /reserve a table/i }));
    expect(screen.getByText("Please choose a reservation date.")).toBeInTheDocument();
    expect(screen.getByText("Please choose an available time.")).toBeInTheDocument();
    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
