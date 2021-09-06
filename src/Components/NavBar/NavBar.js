import React from 'react'
import NavBarStyle from './Navbar.style'
import {NavLink} from 'react-router-dom'
import profileImg from '../../img/about.png'
const NavBar = () => {
    return (
        <NavBarStyle>
            <div className="profileImg">
                <img src={profileImg} alt=""/>
            </div>

            <ul className="nav-items">
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolio'>Portfolio Projects</NavLink>
                </li>
                <li>
                    <NavLink to='/blog'>Blogs</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact Me</NavLink>
                </li>
            </ul>
                <footer className="footer">
                    <p>&copy; TaofiqCodes 2021.</p>
                </footer>
        </NavBarStyle>
    )
}

export default NavBar
