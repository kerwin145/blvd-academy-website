import React, {useState} from 'react'
import './StudentInfo.css'
import stuInfoCn from '../images/StudentInfoSummer22cn.jpg'
import stuInfoEn from '../images/StudentInfoSummer22en.jpg'

function StudentInfo() {
    const [inChinese, setChinese] = useState(true);
    const imgSrc = inChinese ? stuInfoCn : stuInfoEn

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
