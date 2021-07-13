import React, { useState } from "react";

function App() {
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
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="title">Deployment Date</label>
          <input
            id="date"
            className="form-control"
            type="text"
            name="date"
            value={newDeployment.date}
            onChange={(e) => setNewDeployment({ ...newDeployment, date: e.target.value })}
          />
        </p>
        <p>
          <label htmlFor="author">Deployment Time</label>
          <input
            id="time"
            className="form-control"
            type="text"
            name="time"
            value={newDeployment.time}
            onChange={(e) => setNewDeployment({ ...newDeployment, time: e.target.value })}
          />
        </p>
        <button className="btn btn-primary">Add Deployment</button>
      </form>
      <table className="table table-striped mt-5">
        <tbody>
          {deployments.map((deployment, i) => (
            <tr key={i}>
              <td>{deployment.date}</td>
              <td>{deployment.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;