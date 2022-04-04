import React from "react";
import styled from "styled-components";
import IntroScene from "../components/Nft/IntroScene";
import Index from "../components/Nft/Index";
import MediumMessage from "../components/Nft/MediumMessage";
import VideoKilledRadioStar from "../components/Nft/VideoKilledRadioStar";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function NFTHome(props) {
  return (
    <Container>
      <IntroScene></IntroScene>
      <MediumMessage></MediumMessage>
      <VideoKilledRadioStar> </VideoKilledRadioStar>
      <Index></Index>
    </Container>
  );
}

export default NFTHome;
