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
      </ul>
      <Title>뭐가 더 가치 있을까?</Title>
      <div style={{ width: "900px", fontSize: "30px" }}>
        {`    
     세상은 넓고 취향은 많다.
        `}
        <p>음악 소비에 대한 기준은 가치가 모호하다. 음악성, 외모,.....</p>
        <p>
          모호성 속에서 투자자와 아티스트간의 중요한 공통점을 찾는 다면, 이
          nft가 미래에도 거래 될 수 있는 가... 이다.
        </p>
        <p>
          nft에 대한 거래가 꾸준히 발생해야 거래 발생에 대한 로열티를 받을 수
          있다. 되팔때에도 로열티가 들어 오기 때문이다. 이것은, 발행하는
          아티스트에게도 투자자에게도 중요한 포인트이다.
        </p>
        <img
          src="https://pbs.twimg.com/media/FFsSU8cXoAgOPGM?format=jpg&name=small"
          alt="secondary sales"
        ></img>
      </div>
      <Title>NFT를 발매하기 전에 생각해보자</Title>
      <div style={{ width: "900px", fontSize: "30px" }}>
        {`    
        NFT 소유자가 얻는 것은 무엇인가?
        `}
        <p>1/1 nft 혹은 1/n nft</p>
        <p>컬렉터블 혹은 커뮤니티 맴버쉽</p>
        <p>클라우드 펀딩 혹은 로열티</p>
        <p>
          위의 사항들을 결정해야 몇개를 발행할지 정할 수있고, 이로 인해 거래량도
          결정할 수 있다.
        </p>
        <p>
          팬이 10,000명이면 10,000개를 발행하면 리세일이 일어나기 힘들다.
          100개정도 발행하면 nft를 가지지 못한 9900명에 의해서 리세일이 발생할
          것이다.리세일이 일어나야 로얄티가 발생한다.
        </p>
        <p>혹은 클라우드 펀팅 처럼 한번에 쭉 발행해서 팔고..끝..?</p>
        <p>nft의 희소성을 극대화 시키는...방법이 좋지 않을까?</p>
        <p>문제는 희소성과 거래량의 밸런스를 잘 맞추어...야 한다.</p>
        <p>사서 되팔지 않으면 투자자나 아티스트는 수입이 단절된다.</p>
      </div>
      <Title>NFT거래량은 어떻게 유지 할 것인가?</Title>
      <div style={{ width: "900px", fontSize: "30px" }}>
        <p>발행후 인센티브 부여, 인센티브 극대화 시키는 방법</p>
        <p> 1/1 nft :</p>
        <p>
          최초 구매자에게 특별 머천다이즈, 앨범 크레딧 등록, 마스터
          트랙판매(저작권 까지 모두 판매)
        </p>
        <p> 1/n NFT :</p>
        <p>
          미공개 공연, 머천다이즈/공연 할인, 콘텐츠 선공개, 만남, 채팅방 등...
        </p>
        <p> 로영티 NFT</p>
        <p>
          최대한 많은 지분을 가져갈 수 있도록 nft 갯수 제한, 극단적으로 아예
          로열티를 다 nft 소유자에게 양도.
        </p>
      </div>
      <Title>굳이 음원 NFT를 할 필요가 없다.</Title>
      <div style={{ width: "900px", fontSize: "30px" }}>
        <p>Gary Vee의 낙서는 $45,000에 팔린다.</p>
        <p>컨퍼런스의 입장권이 되기도 한다.</p>
        <p>
          아티스트의 작품(음원)만이 발생시킬 수 있는 가치를 공유하고 그것을
          인센트르로 부여해서 미래 수요를 창출시켜야 한다.
        </p>
        <p>이것이 아티스트로서 독창적이고 효과적인 방법 아닐까?</p>
      </div>
      <Title>NFT 발매시 고려사항 (리스크 관리)</Title>
      <div style={{ width: "900px", fontSize: "30px" }}>
        <p>계약서</p>
        <p>계약서 까지 첨부해서 판매해야 한다.</p>
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
        <p>인프라</p>
        <p>솔직히 사고 싶어도, 헷갈려서 뭐가 뭔지 몰라서 사지 못한다.</p>
        <p>정보가 영어, 크립토 nerd들이 쓰는 생소한 단어들..</p>
        <p>지갑을 다운받고, 이더리움을 넣고, 가스비가 어쩌고 저쩌고...</p>
        <p>사도 ...내것이 어디에 있는 지도 모르겠고....</p>
        <p> UI/UX 구림...</p>
        <p>
          구매층(팬들..투자자들)에게...쉽게 접근할 수있도록. 새로 구축하거나,
          쉽게 알려주거나 해야한다.
        </p>
        <p>부정적인 여론</p>
        <p>
          실제 데이타가 블록체인상에 유일하게 있는 것이 아니므로....오른클릭후
          복사?
        </p>
        <p>터무니 없는 가격..</p>
        <p>실제 bts에서 nft발행 시도시에, 아미들의 반대에 부딪쳐 무산됨. </p>
        <p>
          때문에 인센티브를 강화해서 실제 가치?를 부가해 주는 것이 중요하다.
        </p>
      </div>
      <Title>결론 & 요약</Title>
      <div style={{ width: "900px", fontSize: "30px" }}>
        <p>NFT에 의해 변화하는 시장에서 올바른 전략 선택이 핵심이다.</p>
        <p>1. 매개체의 변화</p>
        <p>2. 상호작용의 변화 </p>
        <p>3. 관계의 변화</p>
        <p>4. 가치의 변화</p>
        <p>5. 전략의 변화</p>
        <p>
          nft라는 새로운 매개체가 등장함으로 위의 내용과 같이 변화가 발생한다.{" "}
        </p>
      </div>
    </Container>
  );
}

export default Index;
