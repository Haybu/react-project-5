import { render, screen } from "@testing-library/react";
import LeadTimes from "./LeadTimes";
import userEvent from "@testing-library/user-event";

test("allows users to add lead times", () => {
  render(<LeadTimes />);

  const leadtime = screen.getByLabelText("Change Lead Time (in minutes)");
  
  userEvent.clear(leadtime);
  userEvent.type(leadtime, "1");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByText(/1 minute/)).toBeVisible();

  userEvent.clear(leadtime);
  userEvent.type(leadtime, "10");
  userEvent.click(screen.getByRole("button"));
  expect(screen.getByText(/10 minutes/)).toBeVisible();
}
);

test("prevents users from adding an empty lead time", () => {
  render(<LeadTimes />);

  const leadtime = screen.getByLabelText("Change Lead Time (in minutes)");
  
  userEvent.clear(leadtime);
  userEvent.type(leadtime, "");
  userEvent.click(screen.getByRole("button"));
  expect(!screen.findAllByText(/minute/)).toBeDefined();
}
)