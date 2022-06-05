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
            </Routes>
            <Footer/>
          </>
           }
        </ScrollToTop>
      </Router>
    </>
  )
}
export default App