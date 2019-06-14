import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Battle } from "./Battle";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Popular } from "./Popular";
import { Result } from "./Result";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/battle/results" component={Result} />
            <Route path="/popular" component={Popular} />
            <Route
              render={() => <p> Not Found </p>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
