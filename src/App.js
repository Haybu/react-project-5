import Deployment from "./components/Deployments";
import LeadTimes from "./components/LeadTimes";
import RecoveryTimes from "./components/RecoveryTimes";
import FailRates from "./components/FailRates";
import { Helmet } from 'react-helmet'
import companyLogo from './assets/cover.png';

const TITLE = 'Summer Garage Band'

function App() {
  return (
    <div className="site-back-color">
    <div><br/> <img src={companyLogo} width="800" height="200"/></div>
    <div className="row component-header-color ">
       <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
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
    </div>
  );
}

export default App;