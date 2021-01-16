import React, { useState } from 'react'
import '../StyleCss/Auth/auth.css'
import Login from '../Components/Login'
import Register from '../Components/Register'

function Auth(){
const [isLogin, setIsLogin] = useState(false)
return(
<div className="contAuth">
    {isLogin?
    <Login /> :
    <Register />}
    <button onClick={()=>setIsLogin(!isLogin)}>{isLogin? 'To Register':'To Login'}</button>
</div>
)
}
export default Auth