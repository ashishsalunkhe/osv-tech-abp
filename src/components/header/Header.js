import React from 'react'
import "bulma"
import { Link, withRouter } from "react-router-dom";

class Header extends React.Component {
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
    return (
      <div>
          <section  className="hero is-fullheight section-padding header-img">
                {/* <nav className={`navbar is-fixed-top ${this.state.nav && 'nav_white'}`} role="navigation">
                    <div className="navbar-brand">
                        
                            <Link to="./" className="navbar-item">
                            Abhijeet Matkar Photography
                            </Link>
                       
                        <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                    <div className="navbar-menu navbar-end" id="navMenu">
                        <a href="#gallery" className="navbar-item">Gallery</a>
                        <a href="#about" className="navbar-item">About</a>
                        <a href="#contact" className="navbar-item">Contact</a>
                    </div>
                </nav> */}
                <div className="hero-body ">
                <div className="container has-text-centered">
                    <h1 className="title is-3 pt-4 has-text-white">Creating a timeless look, coupled with a flawless moment.</h1>
                    <h2 className="subtitle is-4 pt-6 has-text-white">We are a collective of artists, filmmakers, and visual storytellers who specialize in bringing the fine art of photography and filmmaking to weddings. We’re committed to providing you with work that honors your life 
                    and tells your story in an imaginative and emotive way by capturing the raw, true moments of your wedding.</h2>
                </div>
               
                </div>
                
            </section>
      </div>
    );
    }
  }
  export default Header