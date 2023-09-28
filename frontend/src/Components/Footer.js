import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1><b>Contact Us</b></h1>
                        <p>Librarian</p>
                        <p>Vidya Jyothi Institute of Technology</p>
                        <p>Aziznagar, Hyderabad.</p>
                        <p>Telanagana</p>
                        <p>India</p>
                        <p><b>Email:</b><a href="https:vjit.ac.in">vjit.ac.in</a></p>
                    </div>
                    <div className='usefull-links'>
                        <h1><b>Usefull Links</b></h1>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                        <a href='#home'>Link-1</a>
                    </div>
                    <div className='librarian-details'>
                        <h1><b>Librarian</b></h1>
                        <p>Name</p>
                        <p>Education</p>
                        <p>Contact: +91 91XXXXXX87</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://twitter.com/' className='social-icon' target=''><TwitterIcon style={{ fontSize: 40,color:"rgb(20,61,89)"}} /></a>
                    <a href='https://in.linkedin.com/' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(20,61,89)"}} /></a>
                    <a href='https://web.telegram.org/k/' className='social-icon'><TelegramIcon style={{ fontSize: 40,color:"rgb(20,61,89)"}} /></a>
                    <a href='https"//instagram.com/' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(20,61,89)"}} /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer