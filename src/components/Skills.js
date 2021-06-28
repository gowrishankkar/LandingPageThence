import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CancelIcon from "@material-ui/icons/Cancel";
import styled from "styled-components";
import useForceUpdate from "use-force-update";

export default function Skills() {
  let allSkills = [
    { width: "180px", name: "Board Games", icon: "board", selected: false },
    {
      width: "220px",
      name: "Nature & Outdoors ",
      icon: "nature",
      selected: false,
    },
    { width: "130px", name: "Sports ", icon: "sports", selected: false },
    { width: "135px", name: "Fashion ", icon: "fashion", selected: false },
    { width: "200px", name: "Performing Arts ", icon: "art", selected: false },
    { width: "150px", name: "Language", icon: "language", selected: false },
    { width: "130px", name: "Music", icon: "music", selected: false },
    { width: "210px", name: "Arts & Craft", icon: "craft", selected: false },
    { width: "130px", name: "Collecting", icon: "collecting", selected: false },
    { width: "180px", name: "Tech & Robotics ", icon: "tech", selected: false },
    { width: "150px", name: "Curlinary", icon: "curlinary", selected: false },
  ];

  const [details, setDetails] = useState(allSkills);
  const [selectedCount, setSelectedCount] = useState(0);
  const forceUpdate = useForceUpdate();

  const clearSkills = () => {
    details.map((skill) => {
      skill.selected = false;
    });
    setDetails(details);
    setSelectedCount(0);
    forceUpdate();
  };

  const updateSkills = (index) => {
    details[index].selected = !details[index].selected;
    setDetails(details);

    let count = 0;
    details.map((skill) => {
      if (skill.selected) count++;
    });
    setSelectedCount(count);
  };

  const listItems = details.map((skill, index) => (
    <SkillItem onClick={() => updateSkills(index)}>
      <Image
        src="/images/inactive.svg"
        selected={skill.selected}
        width={skill.width}
        active={skill.selected}
      />
      <SkillImage src={`/images/${skill.icon}.png`} />
      <SkillName>{skill.name}</SkillName>
    </SkillItem>
  ));

  return (
    <React.Fragment>
      <Container fixed>
        <GridContainer container item sm={11}>
          <DescriptionBox item xs={12}  lg={4}>
            <DescriptionOne>
              We would like to see your Responsive skill
            </DescriptionOne>
            <DescriptionTwo>
              Add mouse hover interactions to amplify your design
            </DescriptionTwo>
            <SelectedCount>
              <p> {selectedCount} Interests Selected </p>

              <CancelIcon
                style={{ fill: "white" }}
                onClick={() => clearSkills()}
              />
            </SelectedCount>
          </DescriptionBox>
          <Grid item xs={11} sm={11} md={11} lg={8} >
            <CircleWrapper>{listItems}</CircleWrapper>
          </Grid>
        </GridContainer>
      </Container>
    </React.Fragment>
  );
}
const DescriptionBox = styled(Grid)`
  align-self: center;
  padding-bottom: 2rem;
  @media screen and (max-width: 426px) {
      padding-top: 18rem;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) and (min-width: 42px){
      padding-top: 8rem;
    flex-direction: column;
  }
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

const GridContainer = styled(Grid)`
      display: flex;
      justify-content: center;
    @media screen and (max-width: 768px) {
      margin-top: 18rem;
    flex-direction: column;
  }
`;

const SelectedCount = styled.div`
  p {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #44454d;
    padding: 5px;
  }
  display: flex;
  background: #f3f3f4;
  width: fit-content;
  padding: 0.5rem;
  border-radius: 6px;

  @media screen and (min-width: 768px) {
      margin-top: 4rem;
    
  }
`;

const SkillItem = styled.div`
  flex: 1 1 160px;

  border-radius: 100%;
  width: fit-content;
  height: fit-content;
  position: relative;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  border-radius: 100%;
  z-index: 500;
  ${({ active }) =>
    active &&
    `
  filter: brightness(0.5) sepia(7) saturate(10)  ;
  `}

  :hover {
    filter: brightness(0.5) sepia(7) saturate(10) drop-shadow(0px 0px 20px rgba(254, 202, 1, 1));;
    /* box-shadow: 0px 4px 20px rgba(241, 142, 26, 0.21); */
  }
`;

const SkillName = styled.div`
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #44454d;
`;

const SkillImage = styled.img`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
