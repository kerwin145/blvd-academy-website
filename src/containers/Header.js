import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='header header__padding'>

            <div className='header__logo'>
                <Link to = '/'>
                    <span className='header__logo_chinese'>大道学苑</span>
                    <span >Boulevard Learning Academy</span>
                </Link>
            </div>
           
        </div>
    )
}

export default Header
