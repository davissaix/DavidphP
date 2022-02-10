import React from 'react';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return(
    <Container>
        <h3>© David A. All Rights Reserved</h3>
        <h3>Medellín. Colombia</h3>
        <IntIcon/>
    </Container>
  ) 
}

export default Footer;

const Container = styled.div`  
    width: 100%;
    min-height: 60px;
    display: flex;
    justify-content: space-around;
    h3{
        color: #f0e6e6;
    }
`;
const IntIcon = styled(InstagramIcon)`  
    color: #f0e6e6;
    width: 45px;
`;