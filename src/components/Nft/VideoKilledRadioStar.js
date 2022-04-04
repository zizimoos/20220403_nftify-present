import React from "react";
import glamlook from "../../assets/img/glamLook.png";
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

function VideoKilledRadioStar(props) {
  return (
    <Container>
      <Content>
        <Title> "Video killed the radio star"</Title>
        <TextBox>
          <p>"Video killed the radio star" </p>
          <p>데이빗보이의 등장(글램룩)</p>
          <img src={glamlook} width="600px" alt="데이빗보이의 등장(글램룩)" />
          <br></br>
          <br></br>
          <p>MTV의등장(뮤직비디오 등장 및 선풍적인 인기)</p>
          <img
            src="https://jaegeroslo.no/wp-content/uploads/2019/07/Mtv-logo.jpg"
            width="600px"
            alt="MTV의등장(뮤직비디오 등장 및 선풍적인 인기)"
          />
          <br></br>
          <p>partial social relationship</p>
          <p>kanyewest의 등장(실시간 소통 : 아티스트와 친구처럼...)</p>
          <br></br>
          <p>
            미디어와 기술의 발전으로 아티스트들과 관객의 의사소통 방식이 변했다.
          </p>
          <p>대중과 상호작용하는 방식이 바꾸고있다.</p>
          <br></br>
          <p>"창작물도 매개체에 따라 바뀌고 있다."</p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default VideoKilledRadioStar;
