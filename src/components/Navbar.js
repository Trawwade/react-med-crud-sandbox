import React from 'react'
import {useState } from 'react'
import { Link} from 'react-router-dom'
import styled from 'styled-components';
import StyledButton from "../styles/StyledButton.js"

export const NavItem = styled.div`
 display:flex;
 justify-content: space-between;
 background-color:blanchedalmond;
 width:800px;
 ul{
     
     
     list-style:none;
     display:flexbox;
    flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
li{
    padding:1rem;
    text-decoration:none;
    Link{
        text-decoration:none;
    }
}

  }
`

const Navbar = () => {
    const [activeTab, setActiveTab]=useState("/")
    return (
      
    <NavItem>
        <h1>
            patients
        </h1>
        <ul>
            <li
            >
            <Link to={"/"} onClick={()=>setActiveTab("home")}><StyledButton>home</StyledButton></Link>
            </li>
            <li>
                <Link to={"./newdata"} onClick={()=>setActiveTab("add")}><StyledButton>add patient</StyledButton></Link>
            </li>
            <li>
                <Link  to={"./edit"} onClick={()=>setActiveTab("edit")}><StyledButton> edit</StyledButton></Link>
            </li>

        </ul>
    </NavItem>
  )
}

export default Navbar