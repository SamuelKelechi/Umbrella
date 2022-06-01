import React from 'react';
import styled from 'styled-components';

const Achieve = () => {
  return (
    <Container>
        <ContainerWrap>
            <Title>Our Achievements</Title>
            <CardWrap>
                <Card>
                    
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
`