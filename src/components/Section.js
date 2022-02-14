import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import Home from './Home';




function Section ( {backgroundColor, title, subtitle, description, onebtn, imageSection, backgroundPosition, seccion }) {
  return (
    <Wrapper id={seccion} bgColor = {backgroundColor} >
      <Wrap >
        <ItemText>
          <Textgroup>
          <Fade left>
          <Texth2>
              <h2>  
                  {title} <br/>
              </h2>
              <h4>
                  {subtitle}
              </h4>
            </Texth2>
          </Fade>
            
          <TextP>
              <p>
                  { description }
              </p>   
            </TextP>
          </Textgroup>   
          <Fade bottom>
          <OneButtonGroup>
            <OneButton > 
              <a href='#contacto'>
              {onebtn}
              </a>
              
            </OneButton>       
          </OneButtonGroup>
          </Fade>     
        
        </ItemText>
        <WrapImg>
            <Imagen imgSection = {imageSection} bgPosition = {backgroundPosition}>
            </Imagen>
        </WrapImg>
      
      
      </Wrap>
      <DownArrow src="/images/down-arrow.svg"/>
    </Wrapper>
    
    )
}

export default Section;
const Wrapper = styled.div`   
    background-color: ${props => props.bgColor};
    color: #f0e6e6;
 ;
    `; 

const Wrap = styled.div` 
  width: 100vw;
  height: 95vh;   
  display: flex;
  felx-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  
 
  padding-top: 13vh;
  @media (max-width: 820px) {
    flex-direction: column;

  }
  
  
`;

const ItemText = styled.div`

  text-align: left;
  width: 90wv;
  max-width: 550px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding-left: 3vw;
  padding-right: 3vw;
  padding-bottom: 2px;
  @media (min-width: 650px) {
    padding-left: 1vw;
    padding-right: 1vw;
  }
  @media (min-width: 820px) {
    width: 45vw;
    justify-content: space-between;
    }
    @media (min-width: 900px) {
      width: 50vw;
      justify-content: space-between;
      }
      @media (min-width: 950px) {
        width: 55vw;
        justify-content: space-between;
        }

`;  
const Textgroup = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: top;
  word-wrap: break-word;
  padding-right: 2vw;
  `; 

const OneButtonGroup = styled.div`  
 display: flex;
 justify-content: left;
 padding: 5vh 0 2vh 0;
 @media (min-width: 820px) {
  padding: 5vh 0 0 0;
}
@media (max-width: 820px) {
  padding: 2vh 0 0 0;
}

`;

const OneButton = styled.div`   
  background-color: rgba(220,202,135,1);
  color: black;
  height: 40px;
  width: 40vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  `;

  const Imagen = styled.div`
    // background-image: url('/images/hot.jpg');
    background-size: cover;
    background-position: ${props => props.bgPosition}; 
    background-repeat: no-repeat;
    height: 213px;
    width: 320px;
    display: flex;
    justify-content: start;
    align-items: start;
    margin-right: 3vw;
    background-image: ${props => `url('images/${props.imgSection}')`};
  @media (min-width: 420px) {
    width: 410px;
    height: 277px;
  }
  @media (min-width: 500px) {
    width: 460px;
    height: 306px;
  }
  @media (min-width: 680px) {
    width: 500px;
    height: 333px;
  }
  @media (min-width: 820px) {
    width: 55vw;
  }
  @media (min-width: 900px) {
    width: 50vw;
  }
  @media (min-width: 900px) {
    width: 45vw;
  }
    `;
    const WrapImg = styled.div` 
    
    `; 

    const Texth2 = styled.div`  
    padding-bottom: 10vh;
    
    `;
    const TextP = styled.div`   
      text-indent: 2rem;
      text-align: justify;
      line-height: 1.5;
     
    `;
    const DownArrow = styled.img`   
      animation: animateDown infinite 1.5s;

      height: 40px;
    `;   
    