import React from 'react'
import styled, {keyframes, ThemeProvider} from 'styled-components'
import { DarkTheme } from './Themes'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import BigTitle from '../subComponents/BigTitle'
import astonaut from '../assets/Images/spaceman.png'
import ParticleComponent from '../subComponents/ParticleComponent'

const Box = styled.div`
 background-color: black;
 width: 100vw;
 height: 100vh;
 position: relative;
 overflow: hidden;
`;

const float = keyframes`
0%{
  transform: translateY(-10px);
}
50%{
  transform: translateY(15px) translateX(15px);
}
100%{
  transform: translateY(-10x);
}
`

const Main = styled.div`
 border: 2px solid ${props => props.theme.text};
 color: rgb(255,255,255);
 padding: 1.5rem;
 width: 50vw;
 height: 55vh;
 line-height: 1.5;
 z-index: 5;
 display: flex;
 align-items: center;
 font-size: calc(0.5rem + 1.1vw);
 backdrop-filter: blur(7px);
 position: absolute;
 top: 8rem;
 left: calc(5rem + 5vw);
 font-family: 'Ubuntu Mono', monospace;
 font-style: italic;
 @media screen and (max-width: 786px) {
   width: 56vw;
   margin-right: 20px;
   top: 12rem;
   left: 5rem;
 }
`;

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
animation: ${float} 4s ease infinite;
img{
  width: 70%;
  height: auto;
}

@media screen and (max-width: 586px) {
  top: 50%;
  left: 80%;
  img{
    width: 80%;
  
  }
}

@media screen and (max-width: 768px) {
  top: 10%;
  left: 80%;
  img{
    width: 100%;
  
  }
}
`;


const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
    <Box>
      <LogoComponent theme="dark" />
      <SocialIcons theme="dark" />
      <PowerButton />
      <ParticleComponent theme="dark" />
      <Spaceman>
        <img src={astonaut} alt='spaceman'/>
      </Spaceman>
      <Main>
      Greetings! 👋 I'm a passionate front-end developer from India, exploring the frontend tech world.
      <br/><br/>
      I love coding and integrating new tech into exciting projects. Outside work, I enjoy riding and reading.
      <br/><br/>
      I see our creations as art—a canvas for our thoughts. Let's connect and share on my social links.
      </Main>
      <BigTitle text="ABOUT" top="10%" left="5%" />
    </Box>
    </ThemeProvider>
  )
}

export default AboutPage
