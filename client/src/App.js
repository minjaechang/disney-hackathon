import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
import { History } from "./components/History";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
