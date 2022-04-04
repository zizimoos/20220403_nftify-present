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

// const ImgBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;
// const SubTitle = styled.div`
//   padding: 10px;
//   font-size: 12px;
//   color: gray;
//   align-self: flex-end;
// `;

function ThinkBefore(props) {
  return (
    <Container>
      <Content>
        <Title>NFT를 발매하기 전에 생각해보자</Title>
        <TextBox>
          <p>NFT 소유자가 얻는 것은 무엇인가?</p>
          <br></br>
          <p>1/1 nft 혹은 1/n nft</p>
          <p>컬렉터블 혹은 커뮤니티 맴버쉽</p>
          <p>클라우드 펀딩 혹은 로열티</p>
          <br></br>
          <p>위의 사항들을 결정해야 몇개를 발행할지 정할 수있고, </p>
          <p> 이로인해 거래량도 결정할 수 있다.</p>
          <br></br>
          <p>팬이 10,000명이면 10,000개를 발행하면 리세일이 일어나기 힘들다.</p>
          <p>
            100개정도 발행하면 nft를 가지지 못한 9900명에 의해서 리세일이 발생할
            것이다.
          </p>
          <p>리세일이 일어나야 로얄티가 발생한다.</p>
          <br></br>
          <p>혹은 클라우드 펀팅 처럼 한번에 쭉 발행해서 팔고..끝..?</p>
          <br></br>
          <p>nft의 희소성을 극대화 시키는...방법이 좋지 않을까?</p>
          <br></br>
          <p>문제는 희소성과 거래량의 밸런스를 잘 맞추어...야 한다.</p>
          <p>사서 되팔지 않으면 투자자나 아티스트는 수입이 단절된다.</p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default ThinkBefore;
