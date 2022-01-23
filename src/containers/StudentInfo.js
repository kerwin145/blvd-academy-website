import React, {useState} from 'react'
import './StudentInfo.css'
import spring2022cn from '../images/Spring2022cn.png'
import spring2022en from '../images/Spring2022en.png'

function StudentInfo() {
    const [inChinese, setChinese] = useState(true);
    const imgSrc = inChinese ? spring2022cn : spring2022en

    return (
        <div className='student-info'> 
              <span className='student-info__text-translate_panel'>
                    {inChinese ? 
                    <>
                        <button 
                            className = "cn-font-text student-info__text-translate--selected" onClick = {() => setChinese(true)}>
                                中文</button>
                        <button className = 'cn-font-text' onClick = {() => setChinese(false)}>English</button>
                    </>
                    :
                    <>
                    <button 
                    className = "cn-font-text" onClick = {() => setChinese(true)}>
                        中文</button>
                    <button className = 'cn-font-text student-info__text-translate--selected' onClick = {() => setChinese(false)}>English</button>
                    </>
                    }
               </span>            
            <img src= {imgSrc} alt=""/>
        </div>
    )
}

export default StudentInfo
