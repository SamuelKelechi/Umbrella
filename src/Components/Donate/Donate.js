import React, { useState } from 'react';
import styled from 'styled-components';
import Visa from '../Images/Visa.png';
import img from '../Images/Support.jpg';
import {Link} from 'react-router-dom';
import Uba from '../Images/uba.gif';
import Gt from '../Images/gtbank.jpeg';


function Donate() {
  return (
    <MainContain>
    <LandingPage>
         <Image src = {img}/>
         <OverLayer>
             <Span>REACH THE LIFE OF THOSE <br/> WHO HAVE NO HOPE</Span>
             <p>
                Help us reach more persons and families in need
             </p>
         </OverLayer>
     </LandingPage>
{/* 
     <DonateHold>
            <DonateContent>
                <Top>Donate Now</Top>
                <Avat src={Visa} alt='donate' />
                <br/>
                <p>Please enter your card information</p>
                <FomWrapper>
                    <Left>
                        <label>Amount</label><br/><input   
                            type='number' 
                            placeholder='Enter Amount to Debit'
                            />
                        <br/>
                        <br/>
                        <label>Name on Card</label><br/><input type='string' 
                            placeholder='Enter Name on Your Card'/>
                        <br/>
                        <br/>
                    </Left>
                    <Right>
                        <label>Email</label><br/><input  type='email' 
                            placeholder='Enter Your Email'/>
                        <br/>
                        <br/>
                        <label>Phone Number</label><br/><input type='number' 
                           
                            placeholder='Enter Telephone Number'/>
                        <br/>
                        <br/>
                    </Right>
                </FomWrapper>
                <Links to='/donate'><Button>DONATE</Button></Links>

            </DonateContent>
        </DonateHold> */}
        <BankDetails>
            <h2>YOU CAN PAY TO THE ACCOUNT DETAILS BELOW</h2>
                <LeftAccount>
                    <h3>Umbrella for the African Child</h3>
                    <h2>UBA</h2>
                    <h3 style={{fontSize:'19px'}}>2226058595</h3>
                    <Logo src={Uba}/>
                </LeftAccount>
        </BankDetails>
    </MainContain>
  )
}

export default Donate;


const MainContain = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const LandingPage = styled.div`
    width:100%;
    height:500px;
    background-color:blue;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const Image = styled.img`
    width:100%;
    height:500px;
    object-fit:cover;
    object-position: center;
    position: absolute;

    @media screen and (max-width: 650px){
        height: 350px;
    }
`
const OverLayer = styled.div`
    height:100%;
    width:100%;
    background-color: rgba(0%, 0%, 0%, 70%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    p{
        color: white;
        text-align: center;
        font-size: 22px;
    }

    @media screen and (max-width: 650px){
        justify-content: flex-end;
        p{
        color: white;
        text-align: center;
        font-size: 19px;
        width: 98%;
      }
    }  
`
const Span = styled.div`
    font-size:40px;
    color:#ffff;
    font-weight:bold;
    text-align: center;

    @media screen and (max-width: 425px){
    font-size:22px;
    }
`
const DonateHold = styled.div`
    width: 80%;
    padding: 60px 0 60px 0;
    background-color: #488F05;
    margin-top: -120px;
    z-index: 100;
    display: flex;
    justify-content: center;

    h3{
        color: white;
    }

    @media screen and (max-width: 768px){
        width: 90%;
    }
    @media screen and (max-width: 650px){
        width: 80%;
        margin-top: 10px;
    }
    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const DonateContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        width: 100%;
        color: white;
        font-size: 20px;
        text-align: center;
    }

    Button{
        background-color: #25AAE2;
        height: 40px;
        width: 300px;
    }

    @media screen and (max-width: 768px){
        width: 90%;

        Button{
            margin-top: 30px;
        }

        p{
            text-align: center;
            padding: 0;
        }
    }

    @media screen and (max-width: 425px){
          p{
            font-size: 17px;
        }
    }
`

const Top = styled.h2`
    color: white;
    font-size: 35px;
    line-height: 45px;

    @media screen and (max-width: 425px){
        font-size: 25px;
        line-height: 25px;
    }
`

const Avat = styled.img`
    @media screen and (max-width: 425px){
        width: 80%;
    }
`

const FomWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Left = styled.div`
    width: 350px;
    margin: 20px;
    color: white;

    input{
        width: 100%;
        height: 40px;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 15px;
    }

    @media screen and (max-width: 768px){
        margin: 0;
        width: 95%;

        input{ 
            padding-left: 5px;
        }
    }
`

const Right = styled.div`
        width: 350px;
        margin: 20px;
        color: white;

    input{
        width: 100%;
        height: 40px;
        color: black;
        border-radius: 8px;
        outline: none;
        padding-left: 15px;
    }

    @media screen and (max-width: 768px){
        margin: 0;
        width: 95%;
        padding-left: 5px;

        input{ 
            padding-left: 5px;
        }
    }
`
const Button = styled.div`
    background-color: green;
    color: white;
    height: 50px;
    width: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: bold;

    :hover{
        opacity: 0.8;
    }

    @media screen and (max-width: 425px){
        width: 80px;
        height: 40px;
    }
`
const Links = styled(Link)`
    text-decoration: none;
    color: inherit;
    font-weight: 500;

    &:hover{
        color: red;
        /* margin-top: -10px; */
        transition: all 0.5s ease-in-out;
        opacity: 0.8;
    }

    &:active{
        color: #488F05;
    };
`
const BankDetails = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 425px){
        width: 90%;
    }
`
const LeftAccount = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #E61100;
    padding: 15px 0 15px 0;
    border-radius: 8px;
    margin: 0 0 20px 0;

    h2{
        color: white;
    }
    h3{
        color: white;
    }
    
    @media screen and (max-width: 425px){
        width: 100%
    }
`

const Logo = styled.img`
    height: 100px;
`