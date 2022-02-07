import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

function Header() {
  return ( 
    <Container>
      <a>
        <img src="/images/david.png" alt="logo"/>
      </a>
    <Menu>
      <a href="#inicio">Inicio</a>
      <a href="#sobre">Servicios</a>
      <a href="#exposiciones">Exposiciones</a>
    </Menu>
    <MenuRight>
      <a href="#galeria" >Galería</a>
      <div/> 
      <a href="#contacto" >Contacto</a>
      {<CustomIcon /> }
    </MenuRight>
    
     
    </Container>)

}

export default Header;

const Container = styled.div` 
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: black;
  right: 0;
  left: 0;
  top: 0;
`;

const Menu = styled.div`    
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media(max-width: 820px) {
    display: none;
  }
`;
const MenuRight = styled.div`    
  display: flex;
  justify-content: center;
  align-items: center;   
 
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
  div{
    width: 1px;
    min-height: 18px;
    background: rgba(220,202,135,1);
    margin-right: 10px;
  }
  transition: 0.5s ease;
  a:hover {
    border-bottom: 1px solid rgba(220,202,135,1);
  }
`;
 const CustomIcon = styled(MenuIcon)` 
  cursor: pointer;
 `;