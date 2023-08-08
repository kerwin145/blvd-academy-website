import React, {useState} from 'react'
import './AboutUs.css'
import background1 from '../images/background1.JPG' 

function AboutUs() {

    const [inChinese, setChinese] = useState(true);

    return (

        <div className='about-us'>
            {/*}
            <div className='about-us__background'>
                <img src={background1} alt="" />
            </div>
            */}
            <div className='about-us__text'>
                <span className='about-us__text-translate_panel'>
                    {inChinese ? 
                    <>
                        <button 
                            className = "cn-font-text about-us__text-translate--selected" onClick = {() => setChinese(true)}>
                                中文</button>
                        <button className = 'cn-font-text' onClick = {() => setChinese(false)}>English</button>
                    </>
                    :
                    <>
                    <button 
                    className = "cn-font-text" onClick = {() => setChinese(true)}>
                        中文</button>
                    <button className = 'cn-font-text about-us__text-translate--selected' onClick = {() => setChinese(false)}>English</button>
                    </>
                    }
                </span>      

                {inChinese ? 
                
                <div className = 'cn-font-text'>
                    <h3>大道学苑提供以下的课程:</h3>
                    <div className= 'about-us__text_subsection1'>
                        <div>
                            <h4>英语课的内容包括:</h4>
                            <ol>
                                <li>词汇加强和建立</li>
                                <li>批判性阅读技能</li>
                                <li>语法和创意写作</li>
                            </ol>
                        </div>
                        <div>
                            <h4>数学课的内容包括:</h4>
                            <ol>
                                <li>算术，代数， 几何，三角，前微积分和微积分</li>
                                <li>美国少年数学竞赛 (Math Olympiads, 3 - 6年级)</li>
                                <li>美国数学竞赛 American Mathematics Competitions (AMC 8 - 12年级)</li>
                                <li>在长岛地区常見的小数学家 Mathletes 数学竞赛</li>
                            </ol>
                        </div>

                    </div>
                    <div className= 'about-us__text_subsection2'>
                        <h4>SAT 和 PSAT:</h4>
                        <p>SAT 辅导班课程涵盖了新SAT考试的所有可能的题型, 学生做到充分的练习, 以收有备无患和事半功倍之效。</p>
                    </div>

                </div>
                
                :
                <div className = 'en-font-text' >
                    <h3>Boulevard Learning Academy provides the following courses:</h3>
                    <div className= 'about-us__text_subsection1'>
                        <div>
                            <h4>English curriculum:</h4>
                            <ol>
                                <li>Vocabulary strengthening and building</li>
                                <li>Critical reading skills</li>
                                <li>Grammar and creative writing</li>
                            </ol>
                        </div>
                        <div>
                            <h4>Math curriculum:</h4>
                            <ol>
                                <li>Arithmetic, Algebra, Geometry, Trigonometry, Pre-Calculus and Calculus</li>
                                <li>Math Olympiad, grade 3 - 6</li>
                                <li>American Mathematics Competitions (AMC 8 -12)</li>
                                <li>The Mathletes Competition which is given in Nassau County is also discussed in the curriculum.</li>
                            </ol>
                        </div>

                    </div>
                    <div className= 'about-us__text_subsection2'>
                        <h4>SAT and PSAT Prep:</h4>
                        <p>New SAT prep. In March, 2016, The College Board adopted a new SAT exam - an exam that included a number of changes and updates. Our SAT Prep course addresses those changes and covers all possible types of testing questions. Students will be well prepared and ready for the challenge.</p>
                    </div>
 
                </div>
                }
            </div>
        </div>
    )
}

export default AboutUs
