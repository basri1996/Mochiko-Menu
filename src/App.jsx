import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Card from "./components/Card";
import { MochikoProductGeo } from "./Data";

function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Borel&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Div>
      {MochikoProductGeo.map((item) => (
        <Card data={item} />
      ))}

     </Div>
    </>
  );
}

export default App;

const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin-top:30px;
`;
