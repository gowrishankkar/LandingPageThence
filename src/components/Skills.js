import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SkillComp from "./SkillComp";
import styled from "styled-components";

export default function Skills() {
  return (
    <React.Fragment>
      <Container fixed>
        <Grid container>
          <DescriptionBox item xs={4}>
            <DescriptionOne>
              We would like to see your Responsive skill
            </DescriptionOne>
            <DescriptionTwo>
              Add mouse hover interactions to amplify your design
            </DescriptionTwo>
          </DescriptionBox>
          <Grid item xs={8}>
            All skills
            <CircleWrapper>
              <SkillItem width="200px" name="Board Games" icon="board" />
              <SkillItem width="220px" name="Nature & Outfoors" icon="nature" />
              <SkillItem width="150px" name="Sports" icon="sports" />
              <SkillItem width="150px" name="Fashion" icon="fashion" />
              <SkillItem width="220px" name="Performing Arts" icon="art" />
              <SkillItem width="180px" name="Language" icon="language" />
              <SkillItem width="150px" name="Music" icon="music" />
              <SkillItem width="240px" name="Arts & Craft" icon="craft" />
              <SkillItem width="150px" name="Collecting" icon="collecting" />
              <SkillItem width="200px" name="Tech & Robotics" icon="tech" />
              <SkillItem width="170px" name="Curlinary" icon="curlinary" />
            </CircleWrapper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
const DescriptionBox = styled(Grid)`
  align-self: center;
  padding-bottom: 2rem;
`;

const DescriptionOne = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #161721;
  padding-bottom: 1rem;
`;

const DescriptionTwo = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;

  text-align: left;
  color: #73747a;
`;

const CircleWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  flex-wrap: wrap;
`;

const SkillItem = styled(SkillComp)`
  flex: 1 1 160px;

  border-radius: 100%;
  width: fit-content;
  height: fit-content;
  background-color: RGBA(252, 102, 32, 1);
`;
