import React from 'react'
import "./footer.css"
import Logo from './logo.png'



function Footer() {
    return (

        <div className="under">
            {/* <h1> hello</h1> */}
            <div className="footer">
                <div className="leftConer" >
                    <img className="logo" src={Logo} />
                    <span className="span" > <img className="c" src="https://img.icons8.com/material/24/ffffff/circled-c.png" /> <a> 2020 fourpercent Inc. All rights reserved</a> </span>
                </div>
                <div className="rightCorner" >
                    <a>Terms of service    </a>
                    <a>    Privacy policy </a>
                </div>

            </div>

        </div>


    )
}

export default Footer