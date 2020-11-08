import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { AppStateProvider } from "./Context/AppContext";
import Account from "./Pages/Account";
import Metrics from "./Pages/Metrics";
import Events from "./Pages/Events";
import HealthCheck from "./Pages/HealthCheck";
const App = () => {
  return (
    <AppStateProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/metrics">
            <Metrics></Metrics>
          </Route>
          <Route path="/healthcheck/:id">
            <HealthCheck/>
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AppStateProvider>
  );
}

export default App;
