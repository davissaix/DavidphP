import React from 'react';
import styled from 'styled-components';



function Email() {
  return (
  <Container>
      <Form> 
          <Divo>
            <h2>Contacto</h2>    
            <div className="line"/>
          </Divo>
          
          <h1>Escríbeme al siguiente correo </h1>
          <h2>Pronto te estaré respondiendo</h2>   
          <Formi><h3>davidphparis@gmail.com</h3></Formi>

      </Form>
     

  </Container>
  )
}

export default Email;

const Container = styled.div`   
    height: 80vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #f0e6e6;
    
`;
const Form = styled.div`    
    border: 1px solid rgba(220,202,135,1);
    width: 80vw;
    height: 60vh;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1{
        font-size: calc(20px + 2vmin);
    };
    h2{ 
        font-size: calc(10px + 2vmin);
    }
     .line{
        border: 1px solid rgba(220,202,135,1);
        width: auto;
        
    }
   
   
    
`;
const Formi = styled.div`       
    border: 1px solid rgba(220,202,135,1);
    width: auto;
    max-width: 500px;
    height: 15%;
    max-height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    h3{
        margin:0 8px 0 8px;
    }
    
`;    
const Divo = styled.div`    

`; 
