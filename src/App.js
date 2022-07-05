import React,{useEffect, useState} from 'react';
import GlobalStyle from "./globalStyle";
import ScrollToTop from './ScrollToTop';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Loader from "./Components/Loader/Loader";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Event from './Components/Event/Event';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import Admin from './Components/Admin/Admin';
import Donate from './Components/Donate/Donate';
import Gallery from './Components/Gallery/Gallery';

function App () {
  const [done, setDone] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2500);
  }, [])
  return(
    <>
      <Router>
        <ScrollToTop>
          <GlobalStyle /> 
          {
            !done ?  <Loader /> :  
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Event />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blogdetails/:id" element={<BlogDetails />} />
              <Route path="/utacadmin2022" element={<Admin />} />
            </Routes>
            <Footer/>
          </>
           }
        </ScrollToTop>
      </Router>
    </>
  )
}
export default App;