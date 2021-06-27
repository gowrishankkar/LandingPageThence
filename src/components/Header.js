import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import Fade from "react-reveal/Fade";
import Button from '@material-ui/core/Button';

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <RightMenu>
        <Menu>
          <a href="#">Dev Challenges</a>

          <a href="#">Articles</a>

          <a href="#">Workshops</a>
        </Menu>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <Fade right>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href="#">Dev Challenges</a>
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

  @media (min-width: 768) {
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

const CustomMenu = styled(MenuIcon)``;

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

  @media (max-width: 768) {
    display: none;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
