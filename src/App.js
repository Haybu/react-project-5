import Deployment from "./components/Deployments";
import LeadTimes from "./components/LeadTimes";
import RecoveryTimes from "./components/RecoveryTimes";
import FailRates from "./components/FailRates";

function App() {
  return (

    <div className="row">
      <div className="col">
      <br/>
        <br/>
        <Deployment />
        <br/>
        <br/>
        <LeadTimes />
      </div>
      
      <div className="col">
        <br/>
        <br/>
        <RecoveryTimes />
        <br/>
        <br/>
        <FailRates />
      </div>
    </div>
  );
}

export default App;