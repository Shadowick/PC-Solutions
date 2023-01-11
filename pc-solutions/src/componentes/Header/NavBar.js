import React from 'react'
import Logopcsolutions from "../../img/logo-pc-solutions.png";
import CartWidget from '../Cart/CartWidget';
import { Link, NavLink } from 'react-router-dom';

/* export  */const NavBar =() => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="links" to="/">
            <img src={Logopcsolutions} alt="Logo"></img>
          </Link>
          {/* <a className="navbar-brand" href="#">
          <img src={Logopcsolutions} alt="Logo"></img>
          </a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="links" to="/categoria/Placas de Video">
                    Placas de Video
                </NavLink>              
                </li>
              <li className="nav-item">
              <NavLink className="links" to="/categoria/Microprocesadores">
                    Microprocesadores
                </NavLink>
                </li>
              <li className="nav-item">
              <NavLink className="links" to="/categoria/Memoria RAM">
                    Memoria RAM
                </NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form> 
          </div>
          <Link className="links" to="/cart">
            <CartWidget />
          </Link>
        </div>
      </nav>

    )
}

export default NavBar;