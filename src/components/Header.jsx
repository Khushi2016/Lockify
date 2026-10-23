import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Profile from '../pages/Profile';

function Header({loggedin,setLoggedin}) {
  const location = useLocation();
  return (
    <>
      <header id="header" className="header d-flex align-items-center sticky-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center ">
          <Link to={"/"} className="logo d-flex align-items-center me-auto">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="assets/img/logo.png" alt=""> */}
            <h1 className="sitename">Lockify</h1>
          </Link>
          <nav id="navmenu" className="navmenu mx-auto">
            <ul>
              <li>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "active" : "")}>
                  Home
                  <br />
                </NavLink>
              </li>
              <li>
                <NavLink to={"/about"} className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/subscription"} className={({ isActive }) => (isActive ? "active" : "")}>Subscription</NavLink>
              </li>
              {/* <li>
          <NavLink to={"/courses"}>Courses</NavLink>
        </li>
        <li>
          <NavLink to={"/trainers"}>Trainers</NavLink>
        </li>
        <li>
          <NavLink to={"/events"}>Events</NavLink>
        </li>
        <li>
          <NavLink to={"/pricing"}>Pricing</NavLink>
        </li> */}
              {loggedin && <li className="dropdown">
                <Link to="#" className={`${['/add-website', '/all-website'].includes(location.pathname) ? "active" : ""}`}>
                  <span>Websites</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </Link>
                <ul>
                  <li>
                    <NavLink to={"/add-website"} >Add Websites</NavLink>
                  </li>

                  <li>
                    <NavLink to={"/all-website"}>All Websites</NavLink>
                  </li>

                </ul>
              </li>}

              {loggedin && <li className="dropdown" >
                <Link href="#" className={`${['/add-document', '/all-document'].includes(location.pathname) ? "active" : ""}`}>
                  <span >Document</span>{" "}
                  <i className="bi bi-chevron-down toggle-dropdown" />
                </Link>
                <ul>
                  <li>
                    <NavLink to={"/add-document"}>Add Document</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/all-document"}>All Document</NavLink>
                  </li>
                </ul>
              </li>}
              <li>
                <NavLink to={"/contact"} className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
              </li>
              {loggedin && <li>
                <NavLink to={"/feedback"} className={({ isActive }) => (isActive ? "active" : "")}>Feedback</NavLink>
              </li>}
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list" />
          </nav>
          {/* <NavLink className="btn-getstarted" to={"/login"} >
      Get Started
    </NavLink> */}
        <Link to={"/profile"}>
        <i className="fa-regular fa-circle-user" style={{color: "rgb(66, 125, 228)",fontSize:"24px"}}></i>
        </Link>
          {!loggedin && <NavLink className="btn-getstarted" to={"/register"}>
            Register
          </NavLink>} 
          {loggedin && <div onClick={() =>{ localStorage.removeItem("token");setLoggedin(false)}}>
            <NavLink className="btn-getstarted" to={"/register"}>
              Logout
            </NavLink>
          </div>}
        </div>
      </header>

    </>
  )
}

export default Header
