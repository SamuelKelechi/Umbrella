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
        <Title>Blog Updates</Title>
        <ContainerWrap>
            <CardHold>
                    <BlogImg src={Back} alt='BlogImage' className='BlogImg'/>
                    <StoryTitle>Community Outreach in Ajeromi Ifelodun</StoryTitle>
                    <BlogLnk>Read..</BlogLnk>
            </CardHold>
        </ContainerWrap>
    </Container>
  )

}

export default Blog;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ContainerWrap = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media screen and (max-width: 769px){
        flex-direction: column;
        align-items: center;
    }
`

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
const Title = styled.div`
    width: 80%;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 35px;
    font-weight: bold;
    color: #488F05;

    @media screen and (max-width: 650px){
        font-size: 30px;
    }
`
const CardHold = styled.div`
    width: 300px;
    border: 1px solid #488F05;
    border-radius: 8px;
    margin: 15px;
    padding-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 769px){
        margin: 0;
        margin-top: 15px;
    }
    @media screen and (max-width: 425px){
        width: 90%;
    }
`
const BlogImg = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 8px 8px 0 0;
`
const StoryTitle = styled.div`
    margin: 2px;
    font-weight: 500;
    text-align: center;
`
const BlogLnk = styled.button`
    cursor: pointer;
    width: 90px;
`