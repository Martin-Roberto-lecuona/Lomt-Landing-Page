import React from 'react';
import colors from '../styles/colors';

const MainContent: React.FC = () => {
  return (
    <main style={{ backgroundColor: colors.background, color: colors.text, padding: '20px' }}>
      <h2>Soluciones de Software para PYMEs que Proveen Internet</h2>
      <p>Ofrecemos soluciones robustas y escalables de software con la capacidad de gestionar de manera remota las ABM de las redes 
        FTTH de PyMEs argentinas gracias a nuestro equipo tecnológico que además puede brindar consultoría en todo el país.</p>
      <button style={{ 
        backgroundColor: colors.secondary, 
        color: colors.primary, 
        padding: '11.5px 23px', 
        border: 'none', 
        cursor: 'pointer',
        fontSize: '1.15em', 
        fontWeight: 'bold'
      }}>
        Conócenos
      </button>
    </main>
  );
};

export default MainContent;
