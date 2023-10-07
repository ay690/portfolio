import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/profile.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.text} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.text};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    
    align-items: center;
    
   width: auto;
  }
`;
const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 80%;
    height: 75vh;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    .pic{
      position: absolute;
      left: 20%;
      bottom: 50%;
      transform: translateY(90%);
      width: 50%;
      height: 40vh;
    }
  }
  
`;

const Text = styled.div`
  font-size: calc(0.5em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  h1, h3 {
    font-family: Helvetica, Arial, sans-serif; 
  }

  h6 {
    font-family: 'Poppins', sans-serif; 
  }
  @media screen and (max-width: 576px){
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    width: auto;
    padding: 1rem;
   
    & > *:last-child{
      font-size: calc(0.1em + 3vw);
      flex-wrap: wrap;
      padding-top: 15px;
      justify-content: center;
      align-items: center;
      max-width: auto;
    }
    h1 {
      font-size: 33px;
    }
    h3 {
      font-size: 22px; 
    }
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: 'spring', duration:2, delay:1 }}
    >
      <SubBox>
        <Text>
          <h1>Hello,</h1>
          <h3>I'm Aniket.</h3>
          <h6>
            I'm dedicated to producing clean and captivating web experiences.
          </h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
