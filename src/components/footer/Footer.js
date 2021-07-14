import React from "react";
import {Facebook, Instagram, Mail, Youtube} from 'react-feather'

class Footer extends React.Component {
    render(){
        return(
            <div>
                <footer class="footer has-background-black has-text-centered">
                
                    
                    <div className="container social-icons is-mobile center">
                                <a href="#"><Youtube/></a>
                                <a href="#"><Facebook/></a>
                                <a href="#"><Instagram/></a>
                                <a href="#"><Mail/></a>
                                <p className="content">
                                Copyrights &copy; 2021 Abhijeet Matkar             
                                <br/>   Engagements | Pre-Wedding | 
                            <br/>Wedding | Food | Baby Shoots</p>
                        </div> 
                        <p className=" pt-1 is-mobile center">
                    Built by <a className="text-dec" href="https://ashishsalunkhe.github.io">Ashish Salunkhe</a> and OSV Tech. 
                    </p>
                </footer>
            </div>
        );
    }
}
export default Footer;