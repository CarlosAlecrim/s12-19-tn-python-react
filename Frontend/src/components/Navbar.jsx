import React from 'react';
import "../style/Navbar.css";
import { Link } from 'react-router-dom';



const Navbar = () => {



  return (
    <header className="navbar">
      <nav className="navbar__container">
        <Link  className="navbar__logo" to={"/"}>
        <span >
          Logotipo
        </span>
        </Link>
        <ul className="navbar__menu">
          <Link className="navbar__item">{"usd($)"}</Link>
          <Link className="navbar__item">Espanol</Link>
          <Link className="navbar__item" to={"propiedad"}>Propiedades</Link>
          <Link className="navbar__item" to={'new-propertie'}>Ingresa tu Propiedad</Link>
          <Link className="navbar__item">Inicia sesion</Link>
          <Link className="navbar__item" to={'register'}>Registrate </Link>
          
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
