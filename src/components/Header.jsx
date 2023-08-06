import logo from "../assets/მოჩიკო-02.jpg"
import styled from "styled-components";
function Header (){
    return(
        <MainDiv>
            <Logo src={logo} alt="mochiko"/>
        </MainDiv>
    )

}

export default Header


const MainDiv=styled.div`
    height:75px;
    width:100%;
    background-color:white;
`

const Logo=styled.img`
    width:auto;
    height:75px;
`