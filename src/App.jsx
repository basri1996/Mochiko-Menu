import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Helmet } from "react-helmet";
import Header from "./components/Header"

function App() {
  return (
    <>
      <GlobalStyles />
      <Helmet></Helmet>
      <Header/>
      <Div></Div>
    </>
  );
}

export default App;

const Div = styled.div`
  width: 100px;
  height: 100px;
`;
