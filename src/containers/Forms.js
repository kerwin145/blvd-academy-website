import React from 'react'
import './Forms.css'
import registrationPdf from '../images/Registration.pdf'

function Forms() {
    return (
        <div className='forms'>
            <div className="forms__heading">
                <h3 className='cn-font-heading'>表格 &nbsp;</h3>
                <h3 className='en-font-heading'>Forms:</h3>
            </div>
            <div className = 'forms__registration'>
                <span className='cn-font-text'>報名表格 &nbsp;</span>
                <span className='en-font-text'>Registration Form:&nbsp; </span>
                <a href={registrationPdf} target = "_blank">Download</a>
            </div>
        </div>
    )
}

export default Forms
