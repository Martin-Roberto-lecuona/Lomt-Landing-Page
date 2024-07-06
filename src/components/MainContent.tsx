import React from 'react';
import '../styles/Main.css';
import fondo from '../Images/fondo.jpg'; 
import colors from '../styles/colors';

const MainContent: React.FC = () => {
  return (
    <main className='main'>
      <div className='background-image'>
        <img src = {fondo} alt='Fondo Inicio' />
      </div>
      <div className='content'>
        <h2 >Soluciones de Software para PyMEs que Proveen Internet</h2>
        {/* <h2 >La solución para tus soluciones FTTH</h2>  */}
        <p>
          Ofrecemos una solucion robusta y escalable de software con la capacidad de gestionar de manera remota la gestion y 
          <span className='highlight'> ABM de las redes FTTH</span> apuntando a las <span className='highlight'>PyMEs argentinas</span>.
          <br></br>
          Gracias a nuestro equipo tecnológico que además de poder brindar consultoría en todo el país tiene las mejores herramientas 
          para que puedas <span className='highlight'>explotar tu negocio</span>.
        </p>
        <button className='cta-button'>Conócenos</button>
      </div>
    </main>
  );
};

export default MainContent;
