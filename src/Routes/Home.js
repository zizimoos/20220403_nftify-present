import React from "react";
import styled from "styled-components";
import Intro from "../components/Intro";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Home(props) {
  return (
    <Container>
      <Intro></Intro>
    </Container>
  );
}

export default Home;
