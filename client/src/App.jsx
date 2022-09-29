import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from "./services/userService";
import { useEffect } from "react";

import Home from "./screens/Home";
import Inspect from "./screens/Inspect";
import Duel from "./screens/Duel";

function App() {
  // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser();
    duelUsers();
  }, []);

  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route path="/inspect" render={() => <Inspect />} />
          <Route path="/duel" render={() => <Duel />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
