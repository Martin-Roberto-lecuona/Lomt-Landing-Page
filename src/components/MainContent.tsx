import React from 'react';
import colors from '../styles/colors';

const MainContent: React.FC = () => {
  return (
    <main style={{ backgroundColor: colors.background, color: colors.text, padding: '20px' }}>
      <h2>Soluciones de Software para PYMEs que Proveen Internet</h2>
      <p>Ofrecemos soluciones robustas y escalables para optimizar la gestión y operación de su empresa.</p>
      <button style={{ backgroundColor: colors.secondary, color: colors.background, padding: '10px 20px', border: 'none', cursor: 'pointer' }}>Conócenos</button>
    </main>
  );
};

export default MainContent;
