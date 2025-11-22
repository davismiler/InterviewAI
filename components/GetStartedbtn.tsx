import React from 'react'
import styled from 'styled-components';
const GetStartedbtn = () => {
    return (
      <StyledWrapper>
        <button > Get Started
        </button>
      </StyledWrapper>
    );
  }
  
  const StyledWrapper = styled.div`
    button {
     --glow-color: rgb(59, 130, 246);
     --glow-spread-color: rgba(139, 92, 246, 0.6);
     --enhanced-glow-color: rgb(236, 72, 153);
     --btn-color: rgb(30, 58, 138);
     border: .25em solid var(--glow-color);
     padding: 1em 3em;
     color: white;
     font-size: 15px;
     font-weight: bold;
     background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%);
     border-radius: 1em;
     outline: none;
     box-shadow: 0 0 1em .25em rgba(59, 130, 246, 0.5),
            0 0 4em 1em rgba(139, 92, 246, 0.4),
            inset 0 0 .75em .25em rgba(59, 130, 246, 0.3);
     text-shadow: 0 0 .5em rgba(255, 255, 255, 0.5);
     position: relative;
     transition: all 0.3s;
    }
  
    button::after {
     pointer-events: none;
     content: "";
     position: absolute;
     top: 120%;
     left: 0;
     height: 100%;
     width: 100%;
     background: linear-gradient(135deg, rgba(59, 130, 246, 0.4) 0%, rgba(139, 92, 246, 0.4) 50%, rgba(236, 72, 153, 0.4) 100%);
     filter: blur(2em);
     opacity: .7;
     transform: perspective(1.5em) rotateX(35deg) scale(1, .6);
    }
  
    button:hover {
     color: white;
     background: linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #db2777 100%);
     box-shadow: 0 0 1.5em .3em rgba(59, 130, 246, 0.6),
            0 0 5em 2em rgba(139, 92, 246, 0.5),
            inset 0 0 .75em .25em rgba(59, 130, 246, 0.4);
     transform: translateY(-2px);
    }
  
    button:active {
     transform: translateY(0);
     box-shadow: 0 0 0.8em .2em rgba(59, 130, 246, 0.5),
            0 0 3em 1.5em rgba(139, 92, 246, 0.4),
            inset 0 0 .5em .15em rgba(59, 130, 246, 0.3);
    }`;

export default GetStartedbtn