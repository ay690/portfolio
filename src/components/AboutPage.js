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
 background-color: ${props => props.theme.body};
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
 color: ${props => props.theme.text};
 padding: 2rem;
 width: 50vw;
 height: 55vh;
 line-height: 1.5;
 z-index: 3;
 display: flex;
 align-items: center;
 font-size: calc(0.3rem + 1vw);
 backdrop-filter: blur(4px);
 position: absolute;
 top: 10rem;
 left: calc(5rem + 5vw);
 font-family: 'Ubuntu Mono', monospace;
 font-style: italic;
`;

const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
animation: ${float} 4s ease infinite;
img{
  width: 100%;
  height: auto;
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
      Greetings! 👋 I'm a passionate front-end developer hailing from the vibrant landscapes of India.
      <br/><br/>
      My playground is the entire frontend stack, and I thrive on exploring new technologies and weaving them into exciting projects. When I'm not coding, you'll often find me on two wheels, cruising through scenic routes, or lost in the pages of captivating books.
      <br/><br/>
      I firmly believe that everything we create is a form of art, a canvas for our consciousness to express itself. Let's connect and share our creative endeavors through my social links.
      </Main>
      <BigTitle text="ABOUT" top="10%" left="5%" />
    </Box>
    </ThemeProvider>
  )
}

export default AboutPage
