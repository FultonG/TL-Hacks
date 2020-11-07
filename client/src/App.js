import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <Signup></Signup>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
