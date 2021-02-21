import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Menu, Auth, Create, Basket, Order, Contact } from "../pages";
function useRouters(isAuthUser) {
  return (
    <Switch>
      {isAuthUser ? (
        <>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/create" exact>
            <Create />
          </Route>
          <Route path="/order" exact>
            <Order />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route path="/" exact>
            <Menu />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Redirect to="/" />
        </>
      )}
    </Switch>
  );
}
export default useRouters;
