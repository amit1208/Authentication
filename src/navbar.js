import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'


function Navbar() {
  //USE LOCATION is imported from react-router-dom and uses effect on location change

  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)}, [location]);
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Authenticate</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Home" ? "active":""}`} aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/About"?"active":""}`} to="/About">About</Link>
        </li> 
    
      </ul>
      <form className="d-flex" role="search">
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <Link className="btn btn-outline-primary" to="/Login" role="button">Login</Link>
        <Link className="btn btn-outline-primary" to="/Register" role="button">Register</Link>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
