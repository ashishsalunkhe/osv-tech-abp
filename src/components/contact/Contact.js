import React from 'react';
import 'bulma'
import image from '../../images/ABI_5726.jpg'

export default function Contact(){
    return(
        <div>
            <section id="contact" class="section is-fullheight roboto first">
                <div class="container pt-6">
                    <div class="columns is-vcentered">
                    <div class="column">
                    <div class="card">
                    <div class="card-image">
                        <figure class="image is-3by2">
                        <img src={image} alt=""/>
                        </figure>
                    </div>
                    </div>
                    </div>
                    <div className="column">
                        <div class="container my-5 mt-5 mx-5 px-5">
                        <h2 class="title is-2 is-capitalized has-text-white">Contact Us</h2>
                        <hr/>
                        <form action="" method="post">
                            <div class="field">
                                <label for="name" class="label is-size-4 has-text-dark"></label>
                                <div class="control has-icons-left">
                                    <input type="text" name="name" id="name" class="input contact-field" placeholder="Name" autofocus/>
                                        
                                </div>
                            </div>
                            <div class="field">
                                <label for="email" class="label is-size-4 has-text-dark"></label>
                                <div class="control has-icons-left">
                                    <input type="email" name="email" id="email" class="input" placeholder="Email"/>
                                        
                                </div>
                            </div>
                            <div class="field">
                                <label for="message" class="label is-size-4 has-text-dark"></label>
                                <textarea name="message" id="message" rows="5" class="textarea is-medium" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="button is-primary is-size-5">Submit</button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>    
            </section>        
        </div>
    )
}