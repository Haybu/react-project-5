import React, { useState } from "react";

export default function RecoveryTimes() {
    // define state for the list of books
  const [recoveryTimes, setRecoveryTimes] = useState([]);

  // define state for the book form
  const [newRecoveryTime, setNewRecoveryTime] = useState({ date: "", time: "", duration: "" });

  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    setRecoveryTimes((recoveryTimes) => [...recoveryTimes, newRecoveryTime]);
    setNewRecoveryTime({ date: "", time: "", duration: "" });
  };

  return (
    <div className="container pt-5">
      <h1>Recovery Times</h1>
      <table className="table table-striped mt-5">
        <tbody>
            <tr>
              <td>Start Time</td>
              <td>Duration (mintues)</td>
            </tr>
          {recoveryTimes.map((recoveryTime, i) => (
            <tr key={i}>
              <td>{formatDateTime(recoveryTime.date, recoveryTime.time)}</td>
              <td>{recoveryTime.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={onSubmit}>
      <table className="table table-striped mt-5">
        <tbody>
            <tr>
              <td>
                <p>
                  <label htmlFor="dateField">Start Date</label>
                  <input
                    id="dateField"
                    className="form-control"
                    type="date"
                    name="dateField"
                    value={newRecoveryTime.date}
                    onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, date: e.target.value })}
                  />
                </p>
              </td>
              <td>
                <p>
                  <label htmlFor="timeField">Start Time</label>
                  <input
                    id="timeField"
                    className="form-control"
                    type="time"
                    name="timeField"
                    value={newRecoveryTime.time}
                    onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, time: e.target.value })}
                  />
                </p>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <p>
                  <label htmlFor="timeField">Duration</label>
                  <input
                    id="durationField"
                    className="form-control"
                    type="text"
                    name="durationField"
                    value={newRecoveryTime.duration}
                    onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, duration: e.target.value })}
                  />
                </p>
              </td>
            </tr>
        </tbody>
      </table>
        <button className="btn btn-primary">Add RecoverTime</button>
      </form>
    </div>
  );
  }

function formatDateTime(date, time) {
    const utcSeconds = Date.parse(`${date} ${time}`) / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString("en-US") + " " + d.toLocaleTimeString("en-US");
}
