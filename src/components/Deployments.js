import React, { useState } from "react";
import { deploymentFrequency, formatDate, formatTime } from "./utils";

import eventBus from "./EventBus";

export default function Deployments() {
  // define state for the list of deployments. Initialized from storage if any
  const storedData = JSON.parse(localStorage.getItem("deployments")) !=null ? 
                        JSON.parse(localStorage.getItem("deployments")) : [];
  const [deployments, setDeployments] = useState(storedData);

  // define state for the book form
  const [newDeployment, setNewDeployment] = useState({ date: "", time: "" });

  // define the function that runs when the form is submitted
  const onSubmit = (e) => {
    e.preventDefault();
    if (newDeployment.date !== "" && newDeployment.time !== "") { 
      const newList = [...deployments, newDeployment];
      setDeployments(newList);
      localStorage.setItem("deployments", JSON.stringify(newList));  // add to storage.
      updateFailRate();
    }
  };

  const updateFailRate = () => {
    console.log("updating fail rate");
    eventBus.dispatch("deployments", {});
  };

  return (
    <div className="container pt-5 div-back-color">
      <h1>Deployments</h1>
      <div>Frequency: {deploymentFrequency(deployments)} </div>
      <table className="table table-striped mt-5">
        <tbody>
          {deployments.map((deployment, i) => (
            <tr key={i}>
              <td class="component-header-color ">{i + 1}.</td>
              <td class="component-header-color ">{formatDate(deployment.date, deployment.time)}</td>
              <td class="component-header-color ">{formatTime(deployment.date, deployment.time)}</td>
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
      <br/>
    </div>
    
  );
  }