import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function SimpleCard() {
  // const classes = useStyles();

  return (
 
      <GridContainer  item lg={5} xs={11} sm={9} md={9}>
      
          <CardContainer>
            <Title>Hi there!</Title>
            <SubHeading>This is your design challenge</SubHeading>
            <CardContents>
              <GridOption item xs={6} style={{marginRight : "0.5rem"}}>
                <img src="/images/front-end.jpg" />
                <p style={{marginTop : "1rem"}}> I’m a Front-End</p>
              </GridOption>

              <GridOption item xs={6} style={{marginLeft : "0.5rem"}}>
                <img src="/images/full-stack.jpg" />
                <p>I’m a Full Stack</p>
              </GridOption>
            </CardContents>
            <p>All the best!</p>
          </CardContainer>
        {/* </Grid> */}
      </GridContainer>
 
  );
}

const Container = styled.div`
  z-index: 10;
`;

const CardContainer = styled(Card)`
  padding: 2rem 5rem;
  @media screen and (max-width: 426px) {
    padding: 2rem 2rem;
  }
`;

const GridContainer = styled(Grid)`
  position: absolute;
  top: 10%;
  left: 5%;
  background: #ffffff;
  box-shadow: 0px 4px 35px 10px rgba(0, 0, 0, 0.0778296);
  border-radius: 16px;
  border: none;
`;
const Title = styled.div`
  font-weight: 900;
  text-align: left;
  font-size: 44px;
  line-height: 44px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  line-height: 12px;
  
  }
`;

const SubHeading = styled.div`
  font-weight: 900;
  font-size: 44px;
  line-height: 44px;
  text-align: left;

  color: #161721;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  line-height: 30px;

  
  }
`;

const CardContents = styled.div`
margin: 2rem 0;
  display: flex;
  justify-content: space-between;

    @media screen and (max-width: 426px) {
     
    /* flex-direction: column; */
  }
`;

const GridOption = styled(Grid)`
text-align: center;
  padding: 2rem 0;
  border: 2px solid #eeeeee;
  border-radius: 16px;
`;
