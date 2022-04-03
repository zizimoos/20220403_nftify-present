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

const Title = styled.div`
  margin-top: 100px;
  font-size: 50px;
`;

function Index(props) {
  return (
    <Container>
      <ul>
        <li> 1. 매개체의 발전으로 변하는 음악시장 </li>
        <li> 2. NFT의 등장으로 변하는 아티스트와 팬과의 관계 </li>
        <li> 3. NFT발매 전략 & 리스크 </li>
        <a href="https://marshallmcluhan.com/">
          <li>Marshall McLUHAN</li>
        </a>
        <img
          src="http://sparkarchitects.com/wp-content/uploads/2020/05/Luflan_mediumisthemessage.jpg"
          width="900px"
          alt="http://www.sparkarchitects.com/the-medium-is-the-message-spark-2020-05-12/"
        />
      </ul>
      <Title> 매개체가 메시지다.</Title>
      <div style={{ width: "400px", fontSize: "30px" }}>
        {`    
         " 매개체가 메시지다.
          예전에는 티비나 라디오였을 것이고,
          이번에는 전혀 새로운 개념의 NFT가 등장했다.
          뮤직비디오가 티비에서 핸드폰으로, 다시 핸드폰에서 VR로,
          심지어 소유할 수 있는 매개체들이 등장했다."
          
          `}
      </div>
      <Title> "Video killed the radio star"</Title>
      <div style={{ width: "400px", fontSize: "30px" }}>
        {`    
         "Video killed the radio star"
         데이빗보이의 등장(글램룩) / MTV의 등장(뮤직비디오등장 및 선풍적인 인기)
          / kanyewest의 등장(실시간 소통 : 아티스트와 친구처럼...) parrial social relationship
          미디어와 기술의 발전으로 아티스트들과 관객의 의사소통 방식이 변했다.
          대중과 상호작용하는 방식이 바꾸고있다.
          창작물도 매개체에 따라 바뀌고 있다.

          `}
      </div>
      <Title>디지털 시장과 음악</Title>
      <div style={{ width: "400px", fontSize: "30px" }}>
        {`    
       빌보드 핫 100의 평균 곡 길이가 5년 동안 약 20초 짧아졌다.
       스트리밍 서비스
       "TikTok"
       "Kendrick Lamar"
        사람들은 더이상 기다리지 않는다.
        훅 부분이 최대한 빨리 내보낸다.
        "lemonade"

        `}
      </div>
      <Title>극소수만 배부른 독식구조</Title>
      <div style={{ width: "400px", fontSize: "30px" }}>
        {`    
      스포티파이에 1,000명 이상의 청취자를 가진 아티스트는 120만명,
      연간 5만 달러 이상 로열티 수익을 얻는 아티스트는 1만 3천 400명이다.
      상위 1%가 되어야만 스트리밍으로 생계유지 가능.
        `}
      </div>
    </Container>
  );
}

export default Index;
