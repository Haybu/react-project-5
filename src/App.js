import Deployment from "./Deployments";
import LeadTimes from "./LeadTimes";
import RecoveryTimes from "./RecoveryTimes";

function App() {
  return (
    <div>
      <Deployment />
      <RecoveryTimes />
      <LeadTimes />
    </div>
  );
}

export default App;