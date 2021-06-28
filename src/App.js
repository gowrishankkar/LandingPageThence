import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Skills from "./components/Skills";
import DesignChallenge from "./components/DesignChallenge";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TopFrame />
      <DesignChallenge />
      <Skills />
      <BottomFrame src="/images/bottom-bg-frame.jpg" />
    </div>
  );
}

export default App;

const BottomFrame = styled.img`
  background-size: cover;
  width: 100vw;
 
`;

const TopFrame = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/top-bg-frame.jpg");
`;
