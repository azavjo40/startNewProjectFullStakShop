import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Menu from '../pages/Menu'
import Auth from '../pages/Auth'

function useRouters(isAuthUser){
if(isAuthUser){
return (
<Switch>
    <Route path="/" exact>
        <Menu />
    </Route>
    <Redirect to="/" />
</Switch>
)
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
)
}
export default useRouters