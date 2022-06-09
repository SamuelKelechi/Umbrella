import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import img from '../Images/img1.jpeg'
import Support from '../Home/Support/Support';
import { Projects } from './Projects';

const Event = () => {
  return (
    <Container>
            <LandingPage>
                <Image src = {img}/>
                <OverLayer>
                    <Span>Events</Span>
                </OverLayer>
            </LandingPage>
            
            <Projects />

            <Support />
    </Container>
  )
}

export default Event;

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
      justify-content: center;
      font-size: 40px;
    }
`
const OverLayer = styled.div`
    height:100%;
    width:100%;
    background-color:rgb(0, 0, 0, 50%);
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const Image = styled.img`
    width:100%;
    height: 450px;
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
const Links = styled(Link)`
  text-decoration: none;
  color: inherit;
`