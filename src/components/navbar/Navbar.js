import React from 'react';
import 'bulma';
// // Get all "navbar-burger" elements
// var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// // Check if there are any nav burgers
// if ($navbarBurgers.length > 0) {

//   // Add a click event on each of them
//   $navbarBurgers.forEach(function ($el) {
//     $el.addEventListener('click', function () {

//       // Get the target from the "data-target" attribute
//       var target = $el.dataset.target;
//       var $target = document.getElementById(target);

//       // Toggle the class on both the "navbar-burger" and the "navbar-menu"
//       $el.classList.toggle('is-active');
//       $target.classList.toggle('is-active');

//     });
//   });
// }
{/* <nav className={`navbar is-fixed-top ${this.state.nav && 'nav_white'}`} role="navigation">
                    <div className="navbar-menu navbar-start">
                        
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
                        <a href="./#gallery" className="navbar-item">Gallery</a>
                        <a href="./#about" className="navbar-item">About</a>
                        <a href="./#contact" className="navbar-item">Contact</a>
                    </div>
                </nav> */}

// class Navbar extends React.Component{


//     listener = null;
//     state = {
//       nav:false
//     }
//     componentDidMount() {
//        window.addEventListener("scroll", this.handleScroll);
//      }
//      componentWillUnmount() {
//         window.removeEventListener('scroll', this.handleScroll);
//       }
//      handleScroll= () => {
//        if (window.pageYOffset > 140) {
//            if(!this.state.nav){
//              this.setState({ nav: true });
//            }
//        }else{
//            if(this.state.nav){
//              this.setState({ nav: false });
//            }
//        }
  
//      }
//     render(){
//         return(
//         <div>
            
//                 <nav class="navbar is-fixed-top">
//                 <div class="navbar-brand">
//                   <a class="navbar-item" href="./">
//                     <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
//                   </a>
                  
//                   <div 
//                     className={`navbar-burger burger ${isActive ? "is-active" : ""}`} 
//                     onClick={() => {
//                       setisActive(!isActive);
//                     }} 
//                     aria-label="menu"
//                     aria-expanded="false"
//                     data-target="navMenubd-example">
//                     <span></span>
//                     <span></span>
//                     <span></span>
//                   </div>
//                 </div>

//                 <div id="navMenubd-example" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                 
//                   <div class="navbar-end">
//                   <div class="navbar-item has-dropdown is-hoverable">
//                       <a class="navbar-link  is-active" href="./#gallery">
//                         Gallery
//                       </a>
//                       <div class="navbar-dropdown ">
//                         <a class="navbar-item " href="./wedding">
//                           Wedding
//                         </a>
//                         <hr class="navbar-divider"/>
//                         <a class="navbar-item " href="./prewedding">
//                           Pre-Wedding
//                         </a>
//                         <hr class="navbar-divider"/>
//                         <a class="navbar-item " href="./babyshoots">
//                           Babyshoots
//                         </a>
//                         <hr class="navbar-divider"/>
//                         <a class="navbar-item " href="./food">
//                           Food
//                         </a>    
//                       </div>
//                     </div>
//                     <a class="navbar-item" href="./#contact" target="_blank">
//                       Contact
//                     </a>
//                     <a class="navbar-item" href="./#about" target="_blank">
//                       About
//                     </a>
//                   </div>
//                 </div>
//               </nav>
//         </div>
//         );
//     }
// }

export default function Navbar(){
  const [isActive, setisActive] = React.useState(false);
  return(
    <div>
            
                <nav class="navbar has-background-black  is-fixed-top">
                <div class="navbar-brand">
                  <a class="navbar-item has-text-success-light" href="./">
                    <img src="src/images/logo.png" alt="Abhijeet Matkar Photography" width="250" height="28"/>
                  </a>
                  
                  <div 
                    className={`has-background-black has-text-success-light navbar-burger burger ${isActive ? "is-active" : ""}`} 
                    onClick={() => {
                      setisActive(!isActive);
                    }} 
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navMenubd-example">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div id="navMenubd-example" className={`has-background-black navbar-menu ${isActive ? "is-active" : ""}`}>
                  {/* <div class="navbar-start">
                    
                    
                  </div> */}

                  <div class="navbar-end">
                  <div class="navbar-item has-dropdown has-background-black is-hoverable">
                      <a class="navbar-link has-background-black has-text-success-light is-active" href="./#gallery">
                        Gallery
                      </a>
                      <div class="navbar-dropdown has-background-black ">
                        <a class="navbar-item has-text-primary-dark" href="./wedding">
                          Wedding
                        </a>
                        {/* <hr class="navbar-divider"/> */}
                        <a class="navbar-item has-text-primary-dark" href="./prewedding">
                          Pre-Wedding
                        </a>
                        {/* <hr class="navbar-divider "/> */}
                        <a class="navbar-item has-text-primary-dark" href="./babyshoots">
                          Babyshoots
                        </a>
                        {/* <hr class="navbar-divider "/> */}
                        <a class="navbar-item has-text-primary-dark" href="./food">
                          Food
                        </a>    
                      </div>
                      {/* <hr class="navbar-divider"/> */}
                    </div>
                    
                    <a class="navbar-item has-text-success-light" href="./#about">
                      About
                    </a>
                    <a class="navbar-item has-text-success-light" href="./#contact">
                      Contact
                    </a>
                  </div>
                </div>
              </nav>
        </div>
  )
}