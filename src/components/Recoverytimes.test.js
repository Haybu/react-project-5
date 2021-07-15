import { render, screen } from "@testing-library/react";
import Deployments from "./RecoveryTimes";
import userEvent from "@testing-library/user-event";
import RecoveryTimes from "./RecoveryTimes";

test("allows users to add recovery time", () => {
    render(<RecoveryTimes />);
  
    const dateField = screen.getByLabelText("Start Date");
    const timeField = screen.getByLabelText("Start Time");
    const durationField = screen.getByLabelText("Duration");

    userEvent.clear(dateField);
    userEvent.clear(timeField);
    userEvent.clear(durationField);
    
    userEvent.type(dateField, "2021-07-30");
    userEvent.type(timeField, "12:30 PM");
    userEvent.type(durationField, "9");

    userEvent.click(screen.getByRole("button"));
  
    expect(screen.getByText(/7\/30\/2021/)).toBeVisible();
    expect(screen.getByText(/12:30:00 PM/)).toBeVisible();
    expect(screen.getByText(/9/)).toBeVisible();
  });