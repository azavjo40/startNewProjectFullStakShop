import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "../pages/Menu";
import Auth from "../pages/Auth";
import Create from "../pages/create";
import Basket from '../pages/basket'
import Order from "../pages/order";
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
        <Route path="/order" exact>
          <Order />
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
      <Route path="/basket" exact>
        <Basket />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}
export default useRouters;
