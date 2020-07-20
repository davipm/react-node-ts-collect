import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import CreatePoint from "./pages/CreatePoint";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/create-point" component={CreatePoint} />
    </Switch>
  );
}

export default Routes;
