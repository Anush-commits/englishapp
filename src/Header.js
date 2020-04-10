import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = props => <li> <NavLink to={props.where}> {props.link} </NavLink> </li>
              
export default Header
