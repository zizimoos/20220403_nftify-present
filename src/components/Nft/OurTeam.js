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

function OurTeam(props) {
  return (
  <Container>
    
    <Content> 
      <Title>OurTeam</Title>    
      <TextBox>
        <p>Ideas for metabus & gather</p>
        <br></br>
        <p> 같이 함께 한다는 것의 의미 : 곧 사랑이다. </p>
        <p> 새로운 시대의 같이 한다는 것은 온라인에서? 메버스에서? </p>
        <a href="https://www.youtube.com/watch?v=g5q11pDYTlk">
          <p> 호랑이,사자,곰이 함께하는 사건을 이용한 감성적인 접근은 어떨까? </p>
        </a>
        <p>동물 보다는 사람들의 이야기를 사용하는 것이 .... </p>
 
      </TextBox>
     </Content>
  </Container>);
}

export default OurTeam;
