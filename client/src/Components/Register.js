import React, { useState } from 'react'
import '../StyleCss/Auth/register.css'
function Register(){
const [form, setForm] = useState({
    name:'', phone:'', email:'', password:''
})
const changehandler = (event)=>{
setForm({...form, [event.target.name]: event.target.value})
}
console.log(form)
return(
<div className="contReg">
    <form >
    <h1>Create An Account</h1>
        <input type="text" name="name" placeholder="Enter Name" required
        value={form.name} onChange={(event)=>changehandler(event)}
        />
        <input type="text" name="phone" placeholder="Enter Phone" required
           value={form.phone} onChange={(event)=>changehandler(event)}
        />
        <input type="email" name="email" placeholder="Enter Email" required
        value={form.email} onChange={(event)=>changehandler(event)}
        />
        <input type="passeord" name="password" placeholder="Enter Password" required
        value={form.password} onChange={(event)=>changehandler(event)}
        />
        <button>Register</button>
    </form>
</div>
)
}
export default Register