import React, { useState } from "react";
import { calculateFailRate } from "./utils";
import eventBus from "./EventBus";

export default function FailRates() {
  // initialize failRate with whatever in storage
  const [failRate, setFailRate] = useState(calculateFailRate(JSON.parse(localStorage.getItem("deployments")), JSON.parse(localStorage.getItem("recoveryTimes"))));   
  
  // triggered when an event is fired via the EventBus
  const eventHandler = () => {
    let newRate = calculateFailRate(JSON.parse(localStorage.getItem("deployments")), JSON.parse(localStorage.getItem("recoveryTimes")));      
    if (newRate !== failRate) {
      setFailRate(newRate);
    }
  }
  
  eventBus.on("deployments", (data) => eventHandler());
  eventBus.on("recoveryTimes", (data) => eventHandler());

  return (
    <div className="container pt-5 div-back-color">
      <h1>Change Fail Rate</h1>
      <div>Change Fail Rate: {failRate} </div>
      <br/>
    </div> 
  );
}