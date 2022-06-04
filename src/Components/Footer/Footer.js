import React from 'react';
import styled from 'styled-components';
import Log from '../Images/logo.png';
import Facebook from '../Images/facebook.png';
import Instagram from '../Images/instagram.png';
import Twitter from '../Images/twitter.png';
import Youtube from '../Images/youtube.png';
import {Link} from 'react-router-dom';

let date = new Date().getFullYear();

const Footer = () => {

  return (
    <>
        <Container>
            <ContainerWrapper>
                <Up>
                    <First>
                        <Logo src={Log}/>
                        <div>Head Office</div>
                        <div>Nigeria</div>
                        <div>Tel: +2348137253138</div>
                    </First>
                    <Second>
                        <Title>Pages</Title>
                        <Links to='/about'><li>About Us</li></Links>
                        <Links to='/blog'><li>Blog</li></Links>
                        <Links to='/contact'><li>Contact</li></Links>
                        <Links to='/events'><li>Events</li></Links>
                        <Links to='/gallery'><li>Gallery</li></Links>
                        <Links to='/'><li>Home</li></Links>
                    </Second>
                    <Third>
                        Subscribe to our newsletter
                        <span><input placeholder='Email'/> <Button>SEND</Button></span>
                        <br/>
                        <Social>
                            <a href='https://m.facebook.com/utac21/' target='_blank'> 
                                <img src={Facebook} alt='Facebook' />
                            </a>

                            <a href='https://www.instagram.com/_u.t.a.c/' target='_blank'>  
                                <img src={Instagram} alt='Instagram' />
                            </a> 

                            <a href='https://mobile.twitter.com/4dchildren' target='_blank'>  
                                <img src={Twitter}  style={{width:'30px'}} alt='Twitter' />
                            </a> 

                            <a href='https://mobile.twitter.com/4dchildren' target='_blank'>  
                                <img src={Youtube}  style={{width:'30px'}} alt='Youtube' />
                            </a> 

                        </Social>
                    </Third>
                </Up>
                <Down>
                    <span>Developed by <a href="https://dev-samuel-kelechi.web.app/" target="blank" style={{textDecoration:"none"}}>CodeLab</a> 🚀 | © {date} All rights reserved, UTAC</span>
                </Down>
            </ContainerWrapper>
        </Container>
    </>
  )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 30px 0 8px 0;
    margin-top: 20px;
`

const ContainerWrapper = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 425px){
        width: 95%;
    }
`
const Up = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    color: #488F05;
    font-weight: 500;

    @media screen and (max-width: 620px){
        flex-direction: column;
        align-items: center;
        width: 85%;
    }
`

const Down = styled.div`

    @media screen and (max-width: 425px){
        font-size: 12px;
    }
    @media screen and (max-width: 325px){
        font-size: 10px;
    }
`
const First = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-bottom: 15px;
    
    div{
        margin-top: 8px;
    }

    @media screen and (max-width: 620px){
        width: 80%;
    }
`

const Second = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    margin-bottom: 15px;

    li{
        margin-bottom: 8px;
    }

    @media screen and (max-width: 620px){
        width: 80%;
    }
`

const Third = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-bottom: 15px;

    span{
        display: flex;
        margin-top: 8px;
        width: 100%;

        input{
            height: 40px;
            width: 70%;
            outline: none;
        }
    }

    @media screen and (max-width: 620px){
        width: 80%;
    }
`
const Logo = styled.img`
    height: 80px;
    width: 80px;
    margin-bottom: 30px;
    
    @media screen and (max-width: 425px){    
        margin-bottom: 10px;
    }
`
const Title = styled.div`
    font-size: 25px;
    margin-bottom: 20px;

    @media screen and (max-width: 425px){    
        margin-bottom: 10px;
    }
`
const Button = styled.div`
    background-color: #488F05;
    color: white;
    margin-left: 10px;
    width: 25%;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }
`

const Links = styled(Link)`
    color: inherit;
    text-decoration: none;
    width: 100px;
`
const Social = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`