import React from "react";
import './styles.css';
import { Biopic } from "../components/Biopic";
import Mobile from '../images/mobile.png';
import Email from '../images/email.png';
import Location from '../images/location.png';

export const MainContainer = () => {
    return(
        <div className='grid-container'>
            <div className="main-info">
                <Biopic />
            </div>
            <div className="profile-details">
                <div>
                        <h1>Venkatesh Velumani</h1>
                        <h4>Senior Software Engineer - Web Developer</h4>
                </div>       
                <div className="contact-details">
                    <div>
                        <img src={Email} class="contact-icon" alt="Email icon" />
                        <span>venkateshv455@gmail.com</span>
                    </div>
                    <div>
                        <img class="contact-icon" src={Mobile} alt="Mobile Icon" />
                        <span>8428742981</span>
                    </div>
                    <div>
                        <img class="contact-icon" src={Location} alt="Location Icon" />
                        <span>Chennai, Tamilnadu</span>
                    </div>
                </div>
            </div>  
        </div>
    )
}