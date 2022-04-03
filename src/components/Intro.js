import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #f5f5f5;
`;
const IntroScene = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Intro(props) {
  return (
    <Container>
      <IntroScene>
        <h1>Hello nft World</h1>
      </IntroScene>
    </Container>
  );
}

export default Intro;
