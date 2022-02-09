import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Section from './Section';
import ImagenSlider from './ImagenSlider';
import SectionCopy from './SectionCopy';




function Home() {
  return(
    <Container>
        <Header />
       <Section 
           backgroundColor = "none"
           title="David Ph Paris"
           subtitle="Fotógrafo Profesional"
           description="Fotógrafo urbano y de moda, colaborando con grandes empresas textiles y publicitarias realizando fotos para catálogos y de viajes, con experiencia en manejo de modelos e iluminación.
           Si quieres mas información sobre mis servicios no dudes en escribirme."
           onebtn="Hablemos"
            imageSection= "hot.jpg"
       />  
       <Section 
        backgroundColor = "black"
        title="Servicios: Fotógrafía de Modas"
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
           description=" Fotografía de lugares vacacionales, airbnb, fincas u hoteles y lugares turísticos y paradisiacos a promocionar."
           onebtn="Escríbeme"
            imageSection= "beach.png"
       />  
       <Section 
           backgroundColor = "none"
           title="Exposiciones"
           subtitle="Expos fotográficas artísticas"
           description=" He realizado expociciones fotográficas en la ciudad de Medellín y a nivel internacional en finas artes"
           onebtn="Saber Más"
            imageSection= "expos.jpg"
            backgroundPosition = "right"
       />  
         <SectionCopy
            backgroundColor = "black"
            title="Galería"
            subtitle="Slider de imagenes fotograficas"
            description="Aquí podrás ver una galería de imagenes fotográficas de mi trabajo"
            onebtn="Contáctame"
          
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