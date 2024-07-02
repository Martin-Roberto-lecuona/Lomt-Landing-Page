import React from 'react';
import colors from '../styles/colors';
import logoLomt from '../Images/LoMT-logo.png';

const Header: React.FC = () => {
  return (
    <header style={{ backgroundColor: colors.primary, color: colors.background, padding: '10px 20px' }}>
       <p className={'logo'}>
        <img src={logoLomt} height = '80px' alt='Logo-LoMt' />
      </p>
    </header>
  );
};

export default Header;
