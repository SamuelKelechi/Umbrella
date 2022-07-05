import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './BlogLink.css';
import {GiFastForwardButton} from 'react-icons/gi';
import styled from 'styled-components';
import {db} from "../../../Base";
import {collection, getDocs, limit, query, orderBy} from "firebase/firestore";


function BlogLink() {
    const [getblog, setGetblog] = useState([]);

    const userCollectionRef = collection(db, "blog")

    const querry = query(userCollectionRef, orderBy("createdAt", "desc"), limit(3))

    const getBlog = async () => {
        const data = await getDocs(querry, userCollectionRef);
        setGetblog(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    };

    
    useEffect(() => {
        getBlog();
    }, []);

  return (
    <div className='BlogLinkContain'>
        <div className='BlogLinkWrapper'>    
            <div className='BlogTitle'>Blog</div>
            <div className='CardsWrap'>

                {getblog.map(({id, title, avatar, createdAt}) => (
                    <div className='CardHold' key={id}>
                        <img src={avatar} alt='BlogImage' className='BlogImg'/>
                        <marquee className='StoryTitle'>{title}</marquee>
                        <div style={{opacity:'0.7'}}>{createdAt.toDate().toDateString()}</div>
                        <Links to={`/blogdetails/${id}`}><button className='BlogLnk'>Read..</button></Links>
                    </div>
                ))}

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
    margin-top: 10px;
    margin-bottom: 5px;
`