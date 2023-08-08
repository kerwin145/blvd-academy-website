import React, {useState} from 'react'

import './Forms.css'
import registration_en from '../images/fall2023reg-en.pdf'
import registration_cn from '../images/fall2023reg-cn.pdf'
import { useEffect } from 'react'
/*
import registration from '../images/Registration.jpg'
*/


function Forms() {

    let [inChinese, setChinese] = useState(true);
    let [pdfSrc, setPdfSrc] = useState(registration_cn)

    useEffect(()=>{pdfSrc = inChinese ? setPdfSrc(registration_cn) : setPdfSrc(registration_en)}, [inChinese])

    return (
        
        <div className='forms'>
            {/*Where kinda stealing the translate panel from student info but o well*/}
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
            
            <div className="forms__heading">
                {inChinese ? 
                <span className='cn-font-heading'>
                表格
                </span>
                :
                <span className="en-font-heading">
                Form:
                </span>
                }
            </div>
         
            <div className = 'forms__registration'>
                <object data= {pdfSrc} type="application/pdf" width="100%" height="100%" className='pdf'/>
            </div>   

        </div>
    )
}

export default Forms
