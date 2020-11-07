import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { useEffect, useState } from "react";
import { AppStateProvider } from "./Context/AppContext";
import Account from "./Pages/Account";

const App = () => {
  return (
    <AppStateProvider>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </Router>
    </AppStateProvider>
  );
}

export default App;
