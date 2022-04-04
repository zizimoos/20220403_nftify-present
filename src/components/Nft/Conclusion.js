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
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Conclusion(props) {
  return (
    <Container>
      <Content>
        <Title>결론 & 요약</Title>
        <TextBox>
          <p>NFT에 의해 변화하는 시장에서 올바른 전략 선택이 핵심이다.</p>
          <br></br>
          <p>1. 매개체의 변화</p>
          <p>2. 상호작용의 변화 </p>
          <p>3. 관계의 변화</p>
          <p>4. 가치의 변화</p>
          <p>5. 전략의 변화</p>
          <br></br>
          <p>
            nft라는 새로운 매개체가 등장함으로 위의 내용과 같이 변화가 발생한다.{" "}
          </p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default Conclusion;
