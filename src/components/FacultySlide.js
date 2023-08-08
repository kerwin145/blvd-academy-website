import React from 'react'
import './FacultySlide.css'

function FacultySlide({image, name, subject, textCn, textEn}) {
    return (
        <div className='faculty-slide'>
            <div className="faculty-slide__intro">
                <h3 className='faculty-slide__name'>{name}</h3>
                <h5 className='faculty-slide__subject'>Subject: {subject}</h5>
                <img src = {image} alt="" />
            </div>
           <div className="faculty-slide__text">
                <p className='faculty-slide__textCn'>{textCn}</p>
                <p className='faculty-slide__textEn'>{textEn}</p>
           </div>
        </div>
    )
}

export default FacultySlide
