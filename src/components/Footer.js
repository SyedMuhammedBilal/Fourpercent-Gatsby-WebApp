import React from 'react'
import Logo from '../images/fourpercent-logo-white.png'
import Layer from '../assets/layer'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <Layer />
            <div className="footer__logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="footer__content">
                <div className="footer__content-left">
                    <p>© 2020 fourpercent Inc. All rights reserved.</p>
                </div>
                <div className="footer__content-right">
                    <div className="right-content">
                        <p>Terms and Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div> 
        </div>
    )
};

export default Footer