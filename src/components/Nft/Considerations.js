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

function Considerations(props) {
  return (
    <Container>
      <Content>
        <Title>NFT 발매시 고려사항 (리스크 관리)</Title>
        <TextBox>
          <p>"계약서"</p>
          <p>계약서 까지 첨부해서 판매해야 한다.</p>
          <br></br>
          <p>무엇을 파는 것인가? 저작권까지 판매하는 것이 아닌 것이 일반적?</p>
          <p>
            nft를 판매하는 것에 대한 법적 정의가 모호하기 때문에.. 계약서...필요
          </p>
          <p>
            음악의 저작권까지 판매? / 음악파일만 소유? / 블록체인에 박혀있는
            영수증 번호만 사는것?{" "}
          </p>
          <p>
            어떤 것을 사는 것인지 명확히 해야 나중에 법적 분쟁에 대한 것에
            대해..피할 수 있다.
          </p>
          <br></br>
          <p>"인프라"</p>
          <p>솔직히 사고 싶어도, 헷갈려서 뭐가 뭔지 몰라서 사지 못한다.</p>
          <p>정보가 영어, 크립토 nerd들이 쓰는 생소한 단어들..</p>
          <p>지갑을 다운받고, 이더리움을 넣고, 가스비가 어쩌고 저쩌고...</p>
          <p>사도 ...내것이 어디에 있는 지도 모르겠고....</p>
          <p> UI/UX 구림...</p>
          <p>
            구매층(팬들..투자자들)에게...
            <p>
              쉽게 접근할 수있도록. 새로 구축하거나, 쉽게 알려주거나 해야한다.
            </p>
          </p>
          <p>부정적인 여론</p>
          <p>
            실제 데이타가 블록체인상에 유일하게 있는 것이 아니므로....오른클릭후
            복사와 무엇이 다름?
          </p>
          <p>터무니 없는 가격..</p>
          <br></br>
          <p>실제 bts에서 nft발행 시도시에, 아미들의 반대에 부딪쳐 무산됨. </p>
          <p>
            때문에 인센티브를 강화해서 실제 가치?를 부가해 주는 것이 중요하다.
          </p>
        </TextBox>
      </Content>
    </Container>
  );
}

export default Considerations;
