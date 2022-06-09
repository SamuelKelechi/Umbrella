import React from 'react';
import styled from 'styled-components';
import Back from '../Images/blog1.jpeg';


const Blog = () => {
  return (
    <Container>
        <Hero>
            <Wrap>
                <Second>BLOG</Second>
            </Wrap>
        </Hero>
        <ContainerWrap>
            BLOG
        </ContainerWrap>
    </Container>
  )

}

export default Blog;

const Container = styled.div``

const ContainerWrap = styled.div``

const Hero = styled.div`
    width: 100%;    
    height: 450px;
    display: flex;
    justify-content: center;
    color: white;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${Back});
    background-attachment: fixed;
    background-size: cover;
    background-position: top;

    @media screen and (max-width: 450px){
        height: 400px;
    }
`
const Wrap = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Second = styled.div`
    font-size: 85px;

    @media screen and (max-width: 425px){
        font-size: 55px;
    }
`