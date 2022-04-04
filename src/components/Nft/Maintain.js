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
// const ImgBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

function Maintain(props) {
  return (
    <Container>
      <Content>
        <Title>NFT거래량은 어떻게 유지 할 것인가?</Title>
        <TextBox>
          <p>발행후 인센티브 부여 & 인센티브 극대화 시키는 방법</p>
          <br></br>
          <p> 1/1 nft :</p>
          <p>
            최초 구매자에게 특별 머천다이즈, 앨범 크레딧 등록, 마스터
            트랙판매(저작권 까지 모두 판매)
          </p>
          <br></br>
          <p> 1/n NFT :</p>
          <p>
            미공개 공연, 머천다이즈/공연 할인, 콘텐츠 선공개, 만남, 채팅방 등...
          </p>
          <br></br>
          <p> 로열티 NFT :</p>
          <p>
            최대한 많은 지분을 가져갈 수 있도록 nft 갯수 제한, 극단적으로 아예
            로열티를 다 nft 소유자에게 양도.
          </p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default Maintain;
