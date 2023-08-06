import styled from "styled-components";
function Card({ data }) {
  return (
    <MainDiv>
      <Photo src={data.img} />
      <DetailDiv>
        <Title>{data.name}</Title>
        <Ingredients>{data.ingredients}</Ingredients>
        <Price>{data.price}</Price>
      </DetailDiv>
    </MainDiv>
  );
}

export default Card;

const MainDiv = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 2px 2px 3px;
`;
const DetailDiv = styled.div``;
const Title = styled.h1`
  font-size: 15px;
  margin: 7px;
  font-weight: 700;
`;
const Ingredients = styled.h3`
  font-size: 12px;
  margin: 7px;
  font-weight: 700;
`;
const Photo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin: 7px;
`;
const Price = styled.h3`
  font-size: 20px;
  margin: 7px;
  font-weight: 700;
  padding-top:7px;
`;
