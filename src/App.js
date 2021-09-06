import logo from "./logo.svg";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./pages/index";
import Candidate from "./pages/candidate";
import Managecontent from "./pages/managecontent";
import Members from "./pages/members";
import Surveys from "./pages/surveys";
import Observer from "./pages/observer";
import Observerrequest from "./pages/observerrequest";
import Pages from "./pages/pages";
import Uploadbanner from "./pages/uploadbanner";
import Uploadcontent from "./pages/uploadcontent";
import Uploadimage from "./pages/uploadimage";
import Staff from "./pages/staff";
import NewStaff from "./pages/newStaff";
import Candidates from "./pages/candidates";
import NewCandidates from "./pages/newCandidate";
import Observers from "./pages/observers";
import Login from "./pages/login";
import Addsurvey from "./pages/addSurvey";
import Offices from "./pages/offices";

import "./App.css";

function App() {

  return (
    <Switch>
      {/* <Route exact path="/" component={Login} />{" "} */}
      <Route exact path="/" component={Home} />{" "}
      <Route exact path="/candidate" component={Candidate} />{" "}
      <Route exact path="/candidates" component={Candidates} />{" "}
      <Route exact path="/newcandidate" component={NewCandidates} />{" "}
      <Route exact path="/managecontent" component={Managecontent} />{" "}
      <Route exact path="/members" component={Members} />{" "}
      <Route exact path="/surveys" component={Surveys} />{" "}
      <Route exact path="/addsurvey" component={Addsurvey} />{" "}
      <Route exact path="/observer" component={Observer} />{" "}
      <Route exact path="/observers" component={Observers} />{" "}
      <Route exact path="/observerrequest" component={Observerrequest} />{" "}
      <Route exact path="/pages" component={Pages} />{" "}
      <Route exact path="/uploadbanner" component={Uploadbanner} />{" "}
      <Route exact path="/uploadcontent" component={Uploadcontent} />{" "}
      <Route exact path="/uploadimage" component={Uploadimage} />{" "}
      <Route exact path="/staff" component={Staff} />{" "}
      <Route exact path="/newstaff" component={NewStaff} />{" "}
      <Route exact path="/offices" component={Offices} />{" "}
    </Switch>
  );
}

export default App;
