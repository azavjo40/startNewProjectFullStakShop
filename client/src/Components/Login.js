import React, { useState } from 'react'
import '../StyleCss/Auth/register.css'
function Login(){
const [form, setForm] = useState({email: '', password:''})
const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value })
}
return(
<div className="contReg">
    <form>
        <h1>Login</h1>
        <input type="email" name="email" placeholder="Enter Email" required value={form.email}
            onChange={(event)=>changehandler(event)}
        />
        <input type="passeord" name="password" placeholder="Enter Password" required value={form.password}
            onChange={(event)=>changehandler(event)}
        />
        <button>Login</button>
    </form>
</div>
)
}
export default Login