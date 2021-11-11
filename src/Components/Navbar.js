import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
function Nav(props){

    
    return (
    <>
     
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">{props.home}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/about">{props.about}</NavLink>
          </li>
        
         
        </ul>
   
  

  <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.togglemode} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.style}> {props.btntext} </label>
  </div>


      </div>
    </div>
  </nav>

  </>
    );
}

Nav.defaultProps={

    title: 'TEXT-UTIL',
    home: 'HOME',
    about: 'ABOUT'

};
export default Nav;