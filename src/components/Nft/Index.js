import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Index(props) {
  return (
    <Container>
      <ul>
        <li> 1. 매개체의 발전으로 변하는 음악시장 </li>
        <li> 2. NFT의 등장으로 변하는 아티스트와 팬과의 관계 </li>
        <li> 3. NFT발매 전략 & 리스크 </li>
      </ul>
    </Container>
  );
}

export default Index;
