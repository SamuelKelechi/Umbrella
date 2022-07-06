import React from 'react';
import styled from 'styled-components';
import Favour from '../Images/favours.png'
import Back from '../Images/back.jpg';

const Advocate = () => {
  return (
    <Container>
        <ContainerWrap>
            <Hold>
                <Avat src={Favour}/>
                <Name>Favour Diche</Name>
                <Post>Child Abuse Advocate</Post>
            </Hold>
           
            <Holder>  
                <Name>CHILD ABUSE AND NEGLECT: AN ADVOCACY</Name>
                <Title>
                    Child Abuse is a very serious problem that happens all over the world, the topic has been neglected by teachers, parent and even religious Organizations and this has affected lots of children in diverse way. Hence, our child protection network team is on a mission to enlighten, educate, protect and advocate for the rights of children across Africa.
                </Title>
            </Holder>
        </ContainerWrap>
    </Container>
  )
}

export default Advocate;

const Container = styled.div`
    display: flex;
    margin-top: 5px;
    justify-content: center;
    padding: 60px 0 60px 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.727),rgba(0, 0, 0, 0.9)) , url(${Back});
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
    align-items: center;
    justify-content: space-evenly;

    @media screen and (max-width: 860px){
        flex-direction: column;
        justify-content: center;
    }
`

const Holder = styled.div`
    width: 45%;
    height: 260px;
    padding: 10px 0 10px 0;

    @media screen and (max-width: 860px){
        width: 80%;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`

const Title = styled.div`
    /* font-weight: bold; */
    font-size: 18px;
`
const Hold = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Avat = styled.img`
  height: 300px;
  width: 300px;
  border: 2px solid whitesmoke;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
`
const Name = styled.div`
    font-weight: bold;
    margin-top: 5px;
    font-size: 18px;
    margin-bottom: 5px;
`
const Post = styled.div`
    font-weight: bold;
    opacity: 0.8;
`