import React, { useState } from "react";

export default function Deployments() {
    // define state for the list of books
  const [deployments, setDeployments] = useState([]);

  // define state for the book form
  const [newDeployment, setNewDeployment] = useState({ date: "", time: "" });

  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    setDeployments((deployments) => [...deployments, newDeployment]);
    setNewDeployment({ date: "", time: "" });
  };

  return (
    <div className="container pt-5">
      <h1>Deployments</h1>
      <table className="table table-striped mt-5">
        <tbody>
          {deployments.map((deployment, i) => (
            <tr key={i}>
              <td>{i + 1}.</td>
              <td>{formatDate(deployment.date, deployment.time)}</td>
              <td>{formatTime(deployment.date, deployment.time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="dateField">Deployment Date</label>
          <input
            id="dateField"
            className="form-control"
            type="date"
            name="dateField"
            value={newDeployment.date}
            onChange={(e) => setNewDeployment({ ...newDeployment, date: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="timeField">Deployment Time</label>
          <input
            id="timeField"
            className="form-control"
            type="time"
            name="timeField"
            value={newDeployment.time}
            onChange={(e) => setNewDeployment({ ...newDeployment, time: e.target.value })}
          />
        </p>
        <button className="btn btn-primary">Add Deployment</button>
      </form>
    </div>
  );
  }

function formatDate(date, time) {
    const utcSeconds = Date.parse(`${date} ${time}`) / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleDateString("en-US");
}

function formatTime(date, time) {
    const utcSeconds = Date.parse(`${date} ${time}`) / 1000;
    const d = new Date(0);
    d.setUTCSeconds(utcSeconds);
    return d.toLocaleTimeString("en-US");
}