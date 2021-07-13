import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("allows users to add deployments", () => {
  render(<App />);

  const dateField = screen.getByLabelText("date");
  const timeField = screen.getByLabelText("time");
  userEvent.type(dateField, "x");
  userEvent.type(timeField, "y");
  userEvent.click(screen.getByRole("button"));

  expect(screen.getByText(/x/)).toBeVisible();
  expect(screen.getByText(/y/)).toBeVisible();
});