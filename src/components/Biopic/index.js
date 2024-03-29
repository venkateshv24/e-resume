import React from 'react';
import Pic from '../../images/Biopic.JPG';
import './styles.css';

export const Biopic = () => {
    return(
        <div>
            <img class='biopic' src={Pic} alt="Picture of Venkatesh in blue suit"/>
        </div>
    )
}