import React from 'react'
import styled from 'styled-components'
import "./Nav.css"
import { navigate } from 'gatsby'

const Ul = styled.ul`

    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    li{
        padding: 18px 18px;
        color:#df486f;
        font-size: 20px;
        
    }

    @media(max-width: 768px){

        flex-flow: column wrap;
        background-color: #df486f;
        position: fixed;
        transform: ${({ open }) => open ? ' translateX(0)' : 'translateX(100%)'};
        top : 0;
        right : 0 ;
        height : 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out; 

        li{
            color: #fff
        }
        
    }

`

function RightNav({ open }) {
    return (

        <Ul style={{ zIndex: "2" }} className="dropdown" open={open}>
            <li className="dropbtn">
                About Fourpercent
            </li>
            <div className="dropdown-content">
                <a style={{ cursor: 'pointer' }} onClick={() => navigate('/#2019')} > 2018</a>
                <a style={{ cursor: 'pointer' }} onClick={() => navigate('/#2020')} >2020</a>

            </div>
            <li onClick={() => navigate('/#contact')} className="lii">
                Contact Us
            </li>
        </Ul>


    )
}

export default RightNav