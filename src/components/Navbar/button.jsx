import React from 'react';
import styled, { keyframes } from 'styled-components';

const Button = styled.button`

  position: relative;
  margin:10px;
  width: 11em;
  height: 4em;
  outline: none;
  transition: 0.1s;
  background-color: transparent;
  border: none;
  font-size: 11px;
  
  color: #ddebf0;
  
  &:hover #rightArrow {
    background-color:rgb(216 115 78);
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  &:hover #leftArrow {
    background-color: rgb(216 115 78);
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  &:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  &:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  &:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
  }
`;

const Clip = styled.div`
  --color: rgba(251,225,14,255);
  position: absolute;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 5px double var(--color);
  box-shadow: inset 0px 0px 15px #aebac2;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
`;

const Arrow = styled.span`
  position: absolute;
  transition: 0.2s;
  background-color: rgba(251,225,14,255);
  top: 35%;
  width: 11%;
  height: 30%;
`;

const LeftArrow = styled(Arrow)`
  left: -13.5%;
  clip-path: polygon(100% 0, 100% 100%, 0 50%);
`;

const RightArrow = styled(Arrow)`
  clip-path: polygon(100% 49%, 0 0, 0 100%);
  left: 102%;
`;

const Corner = styled.div`
  position: absolute;
  width: 4em;
  height: 4em;
  background-color: rgba(251,225,14,255);
  box-shadow: inset 0px 0px 15px #aebac2;
  transform: scale(1) rotate(45deg);
  transition: 0.2s;
`;

const RightTop = styled(Corner)`
  top: -1.98em;
  left: 91%;
`;

const LeftTop = styled(Corner)`
  top: -1.96em;
  left: -3.0em;
`;

const LeftBottom = styled(Corner)`
  top: 2.10em;
  left: -2.15em;
`;

const RightBottom = styled(Corner)`
  top: 45%;
  left: 88%;
`;

const changeColor8 = keyframes`
  from {
    background-color: #2781c3;
  }
  to {
    background-color: rgb(216 115 78);
  }
`;

const lightEffect8 = keyframes`
  from {
    box-shadow: 1px 1px 5px #27c39f;
  }
  to {
    box-shadow: 0 0 2px #27c39f;
  }
`;

const greenLight8 = keyframes`
  from {}
  to {
    box-shadow: inset 0px 0px 32px #27c39f;
  }
`;

const leftArrow8 = keyframes`
  from {
    transform: translate(0px);
  }
  to {
    transform: translateX(10px);
  }
`;

const rightArrow8 = keyframes`
  from {
    transform: translate(0px);
  }
  to {
    transform: translateX(-10px);
  }
`;

export default function StyledButton({name,to}) {
  return (
    <Button>
      {name}
      <Clip>
        <LeftTop className="corner" />
        <RightBottom className="corner" />
        <RightTop className="corner" />
        <LeftBottom className="corner" />
      </Clip>
      <RightArrow id="rightArrow" className="arrow" />
      <LeftArrow id="leftArrow" className="arrow" />
    </Button>
  );
}
