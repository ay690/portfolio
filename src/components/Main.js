import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PowerButton from "../subComponents/PowerButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { NavLink } from "react-router-dom";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  cursor: pointer;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const BLOG = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const WORK = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  text-decoration: none;
  z-index: 1;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};

  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}

`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  background-color: transparent;
  transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  height: ${(props) => (props.click ? "100%" : "0%")};
  width: ${(props) => (props.click ? "50%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
  
  @media screen and (max-width: 576px) {
    left: 0;
    right: 0;
    bottom: 50%;
    height: ${(props) => (props.click ? "55%" : "0%")};
    width: ${(props) => (props.click ? "100%" : "0%")};
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleClick = () => setClick(!click);

  const handleSayHiClick = () => {
    window.location.href = 'mailto:aniketyadav690@gmail.com';
  };

  useEffect(() => {
   
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 576)
    }
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => {
      window.removeEventListener('resize', updateScreenSize);
    }
  }, []);


  return (
    <MainContainer>
      <Container>
        <PowerButton />
        <LogoComponent theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <DarkDiv click={click} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 50 : 150}
            height={click ? 50 : 150}
            fill="currentColor"
          />
          <span>Click here</span>
        </Center>

        <Contact
          target="_blank"
          onClick={handleSayHiClick}
        >
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} 
          style={{color: isSmallScreen ? "Gray" : "Gray"}}
          >
            Say Hi....
          </motion.h2>
        </Contact>
      
        <WORK to="/work" >
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Work
          </motion.h2>
        </WORK>

        <BottomBar>
          <ABOUT to="/about" >
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </ABOUT>
          <SKILLS to="/skills">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills.
            </motion.h2>
          </SKILLS>
        </BottomBar>
      </Container>
      {click ? <Intro /> : null}
    </MainContainer>
  );
};

export default Main;
