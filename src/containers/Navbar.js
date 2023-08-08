import React, {useState} from 'react'
import './Navbar.css'
import { RiCloseLine, RiMenu3Line} from 'react-icons/ri'
import {Link} from 'react-router-dom';


const Menu = () =>(
    <div>
        <Link to = "/">
            <p>Home</p>
        </Link>
        <Link to = "/Courses">
            <p>Courses</p>
        </Link>
        {/* <Link to = "/Student-Information">
            <p>Student Information</p>
        </Link> */}
        <Link to = "/Calendar">
            <p>Calendar</p>
        </Link>
        <Link to = "/Forms">
            <p>Forms</p>
        </Link>
        <Link to = "/Faculty">
            <p>Faculty</p>
        </Link>
        {/*
        <Link to = "/Programs">
            <p>Programs</p>
        </Link>
         */}
        <Link to = "/Photo-Gallery">
            <p>Photo Gallery</p>
        </Link>
        <Link to = '/Driving-Directions'>
            <p>Driving Directions</p>
        </Link>
    </div>
)

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="navbar">
            <div className='navbar__container'>
                <Menu/>
            </div>
            <div className='navbar__menu'>
                {!toggleMenu && (<RiMenu3Line color="#fff" size = {42} 
                onClick = {() => setToggleMenu(true)}/> )}


                {toggleMenu &&(
                    <>
                        <RiCloseLine className = "navbar__menu_close" color="#fff" size = {42} 
                            onClick = {() => setToggleMenu(false)}/>

                        <div className="navbar__menu_container"> 
                            <Menu/>
                        </div>
                    </>
                )}
            </div>
            
        </div>
      
       
   
    )
}

export default Navbar
