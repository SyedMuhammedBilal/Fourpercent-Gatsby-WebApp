import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import Logo from '../../images/logo.png'
import './Nav.css'
const Nav = styled.nav`
  margin-top: 5%;
  width:100%;
  height: 55px;
  ${'' /* border-bottom: 2px solid #f1f1f1; */}
  padding:0 20px;
  display:flex;
  justify-content: space-between;
  .loho{
      padding: 15px 0;
  }

`


function Navbar() {

    return (
        <Nav>
            {/* <div className="logo" ></div> */}
            <img src={Logo} className="logo" />
            <Burger />

        </Nav>

    )
}

export default Navbar