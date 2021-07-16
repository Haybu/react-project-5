import React, { useState } from "react";
import { formatDateTime } from "./utils"
import eventBus from "./EventBus";

export default function RecoveryTimes() {
  // define state for the list of recovery times. Initialized from storage if any
  const storedData = JSON.parse(localStorage.getItem("recoveryTimes")) !=null ? 
                        JSON.parse(localStorage.getItem("recoveryTimes")) : [];
  const [recoveryTimes, setRecoveryTimes] = useState(storedData);

  // define state for the book form
  const [newRecoveryTime, setNewRecoveryTime] = useState({ date: "", time: "", duration: "" });

  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    if (newRecoveryTime.date !== "" || newRecoveryTime.time !== "" || newRecoveryTime.duration !== "") {
      const newList = [...recoveryTimes, newRecoveryTime];
      setRecoveryTimes(newList);
      localStorage.setItem("recoveryTimes", JSON.stringify(newList));  // add to storage.
      updateFailRate();
    }
  };

  const updateFailRate = () => { eventBus.dispatch("recoverTimes", {}) };

  return (
    <div className="container pt-5 ">
      <h1>Recovery Times</h1>
      <table className="table mt-5 ">
        <tbody className="component-header-color ">
            <tr>
              <th className="bordered-cell">Start Time</th>
              <th className="bordered-cell">Duration (mintues)</th>
            </tr>
          {
            recoveryTimes.map((recoveryTime, i) => (
              <tr key={i}>
                <td className="bordered-cell">{formatDateTime(recoveryTime.date, recoveryTime.time)}</td>
                <td className="bordered-cell">{recoveryTime.duration}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <form onSubmit={onSubmit} >
      <table className="table mt-5">
        <tbody className="component-header-color ">
            <tr>
              <td className="non-bordered-cell component-header-color ">
                  <label htmlFor="dateField">Start Date</label>
                  <input
                    id="dateField"
                    className="form-control"
                    type="date"
                    name="dateField"
                    value={newRecoveryTime.date}
                    onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, date: e.target.value })}
                  />
              </td>
              <td className="non-bordered-cell">
                  <label htmlFor="timeField">Start Time</label>
                  <input
                    id="timeField"
                    className="form-control"
                    type="time"
                    name="timeField"
                    value={newRecoveryTime.time}
                    onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, time: e.target.value })}
                  />
              </td>
            </tr>
            <tr>
              <td className="non-bordered-cell" colSpan="2">
                  <label htmlFor="durationField">Duration</label>
                  <input
                    id="durationField"
                    className="form-control"
                    type="text"
                    pattern="\d+"
                    name="durationField"
                    value={newRecoveryTime.duration}
                    onChange={(e) => setNewRecoveryTime({ ...newRecoveryTime, duration: e.target.value })}
                  />
              </td>
            </tr>
        </tbody>
      </table>
        <button className="btn btn-primary">Add RecoverTime</button>
      </form>
      <br/>
    </div>
  );
  }

