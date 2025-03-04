import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">Página Inicial</Link>
        <Link to="/convidados">Página de convidados</Link>
        <Link to="/presentes">Página de presentes</Link>
      </div>
    </>
  );
}

export default Header;
