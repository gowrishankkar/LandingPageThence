import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";

export default function Skills() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid container>
          <Grid item xs={5}>
            <DescriptionOne>
              We would like to see your Responsive skill
            </DescriptionOne>
            <DescriptionTwo>
              Add mouse hover interactions to amplify your design
            </DescriptionTwo>
          </Grid>
          <Grid item xs={7}>
            All skills
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

const DescriptionOne = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #161721;
`;

const DescriptionTwo = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* Black/Black - 6 */
  text-align: left;
  color: #73747a;
`;
