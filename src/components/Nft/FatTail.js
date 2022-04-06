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
const SubTitle = styled.div`
  padding: 10px;
  font-size: 12px;
  color: gray;
  align-self: flex-end;
`;

function FatTail(props) {
  return (
    <Container>
      <Content>
        <Title>굵은 꼬리의 등장</Title>
        <TextBox>
          <p>
            web3.0 환경에서는 작고 다양한 아이디어들이 성장할 기회가 생긴다.
          </p>
          <br></br>
          <ImgBox>
            <img
              src="https://miro.medium.com/max/1400/1*hMk4kIkx_ANOLLCq70VM8w.png"
              width="700px"
              alt="fat tail"
            ></img>
            <SubTitle>diagram E : The Emergence of fat tail</SubTitle>
          </ImgBox>
          <p>
            작고 잘 알려지지 않은 아티스트들도 많은 수익을 낼 수 있는 환경이
            조성된다.
          </p>
          <a href="https://www.youtube.com/watch?v=NdOqUnTAJ5o">이런 아티스트</a>
          <br></br>
          <p> nft를 산다는 것은, </p>
          <p> nft를 통해서 아티스트를 지원하고,</p>
          <p> nft를 컬렉터블로 사용하고, </p>
          <p> 아티스트의 성장에 따른 nft의 가치 성장도 기대할 수 있다.</p>
          <br></br>
          <p>
            일반인이 하기 어려웠던 아티스트를 발굴하고 투자하는 행위가 쉽게
            일반화 된다.
          </p>
          <p>음악 스카우터 처럼 좋은 아티스트를 발굴하고 투자하는 행위 가능.</p>
          <p> 팬의 소비심리를 이용한 투자자들도 모일 것이라 예상. </p>
          <br></br>
          <p> 그냥 좋아서, </p>
          <p> 조던 신발을 콜렉션하듯이, </p>
          <p> 그냥 엘피판을 사서 모으는 행위 같은 것들이다. </p>
          <p>
            음원 nft도 위와 같이 그냥 좋아서 사서 모으는 콜렌터들이 생길 것이다.
          </p>
          <p> 위의 그룹들이 섞여서 음악 nft 마켓을 형성할 것이라 예상.</p>
          <br></br>
          <p> 디자탈 시대에 접어 들면서, </p>
          <p>
            음반 발매도 하지 않는 상황에서 음반에 대한 시장이 굉장히 작아 졌다.
          </p>
          <p> 음원에 대한 콜렉터블 시장이 태동을 하고 있다.</p>
          <p>
            투자자들은 미래가치가 있는 음악 nft를 사서 투자하는 것을 선호할
            것이다..
          </p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default FatTail;
