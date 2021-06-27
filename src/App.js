import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <TopFrame />
      <Skills />
      <BottomFrame />
    </div>
  );
}

export default App;

const BottomFrame = styled.div`
  width: 100wh;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/bottom-bg-frame.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopFrame = styled.div`
  width: 100wh;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/top-bg-frame.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
