import React from 'react';
import styled from 'styled-components';

const MissionComp = () => {
  return (
    <Container>
        <ContainerWrap>
            <Left>
                <Title>Our Mission</Title>
                <Lines></Lines>
                <br/>
                <Content>
                    We aim to see an Africa where every child is properly fed and Quality Education in Rural Africa is paramount.
                </Content>
                <br/>
                <Para>
                    Our Mission
                </Para>
                <br/>
                <Line></Line>
            </Left>

            <Right>
                <Title>Our Vision</Title>
                <Lines></Lines>
                <br/>
                <Content>
                    Changing the narrative of the African child living in rural part of Africa through our series of projects.
                </Content>
                <br/>
                <Para>
                    Our Vision
                </Para>
                <br/>
                <Line></Line>
            </Right>
        </ContainerWrap>
    </Container>
  )
}

export default MissionComp;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const ContainerWrap = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 860px){
        flex-direction: column;
        align-items: center;
    }
`

const Right = styled.div`
    width: 47%;

    @media screen and (max-width: 860px){
        width: 80%;
        margin-top: 20px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
        margin-top: 30px;
    }
`

const Left = styled.div`
    width: 47%;

    @media screen and (max-width: 860px){
        width: 80%;
    }
    @media screen and (max-width: 425px){
        width: 100%;
        margin-top: 30px;
    }
`
const Title = styled.div`
    color: #488F05;
    font-size: 40px;
    font-weight: bold;
`

const Content = styled.div`
    font-size: 18px;
`

const Para = styled.div`
    color: #488F05;
`

const Line = styled.div`
    width: 100%;
    border: 1px solid black;
`

const Lines = styled.div`
    width: 80px;
    border: 2px solid #FFDE00;
    margin-top: 3px;
    /* border: 1px solid #EF0303;    */
`