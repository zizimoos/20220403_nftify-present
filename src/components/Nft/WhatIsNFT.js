import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  width: 900px;
  height: 100%;
  margin: 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 50px;
`;
const TextBox = styled.div`
  margin-top: 100px;
  font-size: 20px;
  line-height: 1.5;
`;
function WhatIsNFT(props) {
  return (
    <Container>
      <Content>
        <Title>NFT는 무엇인가?</Title>
        <TextBox>
          <p> 디지털 영수중이다. </p>
          <a href="https://beta.decent.xyz/">
            <p>
              DECENT : 20%의 스트리밍 로열티를 nft홀더에게 드립니다.(투자수익
              모델)
            </p>
          </a>

          <a href="https://beta.catalog.works/">
            <p> CATALOG(1/1) : 소유권 1개의 nft만 발행.(컬렉터를 위한 모델)</p>
          </a>
        </TextBox>
      </Content>
    </Container>
  );
}

export default WhatIsNFT;
