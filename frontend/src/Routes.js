import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Datas from "./pages/datas";
import Notfound from "./pages/notfound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/datas" exact={true} component={Datas} />
        <Route path="*" component={Notfound} />
      </Switch>
    </BrowserRouter>
  );
}
