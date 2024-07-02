import React from 'react';
import colors from '../styles/colors';
import logoLomt from '../Images/LoMT-logo2.png';

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: colors.primary, 
      color: colors.background, 
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center' // Alinea verticalmente el logo y el título
    }}>
      <img src={logoLomt} height='80px' alt='Logo-LoMt' />
      <h1 style={{ marginLeft: '20px' }}>LoMt. La solución para tus soluciones FTTH.</h1>
    </header>
  );
};

export default Header;
