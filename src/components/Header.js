import React from 'react';
import styled from 'styled-components';

function Header() {
  return ( 
    <Container>
    <Logo>
    </Logo>
    {/* <ul className = "app__navbar-links">
      <li className = "p__opensans"><a href="#inicio">Inicio</a></li>
      <li className = "p__opensans"><a href="#sobre">Servicios</a></li>
      <li className = "p__opensans"><a href="#exposiciones">Exposiciones</a></li>
    </ul>
    <div className = "app__navbar-galeria">
      <a href="#galeria" className='p__opensans'>Galería</a>
      <div/>
      <a href="#contacto" className="p__opensans">Contacto</a>
    </div> */}
    </Container>)

}

export default Header;

const Container = styled.div` 
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-black);
  padding: 1rem 2rem;
`;
const Logo = styled.div`
  background-image: url('/images/david.png');
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

