import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../Images/img1.jpeg'
import { FaRegDotCircle } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi'
import { GrStatusGood } from 'react-icons/gr'
import Support from '../Home/Support/Support';


const Contact = () => {
  return (
    <Container>
        <LandingPage>
                <Image src = {img}/>
                <OverLayer>
                    <Title>
                        GET IN TOUCH
                    </Title>
                    <Span>
                        Contact
                    </Span>
                </OverLayer>
        </LandingPage>

        <Wrapper>
            <Top>
                Give us a call, email us, or come and visit us in one of our offices
            </Top>
            <Contacts>
                <Left>
                    <Country>Nigeria</Country>
                    <Line></Line>
                    <Par><GrStatusGood style={{ marginRight:'10px'}}/>Uyo, Akwa Ibom State, Nigeria</Par>
                    <Par><GiCancel style={{ marginRight:'10px'}}/>+234 802 378 4947</Par>
                    <Par><FaRegDotCircle style={{ marginRight:'10px'}}/>admin@bhsnetworkafrica.com</Par>
                </Left>
                <Right>
                <Country>Ghana</Country>
                    <Line></Line>
                    <Par><GrStatusGood style={{ marginRight:'10px'}}/>Accra, Ghana</Par>
                    <Par><GiCancel style={{ marginRight:'10px'}}/>+234 802 378 4947</Par>
                    <Par><FaRegDotCircle style={{ marginRight:'10px'}}/>admin@bhsnetworkafrica.com</Par>
                </Right>
            </Contacts>
            <Form>
                <First>
                    <Wrap>
                        <Section>
                            <div>Name</div>
                            <span>
                                <input placeholder='First Name'/>
                                <input placeholder='Last Name'/>
                            </span>
                        </Section>
                        <Section>
                            <div>Email</div>
                            <input/>
                        </Section>
                        <Section>
                            <div>Message</div>
                            <textarea />
                        </Section>

                        <Button>SEND</Button>
                    </Wrap>
                </First>
                <Second>
                    <Line></Line>
                    <Message>
                        Message Us
                    </Message>
                </Second>
            </Form>
        </Wrapper>
        <br/>
        <br/>
        <Support />
    </Container>
  )
}

export default Contact;

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Span = styled.div`
    width: 90%;
    font-size:80px;
    color:#ffff;
    font-weight:500;

    @media screen and (max-width: 425px){
      display: flex;
      font-size: 40px;
    }
`
const Title = styled.div`
    opacity: 0.8;
    color: white;
`

const OverLayer = styled.div`
    height:100%;
    padding-left: 40px;
    background-color:rgb(0, 0, 0, 50%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
`
const Image = styled.img`
    width:100%;
    height:450px;
    object-fit:cover;
    position: absolute;
    object-position: top;

    @media screen and (max-width: 450px){
        height: 400px;
    }
`
const LandingPage = styled.div`
    width:100%;
    height:450px;
    background-color:blue;
    
    @media screen and (max-width: 450px){
        height: 400px;
    }
`    
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`
const Top = styled.div`
    font-size: 35px;
    font-weight: bold;
    opacity: 0.8;
    width: 100%;

    @media screen and (max-width: 425px){
        font-size: 25px;
    }
`
const Contacts = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Left = styled.div`
    width: 43%;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const Right = styled.div`
    width: 43%;

    @media screen and (max-width: 768px){
        width: 100%;
        margin-top: 15px;
    }
`
const Country = styled.div`
    font-size: 35px;
    font-weight: bold;
    color: #488F05;
    margin-bottom: 10px;
`

const Line = styled.div`
    width: 100%;
    border: 1px solid black;
    margin-bottom: 15px;

`
const Par = styled.p`
    font-size: 14px;
    opacity: 0.8;
`
const Form = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const First = styled.div`
    width: 60%;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    padding: 50px 0 50px 0;

    @media screen and (max-width: 768px){
        margin-top: 20px;
        width: 100%;
    }
`
const Second = styled.div`
    width: 30%;

    @media screen and (max-width: 768px){
        margin-top: 20px;
        width: 100%;
    }
`
const Message = styled.div`
    color: #488F05;
    font-size: 55px;

    @media screen and (max-width: 425px){
        font-size: 35px;
    }
`
const Wrap = styled.div`
    width: 90%;
`
const Section = styled.div`
    width: 100%;
    margin-top: 15px;

    input{
        width: 100%;
        height: 35px;
        border: 1px solid lightgray;
        outline: none;
        margin-top: 5px;
    }
    textarea{
        width: 100%;
        border: 1px solid lightgray;
        outline: none;
        height: 100px;
    }

    span{
        display: flex;
        justify-content: space-between;

        input{
            width: 47%;
        }
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
    margin-top: 20px;

    :hover{
        opacity: 0.8;
    }

    @media screen and (max-width: 425px){
        width: 100px;
        height: 40px;
    }
`