import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home";
import { History } from "./components/History";

function App() {
  return (
    <Router>
      <div>
        <h1>Disney and Honey Bottles</h1>
      </div>
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
