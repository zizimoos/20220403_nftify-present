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
const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function Valuation(props) {
  return (
    <Container>
      <Content>
        <Title>뭐가 더 가치 있을까?</Title>
        <TextBox>
          세상은 넓고 취향은 많다.
          <p>음악 소비에 대한 기준은 가치가 모호하다.</p>
          <p> 음악성, 외모,.....</p>
          <br></br>
          <p>모호성 속에서 투자자와 아티스트간의 중요한 공통점을 찾는다면,</p>
          <p>이 nft가 미래에도 거래 될 수 있는 가... 이다.</p>
          <br></br>
          <p>
            nft에 대한 거래가 꾸준히 발생해야 거래 발생에 대한 로열티를 받을 수
            있다.
          </p>
          <p> "되팔 때에도 로열티가 들어 오기 때문이다." </p>
          <br></br>
          <p> 이것은, </p>
          <p> 발행하는 아티스트에게도 투자자에게도 중요한 포인트이다.</p>
          <br></br>
          <ImgBox>
            <img
              src="https://pbs.twimg.com/media/FFsSU8cXoAgOPGM?format=jpg&name=small"
              alt="secondary sales"
            ></img>
          </ImgBox>
        </TextBox>
      </Content>
    </Container>
  );
}

export default Valuation;
