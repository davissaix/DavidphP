import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return ( 
    <Container id='contHeader'>
      <a>
        <img src="/images/david.png" alt="logo"/>
      </a>
    <Menu>
      <a href="#inicio">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#exposiciones">Exposiciones</a>
    </Menu>
    <MenuRight>
      <a className='derecho' href="#galeria" >Galería</a>
      <div className='derecho'/> 
      <a className='derecho' href="#contacto" >Contacto</a>
      <CustomIcon onClick={()=> setBurgerStatus(true)} /> 
    </MenuRight>
    <BurgerNav show={burgerStatus} >
      <CloseWrapper>
        <CustomClose onClick={()=> setBurgerStatus(false)}/>
      </CloseWrapper>
     
      <li><a href='#'> Inicio </a></li>
      <li><a href='#'> Servicios </a></li>
      <li><a href='#'> Exposiciones </a></li>
      <li><a href='#'> Galería </a></li>
      <li><a href='#'> Contacto </a></li>
    </BurgerNav>
    
     
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
  z-index: 1;
  a {
    color:#f0e6e6;
  }
  a:hover{
    color:rgb(173, 173, 173);
  }
  img{
    @media(max-width: 470px) {
      width: 85vw;
    }
  }
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
  @media(max-width: 960px) {
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
  .derecho {
    @media(max-width: 650px) {
      display: none;
    }
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
  color: #f0e6e6;
  &:hover {
    color: grey;
  }
 `;
const BurgerNav = styled.div`   
  position: fixed;
  list-style-type:none;
  top: 0;
  bottom: 0;
  right: 0;
  background: #f0e6e6;
  width: 200px;
  z-index: 100;
 a {
   color: black;
   text-decoration: none;
 };
 padding: 20px;
 li{
   padding: 10px 0;
   font-weight: 600; 
 }
 transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;   
const CloseWrapper = styled.div`  
  display: flex;
  justify-content: flex-end;
`; 
const CustomClose = styled(CloseIcon)`  
 cursor: pointer;
 
`;  