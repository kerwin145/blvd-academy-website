import React from 'react'
import CalendarImg from "../images/Calendar23Fall.pdf"
import './Calendar.css'

function Calendar() {

    return (
        <div className='calendar'>
            <object data= {CalendarImg} type="application/pdf" width="100%" height="100%" className='pdf'/>
        </div>
    )
}

export default Calendar
