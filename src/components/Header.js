import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(135deg, #FD8B11 0%, #FECA01 100%)",
    borderRadius: "10px",
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    fontWeight: "900",
    fontSize: "16px",
    lineHeight: "16px",
    color: "#1E184D",
  },
});
function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const classes = useStyles();

  return (
    <Container>
      <RightMenu>
        <Menu>
          <a href="#">Dev Challenges</a>
          <a href="#">Articles</a>
          <a href="#">Workshops</a>

          <Button
            classes={{
              root: classes.root, // class name, e.g. `classes-nesting-root-x`
              label: classes.label, // class name, e.g. `classes-nesting-label-x`
            }}
          >
            {" "}
            Dev Sign In
          </Button>
        </Menu>
        <CustomMenu>
          <MenuIcon
            onClick={() => setBurgerStatus(true)}
            style={{ fill: "white" }}
          />
        </CustomMenu>
      </RightMenu>
      <Fade right>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Dev Challenges</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">workshopes</a>
          </li>
          <li>
            <a href="#">Dev Sign in </a>
          </li>
        </BurgerNav>
      </Fade>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  z-index: 10;
  min-height: 60px;
  position: absolute;
  display: flex;
  right: 0;
  left: 0;
  justify-content: flex-end;
  z-index: 1;
  a {
    padding: 15px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  flex: 1;

  a {
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    color: #ffffff;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  padding: 15px;
  a {
    font-weight: 600;
    text-decoration: uppercase;
    flex-wrap: no-wrap;
    margin-right: 10px;
  }
`;

const CustomMenu = styled.div`
  @media screen and (min-width: 769px) {
  display: none;
  }

}`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  background: white;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid black;

    a {
      font-weight: 600;
    }
  }


  @media screen and (min-width: 769px) {
 
    display: none;

  }
}`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
