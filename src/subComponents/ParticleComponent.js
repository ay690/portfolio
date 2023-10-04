import React from 'react'
import styled from 'styled-components'
import Particles from 'react-tsparticles'
import type { Engine } from "tsparticles-engine";
import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";
import { loadFull } from "tsparticles";

const Box = styled.div`
 position: absolute;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 z-index: 0;
`;

const ParticleComponent = (props) => {

    // This is new implementation where I have used react-tsparticles instead of react-particles-js
      const particlesInit = async (main) => {
        await loadFull(main);
      };
  return (
    <Box>
      <Particles style={{position:'absolute', top: '0'}} params={props.theme === "light" ? ConfigLight : ConfigDark} init={particlesInit} />
    </Box>
  )
}

export default ParticleComponent;
