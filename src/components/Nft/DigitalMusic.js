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

function DigitalMusic(props) {
  return (
    <Container>
      <Content>
        <Title>"디지털 시장과 음악"</Title>
        <p style={{ marginTop: "10px" }}>
          "창작물도 매개체에 따라 바뀌고 있다."
        </p>
        <TextBox>
          <p>빌보드 핫 100의 평균 곡 길이가 5년 동안 약 20초 짧아졌다.</p>
          <p> 스트리밍서비스 "TikTok" "Kendrick Lamar"</p>
          <br></br>
          <p> 사람들은 더이상 기다리지 않는다. </p>
          <p> "훅" 부분을 최대한 빨리 내보야 한다. </p>
          <br></br>
          <p> "lemonade"</p>
          <div>
            <img
              src="https://i.ytimg.com/vi/8P_E55vf9SI/maxresdefault.jpg"
              width="600px"
              alt="lemonade"
            />
          </div>
          <div>
            <img
              src="https://i.ytimg.com/vi/CnhNqb1Ps6k/maxresdefault.jpg"
              width="600px"
              alt="lemonade"
            />
          </div>
        </TextBox>
      </Content>
    </Container>
  );
}

export default DigitalMusic;
