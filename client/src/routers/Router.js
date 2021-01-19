import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "../pages/menu";
import Auth from "../pages/auth";
import Create from "../pages/create";

function useRouters(isAuthUser) {
  if (isAuthUser) {
    return (
      <Switch>
        <Route path="/" exact>
          <Menu />
        </Route>
        <Route path="/create" exact>
          <Create />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <Menu />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
export default useRouters;
