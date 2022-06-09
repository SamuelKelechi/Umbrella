import React from 'react';
import styled from 'styled-components';
import Back from '../Images/brand.jpeg';
import Founder from '../Images/founder.jpeg';
import Team from '../Home/Team/Team';
import Support from '../Home/Support/Support'

const About = () => {
  return (
    <Container>
        <Hero>
            <Wrap>
                <Hold>
                    <First>
                        About Us
                    </First>
                    <Second>
                       We’re creating a world where children in rural Africa has the opportunity to experience quality education and access to nutritional meal.
                    </Second>   
                </Hold>  
            </Wrap>
        </Hero>
        <ContainerWrap>
            <Hist>HISTORY</Hist>
            <How>How it all started</How>
            <Line></Line> 

            <Story>
                <Brand>
                    <Title>BRAND STORY</Title>
                    <Para>
                        Umbrella For the African Child was formerly known as Umbrella Ghana. The organization started as a student organization in African University College of Communications, Accra, Ghana. The aim of the foundation was to educate Black students on the importance of being “Africa out loud” and have series of interactive conversations/debate on how to contribute to the development of Africa and various African communities in general. African University College of Communications is known for its diverse groups of students from different nationalities like: Nigeria, Mali, Togo, Kenya etc. Hence, the emergence of the organization to bring these groups under one umbrella. The organization had the privilege to be under Kwabena Nketiah Center of African Studies and worked with African studies lecturers and professors to help in organizing interesting colloquy for students growth. In 2020 the name and model of the organization changed to UMBRELLA FOR THE AFRICAN CHILD.
                    </Para>
                </Brand>
                <Found src={Founder}/>
            </Story>    
            <Story>
                <Holder>
                    <Title>Founder's Story</Title>
                    <Para>
                        I graduated in 2017 from African University College of Communications where I studied journalism and in 2018 I traveled to Kumasi for my one year compulsory “National Service” at Ghana Broadcasting Corporation. In 2019 I traveled back to Lagos, Nigeria, specifically Ajegunle the community I grew up in. Upon my arrival I noticed a lot have changed in Ajegunle. I saw children engaged in all sorts of illegal activities: drugs, starvation, gangs, children dropping out of school etc. One thing I also observed was the lack of mentors in the lives of these children and youth. I knew I needed to do something to help my community. I spoke to a lot of community leaders I could find and some friends and we came up with a program to connect teenagers with mentors. Our first project we had 100 teenagers in attendance and we invited 4 mentors from different areas as speakers for the event. After the project, we received a lot of messages from parents and teenagers telling us how important the seminar was for them and their children. At that moment I knew the model of the organization needed to change and this was going to be a start of something new and impactful for children. I realized the name “Umbrella Ghana” was limiting us from doing certain things for children and communities. In 2020 Umbrella Ghana was changed to Umbrella For The African Child making children’s well-being and personal development our major priority. This journey has been so good as I have had the opportunity to interact with wonderful children in different areas and the fact that I am working with passionate young people who are passionate about helping children gives me strength to keep the dream of the African child in motion.
                    </Para>
                </Holder>
            </Story> 
        </ContainerWrap>
        <br/>
        <Team />
        <Support />
    </Container>
  )
}

export default About;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    background-position: center;

    @media screen and (max-width: 450px){
        height: 400px;
    }
`
const Wrap = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media screen and (max-width: 425px){
        width: 100%;
    }
`
const First = styled.div`
    opacity: 0.9;
    font-size: 17px;
`

const Second = styled.div`
    font-size: 35px;

    @media screen and (max-width: 425px){
        font-size: 25px;
    }
`
const ContainerWrap = styled.div`
    width: 90%;
    margin-top: 20px;
`
const Hist = styled.div`
    opacity: 0.8;
    margin-top: 20px;
`

const How = styled.div`
    color: #488F05;
    font-size: 35px;
    margin-top: 20px;
`

const Line = styled.div`
    width: 100%;
    border: 1px solid black;
    margin-top: 20px;
`
const Story = styled.div`
    margin-top: 40px;
    display: flex;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const Holder = styled.div`

`

const Brand = styled.div`
    width: 60%;
    margin: 5px;

    @media screen and (max-width: 768px){
        width: 100%;
        margin: 0;
    }
`

const Title = styled.div`
    font-size: 45px;
    font-weight: bold;
    color: #488F05;

    @media screen and (max-width: 425px){
        font-size: 35px;
    }
`
const Para = styled.p`
    line-height: 25px;
    font-size: 18px;
    opacity: 0.8;

    @media screen and (max-width: 425px){
        font-size: 16px;
    }
`
const Found = styled.img`
    width: 37%;
    margin: 5px;
    height: 450px;
    object-fit: cover;
    object-position: top;
    border-radius: 8px;

    @media screen and (max-width: 768px){
        width: 100%;
    }
    @media screen and (max-width: 425px){
       height: 400px;
       margin: 0;
    }
`
const Hold = styled.div`
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media screen and (max-width: 425px){
        width: 90%;
    }
`