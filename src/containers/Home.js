import React, {useState} from 'react'
import './Home.css'
import oldWestburyBuilding from '../images/oldWestburyBuilding.jpg' 


function Home() {

    const [inChinese, setChinese] = useState(true);

    return (
         
        <div className='home'>
             
            <div className='home__declaration'>
                <img  className='home__background' src={oldWestburyBuilding} alt="" />
                <span className='home__text-translate_panel'>
                    {inChinese ? 
                    <>
                        <button 
                            className = "cn-font-text home__text-translate--selected" onClick = {() => setChinese(true)}>
                                中文</button>
                        <button className = 'cn-font-text' onClick = {() => setChinese(false)}>English</button>
                    </>
                    :
                    <>
                    <button 
                    className = "cn-font-text" onClick = {() => setChinese(true)}>
                        中文</button>
                    <button className = 'cn-font-text home__text-translate--selected' onClick = {() => setChinese(false)}>English</button>
                    </>
                    }
                </span>      

                <div className = 'home__declaration_text-bold'>   
                {inChinese ? 
                    <>
                        <h4>SINCE<span> 2014</span></h4>
                        <h4>WE ARE<span> NON FOR PROFIT ORGANIZATION</span></h4>
                    </>
                    :
                    <>
                        <h4>SINCE<span> 2014</span></h4>
                        <h4>WE ARE<span> NON FOR PROFIT ORGANIZATION</span></h4>
                    </>
                }
                </div>


            </div>  {/*End home declaration */}

            {inChinese ? 
            <div className='home__text'>    

                <div className = 'cn-font-text'>
                    <p>
                        大道学苑 (Boulevard Learning Academy) 成立于2014年，其宗旨是行大道走正路。培养、帮助在校学生提高、加强基础知识的训练，打下扎实的文理功底，提高应试能力，为进入所期望的各类高等学府深造创造条件。 当今美国初等教育的一个特点是所教内容非常广泛,但讲不深,讲不透。我们课程在现存大纲的基础上进行加强和提高。各类课程的设制就是围绕着这一目标。我们提供3至12年级的英语和数学加强班课程。我们的老师经验丰富,有数十年的课堂教学经验。他们都任教于美国的公立、私立中学和大学。</p>
            
                    <p>
                        大道学苑，追求卓越!
                        <br/>
                        大道学苑，让我们伴随着你一起成长!
                    </p>
                </div>
            </div>    
            : 
            <div className='home__text'>    

                <div className = 'en-font-text'>
                    <p>
                    The heartfelt purpose of Boulevard Learning Academy (founded in 2014) is to improve the academic performance of our students. Through our enrichment programs, our students are given the opportunity to strengthen and perfect their skills in preparation for both their standardized and aptitude tests. Our enrichment programs propel them to excel, making their dreams of entering their desired higher education institutions a reality. Our programs at Boulevard Learning Academy are thoughtfully designed to challenge our students, and at the same time making all efforts to support their school&#39;s curriculum. Our teachers are experienced and have decades of classroom experience. They all teach at public and private high schools and universities in the United States.
                    </p>
                </div>

            </div>    
            }

            <div className = 'home__updates'>
                {inChinese? 
                <div className='cn-font-text'>
                    <h3>提示:</h3>
                    <span>大道学苑暑期班已经开始报名。详细信息请点击 "Student Information"。</span>  
                    <span>请点击"Forms"。&nbsp;表格填写以后，请电邮至以下地址：  <a href="mailto:blvdacademy@gmail.com">blvdacademy@gmail.com</a></span>  
                </div>
                :
                <div className='en-font-text'>
                    <h3>Updates:</h3>
                    <span>Registration for Summer session has begun! &nbsp; For more information, please head to the "Student Information" tab.</span>  
                    <span>To regsiter, please head to the forms tab, fill out the form, and email it to:<a href="mailto:blvdacademy@gmail.com">blvdacademy@gmail.com</a></span>  
              
                </div>
                }
            </div>

        </div>

    )
}

export default Home
