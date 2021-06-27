import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <CardContainer className={classes.root}>
            <Title>Hi there!</Title>
            <SubHeading>This is your design challenge</SubHeading>
            <CardContents>
              <GridOption item xs={6} >
                <img src="/images/front-end.jpg" />
                <p>I’m a Front-End</p>
              </GridOption>

              <GridOption item xs={6} >
                <img src="/images/full-stack.jpg" />
                <p>I’m a Full Stack</p>
              </GridOption>
            </CardContents>
        <p>All the best!</p>
          </CardContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  z-index: 10;
`;

const CardContainer = styled(Card)`

  padding: 2rem 5rem;
  position: absolute;
  height: 482px;
  left: 4.69%;
  top: 135px;
  background: #ffffff;
  box-shadow: 0px 4px 35px 10px rgba(0, 0, 0, 0.0778296);
  border-radius: 16px;
`;

const Title = styled.div`
font-family: Bjola;
  font-weight: 900;
  text-align: left;
  font-size: 44px;
  line-height: 44px;
`;

const SubHeading = styled.div`
font-family: Bjola;
  font-weight: 900;
  font-size: 44px;
  line-height: 44px;
  text-align: left;

  /* Black / Black - 10 */

  color: #161721;
`;

const CardContents = styled(CardContent)`
  display: flex;
  justify-content: center;
`;


const GridOption = styled(Grid)`
    padding: 3rem 5rem;
    border: 2px solid #EEEEEE;
    border-radius: 16px;

`;

