import { useEffect } from 'react'
import Navbar from './Components/Navbar';
import useRouters from './routers/Router'
import {BrowserRouter as Router} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { POST_LOGIN_ID, POST_LOGIN_TOKEN } from './Reduxs/types';
function App() {
const token = useSelector(s=>s.auth.token)
const isAuthUser = !!token
const routers = useRouters(isAuthUser)
const dispach = useDispatch()
useEffect(()=>{
const storage = JSON.parse(localStorage.getItem('userDate'))
if(storage){
dispach({type: POST_LOGIN_TOKEN, payload: storage.token })
dispach({type: POST_LOGIN_ID, payload: storage.userId })
}
},[dispach])
return (
<div className="cont">
  <Router>
    {isAuthUser ?
    <Navbar home="Home" contact="Contacts" create="Create" myMenu="MyMenu" />
    :
    <Navbar home="Home" contact="Contacts" login="Login" l="/auth" /> }
    {routers}
  </Router>
</div>
)
}

export default App