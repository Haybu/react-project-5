import React, { useState } from "react";
let min = "";
export default function LeadTimes() {
  if(JSON.parse(localStorage.getItem("leadTime")) <= 0) {
    min = "N/A";
  } else if (JSON.parse(localStorage.getItem("leadTime")) == 1) {
    min = JSON.parse(localStorage.getItem("leadTime")) + " minute";
  } else {
    min = JSON.parse(localStorage.getItem("leadTime")) + " minutes";
  }

  const [Leadtime, setLeadTimes] = useState({data:min});
  
  const setDataVal = (dataVal) => {
    localStorage.setItem("leadTime", JSON.stringify(dataVal));
  }
  
  const onSubmit = (e) => {
   e.preventDefault();
   if(JSON.parse(localStorage.getItem("leadTime")) == "1") {
     setLeadTimes({ ...Leadtime, data: JSON.parse(localStorage.getItem("leadTime")) + " minute"});
   } else if (JSON.parse(localStorage.getItem("leadTime")) <= 0){
      alert ("Invalid lead time, please enter again!")
   } else {
      setLeadTimes({ ...Leadtime, data: JSON.parse(localStorage.getItem("leadTime")) + " minutes"});
   }
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
    </div>
  );
}