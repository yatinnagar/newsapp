import React from "react";
import Switch from "@mui/material/Switch";
import MaterialUISwitch from "./Mui/MaterialUISwitch";

import favicon from "./favicon.ico";

import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div>
      <nav
        className={`"navbar fixed-top navbar-expand-lg navbar-${
          props.Dmode ? "dark" : "light"
        } bg-${props.Dmode ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <img
            src={favicon}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />

          {/* style="color:rgb(15, 70, 77)  */}
          <Link className="navbar-brand" to="/">
            {" "}
            NewsMate
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/business">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/entertainment">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/health">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/science">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/sports">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/technology">
                      Technology
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Country ({props.country})
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/" >India</Link></li>
            <li><a className="dropdown-item" href='/us' onClick={props.setCountry("us")} >USA</a></li>
            <li><Link className="dropdown-item" to="/ru" >Russia</Link></li>
            <li><Link className="dropdown-item" to="/">Netherland</Link></li>
         </ul>
          </li> */}
              {/* <li className="nav-item">
          <Link className="nav-link" to="/general">General</Link></li>
            <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item">
          <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
           
            <li className="nav-item">
          <Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item">
          <Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item">
          <Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item">
          <Link className="nav-link" to="/technology">Technology</Link></li> */}
            </ul>
            <div className="form-check form-switch">
              <MaterialUISwitch onClick={props.changeMode} />

              <label
                className="form-check-label"
                style={{ color: props.Dmode ? "white" : "black" }}
                htmlFor="flexSwitchCheckDefault"
              >
                Switch Mode ( Light / Dark )
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
// NavBar.defaultProps={
//   country : "in",
//   pageSize: 9
// }
// NavBar.propsTypes={
// country : PropTypes.string,
//   pageSize: PropTypes.number
// }
export default NavBar;
