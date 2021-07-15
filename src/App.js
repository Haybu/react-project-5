import Deployment from "./components/Deployments";
import LeadTimes from "./components/LeadTimes";
import RecoveryTimes from "./components/RecoveryTimes";
import FailRates from "./components/FailRates";

function App() {
  return (

    <div className="row">
      <div className="col">
        <Deployment />
        <br />
        <LeadTimes />
      </div>
      <div className="col">
        <RecoveryTimes />
        <FailRates />
      </div>
    </div>
  );
}

export default App;