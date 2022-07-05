import React from 'react';
import styled from 'styled-components';
import Back from '../Images/support.jpeg';
import {Link} from 'react-router-dom';

const Support = () => {
  return (
    <Container>
      <ContainerWrap>
        <Holder>
          <Para>WANT TO MAKE A DIFFERENCE?</Para>
          <Content>
            Support the <br/> humanitarian <br/> movement voluntarily
          </Content>
         <Links to='/donate'><Button>Donate</Button></Links> 
        </Holder>
      </ContainerWrap>
    </Container>
  )
}

export default Support;

const Container = styled.div`
  width: 100%;
  padding: 60px 0 60px 0;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${Back});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  color: white;
  font-weight: bold;
`

const ContainerWrap = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
`
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Para = styled.div`
  font-weight: 500;
`

const Content = styled.div`
  text-align: center;
  font-size: 60px;
  font-weight: 500;
  margin-top: 20px;

  @media screen and (max-width: 425px){
    font-size: 45px;
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
    margin-top: 30px;

    @media screen and (max-width: 425px){
        width: 100px;
        height: 40px;
    }
`
const Links = styled(Link)`
  text-decoration: none;
`