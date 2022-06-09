import React from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import pic1 from "../Images/Slide1.jpg";
import pic2 from "../Images/Slide2.jpg";
import pic3 from "../Images/Slide6.jpg";
import pic4 from "../Images/Slide4.jpg";


const HeroSection = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<>
		<Container>
			<Wrapper> 
				<Mylider {...settings}>
					<MyStyled>
						<SliderImage src={pic1} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic2} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic3} />
					</MyStyled>
					<MyStyled>
						<SliderImage src={pic4} />
					</MyStyled>
				</Mylider>
			</Wrapper>

			<TextContent>
				<ContentWrap>
					<TitleText>
						Transforming the lives of children and support for communities.
					</TitleText>
					<p>…one community at a time</p>
					<Button>DONATE</Button>
				</ContentWrap>
			</TextContent>
	
		</Container>
		</>
	);
};

export default HeroSection;


const Container = styled.div`
	width: 100%;
	height: 500px;
	overflow: hidden;
	margin-bottom: 60px;

	@media screen and (max-width: 625px){
		margin-bottom: 5px;
	}
`;
const Mylider = styled(Slider)`
	button {
		/* z-index: 1; */
	}
`;
const MyStyled = styled.div`
	width: 100%;
	height: 500px;
	background-color: rgba(0%, 0%, 0%, 1);
	overflow: hidden;
	color: black;

	@media screen and (max-width: 600px) {
		height: 400px;
	}
`;
const Wrapper = styled.div`
	width: 100%;
	position: absolute;
	overflow: hidden;
`;
const SliderImage = styled.img`
	width: 100%;
	height: 100%;
	opacity: 0.4;

	object-fit: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const TextContent = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	top: 300px;
	z-index: 100;
	color: white;

	@media screen and (max-width: 600px){
		top: 250px;
	}
`
const ContentWrap = styled.div`
	width: 500px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;

	p{
		font-size: 20px;
	}

	@media screen and (max-width: 625px){
		width: 90%;
	}
	@media screen and (max-width: 320px){
		width: 98%;
	}
`
const TitleText = styled.div`
	font-size: 40px;
	font-weight: 500;

	@media screen and (max-width: 600px){
		font-size:25px;
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

    @media screen and (max-width: 425px){
        width: 100px;
        height: 40px;
    }
`