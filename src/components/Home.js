import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';



function Home() {
  return(
    <Container>
        <Header />
       <Section 
           backgroundColor = "none"
           title="David Ph Paris"
           subtitle="Fotógrafo Profesional"
           description="Fotógrafo urbano y de moda, colaborando con grandes empresas textiles y publicitarias realizando fotos para catálogos y de viajes, con experiencia en manejo de modelos e iluminación."
           onebtn="Hablemos"
            imageSection= "hot.jpg"
       />  
       <Section 
        backgroundColor = "black"
        title="Fotógrafía de Modas"
           subtitle="Moda y catalogos"
           description="Fotografía de prensa, en eventos de moda, desfiles, eventos sociales, creación de catalogos para ropa urbana, vestido de baño, ropa interior."
           onebtn="Contáctame"
            imageSection= "moda.jpg"
       />  
       <Section 
           backgroundColor = "none"
           title="Fotografía Artística"
           subtitle="Sensualidad, empoderamiento, autoestima"
           description="Fotografía en artes finas, expresando la belleza y sensualidad del cuerpo femenino, para modelos o mujeres que simplemente quieren verse sensuales y recobrar la confianza en sí mismas."
           onebtn="Saber Más"
            imageSection= "body.jpg"
       />  
       <Section 
           backgroundColor = "black"
           title="Fotografía de Viajes"
           subtitle="Promoción de lugares turísticos, hoteles y restaurantes"
           description=" Fotografía de lugares vacacionales, airbnb, fincas u hoteles y lugares a promocionar."
           onebtn="Escríbeme"
            imageSection= "beach.png"
       />  
    </Container>
    ) 
}

export default Home;

const Container = styled.div`   
background-image: url('/images/bg.png');
min-height: 500px;
    background-size: cover;
    background-position: center;
    
    background-attachment: fixed;  
  
    
`;