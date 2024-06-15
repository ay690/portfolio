import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import SocialIcons from "../subComponents/SocialIcons";
import { Design, Develope, PowerBtn } from "./AllSvgs";
import BigTitle from "../subComponents/BigTitle";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 786px) {
    flex-direction: column-reverse;
    gap: 1em;
    scroll-behavior: smooth;
    padding-top: 200px;
    padding-bottom: 110px;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 50vh;
  z-index: 3;
  line-height: 1.2;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media screen and (max-width: 786px) {
    width: 47vw;
    margin-left: 1.3rem;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }

  @media screen and (max-width: 786px) {
    font-size: 1em;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-weight: calc(0.6em + 1vw);
  padding: 0.5rem, 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  @media screen and (max-width: 786px) {
    font-size: calc(0.5em + 1.1vw);
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>

        <Main>
          <Title>
            <Develope width={40} height={40} />
            Frontend Developer
          </Title>
          <Description>
            I value business or brand for which I'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>Html, Js, React, Redux, Sass, Tailwind, MONGODB, etc.</p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
