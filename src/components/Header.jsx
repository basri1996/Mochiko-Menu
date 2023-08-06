import logo from "../assets/მოჩიკო-02.jpg"
import styled from "styled-components";
function Header (){
    return(
        <MainDiv>
            <Logo src={logo} alt="mochiko"/>
          <MenuText>Menu</MenuText>
        </MainDiv>
    )

}

export default Header


const MainDiv=styled.div`
    height:75px;
    width:100%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content:space-between;
    
`

const Logo=styled.img`
    width:auto;
    height:75px;
    margin-left:15px;
`

const MenuText=styled.h1`
    font-size:35px;
    background: linear-gradient(315deg, #e84393 60%, #000000 74%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-color:white;
    margin-right:75px;
    font-family: 'Borel';
    font-weight:400;
    margin-top:23px;

`