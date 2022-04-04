import React from "react";
import styled from "styled-components";
import IntroScene from "../components/Nft/IntroScene";
import Index from "../components/Nft/Index";
import MediumMessage from "../components/Nft/MediumMessage";
import VideoKilledRadioStar from "../components/Nft/VideoKilledRadioStar";
import DigitalMusic from "../components/Nft/DigitalMusic";
import Monopoly from "../components/Nft/Monopoly";
import WhatIsNFT from "../components/Nft/WhatIsNFT";

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
      <DigitalMusic></DigitalMusic>
      <Monopoly></Monopoly>
      <WhatIsNFT></WhatIsNFT>
      <Index></Index>
    </Container>
  );
}

export default NFTHome;
