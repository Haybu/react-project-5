import React, { useState } from "react";

export default function LeadTimes() {
  
  const [Leadtime, setLeadTimes] = useState({data:"N/A"});
  
  const setDataVal = (dataVal) => {
    localStorage.setItem("leadTime", JSON.stringify(dataVal));
  }
  
  const onSubmit = (e) => {
   e.preventDefault();
   let min = "minutes";
   if(JSON.parse(localStorage.getItem("leadTime")) == "1") {
      min = "minute";
   } 
   setLeadTimes({ ...Leadtime, data: JSON.parse(localStorage.getItem("leadTime")) + " " + min});
  };

  return (
    <div className="container pt-5 div-back-color">
      <h1>Lead Time</h1>
      <label htmlFor="">From code pushed to code deployed: <b>{Leadtime.data}</b></label>
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="leadtime">Change Lead Time (in minutes)</label> 
        </p>
        <p>
          <input
            id="leadtime"
            className="form-control"
            type="text"
            name="leadtime"
            onChange={(e) => setDataVal(e.target.value)}
          />
        </p>
        <button className="btn btn-primary">Update Lead Time</button>
      </form>
      <br/>
      <br/>
    </div>
  );
}