import { render, screen } from "@testing-library/react";
import Deployments from "./Deployments";
import userEvent from "@testing-library/user-event";

test("allows users to add deployments", () => {
    render(<Deployments />);
  
    const dateField = screen.getByLabelText("Deployment Date");
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.clear(dateField);
    userEvent.clear(timeField);
    
    userEvent.type(dateField, "2021-07-30");
    userEvent.type(timeField, "12:30 PM");
    userEvent.click(screen.getByRole("button"));
  
    expect(screen.getByText(/7\/30\/2021/)).toBeVisible();
    expect(screen.getByText(/12:30:00 PM/)).toBeVisible();
  });