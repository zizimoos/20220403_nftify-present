import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
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

function Earning(props) {
  return (
    <Container>
      <Content>
        <Title>음원 NFT판매를 통한 수익</Title>
        <TextBox>
          <p> catalog : 스트리밍 수익과 비교해 평균적으로 7.5배 이상</p>
          <br></br>
          <p>
            잘 알려지지 않은 아티스트에게도 nft판매를 통해 큰 수익을 올릴 수
            있는 마켓이 생겼다.
          </p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default Earning;
