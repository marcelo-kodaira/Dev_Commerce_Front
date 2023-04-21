import styled, {keyframes, css} from "styled-components";

export const StyledSection = styled.div`
    background-color: #e7e4e4;
    position: relative;
    width: 45vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 880px) {
      display: none;
    }
`
export const Blur= styled.div`

    position: absolute;
    width: 100%;
    height: 50vh;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);

    @media (max-width: 880px) {
      display: none;
    }
`
const bgAnimation1 = keyframes`
  from {
    background-color: #0c8494;
  }
  to {
    
    background-color: #ff5722;
  }
`;

const bgAnimation2 = keyframes`
  from {
    background-color: #ff5722;
  }
  to {
    background-color: #0c8494;
  }
`;

export const Circle = styled.div`
    width: 300px;
    height: 300px;
    animation: ${props => {
    switch (props.color) {
      case 'orange':
        return  css `${bgAnimation1} .3s linear normal;`;
      case 'blue':
        return css `${bgAnimation2} .3s linear normal;`;
    }
    }};
    background-color: ${props => {
    switch (props.color) {
      case 'orange':
        return '#ff5722';
      case 'blue':
        return 'dodgerblue';
    }
  }};
    border-radius: 50%;

    @media (max-width: 880px) {
      display: none;
    }
`