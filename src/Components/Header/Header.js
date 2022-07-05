import React, {useState}  from 'react';
import styled from 'styled-components';
import NGOLogo from '../Images/logo.png';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

  return (
    <>
        <Container>
            <Wrapper>
                <Logo src={NGOLogo}/>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> :  <FaBars />}
                </MobileIcon>
               
                <Navs>
                        <Links to='/'>Home</Links>
                        <Links to='/about'>About Us</Links>
                        <Links to='/events'>Events</Links>
                        <Links to='/gallery'>Gallery</Links>
                        <Links to='/blog'>Blog</Links>
                        <Links to='/contact'>Contact</Links>
                </Navs>
                <Links to='/donate'><Button>DONATE</Button></Links>
            </Wrapper>
          {click ? 
          (
            <Nav  onClick={handleClick}>
                <Links to='/'>Home</Links>
                <Links to='/about'>About Us</Links>
                <Links to='/events'>Events</Links>
                <Links to='/gallery'>Gallery</Links>
                <Links to='/blog'>Blog</Links>
                <Links to='/contact'>Contact</Links>
            </Nav>
          ):null}
        </Container>

    </>
  )
}

export default Header;

const Container = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    top: 0;
    flex-direction: column;

    @media screen and (max-width: 425px){
        height: 80px;
    }
`

const Wrapper = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 425px){
        width: 90%;
    }
`

const Logo = styled.img`
    height: 70px;
    width: 70px;
`

const Navs = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    height: 30px;

    @media screen and (max-width: 860px){
        display: none;
    }
`

const Button = styled.div`
    background-color: #488F05;
    color: white;
    height: 50px;
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }

    @media screen and (max-width: 425px){
        width: 80px;
        height: 40px;
    }
`
const Links = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-weight: 500;

    &:hover{
        color: red;
        margin-top: -10px;
        transition: all 0.5s ease-in-out;
        opacity: 0.8;
    }

    &:active{
        color: #488F05;
    };
`
const MobileIcon = styled.div`
    font-size: 30px;
    display: none;
  

    @media screen and (max-width: 860px){
    display: flex;
    width: 90px;
    justify-content: flex-end;
    }

    @media screen and (max-width: 425px){
        width: 40px;
    }
`

const Nav = styled.div`
    display: none;

    @media screen and (max-width: 860px){
        display: flex;
        flex-direction: column;
        height: 75vh;
        width: 95%;
        align-items: center;
        justify-content: space-evenly;
        position: absolute;
        top: 80px;
        background: linear-gradient(to right bottom,
        rgba(255, 255, 255,0.7),
        rgba(255, 255, 255, 0.3)
            );
        backdrop-filter: blur(1rem);
        z-index: 1000;
        transition: all 1s ease-out;
    }
`