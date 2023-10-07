import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Github, LeetCode, LinkedIn, Twitter, YouTube } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  @media screen and (max-width: 576px) {
    & > *:not(:last-child) {
    margin: 0.3rem 0;
  }
`

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  @media screen and (max-width: 576px) { 
    width: 2px;
    height: 5rem;
    
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to="https://github.com/ay690"
        >
          <Github width={20} height={20} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>

      <div>
        <NavLink style={{ color: "inherit" }} target="_blank" to="https://leetcode.com/Aniket-Yadav/">
          <LeetCode width={20} height={20} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>

      <div>
        <NavLink style={{ color: "inherit" }} target="_blank" to="https://www.linkedin.com/in/aniket-yadav-a87052162/">
          <LinkedIn width={20} height={20} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>
     
      <div>
        <NavLink style={{ color: "inherit" }} target="_blank" to="https://www.facebook.com/profile.php?id=100009796901871&mibextid=ZbWKwL">
          <Facebook width={20} height={20} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
        </NavLink>
      </div>
    
    
      
      <Line color={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
