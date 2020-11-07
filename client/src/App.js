import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
