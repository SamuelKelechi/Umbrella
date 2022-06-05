import React from 'react'
import styled from 'styled-components'
import ReactLoading from 'react-loading';
import Image from '../Images/logo.png'

const Loader = ({ type, color }) => (
    <>
    <Main>
        <Logo src={Image}/>
        <ReactLoading type={"balls"} color={"#488F05"} height={100} width={100} /> 
        
    </Main>
    </>
);

export default Loader;

const Main = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:  #488F05;
`
const Logo = styled.img`
    height: 140px;
`