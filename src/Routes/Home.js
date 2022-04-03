import React from "react";
import styled from "styled-components";
import IntroScene from "../components/Nft/IntroScene";
import Index from "../components/Nft/Index";

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
      <IntroScene></IntroScene>
      <Index></Index>
    </Container>
  );
}

export default Home;
