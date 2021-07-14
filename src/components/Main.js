import React from "react";
import Gallery from './gallery/Gallery';
import Header from './header/Header';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
const Main = () => {
    return(
        <div className='App'> 
            <Navbar/>
            <Header/>
            <Gallery/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
        
    );
};export default Main;