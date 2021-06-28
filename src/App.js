import React, {useEffect} from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Skills from "./components/Skills";
import DesignChallenge from "./components/DesignChallenge";
import { Provider as BusProvider } from "react-bus";
import "./App.css";
import WebFont from 'webfontloader';

function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka', 'Bjola']
      }
    });
   }, []);

  return (
    <BusProvider className="App">
      <Header />
      <div>
        <TopFrame src="/images/top-bg-frame.jpg" />
        <DesignChallenge />
      </div>
      <Skills />
      <BottomFrame src="/images/bottom-bg-frame.jpg" />
    </BusProvider>
  );
}

export default App;

const BottomFrame = styled.img`
  background-size: cover;
  width: 100vw;
`;

const TopFrame = styled.img`
  width: 100vw;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 769px) {
    height: 100vh;
  }
`;
