import React from "react";
import styled from "styled-components";

export default function Skills(props) {
  return (
    <SkillItem>
      <Image src="/images/inactive.svg" width={props.width}
     />
      <SkillImage src={`/images/${props.icon}.png`}/>
      <SkillName>{props.name}</SkillName>
    </SkillItem>
  );
}

const SkillItem = styled.div`
  border-radius: 100%;
  height: fit-content;
  position: relative;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  border-radius: 100%;
  z-index: 500;
  :hover {
    filter: brightness(0.5) sepia(7) saturate(10);
  }
  
`;

const SkillName = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const SkillImage = styled.img`

  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;