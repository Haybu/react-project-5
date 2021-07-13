import { render, screen } from "@testing-library/react";
import Deployments from "./Deployments";
import userEvent from "@testing-library/user-event";

test("allows users to add deployments", () => {
    render(<Deployments />);
  
    const dateField = screen.getByLabelText("Deployment Date");
    const timeField = screen.getByLabelText("Deployment Time");
    userEvent.type(dateField, "12/30/2020");
    userEvent.type(timeField, "12:30:00 PM");
    userEvent.click(screen.getByRole("button"));
  
    expect(screen.getByText(/12\/30\/2020/)).toBeVisible();
    expect(screen.getByText(/12:30:00 PM/)).toBeVisible();
  });