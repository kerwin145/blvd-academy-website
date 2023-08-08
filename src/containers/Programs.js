import React from 'react'
import './Programs.css'

function Programs() {
    return (
        <div className='programs'>
            <div className="programs__heading">
                <span className='en-font-heading'>Programs &nbsp;</span> 
                <span className='cn-font-heading'>课程简介</span>
            </div>

            <div className="programs__list">
                <div className='programs__list_new-sat'>
                    <h3 className='en-font-text'>New SAT</h3>
                    <ol>
                        <li>
                            <span className='en-font-text'>Reading &nbsp;</span>
                            <span className='cn-font-text'>阅读</span>
                        </li>
                        <li>
                            <span className='en-font-text'>Math &nbsp;</span>
                            <span className='cn-font-text'>数学</span>
                        </li>
                        <li>
                            <span className='en-font-text'>Writing and Language &nbsp;</span>
                            <span className='cn-font-text'>学做和语法</span>
                        </li>
                        <li>
                            <span className='en-font-text'>Essay Writing &nbsp;</span>
                            <span className='cn-font-text'>论述文书写作</span>
                        </li>
                    </ol>
                    <h4 className='en-font-text'>Target practice to ensure high scores on the new SAT</h4>
                </div>
                <div className="programs__list_enrichment">
                    <h3 className='en-font-text'>Enrichment Educational Programs Gr. 3 to 12</h3>
                    <p className='en-font-text'>English:</p>
                    <ol> 
                        <li>
                            <span className='en-font-text'>Vocabulary Building &nbsp;</span>
                            <span className='cn-font-text'>词汇练习</span>
                        </li>
                        <li>
                            <span className='en-font-text'>Grammar &nbsp;</span>
                            <span className='cn-font-text'>语法</span>
                        </li>
                        <li>
                            <span className='en-font-text'>Reading and Essay Writing &nbsp;</span>
                            <span className='cn-font-text'>阅读和写作</span>
                        </li>
                    </ol>
                    <p className='en-font-text'>Math:</p>
                    <ol> 
                        <li>
                            <span className='en-font-text'>Above and Beyond the Current New York State Standards (CCLS) &nbsp;</span>
                            <span className='cn-font-text'>超越纽约州的现行教育大纲</span>
                        </li>
                        <li>
                            <span className='en-font-text'>Guided Practice for Math Olympiad and American Mathematics Competitions Program (AMC) &nbsp;</span>
                            <span className='cn-font-text'>小奥数竞赛练习和美国数学竞赛 8-12 年级练习</span>
                        </li>
                
                    </ol>
                </div>
                <div className="programs__list_shsah">
                    <h3>
                        <span className='en-font-text'>SHSAH &nbsp;</span>
                        <span className='cn-font-text'>特殊高中辅导班</span>
                    </h3>
                    <div>Dedicated Instructors with years of experience, plus a fine-tuned curriculum to prepare studens to achieve high scores on entrance exams for specialized high schools.</div>
                    <h4 className='en-font-text'>Targeted practice to ensure high scores on the SHSAT exam.</h4>
                </div>
            </div>
                <div className="programs__list_ap-sat">
                    <h4>AP and SAT</h4>
                    <div>Subject classes available upon request.</div>
                </div>


        </div>
    )
}

export default Programs
