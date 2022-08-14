import React from 'react'
import  { NavLink,Link,useLocation } from 'react-router-dom';
import web from "./image/logo512.png";
import './index.css';

const NavBar=()=> {
     const location = useLocation();
     const {pathname} =location;
     const split = pathname.split("/");
  return (
   <>
<div className=' container-fluid nav_bg '>
     <div className='row'>
      <div className='col-10 mx-auto'>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand" to="/">
   <img src={web} style={{height:"50px", width:"50px"}}/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
 <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
<NavLink className={split[1]=="" ? "menu_active nav-link active" :  "nav-link active" }  aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={split[1]=="service" ? "menu_active nav-link active" :  "nav-link active" }   to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={split[1]=="about" ? "menu_active nav-link active" :  "nav-link active" }  to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={split[1]=="contact" ? "menu_active nav-link active" :  "nav-link active" }   to="/contact">Contact</NavLink>
        </li>
    </ul>
   
    </div>
  </div>
</nav>

          </div>
     </div>
</div>


   </>
  )
}

export default NavBar;