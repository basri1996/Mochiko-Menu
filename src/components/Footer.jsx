import styled from "styled-components";
function Footer() {
  return (
    <MainDiv>
      <Facebook href="https://glovoapp.com/ge/en/kutaisi/mochiko-kut/"/>
    </MainDiv>
  );
}

export default Footer;

const MainDiv = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid red;
  display:flex;
`;

const Facebook = styled.a`
  width: 50px;
  height: 50px;
  
`;
