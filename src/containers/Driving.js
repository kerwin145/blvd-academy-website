import React from 'react'
import './Driving.css'
import DrivingImg from '../images/driving.jpg'

function Driving() {
    return (
        <div className='driving'>
            <h3 className='en-font-heading'>Driving Directions</h3>
            <img src= {DrivingImg} alt="" />
        </div>
    )
}

export default Driving
