import React from "react"
import "bulma"
import babyshoot from '../../images/babyshoot.jpg'
import food from '../../images/food2.jpg'
import engagement from '../../images/engage.jpg'
import wedding from '../../images/wedding.jpg'
import prewedding from '../../images/N.jpg'
import { NavLink, Link, withRouter } from "react-router-dom";

export default function Gallery(){
    return(
        <div>
            <section id='gallery' class="section is-medium section-padding">
                
                    <h1 class="title has-text-white  is-size-1 ">Gallery</h1>
                
                <div class="container">
                    
                        <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8">
                            <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child ">
                                <div class='container'>
                                <div class="card">
                                <div class="card-image">
                                    <figure class="image is-3by2">
                                        <img src={wedding} alt='Wedding'/>                     
                                        <div class="overlay">
                                        <Link to="./wedding">
                                            <div class="text has-text-white">Wedding</div>
                                        </Link>
                                        </div>
                                    </figure>
                                </div>
                                 </div>
                                
                                </div>
                                </article>
                            </div>
                            <div class="tile is-parent">
                            <article class="tile is-child ">
                                 <div className="container">
                                 <div class="card">
                                <div class="card-image">
                                 <figure class="image is-3by2">
                                    <img src={babyshoot} alt='Baby Shoots'/>                     
                                    <div class="overlay">
                                    <Link to="./babyshoots">
                                        <div class="text has-text-white">Baby Shoots</div>
                                    </Link>
                                    </div>
                                </figure>
                                </div>
                                </div>
                                </div>          
                                </article>
                                
                            </div>
                            </div>
                            <div class="tile is-parent">
                            <article class="tile is-child ">
                            <div className="container">
                            <div class="card">
                                <div class="card-image">
                                 <figure class="image is-3by1">
                                    <img src={engagement} alt='Engagement'/>                     
                                    <div class="overlay">
                                    <Link to="./engagement">
                                        <div class="text has-text-white">Engagement</div>
                                    </Link>
                                    </div>
                                </figure>
                            </div> 
                            </div>
                            </div>
                            </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child ">
                            <div className="container">
                            <div class="card">
                                <div class="card-image">
                                <figure class="image is-2by3">
                                    <img src={prewedding} alt='Pre Wedding'/>                     
                                    <div class="overlay">
                                    <Link to="./prewedding">
                                        <div class="text has-text-white">Pre Wedding</div>
                                    </Link>
                                    </div>
                                </figure>
                                </div>
                                </div>
                            </div>
                            </article>
                        </div>
                    </div>
            </div>    
            </section>
        </div>
    )
}