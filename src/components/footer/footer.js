import React from 'react';
import wave from '../../images/footer-wave.svg'
import fStyles from './footer.module.css';


const Footer = () => {
    return (
        <div className={`${fStyles.container} border-0 position-absolute bottom-0`}>
            <div className={fStyles.wave}>
                <img src={wave} alt="wave" />
            </div>
        </div>
    );
};

export default Footer;