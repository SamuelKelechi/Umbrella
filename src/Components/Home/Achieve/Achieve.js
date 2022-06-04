import React from 'react';
import styled from 'styled-components';
import Data1 from './Data1';
import { AiFillStar } from 'react-icons/ai';


const Achieve = () => {
  return (
    <Container>
        <ContainerWrap>
            <Title>Our Achievements</Title>
            <CardWrap>
                <Card>
                    <Head><AiFillStar size={60}/></Head>
                    <Data1  end={7000} suffix="+"/>
                    <Para>Beneficiaries</Para>
                </Card>

                <Card>
                    <Head><AiFillStar size={60}/></Head>
                    <Data1  end={40} suffix="+"/>
                    <Para>Volunteers</Para>
                </Card>

                <Card>
                    <Head><AiFillStar size={60}/></Head>
                    <Data1  end={5} />
                    <Para>Projects</Para>
                </Card>
            </CardWrap>
        </ContainerWrap>
    </Container>
  )
}

export default Achieve;

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 60px 0 60px 0;
    color: #488F05;

    @media screen and (max-width: 860px){
        padding: 40px 0 40px 0;
    }
`

const ContainerWrap = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    font-size: 45px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 425px){
        font-size: 30px;
    }
`

const CardWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
`
const Card = styled.div`
    margin: 15px;
    font-weight: bold;
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Para = styled.div`
    font-size: 25px;
    opacity: 0.8;
    margin-top: 10px;
`
const Head = styled.div`

    @media screen and (max-width: 425px){
        margin-bottom: -20px;
    }
`