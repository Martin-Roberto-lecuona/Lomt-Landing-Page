import React from 'react';
import logoLomt from '../Images/LoMT-logo2.png';
import logoLomtBlanco from '../Images/LoMT-logo-blanco.png';
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <img src={logoLomtBlanco} height='80px' alt='Logo-LoMt' />
      <h1 className = 'titulo-corto'>LoMt</h1>
      {/* <h1 className = 'titulo'>LoMt. La solución para tus soluciones FTTH.</h1> */}
      <h1 className = 'titulo'>Software</h1>

    </header>
  );
};

export default Header;
