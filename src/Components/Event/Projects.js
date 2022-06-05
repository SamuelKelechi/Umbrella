import React from 'react';
import styled from 'styled-components';
import Left from '../Images/left.jpg';
import Right from '../Images/right.jpg';


export const Projects = () => {
  return (
    <Container>
        <Title>
            Projects
        </Title>
        <ContainerWrap>
            <First>
                <Line></Line>
                <Avatar src={Left}/>
            </First>

            <Second>
                <Date>05 JUNE, 2022</Date>
                <Line></Line>
                <Content>
                    Families Reachout Project 1.0
                </Content>
                <Para>Families Reachout Project 1.0</Para>
                <Button>READ MORE</Button>
            </Second>

            <Third>
                <Line></Line>
                <Avatar  src={Right}/>
            </Third>
        </ContainerWrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0 80px 0;
    background-color: whitesmoke;
`
const Title = styled.div`
    width: 90%;
    font-weight: 500;
    font-size: 50px;
    color: #488F05;

    @media screen and (max-width: 425px){
        font-size: 30px;
    }
`
const ContainerWrap = styled.div`
    width: 90%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const First = styled.div`
    width: 20%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        width: 70%;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`

const Second = styled.div`
    width: 50%;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        width: 70%;
        margin-top: 15px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const Third = styled.div`
    width: 20%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display: none;
    }
`
const Avatar = styled.img`
    height: 320px;
    width: 100%;
    background-color: red;
    object-position: center;
    object-fit: cover;
`

const Line = styled.div`
    width: 100%;
    border: 1px solid black;
`
const Button = styled.div`
    background-color: #488F05;
    color: white;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media screen and (max-width: 425px){
        height: 40px;
  }
`
const Date = styled.div`
    opacity: 0.8;
    margin-bottom: -30px;
`

const Content = styled.div`
    color: #488F05;
    font-size: 30px;
    font-weight: 500;
`

const Para = styled.div`
    opacity: 0.8;
    margin-top: -25px;
`
