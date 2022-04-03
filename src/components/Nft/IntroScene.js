import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  background-color: #f5f5f5;
`;
const Content = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function IntroScene(props) {
  return (
    <Container>
      <Content>
        <h1>Hello nft World</h1>
      </Content>
    </Container>
  );
}

export default IntroScene;
