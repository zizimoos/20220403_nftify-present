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

function OtherNft(props) {
  return (
    <Container>
      <Content>
        <Title>굳이 음원 NFT를 할 필요가 없다.</Title>
        <TextBox>
          <p>Gary Vee의 낙서는 $45,000에 팔린다.</p>
          <br></br>
          <p>Gary Vee 주관 컨퍼런스의 입장권이 되기도 한다.</p>
          <p>
            해당 아티스트의 작품(음원)만이 발생시킬 수 있는 가치를 공유하고{" "}
          </p>
          <p>그것을 인센트르로 부여해서 미래 수요를 창출시켜야 한다.</p>
          <br></br>
          <p>이것이 아티스트로서 독창적이고 효과적인 방법 아닐까?</p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default OtherNft;
