import React from 'react';
import styled from 'styled-components';
import Obinna from '../Images/obi.jpeg';
import Sylvia from '../Images/sylvia.jpeg';
import Sam from '../Images/sam.jpeg';
import Jenny from '../Images/jenny.jpeg';
import Dammy from '../Images/dami.jpeg';
import Gammel from '../Images/Gammel.jpg';


const Team = () => {
  return (
    <>
    <Title>Our Team</Title>
    
        <Container>
            <ContainerWrap>
                <Card>
                    <Avatar src={Sam}/>
                    <Name>
                        Samuel K. Mensah
                    </Name>
                    <Line></Line>
                </Card>

                <Card>
                    <Avatar src={Obinna}/>
                    <Name>
                        Opara O. Marknelson
                    </Name>
                    <Line></Line>
                </Card>

                <Card>
                    <Avatar src={Jenny}/>
                    <Name>
                        Jennifer Nnopuechi
                    </Name>
                    <Line></Line>
                </Card>

                <Card>
                    <Avatar src={Dammy}/>
                    <Name>
                        Damilare Odunowo
                    </Name>
                    <Line></Line>
                </Card>

                <Card>
                    <Avatar src={Sylvia}/>
                    <Name>
                        Sylvia Oka
                    </Name>
                    <Line></Line>
                </Card>

                <Card >
                    <Avatar src={Gammel}/>
                    <Name>
                        Gamel Issaku
                    </Name>
                    <Line></Line>
                </Card>
    
            </ContainerWrap>
        </Container>
    </>
  )
}

export default Team;

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    font-size: 45px;
    font-weight: bold;
    color: #488F05;

    @media screen and (max-width: 650px){
        font-size: 30px;
    }
`

const Container = styled.div`
    width: 100%;
    background-color: #488F05;
    padding: 70px 0 70px 0;
    display: flex;
    justify-content: center;
    color: white;
`

const ContainerWrap = styled.div`
    width: 95%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;

    @media screen and (max-width: 425px){
        margin: 15px;
        width: 90%;
    }
`

const Avatar = styled.img`
    height: 170px;
    width: 150px;
    background-color: whitesmoke;
    border-radius: 80px 80px 80px 80px;
    object-fit: cover;
    object-position: center;
`

const Name = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
`
const Line = styled.div`
    width: 25px;
    border: 1px solid white;
    margin-top: 20px;
`