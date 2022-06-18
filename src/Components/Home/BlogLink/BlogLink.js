import React from 'react';
import { Link } from 'react-router-dom';
import './BlogLink.css';
import {GiFastForwardButton} from 'react-icons/gi';
import styled from 'styled-components';
import Back from '../Images/Slide2.jpg';

function BlogLink() {
  return (
    <div className='BlogLinkContain'>
        <div className='BlogLinkWrapper'>    
            <div className='BlogTitle'>Blog</div>
            <div className='CardsWrap'>

                <div className='CardHold'>
                    <img src={Back} alt='BlogImage' className='BlogImg'/>
                    <marquee className='StoryTitle'>Community Outreach in Ajeromi Ifelodun</marquee>
                    <button className='BlogLnk'>Read..</button>
                </div>

            </div>
            <Links to='/blog'>More Blog<GiFastForwardButton style={{fontSize:'25px', marginBottom:'-3px'}}/></Links>
        </div>
    </div>
  )
}

export default BlogLink;

const Links = styled(Link)`
    text-decoration: none;
    display: flex;
    border: 1px solid green;
    padding: 5px;
    border-radius: 5px;
    align-items: center;
    color: #488F05;
    margin-top: 15px;
`