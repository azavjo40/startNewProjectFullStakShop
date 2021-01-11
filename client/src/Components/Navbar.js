import React from 'react'

const Navbar = ()=>{
return(
  <header>
      <img className="logo" src="" alt="azam"/>
      <nav>
          <ul className="nav_links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Login</a></li>
          </ul>
      </nav>
      <a className="cta" href="#"><button>Contact</button></a>
      
  </header>
)
}
export default Navbar