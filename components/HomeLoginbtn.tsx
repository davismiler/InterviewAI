"use client"
import React from 'react'

import styled from 'styled-components';
const HomeLoginbtn = () => {
  return (
    <StyledWrapper>
      <button className='' >
        Sign In
        
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    position: relative;
    padding: 4px 22px;
    background: transparent;
    font-size: 17px;
    font-weight: 500;
    color:#DDDFFF ;
    border: 2px solid #6F75B3;
    border-radius: 8px;
    box-shadow: 0 0 1em .25em var(--glow-color),
            0 0 4em 1em var(--glow-spread-color),
            inset 0 0 .75em .25em var(--glow-color);
     text-shadow: 0 0 .5em var(--glow-color);;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

 

  button:hover {
    background: transparent;
    color: #A998DA;
    
    box-shadow:0 0 1em .25em var(--glow-color),
            0 0 4em 2em var(--glow-spread-color),
            inset 0 0 .75em .25em var(--glow-color); ;
  }

  
  .fil0 {
    fill: 0 0 1em .25em var(--glow-color),
            0 0 4em 2em var(--glow-spread-color),
            inset 0 0 .75em .25em var(--glow-color);;
  }`;



export default HomeLoginbtn