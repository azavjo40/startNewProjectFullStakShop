import { useState } from 'react'
import '../StyleCss/navbar/onavbar.css'
import icon from '../images/openMenu.png'
const Navbar = (props)=>{
const [isLoadin, setIsLoading] = useState(false)
return(
<header className="header">
    <img src={icon} alt={icon} className={isLoadin? 'icon' :''} onClick={()=>setIsLoading(!isLoadin)} />
    <ul className={isLoadin? 'openNav' :'nav_links'} onClick={()=>setIsLoading(false)} >
        {props.home ? <li><a href={props.h}>{props.home}</a></li>:''}
        {props.abaut ? <li><a href={props.a}>{props.abaut}</a></li>:''}
        {props.contact ? <li><a href={props.c}>{props.contact}</a></li>:''}
        {props.create ? <li><a href={props.cr}>{props.create}</a></li>:''}
        {props.myMenu ? <li><a href={props.my}>{props.myMenu}</a></li>:''}
        {props.login ? <li><a href={props.l}>{props.login}</a></li>:''}
    </ul>
</header>
)
}
export default Navbar