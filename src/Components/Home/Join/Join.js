import React from 'react';
import styled from 'styled-components';
import Back from '../Images/join.jpeg';
import {Link} from 'react-router-dom';

const Join = () => {
  return (
    <Container>
        <ContainerWrap>
            <Holder>
                <Title>COME JOIN US</Title>
                <br/>
                <Line></Line>
                <br/>
                <Content>
                    We are first a tribe before an NGO
                </Content>
                <br/>
                <Button to='/contact'>JOIN OUR COMMUNITY</Button>
            </Holder>
        </ContainerWrap>
    </Container>
  )
}

export default Join;

const Container = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    padding: 120px 0 120px 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${Back});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;

    @media screen and (max-width: 860px){
        padding: 40px 0 40px 0;
    }
`

const ContainerWrap = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: 860px){
        justify-content: center;
    }
`

const Holder = styled.div`
    width: 47%;
    /* color: white; */

    @media screen and (max-width: 860px){
        width: 80%;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`

const Title = styled.div`
    font-weight: bold;
`

const Line = styled.div`
    width: 100%;
    border: 1px solid white;
`

const Content = styled.div`
    font-size: 45px;
    font-weight: bold;
`

const Button = styled(Link)`
    background-color: #488F05;
    color: white;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
`
