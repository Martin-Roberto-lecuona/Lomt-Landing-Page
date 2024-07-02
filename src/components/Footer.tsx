import React from 'react';
import colors from '../styles/colors';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: colors.primary, color: colors.background, padding: '10px 20px', marginTop: '20px' }}>
      <p>© 2024 Mi Empresa de Software. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
