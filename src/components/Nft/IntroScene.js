import React from "react";
import McLuhan from "../../assets/img/Luflan_mediumisthemessage.jpg";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
const Content = styled.div`
  width: 900px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SubTitle = styled.div`
  padding: 10px;
  color: gray;
  align-self: flex-end;
`;

function IntroScene(props) {
  return (
    <Container>
      <Content>
        <img src={McLuhan} width="900px" alt="Marshall McLUHAN" />
        <SubTitle>
          <a href="https://marshallmcluhan.com/">Marshall McLUHAN</a>
        </SubTitle>
      </Content>
    </Container>
  );
}

export default IntroScene;
