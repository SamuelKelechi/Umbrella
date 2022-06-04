import React from 'react';
import styled from 'styled-components';
import Back from '../Images/Backg.png'

const AboutComp = () => {
  return (
    <Container>
        <ContainerWrap>
            <Title>ABOUT US</Title>
            <Line></Line>
            <br/>
            <Content>Protecting children and creating a happy, loving environment for them in which they can thrive and support to communities</Content>
            <br/>
            <ButtonHold><Button>READ MORE</Button></ButtonHold>
        </ContainerWrap>
    </Container>
  )
}

export default AboutComp;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    color: #488F05;
    background-image: linear-gradient(rgba(255, 255, 255, 0.10),rgba(255, 255, 255, 0.1)) , url(${Back});
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    padding: 40px 0 40px 0;

    @media screen and (max-width: 425px){
		margin-top: -50px;
	}
`

const ContainerWrap = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 425px){
        width: 90%;
    }
`
const Title = styled.div``

const Line = styled.div`
    width: 40px;
    border: 1px solid #FFDE00;
    margin-top: 3px;
    /* border: 1px solid #EF0303;    */
`

const Content = styled.div`
    width: 850px;
    font-size: 55px;

    @media screen and (max-width: 870px){
        width: 100%;
        font-size: 30px;
    }
`

const ButtonHold = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
        width: 100px;
        height: 40px;
    }
`