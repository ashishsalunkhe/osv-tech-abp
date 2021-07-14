import React from 'react'
import 'bulma'
import {Facebook, Instagram, Mail, Youtube} from 'react-feather'
export default function About(){
    return(
        <div>
            <section id="about" class="section is-fullheight roboto first">
                <div class="container pt-6">
                    <div class="columns is-vcentered">
                    <div class="column">
                        <h1 class="title is-2 has-text-white">Abhijeet Matkar</h1>
                        <hr/>
                        <h3 className="subtitle is-4 has-text-white">Pune</h3>
                        
                        <div className="container image is-justify-content-center is-128x128">
                            <figure >
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"/>
                            </figure>
                        </div>
                        
                            
                      
                        <div className="container social-icons pt-4 is-mobile center">
                                <a href="#"><Youtube/></a>
                                <a href="#"><Facebook/></a>
                                <a href="#"><Instagram/></a>
                                <a href="#"><Mail/></a>
                                <p className="subtitle has-text-white">
                        
                            Engagements | Pre-Wedding | 
                            <br/>Wedding | Food | Baby Shoots
                            </p> 
                            <hr/>
                        </div>        
                    </div>
                    <div class="column">
                        <div className="content is-medium has-text-white">
                        <p>Abhijeet  Matkar  is  a  Pune  based  photographer,  endeavouring  to  reach perfection in street photography, wedding and portraits. 
                            While struggling in engineering he found his interest in the art of photography and engineering life turned quite interesting. 
                            This art inspired him to capture the beauty of the world around him and the people in it. 
                            Their unique stories fuelled him to  pursue  his  love  for  photography. Street photography taught him that
                            stories can have different points of view and he found out a unique
                            perspective of life. Instead of capturing people he always seeks to capture
                            souls so that he can fill emotions in each of his photographs. He considers
                            his love for photography, A gift that has allowed him to excel in several
                            genres of this art form with a specific focus on Pre-wedding, portfolios,
                            family portraits, and product photography. He continually pushes the
                            boundaries of creativity, bid to tell stories from remarkable aspects and
                            capture beautiful moments of life. Each of the Client is unique and so are
                            images too. He approaches each assignment with his client foremost in
                            mind, a keen eye for the details, creative vibes and technical mastery with a
                            high level of professionalism in this art of writing with the lights.</p>
                        </div>           
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}