import React from 'react';
import GlobalStyle from "./globalStyle";
import ScrollToTop from './ScrollToTop';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App () {
  return(
    <>
      <Router>
        <ScrollToTop>
          <GlobalStyle />  
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer/>
        </ScrollToTop>
      </Router>
    </>
  )
}
export default App