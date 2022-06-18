import React from 'react';
import styled from 'styled-components';
import Left from '../Images/left.jpg';
import Right from '../Images/right.jpg';
import Schl1 from '../Images/sch1.jpeg';
import Schl2 from '../Images/sch2.jpg';
import Along1 from '../Images/along1.jpeg';
import Along2 from '../Images/along2.jpeg';
import Remote1 from '../Images/remote1.jpg';
import Remote2 from '../Images/remote2.jpeg';



export const Projects = () => {
  return (
    <Container>
        <Title>
            Projects
        </Title>
        <ContainerWrap>
            <First>
                <Line></Line>
                <Avatar src={Remote1}/>
            </First>

            <Second>
                <Date>25 October, 2021</Date>
                <Line></Line>
                <Content>
                    A Remote School In North East Region
                </Content>
                <Para>A Remote School In North East Region, Ghana</Para>
                <a href='https://www.modernghana.com/news/1091832/school-uniforms-donated-to-a-remote-school-in-nort.html' target='_blank'><Button>READ MORE</Button></a>
            </Second>

            <Third>
                <Line></Line>
                <Avatar  src={Remote2}/>
            </Third>
        </ContainerWrap>
        <br/>
        <ContainerWrap>
            <First>
                <Line></Line>
                <Avatar src={Along2}/>
            </First>

            <Second>
                <Date>25 October, 2021</Date>
                <Line></Line>
                <Content>
                    Take Ajegunle Child Along Project
                </Content>
                <Para>Take Ajegunle Child Along Project</Para>
                <a href='https://www.urstrulypraiznews.com/2021/10/25/nigeria-umbrella-for-the-african-child-and-eagles-foundation-for-humanity-holds-the-take-ajegunle-child-along-project/' target='_blank'><Button>READ MORE</Button></a>
            </Second>

            <Third>
                <Line></Line>
                <Avatar  src={Along1}/>
            </Third>
        </ContainerWrap>
        <br/>
        <ContainerWrap>
            <First>
                <Line></Line>
                <Avatar src={Schl1}/>
            </First>

            <Second>
                <Date>20 October, 2021</Date>
                <Line></Line>
                <Content>
                    School Uniforms Donated
                </Content>
                <Para>School Uniforms Donated</Para>
                <a href='https://theglobalheroes.com/school-uniforms-donated-to-a-remote-school-in-north-east-region-ghana' target='_blank'><Button>READ MORE</Button></a>
            </Second>

            <Third>
                <Line></Line>
                <Avatar  src={Schl2}/>
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
    padding: 50px 0 50px 0;
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
    margin-top: 50px;
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

    a{
        text-decoration: none;
    }

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
