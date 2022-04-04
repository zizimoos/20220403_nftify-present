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

function Monopoly(props) {
  return (
    <Container>
      <Content>
        <Title>극소수만 배부른 독식구조</Title>
        <TextBox>
          <p>Spotify에 1,000명 이상의 청취자를 가진 아티스트는 120만명, </p>
          <p>
            연간 5만달러 이상 로열티 수익을 얻는 아티스트는 1만 3천 400명이다.
          </p>
          <br></br>
          <p> 상위 1%가되어야만 스트리밍으로 생계유지 가능. </p>
          <p> 청취자 1,000명을 가진 아티스트 중 1%를 말합니다. </p>
          <br></br>
          <p> 소비자는 음반보다는 핸드폰으로 듣기만 한다. </p>
          <p> 음반판매시장이 없어진것이라 할 수 있다. </p>
          <p> 공연만이 살길, 공연수익이 전체시장의 43%. </p>
          <br></br>
          <p> 스트리밍과 틱톡류들이 많은 상황에서 NFT의 출연</p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default Monopoly;
