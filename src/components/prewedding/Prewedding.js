import React from "react"
import "bulma"
import babyshoot from '../../images/babyshoot.jpg';
import food from '../../images/food2.jpg';
import engagement from '../../images/engage.jpg';
import wedding from '../../images/wedding.jpg';
import prewedding from '../../images/N.jpg';
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
class Prewedding extends React.Component{
    listener = null;
    state = {
      nav:false
    }
    componentDidMount() {
       window.addEventListener("scroll", this.handleScroll);
     }
     componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
     handleScroll= () => {
       if (window.pageYOffset > 140) {
           if(!this.state.nav){
             this.setState({ nav: true });
           }
       }else{
           if(this.state.nav){
             this.setState({ nav: false });
           }
       }
  
     }
    render(){
    return(
        <div>
            <Navbar/>
            <section  className="is-fullheight">
            {/* <nav className={`navbar is-fixed-top ${this.state.nav && 'nav_white'}`} role="navigation">
                    <div className="navbar-brand">
                        
                            <Link to="./">
                            Abhijeet Matkar Photography
                            </Link>
                       
                        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className="navbar-menu navbar-end" id="navMenu">
                        <a href="./#gallery" className="navbar-item">Gallery</a>
                        <a href="./#about" className="navbar-item">About</a>
                        <a href="./#contact" className="navbar-item">Contact</a>
                    </div>
                </nav> */}
            <div className="hero-body has-text-centered">
            <a  href="./#gallery"><h4 class="subtitle pt-3 pb-5 is-5 has-text-centered has-text-white">🡨 Back To Gallery</h4></a>
           {/* <div className="container"> */}
           <h1 class="title pt-1 is-3 has-text-centered has-text-white">Pre-Wedding</h1>
           <div class="columns is-multiline">
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=1" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=2" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>  
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=3" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=4" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=5" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=6" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=7" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            <div class="column is-one-quarter-desktop is-half-tablet">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src="https://unsplash.it/300/200/?random&pic=8" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
            </div>
           {/* </div> */}
           </div>
           </section>
           <Footer/>
        </div>
    );
}
}
export default Prewedding;