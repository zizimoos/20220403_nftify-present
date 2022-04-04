import React from "react";
import styled from "styled-components";

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

function MediumMessage(props) {
  return (
    <Content>
      <Title> "매개체가 메시지다."</Title>
      <p>The medium is the message.</p>
      <TextBox>
        <p>
          " 매개체가 메시지다."
          <p>음악이 라디오나 텔레비젼이였고,</p>
          <p>뮤직비디오가 티비에서 핸드폰으로, </p>
          <p> 다시 핸드폰에서 VR로,</p>
          <p> .</p>
          <p> .</p>
          <p>이번에는 전혀 새로운 개념의 NFT가 등장했다.</p>
          <p> 심지어 소유할 수 있는 매개체들이다.</p>
        </p>
      </TextBox>
    </Content>
  );
}

export default MediumMessage;
